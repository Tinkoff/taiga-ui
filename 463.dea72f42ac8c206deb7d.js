(window.webpackJsonp=window.webpackJsonp||[]).push([[463],{lmlG:function(n,e,t){"use strict";t.r(e),e.default="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-badged-content-example-2`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiBadgedContentExample2 {\n    value = ``;\n\n    contentTop = 0;\n\n    get badgeValue(): number {\n        return this.value.length;\n    }\n\n    get color(): string {\n        return this.contentTop === 50 ? `tuiIconCheck` : `var(--tui-error-fill)`;\n    }\n\n    get contentBottom(): string {\n        return this.contentTop === 50 ? `` : ``;\n    }\n\n    onClick(): void {\n        this.contentTop++;\n    }\n}\n"}}]);