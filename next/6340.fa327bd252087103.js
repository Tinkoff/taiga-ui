(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[6340],{6340:e=>{e.exports="import {Component} from '@angular/core';\nimport {FormControl, ReactiveFormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiTextfield} from '@taiga-ui/core';\nimport {TuiInputPin} from '@taiga-ui/kit';\n\n@Component({\n    standalone: true,\n    exportAs: \"Example3\",\n    imports: [ReactiveFormsModule, TuiInputPin, TuiTextfield],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected readonly control = new FormControl(null);\n}\n"}}]);