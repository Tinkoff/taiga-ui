import type {Extension} from '@tiptap/core';
import type {StarterKitOptions} from '@tiptap/starter-kit';

export const defaultEditorExtensions = [
    import(`@taiga-ui/addon-editor/extensions/starter-kit`)
        .then(starterKitExtractor)
        .then(starterKitConfigurator),
    import(`@tiptap/extension-text-align`).then(m =>
        m.default.configure({types: [`heading`, `paragraph`]}),
    ),
    import(`@tiptap/extension-text-style`).then(m => m.default),
    import(`@tiptap/extension-underline`).then(m => m.default),
    import(`@tiptap/extension-subscript`).then(m => m.default),
    import(`@tiptap/extension-superscript`).then(m => m.default),
    import(`./font-color`).then(m => m.FontColor),
    import(`@tiptap/extension-image`).then(m => m.default.configure({inline: true})),
    import(`@tiptap/extension-link`).then(m => m.default.configure({openOnClick: false})),
    import(`@taiga-ui/addon-editor/extensions/jump-anchor`).then(
        ({TuiJumpAnchor}) => TuiJumpAnchor,
    ),
    import(`./background-color`).then(m => m.BackgroundColor),
    import(`@taiga-ui/addon-editor/extensions/table`).then(({TuiTable}) =>
        TuiTable.configure({resizable: true}),
    ),
    import(`@tiptap/extension-table-row`).then(m => m.default),
    import(`@tiptap/extension-table-cell`).then(m => m.default),
    import(`@tiptap/extension-table-header`).then(m => m.TableHeader),
    import(`./indent-outdent`).then(m => m.Indent),
    import(`./table-cell-background`).then(m => m.TableCellBackground),
    import(`@taiga-ui/addon-editor/extensions/details`).then(m => m.TuiDetailsContent),
    import(`@taiga-ui/addon-editor/extensions/details`).then(m => m.TuiDetails),
    import(`@taiga-ui/addon-editor/extensions/details`).then(m => m.TuiSummary),
    import(`@taiga-ui/addon-editor/extensions/font-size`).then(
        ({TuiFontSize}) => TuiFontSize,
    ),
];

// TODO: 3.0 remove in ivy compilation
// eslint-disable-next-line @typescript-eslint/naming-convention
export function starterKitExtractor<T>(importedExtension: {
    StarterKit: Extension<T>;
}): Extension<T> {
    return importedExtension.StarterKit;
}

// TODO: 3.0 remove in ivy compilation
// eslint-disable-next-line @typescript-eslint/naming-convention
export function defaultExtractor<T>(importedExtension: {
    default: Extension<T>;
}): Extension<T> {
    return importedExtension.default;
}

// TODO: 3.0 remove in ivy compilation
// eslint-disable-next-line @typescript-eslint/naming-convention
export function starterKitConfigurator(
    extension: Extension<StarterKitOptions>,
): Extension<StarterKitOptions> {
    return extension.configure({heading: {levels: [1, 2]}});
}
