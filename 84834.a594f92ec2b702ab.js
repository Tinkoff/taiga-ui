(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[84834],{84834:e=>{e.exports="import {NgIf} from '@angular/common';\nimport {Component, signal} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiButton, TuiHint, TuiTitle} from '@taiga-ui/core';\nimport {tuiProvideExperimentalHint} from '@taiga-ui/experimental';\nimport {TuiAvatar, TuiPulse} from '@taiga-ui/kit';\n\n@Component({\n    standalone: true,\n    exportAs: \"Example2\",\n    imports: [NgIf, TuiAvatar, TuiButton, TuiHint, TuiPulse, TuiTitle],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n    providers: [tuiProvideExperimentalHint()],\n})\nexport default class Example {\n    protected readonly step = signal(0);\n}\n"}}]);