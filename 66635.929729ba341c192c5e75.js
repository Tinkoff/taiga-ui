"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[66635],{66635:n=>{n.exports='<tui-scrollbar\n    waIntersectionRoot\n    class="scrollbar"\n    [hidden]="true"\n>\n    <table\n        tuiTable\n        size="l"\n        class="table"\n        [columns]="columns"\n    >\n        <thead tuiThead>\n            <tr tuiThGroup>\n                <th\n                    *tuiHead="\'name\'"\n                    tuiTh\n                    rowspan="2"\n                    class="first"\n                    [sorter]="null"\n                    [sticky]="true"\n                >\n                    Name\n                </th>\n                <th\n                    *tuiHead="\'price\'"\n                    tuiTh\n                    rowspan="2"\n                    class="number second"\n                    [sticky]="true"\n                >\n                    Price,&nbsp;$\n                </th>\n                <th\n                    *tuiHead="\'quantity\'"\n                    tuiTh\n                    colspan="2"\n                    [sorter]="null"\n                >\n                    Purchase\n                </th>\n                <ng-container *tuiHead="\'unit\'"></ng-container>\n                <th\n                    *tuiHead="\'date\'"\n                    tuiTh\n                    rowspan="2"\n                >\n                    Date\n                </th>\n                <th\n                    *tuiHead="\'total\'"\n                    tuiTh\n                    rowspan="2"\n                    class="number"\n                    [sorter]="totalSorter"\n                >\n                    Total\n                </th>\n            </tr>\n            <tr tuiThGroup>\n                <th\n                    *tuiHead="\'quantity\'"\n                    tuiTh\n                    class="number border"\n                >\n                    Quantity\n                </th>\n                <th\n                    *tuiHead="\'unit\'"\n                    tuiTh\n                >\n                    Units\n                </th>\n            </tr>\n        </thead>\n\n        <tbody\n            tuiTbody\n            heading="Monty Python"\n            [data]="pythons"\n        >\n            <tr\n                *tuiRow="let item of pythons"\n                tuiTr\n            >\n                <th\n                    *tuiCell="\'name\'"\n                    tuiTd\n                    [colSpan]="item.price > 1000 ? 2 : 0"\n                >\n                    <tui-text-area\n                        class="textarea"\n                        [expandable]="true"\n                        [ngModel]="item.name"\n                        [ngModelOptions]="options"\n                        (ngModelChange)="onValueChange($event, \'name\', item, pythons)"\n                    ></tui-text-area>\n                </th>\n                <ng-container *tuiCell="\'price\'">\n                    <th\n                        *ngIf="item.price <= 1000"\n                        tuiTd\n                        class="second"\n                    >\n                        <tui-input-number\n                            class="number"\n                            [tuiValidator]="minPrice"\n                            [ngModel]="item.price"\n                            [ngModelOptions]="options"\n                            (ngModelChange)="onValueChange($event, \'price\', item, pythons)"\n                        ></tui-input-number>\n                    </th>\n                </ng-container>\n                <td\n                    *tuiCell="\'quantity\'"\n                    tuiTd\n                >\n                    <tui-input-count\n                        [ngModel]="item.quantity"\n                        [ngModelOptions]="options"\n                        (ngModelChange)="onValueChange($event, \'quantity\', item, pythons)"\n                    ></tui-input-count>\n                </td>\n                <td\n                    *tuiCell="\'unit\'"\n                    tuiTd\n                >\n                    <tui-select\n                        class="select"\n                        [ngModel]="item.unit"\n                        [ngModelOptions]="options"\n                        (ngModelChange)="onValueChange($event, \'unit\', item, pythons)"\n                    >\n                        <tui-data-list-wrapper\n                            *tuiDataList\n                            [items]="units"\n                        ></tui-data-list-wrapper>\n                    </tui-select>\n                </td>\n                <td\n                    *tuiCell="\'date\'"\n                    tuiTd\n                >\n                    <tui-input-date\n                        [ngModel]="item.date"\n                        [ngModelOptions]="options"\n                        (ngModelChange)="onValueChange($event, \'date\', item, pythons)"\n                    ></tui-input-date>\n                </td>\n                <td\n                    *tuiCell="\'total\'"\n                    tuiTd\n                    class="number text"\n                >\n                    {{ getTotal(item) | tuiFormatNumber }}\n                </td>\n            </tr>\n        </tbody>\n\n        <tbody\n            tuiTbody\n            [heading]="template"\n            [data]="starwars"\n        >\n            <tr\n                *tuiRow="let item of starwars"\n                tuiTr\n            >\n                <th\n                    *tuiCell="\'name\'"\n                    tuiTd\n                >\n                    <tui-text-area\n                        class="textarea"\n                        [expandable]="true"\n                        [ngModel]="item.name"\n                        [ngModelOptions]="options"\n                        (ngModelChange)="onValueChange($event, \'name\', item, starwars)"\n                    ></tui-text-area>\n                </th>\n                <th\n                    *tuiCell="\'price\'"\n                    tuiTd\n                    class="second"\n                >\n                    <tui-input-number\n                        [tuiValidator]="minPrice"\n                        [ngModel]="item.price"\n                        [ngModelOptions]="options"\n                        (ngModelChange)="onValueChange($event, \'price\', item, starwars)"\n                    ></tui-input-number>\n                </th>\n                <td\n                    *tuiCell="\'quantity\'"\n                    tuiTd\n                >\n                    <tui-input-count\n                        [ngModel]="item.quantity"\n                        [ngModelOptions]="options"\n                        (ngModelChange)="onValueChange($event, \'quantity\', item, starwars)"\n                    ></tui-input-count>\n                </td>\n                <td\n                    *tuiCell="\'unit\'"\n                    tuiTd\n                >\n                    <tui-select\n                        class="select"\n                        [ngModel]="item.unit"\n                        [ngModelOptions]="options"\n                        (ngModelChange)="onValueChange($event, \'unit\', item, starwars)"\n                    >\n                        <tui-data-list-wrapper\n                            *tuiDataList\n                            [items]="units"\n                        ></tui-data-list-wrapper>\n                    </tui-select>\n                </td>\n                <td\n                    *tuiCell="\'date\'"\n                    tuiTd\n                >\n                    <tui-input-date\n                        [ngModel]="item.date"\n                        [ngModelOptions]="options"\n                        (ngModelChange)="onValueChange($event, \'date\', item, starwars)"\n                    ></tui-input-date>\n                </td>\n                <td\n                    *tuiCell="\'total\'"\n                    tuiTd\n                    class="number text"\n                >\n                    {{ getTotal(item) | tuiFormatNumber }}\n                </td>\n            </tr>\n        </tbody>\n    </table>\n</tui-scrollbar>\n<ng-template #template>\n    <tui-svg\n        src="tuiIconStarLarge"\n        class="tui-space_right-3"\n    ></tui-svg>\n    Star Wars\n</ng-template>\n'}}]);