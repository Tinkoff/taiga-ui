(window.webpackJsonp=window.webpackJsonp||[]).push([[1147],{GGim:function(n,e,t){"use strict";t.r(e),e.default="import {Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_IS_CYPRESS} from '@taiga-ui/cdk';\nimport {of, timer} from 'rxjs';\nimport {map, startWith} from 'rxjs/operators';\n\n@Component({\n    selector: `tui-progress-bar-example-1`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiProgressBarExample1 {\n    readonly value$ = this.isCypress\n        ? of(40)\n        : timer(300, 300).pipe(\n              map(i => i + 30),\n              startWith(30),\n          );\n\n    constructor(@Inject(TUI_IS_CYPRESS) private readonly isCypress: boolean) {}\n}\n"}}]);