"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[55745],{55745:n=>{n.exports="import {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-data-list-wrapper-example-3',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiDataListWrapperExample3 {\n    readonly control = new FormControl();\n\n    readonly items = [\n        ['Caesar', 'Greek', 'Apple and Chicken'],\n        ['Broccoli Cheddar', 'Chicken and Rice', 'Chicken Noodle'],\n    ];\n\n    labels = ['Salad', 'Soup'];\n}\n"}}]);