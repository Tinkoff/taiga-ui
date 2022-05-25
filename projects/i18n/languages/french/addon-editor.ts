import {LanguageEditor} from '@taiga-ui/i18n/interfaces';

export const TUI_FRENCH_LANGUAGE_ADDON_EDITOR: LanguageEditor = {
    colorSelectorModeNames: ['Couleur unie', 'Dégradé de couleur'],
    toolbarTools: {
        undo: 'Annuler',
        redo: 'Rétablir',
        font: 'Police',
        fontStyle: 'Style de police',
        fontSize: 'Taille de police',
        bold: 'Gras',
        italic: 'Italique',
        underline: 'Souligner',
        strikeThrough: 'Barrer',
        justify: 'Justifier',
        justifyLeft: 'Aligner à gauche',
        justifyCenter: 'Centrer',
        justifyRight: 'Justifier à droite',
        justifyFull: 'Justifier',
        list: 'Liste',
        indent: 'Indenter',
        outdent: 'Réduire le retrait',
        unorderedList: 'Liste à puces',
        orderedList: 'Liste numérotée',
        quote: 'Quote',
        foreColor: 'Couleur de texte',
        backColor: 'Couleur de fond',
        hiliteColor: 'Couleur de mise en évidence',
        clear: 'Effacer',
        link: 'Lien',
        attach: 'Joindre un fichier',
        tex: 'Insérer TeX',
        code: 'Code',
        image: 'Insérer une image',
        insertHorizontalRule: 'Insérer la règle horizontale',
        superscript: 'Exposant',
        subscript: 'Indice',
        insertTable: 'Insert table',
        mergeCells: 'Merge cells',
        splitCells: 'Split cells',
        rowsColumnsManaging: 'Managing rows and columns',
        cellColor: 'Cell color',
        setDetails: 'Details',
        removeDetails: 'Remove details',
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
