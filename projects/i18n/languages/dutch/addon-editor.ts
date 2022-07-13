import {TuiLanguageEditor} from '@taiga-ui/i18n/interfaces';

export const TUI_DUTCH_LANGUAGE_ADDON_EDITOR: TuiLanguageEditor = {
    colorSelectorModeNames: ['Effen kleur', 'Kleurverloop'],
    toolbarTools: {
        undo: 'Undo',
        redo: 'Redo',
        font: 'Lettertype',
        fontStyle: 'Tekenstijl',
        fontSize: 'Punten',
        bold: 'Vet',
        italic: 'Cursief',
        underline: 'Onderstrepen',
        strikeThrough: 'Doorhalen',
        justify: 'Uitlijning',
        justifyLeft: 'Uitlijning links',
        justifyCenter: 'Uitlijning midden',
        justifyRight: 'Uitlijning rechts',
        justifyFull: 'Uitlijning uitvullen',
        list: 'Lijst',
        indent: 'Inspringen',
        outdent: 'Uitspringen',
        unorderedList: 'Ongesorteerde lijst',
        orderedList: 'Gesorteerde lijst',
        quote: 'Citeren',
        foreColor: 'Kleur',
        backColor: 'Achtergrondkleur',
        hiliteColor: 'Tekstmarkeringskleur',
        clear: 'Wis',
        link: 'Koppeling',
        attach: 'Bestand toevoegen',
        tex: 'TeX toevoegen',
        code: 'Code',
        image: 'Afbeelding toevoegen',
        insertHorizontalRule: 'Horizontale lijn toevoegen',
        superscript: 'Superscript',
        subscript: 'Subscript',
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
        small: 'Small',
        large: 'Large',
        normal: 'Normal',
        title: 'Title',
        subtitle: 'Subtitle',
    },
};
