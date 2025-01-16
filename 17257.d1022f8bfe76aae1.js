(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[17257],{17257:e=>{e.exports="import {NgForOf} from '@angular/common';\nimport {Component} from '@angular/core';\nimport {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {tuiQuantize} from '@taiga-ui/cdk';\nimport {TuiTextfield} from '@taiga-ui/core';\nimport {TuiInputNumber} from '@taiga-ui/kit';\n\n@Component({\n    standalone: true,\n    exportAs: \"Example4\",\n    imports: [NgForOf, ReactiveFormsModule, TuiInputNumber, TuiTextfield],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected parametersForm = new FormGroup({\n        value: new FormControl(3),\n        quantum: new FormControl(2),\n    });\n\n    protected get quantized(): number {\n        const {value, quantum} = this.parametersForm.value;\n\n        return tuiQuantize(value ?? 3, quantum ?? 2);\n    }\n}\n"}}]);