(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[36566],{36566:e=>{e.exports="import {NgFor} from '@angular/common';\nimport {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiButton} from '@taiga-ui/core';\nimport {TuiSegmented} from '@taiga-ui/kit';\n\n@Component({\n    standalone: true,\n    exportAs: \"Example3\",\n    imports: [TuiSegmented, NgFor, TuiButton],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected readonly buttons = ['Track active index', 'To color tabs', 'Differently'];\n    protected active = 0;\n}\n"}}]);