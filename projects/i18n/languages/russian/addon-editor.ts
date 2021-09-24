import {LanguageEditor} from '@taiga-ui/i18n/interfaces';

export const TUI_RUSSIAN_LANGUAGE_ADDON_EDITOR: LanguageEditor = {
    colorSelectorModeNames: ['Сплошной цвет', 'Градиент'],
    toolbarTools: {
        undo: 'Отменить',
        redo: 'Повторить',
        font: 'Шрифт',
        fontStyle: 'Стиль шрифта',
        fontSize: 'Размер шрифта',
        bold: 'Полужирный',
        italic: 'Курсив',
        underline: 'Подчеркнутый',
        strikeThrough: 'Зачеркнутый',
        justify: 'Выравнивание',
        justifyLeft: 'Выровнять текст по левому краю',
        justifyCenter: 'Выровнять тект по центру',
        justifyRight: 'Выровнять текст по правому краю',
        justifyFull: 'Выровнять по ширине',
        list: 'Списки',
        indent: 'Уменьшить отступ',
        outdent: 'Увеличить отступ',
        unorderedList: 'Маркированный список',
        orderedList: 'Нумерованный список',
        quote: 'Цитата',
        foreColor: 'Цвет: Текст',
        hiliteColor: 'Цвет выделения',
        backColor: 'Цвет фона',
        clear: 'Сбросить форматирование',
        link: 'Ссылка',
        attach: 'Вставить файл',
        tex: 'Вставить формулу',
        code: 'Code',
        image: 'Вставить изображение',
        insertHorizontalRule: 'Разделитель',
        superscript: 'Надстрочный',
        subscript: 'Подстрочный',
        insertTable: 'Добавить таблицу',
        mergeCells: 'Объединить ячейки',
        splitCells: 'Разъединить ячейки',
        rowsColumnsManaging: 'Управление строками и столбцами',
        cellColor: 'Цвет ячейки',
    },
    editorTableCommands: [
        ['Удалить строку', 'Удалить столбец'],
        ['Добавить строку сверху', 'Добавить строку снизу'],
        ['Добавить столбец справа', 'Добавить столбец слева'],
    ],
    editorCodeOptions: ['Код', 'Код в блоке'],
    editorFontOptions: {
        normal: 'Обычный',
        title: 'Заголовок',
        subtitle: 'Подзаголовок',
    },
};
