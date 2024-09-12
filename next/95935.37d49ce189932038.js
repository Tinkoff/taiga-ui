(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[95935],{95935:e=>{e.exports="import {Component} from '@angular/core';\nimport {FormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {MaskitoDirective} from '@maskito/angular';\nimport {maskitoNumberOptionsGenerator} from '@maskito/kit';\nimport {TuiTextfield} from '@taiga-ui/core';\n\n@Component({\n    standalone: true,\n    exportAs: \"Example5\",\n    imports: [FormsModule, MaskitoDirective, TuiTextfield],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected value = Math.PI.toFixed(48);\n    protected readonly options = maskitoNumberOptionsGenerator({\n        decimalSeparator: ',',\n        precision: Infinity,\n        min: 0,\n    });\n}\n"}}]);