(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[5019],{5019:e=>{e.exports="import {Component} from '@angular/core';\nimport {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiInputNumberModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';\n\n@Component({\n    standalone: true,\n    exportAs: \"Example2\",\n    imports: [ReactiveFormsModule, TuiInputNumberModule, TuiTextfieldControllerModule],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected readonly testForm = new FormGroup({\n        testValue: new FormControl<number | null>(null),\n    });\n}\n"}}]);