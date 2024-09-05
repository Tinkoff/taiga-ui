(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[49076],{49076:e=>{e.exports="import {JsonPipe, NgFor} from '@angular/common';\nimport {Component} from '@angular/core';\nimport {FormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiDataList} from '@taiga-ui/core';\nimport {TuiFilterByInputPipe} from '@taiga-ui/kit';\nimport {TuiAsideItemDirective} from '@taiga-ui/layout';\nimport {TuiComboBoxModule} from '@taiga-ui/legacy';\n\n@Component({\n    standalone: true,\n    exportAs: \"Example7\",\n    imports: [\n        NgFor,\n        JsonPipe,\n        FormsModule,\n        TuiComboBoxModule,\n        TuiDataList,\n        TuiFilterByInputPipe,\n        TuiAsideItemDirective,\n    ],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected value = null;\n\n    protected readonly items = [\n        {name: 'John', surname: 'Cleese', disabled: false},\n        {name: 'Eric', surname: 'Idle', disabled: false},\n        {name: 'Graham', surname: 'Chapman', disabled: true},\n        {name: 'Michael', surname: 'Palin', disabled: true},\n        {name: 'Terry', surname: 'Gilliam', disabled: false},\n        {name: 'Terry', surname: 'Jones', disabled: false},\n    ];\n\n    protected readonly stringify = (item: {name: string; surname: string}): string =>\n        `${item.name} ${item.surname}`;\n}\n"}}]);