(window.webpackJsonp=window.webpackJsonp||[]).push([[550],{JISo:function(n,t,o){"use strict";o.r(t),t.default='<tui-hosted-dropdown [content]="content">\n    <button\n        tuiButton\n        type="button"\n        [iconRight]="arrow"\n    >\n        Menu\n    </button>\n</tui-hosted-dropdown>\n<ng-template #content>\n    <tui-data-list role="menu">\n        <tui-opt-group\n            *ngFor="let group of groups"\n            [label]="group.label"\n        >\n            <a\n                *ngFor="let item of group.items"\n                #rla="routerLinkActive"\n                tuiOption\n                role="menuitemradio"\n                routerLinkActive\n                [attr.aria-checked]="rla.isActive"\n                [routerLink]="item.routerLink"\n            >\n                {{item.label}}\n                <tui-svg\n                    *ngIf="rla.isActive"\n                    src="tuiIconCheckLarge"\n                ></tui-svg>\n            </a>\n        </tui-opt-group>\n    </tui-data-list>\n</ng-template>\n'}}]);