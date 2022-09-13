"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[60737],{60737:n=>{n.exports="import {Component, Inject, Injector} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiDialogService} from '@taiga-ui/core';\nimport {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';\n\nimport {DialogExampleComponent} from './dialog-example/dialog-example.component';\n\n@Component({\n    selector: `tui-dialog-example-2`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiDialogExampleComponent2 {\n    private readonly dialog = this.dialogService.open<number>(\n        new PolymorpheusComponent(DialogExampleComponent, this.injector),\n        {\n            data: 237,\n            dismissible: true,\n            label: `Heading`,\n        },\n    );\n\n    constructor(\n        @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,\n        @Inject(Injector) private readonly injector: Injector,\n    ) {}\n\n    showDialog(): void {\n        this.dialog.subscribe({\n            next: data => {\n                console.info(`Dialog emitted data = ${data}`);\n            },\n            complete: () => {\n                console.info(`Dialog closed`);\n            },\n        });\n    }\n}\n"}}]);