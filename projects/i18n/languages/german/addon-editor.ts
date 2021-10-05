import {LanguageEditor} from '@taiga-ui/i18n/interfaces';

export const TUI_GERMAN_LANGUAGE_ADDON_EDITOR: LanguageEditor = {
    colorSelectorModeNames: ['Farbe', 'Verlauf'],
    toolbarTools: {
        undo: 'Rückgängig machen',
        redo: 'Wiederholen',
        font: 'Schriftart',
        fontStyle: 'Schriftstil',
        fontSize: 'Schriftgröße',
        bold: 'Fett',
        italic: 'Kursiv',
        underline: 'Unterstrichen',
        strikeThrough: 'Durchgestrichen',
        justify: 'Blocksatz',
        justifyLeft: 'Blocksatz links',
        justifyCenter: 'Blocksatz mittig',
        justifyRight: 'Blocksatz rechts',
        justifyFull: 'Blocksatz',
        list: 'Liste',
        indent: 'Einrücken',
        outdent: 'Ausrücken',
        unorderedList: 'Ungeordnete Liste',
        orderedList: 'Geordnete Liste',
        quote: 'Blockquote',
        foreColor: 'Farbe',
        backColor: 'Hintergrundfarbe',
        hiliteColor: 'Hilite-Farbe',
        clear: 'Löschen',
        link: 'Link',
        attach: 'Datei anhängen',
        tex: 'TeX einfügen',
        code: 'Quelltext',
        image: 'Bild einfügen',
        insertHorizontalRule: 'Horizontale Linie einfügen',
        superscript: 'Hochgestellt',
        subscript: 'Tiefgestellt',
        insertTable: 'Insert table',
        mergeCells: 'Merge cells',
        splitCells: 'Split cells',
        rowsColumnsManaging: 'Managing rows and columns',
        cellColor: 'Cell color',
    },
    editorTableCommands: [
        ['Insert column before', 'Insert column after'],
        ['Insert row before', 'Insert row after'],
        ['Delete column', 'Delete row'],
    ],
    editorCodeOptions: ['Code in the text', 'Code in block'],
    editorFontOptions: {
        normal: 'Normal',
        title: 'Title',
        subtitle: 'Subtitle',
    },
};
