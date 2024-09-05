(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[77642],{77642:e=>{e.exports="import {Component, inject} from '@angular/core';\nimport {FormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiRepeatTimes} from '@taiga-ui/cdk';\nimport {TuiAlertService, TuiButton} from '@taiga-ui/core';\nimport {TuiCheckbox, TuiChip} from '@taiga-ui/kit';\nimport {TuiAsideItemDirective} from '@taiga-ui/layout';\n\n@Component({\n    standalone: true,\n    exportAs: \"Example3\",\n    imports: [\n        TuiChip,\n        TuiRepeatTimes,\n        FormsModule,\n        TuiButton,\n        TuiCheckbox,\n        TuiAsideItemDirective,\n    ],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    private readonly alerts = inject(TuiAlertService);\n\n    protected readonly checked = [true, false, true];\n    protected readonly values = ['test', 'Some text', 'WOW!'];\n\n    protected onChip(index: number): void {\n        this.alerts.open(`Clicked chip ${index + 1}`).subscribe();\n    }\n\n    protected onX(index: number): void {\n        this.alerts.open(`Removed chip ${index + 1}`, {appearance: 'error'}).subscribe();\n    }\n}\n"}}]);