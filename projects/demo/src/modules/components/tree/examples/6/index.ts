import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {EMPTY_ARRAY, TuiHandler} from '@taiga-ui/cdk';

interface TreeNode {
    readonly children?: readonly TreeNode[];
    readonly text: string;
}

@Component({
    selector: 'tui-tree-example-6',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiTreeExample6 {
    map = new Map<TreeNode, boolean>();

    readonly data: TreeNode = {
        text: 'Topmost',
        children: [
            {
                text: 'Top level 1',
                children: [
                    {
                        text: 'Another item',
                        children: [
                            {text: 'Next level 1'},
                            {text: 'Next level 2'},
                            {text: 'Next level 3'},
                        ],
                    },
                ],
            },
            {text: 'Top level 2'},
            {
                text: 'Top level 3',
                children: [{text: 'Test 1'}, {text: 'Test 2'}],
            },
        ],
    };

    readonly handler: TuiHandler<TreeNode, readonly TreeNode[]> = item =>
        item.children || EMPTY_ARRAY;

    readonly getValue = (node: TreeNode, map: Map<TreeNode, boolean>): boolean | null => {
        const flattenNodes = flatten(node);
        const result = !!map.get(flattenNodes[0]);

        for (const flatNode of flattenNodes) {
            if (result !== !!map.get(flatNode)) {
                return null;
            }
        }

        return result;
    };

    onChecked(node: TreeNode, value: boolean): void {
        flatten(node).forEach(item => this.map.set(item, value));

        this.map = new Map(this.map.entries());
    }
}

function flatten(node: TreeNode): readonly TreeNode[] {
    return node.children
        ? node.children.map(flatten).reduce((arr, item) => [...arr, ...item], [])
        : [node];
}
