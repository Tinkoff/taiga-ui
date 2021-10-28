export const tiptapEditorStyles = `
@import 'https://fonts.googleapis.com/css2?family=Manrope:wght@500;800&display=swap';

.tui-editor-socket {
    margin: 0;
    overflow: hidden;
}

.tui-editor-socket p:empty:after {
    content: ' ';
    white-space: pre;
}

.tui-editor-socket p:first-child {
    margin-top: 0
}

.tui-editor-socket {
    display: block;
    color: var(--tui-text-01);
    font: var(--tui-font-text-m);
}

.tui-editor-socket ul,
.tui-editor-socket ol {
    list-style-type: none;
    margin: 16px 16px 16px 24px;
    padding: 0;
}

.tui-editor-socket li {
    margin: 16px 0;
}

.tui-editor-socket li p {
    display: inline-block;
    margin: 0 auto;
}

.tui-editor-socket ul li p:first-child:before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 100%;
    margin: 0 14px 1px -22px;
    background-color: var(--tui-primary);
}

.tui-editor-socket ol {
    counter-reset: counter;
}

.tui-editor-socket ol li p:first-child:before {
    content: counter(counter) '.';
    width: 24px;
    margin: 0 12px 0 -24px;
    counter-increment: counter;
    color: var(--tui-base-05);
}

.tui-editor-socket pre {
    white-space: pre-wrap;
    word-break: break-word;
    border-radius: 4px;
    margin: 16px 0;
    padding: 12px 16px;
    font-family: 'Courier', monospace;
    color: var(--tui-text-02);
    background: var(--tui-base-02);
}

.tui-editor-socket pre code {
    box-shadow: none !important;
}

.tui-editor-socket :focus pre {
    background-color: var(--tui-base-01);
}

.tui-editor-socket pre + pre {
    margin-top: -29px;
    padding-top: 0;
}

.tui-editor-socket blockquote {
    margin: 20px 0 20px 24px !important;
    padding-left: 17px !important;
    border-left: 1px solid var(--tui-base-04) !important;
}

.tui-editor-socket p {
    margin: 16px 0;
}

.tui-editor-socket a {
    color: var(--tui-link);
    text-decoration: none;
    outline: none;
}

.tui-editor-socket a:hover {
    color: var(--tui-link-hover);
}

.tui-editor-socket a:active {
    color: var(--tui-primary-active);
}

.tui-editor-socket hr {
    border: none;
    border-top: 1px solid var(--tui-base-03);
    margin: 16px 0;
}

.tui-editor-socket table {
    border-collapse: collapse;
    table-layout: fixed;
    width: 100%;
    margin: 0;
    overflow: hidden;
}

.tui-editor-socket table td {
    min-width: 1em;
    height: 2rem;
    border: 2px solid var(--tui-base-03);
    padding: 3px 5px;
    vertical-align: top;
    box-sizing: border-box;
    position: relative;
    word-break: break-word;
}

.tui-editor-socket table th {
    min-width: 1em;
    height: 2rem;
    border: 2px solid var(--tui-base-03);
    padding: 3px 5px;
    vertical-align: top;
    box-sizing: border-box;
    position: relative;
    word-break: break-word;
}

.tui-editor-socket table .column-resize-handle {
    position: absolute;
    right: -2px;
    top: 0;
    bottom: -2px;
    width: 4px;
    background-color: #adf;
    pointer-events: none;
}

.tui-editor-socket table td > * {
    margin-top: 0px !important;
    margin-bottom: 0px !important;
}

.tui-editor-socket table th > * {
    margin-top: 0px !important;
    margin-bottom: 0px !important;
}

.tui-editor-socket table  th {
    font-weight: bold;
    text-align: left;
    background-color: var(--tui-base-02);
    min-heigth: 2rem
}

.tui-editor-socket .resize-cursor {
    cursor: ew-resize;
    cursor: col-resize;
}

.tui-editor-socket table .tableWrapper {
    overflow-x: auto;
}

.tui-editor-socket .selectedCell:after {
    position: absolute;
    content: "";
    left: 0; right: 0; top: 0; bottom: 0;
    background: var(--tui-selection);
    pointer-events: none;
}

.tui-editor-socket font[face='Courier New'] {
    padding: 4px 8px;
    border-radius: 4px;
    background-color: #ecf1f7;
    display: inline-block;
    word-break: break-word;
}
`;
