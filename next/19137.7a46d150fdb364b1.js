(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[19137],{19137:e=>{e.exports="import {NgForOf} from '@angular/common';\nimport {Component, inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiLet} from '@taiga-ui/cdk';\nimport type {TuiSizeL, TuiSizeS} from '@taiga-ui/core';\nimport {TuiButton, TuiDataList, TuiDialogService, TuiDropdown} from '@taiga-ui/core';\nimport {TuiDataListDropdownManager} from '@taiga-ui/kit';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent2\",\n    imports: [\n        TuiButton,\n        TuiDropdown,\n        TuiDataListDropdownManager,\n        TuiDataList,\n        TuiLet,\n        NgForOf,\n    ],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    private readonly dialogs = inject(TuiDialogService);\n\n    protected dropdownOpen = false;\n    protected size: TuiSizeL | TuiSizeS = 's';\n\n    protected readonly burgers = ['Classic', 'Cheeseburger', 'Royal Cheeseburger'];\n    protected readonly drinks = ['Cola', 'Tea', 'Coffee', 'Slurm'];\n\n    protected open = false;\n\n    protected selectOption(item: string): void {\n        this.dropdownOpen = false;\n        this.dialogs.open(`You selected ${item}`).subscribe();\n    }\n}\n"}}]);