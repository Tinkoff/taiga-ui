import {Node, SyntaxKind} from 'ng-morph';
import type {CallExpression} from 'ts-morph';

import type {TuiSchema} from '../../../ng-add/schema';
import {addUniqueImport} from '../../../utils/add-unique-import';
import {
    FINISH_SYMBOL,
    infoLog,
    REPLACE_SYMBOL,
    SMALL_TAB_SYMBOL,
    titleLog,
} from '../../../utils/colored-log';
import {getNamedImportReferences} from '../../../utils/get-named-import-references';
import {removeImport} from '../../../utils/import-manipulations';
import {insertTodo} from '../../../utils/insert-todo';

export function migrateDestroyService(options: TuiSchema): void {
    !options['skip-logs'] &&
        infoLog(
            `${SMALL_TAB_SYMBOL}${REPLACE_SYMBOL} migrating TuiDestroyService => takeUntilDestroyed ...`,
        );

    const references = getNamedImportReferences('TuiDestroyService', '@taiga-ui/cdk');

    references.forEach(ref => {
        if (ref.wasForgotten()) {
            return;
        }

        const parent = ref.getParent();
        const destroyObservableUsages: Node[] = [];

        if (Node.isImportSpecifier(parent)) {
            // - import {TuiDestroyService} from '@taiga-ui/cdk';
            // + import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
            removeImport(parent);
            addUniqueImport(
                parent.getSourceFile().getFilePath(),
                'takeUntilDestroyed',
                '@angular/core/rxjs-interop',
            );
        } else if (
            Node.isArrayLiteralExpression(parent) &&
            parent.getParent().getText().includes('providers')
        ) {
            // providers: [TuiDestroyService]
            const index = parent
                .getElements()
                .findIndex(el => el.getText() === 'TuiDestroyService');

            parent.removeElement(index);
        } else if (Node.isTypeReference(parent)) {
            // constructor(private destroy$: TuiDestroyService) {}
            const constructorParameter = parent.getParent();

            if (Node.isParameterDeclaration(constructorParameter)) {
                destroyObservableUsages.push(
                    ...constructorParameter.findReferencesAsNodes(),
                );
                constructorParameter.remove();
            }
        } else if (
            Node.isCallExpression(parent) &&
            Node.isDecorator(parent.getParent())
        ) {
            // constructor(@Self() @Inject(TuiDestroyService) destroy$: TuiDestroyService) {}
            const constructorParameter = parent.getParent()?.getParent();

            if (Node.isParameterDeclaration(constructorParameter)) {
                destroyObservableUsages.push(
                    ...constructorParameter.findReferencesAsNodes(),
                );
                constructorParameter.remove();
            }
        } else if (
            Node.isCallExpression(parent) &&
            parent.getText().includes('inject(')
        ) {
            const injectDestination = parent.getParent();
            const possibleTakeUntil =
                injectDestination && findTakeUntil(injectDestination);

            if (possibleTakeUntil) {
                // takeUntil(inject(TuiDestroyService), {...})
                possibleTakeUntil.replaceWithText('takeUntilDestroyed()');
            } else if (Node.isPropertyDeclaration(injectDestination)) {
                // private destroy$ = inject(TuiDestroyService), {...});
                destroyObservableUsages.push(
                    ...injectDestination.findReferencesAsNodes(),
                );
                injectDestination.remove();
            } else {
                const identifier = ref.getFirstAncestorByKind(SyntaxKind.Identifier);

                identifier &&
                    insertTodo(
                        identifier,
                        'use takeUntilDestroyed instead (https://angular.io/api/core/rxjs-interop/takeUntilDestroyed)',
                    );
            }
        }

        destroyObservableUsages.forEach(node => {
            const possibleTakeUntil = findTakeUntil(node);

            if (!possibleTakeUntil) {
                return;
            }

            const constructor = possibleTakeUntil.getFirstAncestorByKind(
                SyntaxKind.Constructor,
            );

            if (constructor) {
                // we are definitely inside an injection context
                return possibleTakeUntil.replaceWithText('takeUntilDestroyed()');
            }

            // other cases when we are not sure if we are inside an injection context

            addUniqueImport(
                possibleTakeUntil.getSourceFile().getFilePath(),
                'DestroyRef',
                '@angular/core',
            );
            addUniqueImport(
                possibleTakeUntil.getSourceFile().getFilePath(),
                'inject',
                '@angular/core',
            );

            const componentClass = possibleTakeUntil.getFirstAncestorByKind(
                SyntaxKind.ClassDeclaration,
            );

            if (componentClass) {
                componentClass.addProperty({
                    name: 'destroyRef',
                    initializer: 'inject(DestroyRef)',
                    isReadonly: true,
                });

                return possibleTakeUntil.replaceWithText(
                    'takeUntilDestroyed(this.destroyRef)',
                );
            }

            const identifier = node.getFirstAncestorByKind(SyntaxKind.Identifier);

            return (
                identifier &&
                insertTodo(
                    identifier,
                    'use takeUntilDestroyed instead (https://angular.io/api/core/rxjs-interop/takeUntilDestroyed)',
                )
            );
        });
    });

    !options['skip-logs'] && titleLog(`${FINISH_SYMBOL} successfully migrated \n`);
}

function findTakeUntil(node: Node, maxDepth = 10): CallExpression | null {
    if (Node.isCallExpression(node) && node.getText().includes('takeUntil(')) {
        return node;
    }

    const parent = node.getParent();

    return parent && maxDepth ? findTakeUntil(parent, maxDepth - 1) : null;
}
