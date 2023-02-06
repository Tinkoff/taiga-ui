import {Identifier} from 'ng-morph';

export function insertTodo(identifier: Identifier, message: string): void {
    const startLinePos = identifier.getStartLinePos();
    const sourceFile = identifier.getSourceFile();

    sourceFile.insertText(startLinePos, `// TODO: (Taiga UI migration) ${message}\n`);
}
