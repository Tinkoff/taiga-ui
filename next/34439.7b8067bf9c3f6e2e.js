(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[34439],{34439:e=>{e.exports="import {Component} from '@angular/core';\nimport {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiLabelDirective, TuiTitleDirective} from '@taiga-ui/core';\nimport {TuiCheckboxComponent} from '@taiga-ui/kit';\n\n@Component({\n    standalone: true,\n    imports: [\n        ReactiveFormsModule,\n        TuiLabelDirective,\n        TuiCheckboxComponent,\n        TuiTitleDirective,\n    ],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    protected testForm = new FormGroup({\n        testValue1: new FormControl(true),\n        testValue2: new FormControl(false),\n        testValue3: new FormControl(false),\n    });\n}\n"}}]);