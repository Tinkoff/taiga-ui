(window.webpackJsonp=window.webpackJsonp||[]).push([[243],{qmmB:function(n,t,o){"use strict";o.r(t),t.default='<tui-hosted-dropdown #dropdown [content]="content" [(open)]="dropdownOpen">\n    <button\n        tuiIconButton\n        appearance="flat"\n        icon="tuiIconMoreVer"\n        type="button"\n        [pseudoHovered]="dropdown.open || null"\n    ></button>\n</tui-hosted-dropdown>\n<ng-template #content let-activeZone>\n    <tui-data-list\n        tuiDataListDropdownManager\n        [tuiActiveZoneParent]="activeZone"\n    >\n        <button\n            *tuiLet="\'French Fries\' as item"\n            tuiOption\n            (click)="selectOption(item)"\n        >\n            {{item}}\n        </button>\n        <button\n            tuiOption\n            tuiDropdown\n            tuiDropdownAlign="right"\n            [tuiDropdownContent]="burgersTmp"\n            [tuiDropdownSided]="true"\n        >\n            Burgers\n        </button>\n        <button\n            tuiOption\n            tuiDropdown\n            tuiDropdownAlign="right"\n            [tuiDropdownContent]="drinksTmp"\n            [tuiDropdownSided]="true"\n        >\n            Drinks\n        </button>\n        <button\n            *tuiLet="\'Ice Cream\' as item"\n            tuiOption\n            (click)="selectOption(item)"\n        >\n            {{item}}\n        </button>\n    </tui-data-list>\n    <ng-template #burgersTmp>\n        <tui-data-list\n            tuiDataListDropdownManager\n            [tuiActiveZoneParent]="activeZone"\n        >\n            <button\n                *ngFor="let burger of burgers"\n                tuiOption\n                (click)="selectOption(burger)"\n            >\n                {{burger}}\n            </button>\n            <button\n                tuiOption\n                tuiDropdown\n                tuiDropdownAlign="right"\n                [tuiDropdownContent]="drinksTmp"\n                [tuiDropdownSided]="true"\n            >\n                Nested menu\n            </button>\n        </tui-data-list>\n    </ng-template>\n    <ng-template #drinksTmp>\n        <tui-data-list>\n            <button\n                *ngFor="let drink of drinks"\n                tuiOption\n                (click)="selectOption(drink)"\n            >\n                {{drink}}\n            </button>\n        </tui-data-list>\n    </ng-template>\n</ng-template>\n'}}]);