(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[24635],{24635:n=>{n.exports='<tui-textfield [tuiTextfieldCleaner]="false">\n    <input\n        tuiInputNumber\n        [min]="0"\n        [(ngModel)]="value"\n        (keydown.arrowDown)="onStep(-1)"\n        (keydown.arrowUp)="onStep(+1)"\n    />\n\n    <button\n        appearance="floating"\n        size="s"\n        tuiButton\n        type="button"\n        (click.prevent)="onStep(+100)"\n    >\n        + 100\n    </button>\n\n    <button\n        appearance="floating"\n        size="s"\n        tuiButton\n        type="button"\n        (click.prevent)="onStep(+1000)"\n    >\n        + 1000\n    </button>\n</tui-textfield>\n'}}]);