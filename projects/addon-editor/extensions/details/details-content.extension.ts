import {mergeAttributes, Node} from '@tiptap/core';

export interface TuiDetailContentOptions {
    HTMLAttributes: Record<string, any>;
}

export const TuiDetailsContent = Node.create<TuiDetailContentOptions>({
    name: 'detailsContent',

    content: 'block+',

    group: 'block',

    allowGapCursor: true,

    parseHTML() {
        return [
            {
                tag: `div[data-type="details-content"]`,
            },
        ];
    },

    renderHTML({HTMLAttributes}) {
        return [
            'div',
            mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, {
                'data-type': 'details-content',
            }),
            0,
        ];
    },
});
