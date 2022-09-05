(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["!!raw-loader!-examples-6-index-ts"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/combo-box/examples/6/index.ts":
/*!**************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/combo-box/examples/6/index.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiStringHandler} from '@taiga-ui/cdk';\nimport {tuiItemsHandlersProvider} from '@taiga-ui/kit';\n\ninterface Employee {\n    readonly id: number;\n    readonly name: string;\n    readonly dept: {\n        readonly id: number;\n        readonly title: string;\n    };\n}\n\nconst STRINGIFY_EMPLOYEE: TuiStringHandler<Employee> = (item: Employee) =>\n    `${item.name} (${item.dept.title})`;\n\n@Component({\n    selector: `tui-combo-box-example-6`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n    providers: [tuiItemsHandlersProvider({stringify: STRINGIFY_EMPLOYEE})],\n})\nexport class TuiComboBoxExample6 {\n    readonly testValue = new FormControl(null);\n\n    readonly items: readonly Employee[] = [\n        {id: 42, name: `John Cleese`, dept: {id: 566, title: `Financial`}},\n        {id: 237, name: `Eric Idle`, dept: {id: 560, title: `Staffing`}},\n        {id: 666, name: `Michael Palin`, dept: {id: 566, title: `Financial`}},\n        {id: 123, name: `Terry Gilliam`, dept: {id: 500, title: `Administrative`}},\n        {id: 777, name: `Terry Jones`, dept: {id: 566, title: `Financial`}},\n        {id: 999, name: `Graham Chapman`, dept: {id: 560, title: `Staffing`}},\n    ];\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/data-list/examples/6/index.ts":
/*!**************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/data-list/examples/6/index.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_IS_MOBILE} from '@taiga-ui/cdk';\nimport {TUI_ARROW} from '@taiga-ui/kit';\n\n@Component({\n    selector: `tui-data-list-example-6`,\n    templateUrl: `./index.html`,\n    styles: [\n        `\n            .option {\n                white-space: normal;\n            }\n        `,\n    ],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiDataListExample6 {\n    open = false;\n\n    readonly arrow = TUI_ARROW;\n\n    readonly groups = [\n        {\n            label: `Advantages of Taiga UI`,\n            items: [\n                `🧩 Modular and fully-treeshakable. We harnessed the power of Secondary Entry Points mechanism. You can import even just one entity from our library and be sure that there is no redundant code in your bundle.`,\n                `🧙 Agnostic. Our components are very flexible and are ready for any use case. But we take care of basic UX aspects to let you focus on your project features.`,\n                `🦋 Customizable. We use CSS custom properties for all our styling and provide easy methods to customize all UI components.`,\n                `🛠 Well engineered. We are not afraid to use DI to the max. All our components use OnPush, and the whole project is developed with strict TypeScript mode.`,\n                `📦 It is big! We have 130+ components, 100+ directives, dozens of tokens, utils and tools. And it is not over yet.`,\n                `🏗 Maintained! The library started as an internal product in our company. It is used by 50+ projects in production now and it is here to stay.`,\n            ],\n        },\n        {\n            label: `Well-engineered Taiga UI components`,\n            items: [`Calendar`, `Dialog`, `ComboBox`, `Select`],\n        },\n    ];\n\n    constructor(@Inject(TUI_IS_MOBILE) readonly isMobile: boolean) {}\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/dialog/examples/6/index.ts":
/*!***********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/dialog/examples/6/index.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-dialog-example-6`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiDialogExampleComponent6 {\n    exampleForm = new FormGroup({\n        exampleControl: new FormControl(``),\n    });\n\n    open = false;\n\n    showDialog(): void {\n        this.open = true;\n    }\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/editor-new/examples/6/index.ts":
/*!***************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/editor-new/examples/6/index.ts ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {\n    tiptapEditorStyles,\n    TUI_EDITOR_EXTENSIONS,\n    TUI_EDITOR_STYLES,\n    TuiEditorTool,\n} from '@taiga-ui/addon-editor';\nimport {TuiDestroyService} from '@taiga-ui/cdk';\n\n@Component({\n    selector: `tui-editor-example-6`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    providers: [\n        TuiDestroyService,\n        {\n            provide: TUI_EDITOR_STYLES,\n            useValue: tiptapEditorStyles,\n        },\n        {\n            provide: TUI_EDITOR_EXTENSIONS,\n            useValue: [\n                import(`@tiptap/starter-kit`).then(({default: module}) => module),\n                import(`@taiga-ui/addon-editor/extensions/group`).then(\n                    ({createGroupExtension}) =>\n                        createGroupExtension({\n                            draggable: false,\n\n                            // @note: you can override css styles with your own classes\n                            groupNodeClass: `group`,\n                            groupPointerNodeClass: ``, // anyway element doesn't exists if `draggable` is false\n                        }),\n                ),\n            ],\n        },\n    ],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiEditorNewExample6 {\n    readonly builtInTools = [TuiEditorTool.Undo, TuiEditorTool.Group];\n\n    control = new FormControl(``);\n\n    constructor() {\n        this.control.patchValue(\n            `<p>This is a boring paragraph.</p><div data-type=\"group\"><p>And another paragraph.</p><div data-type=\"group\"><p>And a nested paragraph.</p><div data-type=\"group\"><p>But can we go deeper?</p></div></div></div><p>Let’s finish with a boring paragraph.</p>`,\n        );\n    }\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-tag/examples/6/index.ts":
/*!**************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-tag/examples/6/index.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-input-tag-example-6`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputTagExample6 {\n    value = [`not`, `unique`, `tags, with`, `custom`, `separator`, `separator`];\n    customSeparator = `;`;\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input/examples/6/index.ts":
/*!**********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input/examples/6/index.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {FormControl, FormGroup, Validators} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-input-example-6`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputExample6 {\n    readonly items = [`Black`, `Gold`, `Silver`];\n    readonly form = new FormGroup({\n        name: new FormControl(``, Validators.required),\n        date: new FormControl(null, Validators.required),\n        color: new FormControl(null, Validators.required),\n        quantity: new FormControl(),\n        sum: new FormControl(255),\n    });\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/multi-select/examples/6/index.ts":
/*!*****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/multi-select/examples/6/index.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-multi-select-example-6`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiMultiSelectExample6 {\n    readonly items: readonly string[] = [\n        `گراهام چپمن`,\n        `جان کلیز`,\n        `تری گیلیام`,\n        `اریک آیدل`,\n        `تری جونز`,\n        `مایکل پیلین`,\n    ];\n\n    value: readonly string[] = [this.items[0]];\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/select/examples/6/index.ts":
/*!***********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/select/examples/6/index.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiBooleanHandler} from '@taiga-ui/cdk';\nimport {of} from 'rxjs';\nimport {delay} from 'rxjs/operators';\n\nimport {default as avatar} from '!!file-loader!../../../../../assets/images/avatar.jpg';\n\nclass User {\n    constructor(\n        readonly firstName: string,\n        readonly lastName: string,\n        readonly avatarUrl: string | null = null,\n    ) {}\n\n    toString(): string {\n        return `${this.firstName} ${this.lastName}`;\n    }\n}\n\nconst databaseMockData: readonly User[] = [\n    new User(`Roman`, `Sedov`, `http://marsibarsi.me/images/1x1small.jpg`),\n    new User(`Alex`, `Inkin`, avatar),\n    new User(`Dmitriy`, `Demenskiy`),\n    new User(`Evgeniy`, `Mamaev`),\n    new User(`Ivan`, `Ishmametiev`),\n    new User(`Igor`, `Katsuba`),\n    new User(`Yulia`, `Tsareva`),\n];\n\n@Component({\n    selector: `tui-select-example-6`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiSelectExample6 {\n    value = null;\n\n    readonly items$ = of(databaseMockData).pipe(delay(5000));\n\n    readonly disabledItemHandler: TuiBooleanHandler<User> = ({avatarUrl}) => !!avatarUrl;\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/sheet/examples/6/index.ts":
/*!**********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/sheet/examples/6/index.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiSheetOptions} from '@taiga-ui/addon-mobile';\n\n@Component({\n    selector: `tui-sheet-example-6`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiSheetExample6 {\n    open = false;\n\n    readonly options: Partial<TuiSheetOptions> = {\n        overlay: true,\n        stops: [`5rem`],\n    };\n\n    readonly images = [\n        `https://m.media-amazon.com/images/M/MV5BOTEzOTMzNzcwNF5BMl5BanBnXkFtZTgwNDcxODUyMjI@._V1_FMjpg_UX1280_.jpg`,\n        `https://m.media-amazon.com/images/M/MV5BNzg0MzEwNDgwN15BMl5BanBnXkFtZTgwNTcxODUyMjI@._V1_FMjpg_UX1024_.jpg`,\n        `https://m.media-amazon.com/images/M/MV5BOTE0MTMxMTY3NF5BMl5BanBnXkFtZTgwNDc3NjIwMjE@._V1_FMjpg_UX1024_.jpg`,\n        `https://m.media-amazon.com/images/M/MV5BNjc4ODAyMDg3NF5BMl5BanBnXkFtZTgwOTY3NjIwMjE@._V1_FMjpg_UX600_.jpg`,\n        `https://m.media-amazon.com/images/M/MV5BMTU3NDY1MTk3M15BMl5BanBnXkFtZTgwMjc3NjIwMjE@._V1_FMjpg_UX1024_.jpg`,\n    ];\n\n    toggle(): void {\n        this.open = !this.open;\n    }\n\n    onIntersection(\n        [{isIntersecting}]: IntersectionObserverEntry[],\n        {classList}: HTMLElement,\n    ): void {\n        classList.toggle(`_visible`, isIntersecting);\n    }\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/tabs/examples/6/index.ts":
/*!*********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/tabs/examples/6/index.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiAlertService} from '@taiga-ui/core';\n\n@Component({\n    selector: `tui-tabs-example-6`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiTabsExample6 {\n    activeItemIndex = 0;\n\n    readonly steps = [`Sales`, `Settings`, `News`];\n\n    constructor(\n        @Inject(TuiAlertService)\n        private readonly notifications: TuiAlertService,\n    ) {}\n\n    onClick(item: string): void {\n        this.notifications.open(item).subscribe();\n    }\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/text-area/examples/6/index.ts":
/*!**************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/text-area/examples/6/index.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-text-area-example-6`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiTextAreaExample6 {\n    value = `مونتى پايثون و ساعات معروفين انهم ذى پايثونز كانو مجموعة كوميديا سرياليه من بريطانيا`;\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/tree/examples/6/index.ts":
/*!*********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/tree/examples/6/index.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {EMPTY_ARRAY, TuiHandler} from '@taiga-ui/cdk';\n\ninterface TreeNode {\n    readonly text: string;\n    readonly children?: readonly TreeNode[];\n}\n\n@Component({\n    selector: `tui-tree-example-6`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiTreeExample6 {\n    map = new Map<TreeNode, boolean>();\n\n    readonly data: TreeNode = {\n        text: `Topmost`,\n        children: [\n            {\n                text: `Top level 1`,\n                children: [\n                    {\n                        text: `Another item`,\n                        children: [\n                            {text: `Next level 1`},\n                            {text: `Next level 2`},\n                            {text: `Next level 3`},\n                        ],\n                    },\n                ],\n            },\n            {text: `Top level 2`},\n            {\n                text: `Top level 3`,\n                children: [{text: `Test 1`}, {text: `Test 2`}],\n            },\n        ],\n    };\n\n    readonly handler: TuiHandler<TreeNode, readonly TreeNode[]> = item =>\n        item.children || EMPTY_ARRAY;\n\n    readonly getValue = (item: TreeNode, map: Map<TreeNode, boolean>): boolean | null => {\n        const flat = flatten(item);\n        const result = !!map.get(flat[0]);\n\n        for (let i = 0; i < flat.length; i++) {\n            if (result !== !!map.get(flat[i])) {\n                return null;\n            }\n        }\n\n        return result;\n    };\n\n    onChecked(node: TreeNode, value: boolean): void {\n        flatten(node).forEach(item => this.map.set(item, value));\n\n        this.map = new Map(this.map.entries());\n    }\n}\n\nfunction flatten(item: TreeNode): readonly TreeNode[] {\n    return item.children\n        ? item.children.map(flatten).reduce((arr, item) => [...arr, ...item], [])\n        : [item];\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/pipes/field-error/examples/6/index.ts":
/*!***********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/pipes/field-error/examples/6/index.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {FormControl, Validators} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_VALIDATION_ERRORS} from '@taiga-ui/kit';\n\n@Component({\n    selector: `tui-field-error-content-pipe-example-6`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n    providers: [\n        {\n            provide: TUI_VALIDATION_ERRORS,\n            useValue: {\n                required: `Enter this!`,\n                max: (context: {max: number}): string =>\n                    `Too expensive, max ${context.max}`,\n            },\n        },\n    ],\n})\nexport class TuiFieldErrorContentPipeExample6 {\n    readonly data = [{name: `Latte`}, {name: `Cappuccino`}] as const;\n\n    latteControl = new FormControl(null, [Validators.required, Validators.max(6)]);\n    cappuccinoControl = new FormControl(null, [Validators.required, Validators.max(5)]);\n    controls = [this.latteControl, this.cappuccinoControl];\n\n    readonly columns = [`name`, `price`];\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/utils/format/examples/6/index.ts":
/*!******************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/utils/format/examples/6/index.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {formatNumber} from '@taiga-ui/core';\n\n@Component({\n    selector: `tui-format-example-6`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiFormatExample6 {\n    parametersForm = new FormGroup({\n        value: new FormControl(123456.789),\n        decimalLimit: new FormControl(2),\n        decimalSeparator: new FormControl(`.`),\n        thousandSeparator: new FormControl(` `),\n    });\n\n    get formattedNumber(): string {\n        const {value, decimalLimit, decimalSeparator, thousandSeparator} =\n            this.parametersForm.value;\n\n        return formatNumber(value, decimalLimit, decimalSeparator, thousandSeparator);\n    }\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/utils/tokens/examples/6/index.ts":
/*!******************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/utils/tokens/examples/6/index.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_IS_MOBILE} from '@taiga-ui/cdk';\n\n@Component({\n    selector: `tui-token-example-6`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiTokensExample6 {\n    constructor(@Inject(TUI_IS_MOBILE) readonly isMobile: boolean) {}\n}\n");

/***/ })

}]);
//# sourceMappingURL=!!raw-loader!-examples-6-index-ts.js.map