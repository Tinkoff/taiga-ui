(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[88477],{88477:e=>{e.exports="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiArcChartComponent} from '@taiga-ui/addon-charts';\nimport {tuiSum} from '@taiga-ui/cdk';\n\n@Component({\n    standalone: true,\n    imports: [TuiArcChartComponent],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    protected readonly value = [13769, 12367, 10172, 3018, 2592];\n    protected readonly sum = tuiSum(...this.value);\n}\n"}}]);