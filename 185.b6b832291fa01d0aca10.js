(window.webpackJsonp=window.webpackJsonp||[]).push([[185],{gjbm:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiTableBarModule",(function(){return U}));var a=n("An66"),o=n("3kIJ"),r=n("1VvW"),i=n("T8fS"),l=n("SVIu"),c=n("Qq0t"),s=n("dvRg"),u=n("cWK9"),m=n("vhpW"),p=n("ZTXN"),d=n("bwdy"),b=n("kuMc"),h=n("kZht"),f=n("OZlg"),T=n("e0eB"),y=n("iyc4"),B=n("zV1d"),v=n("TxeG");const S=["tableBarTemplate"];function g(e,t){1&e&&(h["\u0275\u0275elementStart"](0,"div",2),h["\u0275\u0275elementStart"](1,"button",3),h["\u0275\u0275text"](2," Save "),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](3,"button",4),h["\u0275\u0275listener"]("click",(function(){return(0,t.$implicit)()})),h["\u0275\u0275text"](4," Cancel "),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](5,"button",5),h["\u0275\u0275text"](6," Delete "),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"]())}let C=(()=>{class e{constructor(e){this.tableBarsService=e,this.tableBarTemplate="",this.subscription=new d.a}showTableBar(){this.subscription.unsubscribe(),this.subscription=this.tableBarsService.open(this.tableBarTemplate||"",{hasCloseButton:!0,adaptive:!0}).subscribe()}}return e.\u0275fac=function(t){return new(t||e)(h["\u0275\u0275directiveInject"](m.b))},e.\u0275cmp=h["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-table-bar-example-1"]],viewQuery:function(e,t){var n;1&e&&h["\u0275\u0275viewQuery"](S,!0),2&e&&h["\u0275\u0275queryRefresh"](n=h["\u0275\u0275loadQuery"]())&&(t.tableBarTemplate=n.first)},decls:4,vars:0,consts:[["tuiButton","","type","button","size","m",3,"click"],["tableBarTemplate",""],["tuiMode","onDark",1,"content"],["tuiButton","","type","button","size","m"],["tuiButton","","type","button","appearance","flat","size","m",1,"tui-space_left-3",3,"click"],["tuiButton","","type","button","appearance","outline","size","m","icon","tuiIconTrashLarge",1,"delete-button"]],template:function(e,t){1&e&&(h["\u0275\u0275elementStart"](0,"button",0),h["\u0275\u0275listener"]("click",(function(){return t.showTableBar()})),h["\u0275\u0275text"](1," Show TableBar\n"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275template"](2,g,7,0,"ng-template",null,1,h["\u0275\u0275templateRefExtractor"]))},directives:[B.a,v.a],styles:[".content[_ngcontent-%COMP%]{display:flex;align-items:center;padding:.875rem 0}.delete-button[_ngcontent-%COMP%]{margin-left:auto}"],changeDetection:0}),e})();var x=n("yHor"),E=n("zGJC"),w=n("u8jZ");const P=["tableBarTemplate"];var V;V=$localize`:␟05d4df37c18ee658a26e40dcb633f2f1dd0fa7aa␟1919187952417466728: It is an element on the bottom of screen to show actions by multiselect of some items. It works with custom content. `;const _=["heading",$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`];function A(e,t){if(1&e&&(h["\u0275\u0275elementStart"](0,"p"),h["\u0275\u0275i18n"](1,V),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](2,"tui-doc-example",2),h["\u0275\u0275i18nAttributes"](3,_),h["\u0275\u0275element"](4,"tui-table-bar-example-1"),h["\u0275\u0275elementEnd"]()),2&e){const e=h["\u0275\u0275nextContext"]();h["\u0275\u0275advance"](2),h["\u0275\u0275property"]("content",e.example1)}}function O(e,t){1&e&&(h["\u0275\u0275elementStart"](0,"p"),h["\u0275\u0275text"](1,"Some template"),h["\u0275\u0275elementEnd"]())}var $,z,k,D,M,j,I;function L(e,t){1&e&&h["\u0275\u0275i18n"](0,$)}function R(e,t){1&e&&h["\u0275\u0275i18n"](0,z)}function G(e,t){1&e&&h["\u0275\u0275i18n"](0,k)}function H(e,t){if(1&e){const e=h["\u0275\u0275getCurrentView"]();h["\u0275\u0275elementStart"](0,"div"),h["\u0275\u0275elementStart"](1,"button",3),h["\u0275\u0275listener"]("click",(function(){return h["\u0275\u0275restoreView"](e),h["\u0275\u0275nextContext"]().showTableBar()})),h["\u0275\u0275text"](2," Show tableBar "),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](3,"button",4),h["\u0275\u0275listener"]("click",(function(){return h["\u0275\u0275restoreView"](e),h["\u0275\u0275nextContext"]().destroy()})),h["\u0275\u0275text"](4," Hide tableBar "),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275template"](5,O,2,0,"ng-template",null,5,h["\u0275\u0275templateRefExtractor"]),h["\u0275\u0275element"](7,"br"),h["\u0275\u0275elementStart"](8,"tui-doc-documentation"),h["\u0275\u0275template"](9,L,1,0,"ng-template",6),h["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return h["\u0275\u0275restoreView"](e),h["\u0275\u0275nextContext"]().adaptive=t})),h["\u0275\u0275template"](10,R,1,0,"ng-template",7),h["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return h["\u0275\u0275restoreView"](e),h["\u0275\u0275nextContext"]().hasCloseButton=t})),h["\u0275\u0275template"](11,G,1,0,"ng-template",8),h["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return h["\u0275\u0275restoreView"](e),h["\u0275\u0275nextContext"]().mode=t})),h["\u0275\u0275elementEnd"]()}if(2&e){const e=h["\u0275\u0275nextContext"]();h["\u0275\u0275advance"](9),h["\u0275\u0275property"]("documentationPropertyValue",e.adaptive),h["\u0275\u0275advance"](1),h["\u0275\u0275property"]("documentationPropertyValue",e.hasCloseButton),h["\u0275\u0275advance"](1),h["\u0275\u0275property"]("documentationPropertyValues",e.modeVariants)("documentationPropertyValue",e.mode)}}function N(e,t){if(1&e&&(h["\u0275\u0275elementStart"](0,"ol",9),h["\u0275\u0275elementStart"](1,"li"),h["\u0275\u0275elementStart"](2,"p"),h["\u0275\u0275i18nStart"](3,D),h["\u0275\u0275element"](4,"code"),h["\u0275\u0275i18nEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275element"](5,"tui-doc-code",10),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](6,"li"),h["\u0275\u0275elementStart"](7,"p"),h["\u0275\u0275i18nStart"](8,M),h["\u0275\u0275element"](9,"code"),h["\u0275\u0275i18nEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275element"](10,"tui-doc-code",10),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](11,"li"),h["\u0275\u0275elementStart"](12,"p"),h["\u0275\u0275i18nStart"](13,j),h["\u0275\u0275element"](14,"code"),h["\u0275\u0275element"](15,"code"),h["\u0275\u0275i18nEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275element"](16,"tui-doc-code",11),h["\u0275\u0275element"](17,"tui-doc-code",12),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](18,"li"),h["\u0275\u0275elementStart"](19,"p"),h["\u0275\u0275i18nStart"](20,I),h["\u0275\u0275element"](21,"code"),h["\u0275\u0275i18nEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275element"](22,"tui-doc-code",13),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"]()),2&e){const e=h["\u0275\u0275nextContext"]();h["\u0275\u0275advance"](5),h["\u0275\u0275property"]("code",e.exampleModule),h["\u0275\u0275advance"](5),h["\u0275\u0275property"]("code",e.exampleHtml),h["\u0275\u0275advance"](6),h["\u0275\u0275property"]("code",e.exampleServiceUsageHtml),h["\u0275\u0275advance"](1),h["\u0275\u0275property"]("code",e.exampleServiceUsage),h["\u0275\u0275advance"](5),h["\u0275\u0275property"]("code",e.exampleLazyModule)}}$=$localize`:␟5e641f8103cca3a413f65da8c27fcc74a78fbef3␟5646260285050734970: Adaprive content `,z=$localize`:␟0508167899eda99f73e069ef49027af94e6b0328␟4329350149148955327: Enable close button `,k=$localize`:␟cdcabff292f0314e30e6f31102dd5ede8bb860a0␟1527305502164610498: Light / dark mode `,D=$localize`:␟33b59d28b627891220e6c360c8ffb07eef6c76cb␟5586136887716454770: Add ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiTableBarsHostModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into your app.module `,M=$localize`:␟066cf82b786e3393ee3efed2ca0016a89d7a4357␟5654054825567970286: Add ${"\ufffd#9\ufffd"}:START_TAG_CODE:tui-table-bars-host${"\ufffd/#9\ufffd"}:CLOSE_TAG_CODE: into your app.template `,j=$localize`:␟b7d425f4c801f0a1d193d06c1862a5bc0cc48c14␟2388724752770660394: Use ${"[\ufffd#14\ufffd|\ufffd#15\ufffd]"}:START_TAG_CODE:open${"[\ufffd/#14\ufffd|\ufffd/#15\ufffd]"}:CLOSE_TAG_CODE: method and subscribe to returened ${"[\ufffd#14\ufffd|\ufffd#15\ufffd]"}:START_TAG_CODE:Observable${"[\ufffd/#14\ufffd|\ufffd/#15\ufffd]"}:CLOSE_TAG_CODE:`,j=h["\u0275\u0275i18nPostprocess"](j),I=$localize`:␟943913395bbc8575620ded56eb7590932890b0e8␟4557069972581195317: If you use component in lazy loading modules, do not forget to pass into ${"\ufffd#21\ufffd"}:START_TAG_CODE:new PolymorpheusComponent Injector${"\ufffd/#21\ufffd"}:CLOSE_TAG_CODE: of component where you open table bar `;let Q=(()=>{class e{constructor(e){this.tableBarsService=e,this.destroy$=new p.a,this.tableBarTemplate="",this.exampleServiceUsage="import {TuiTableBarsService} from '@taiga-ui/addon-tablebars';\n...\n\n@ViewChild('tableBarTemplate')\ntableBarTemplate: TemplateRef<{}>;\n\nconstructor(@Inject(TuiTableBarsService) private readonly tableBarsService: TuiTableBarsService) {\n\n...\n    this.tableBarsService\n        .showTableBar(this.tableBarTemplate, {\n            mode: 'onLight',\n            hasCloseButton: true,\n        })\n    .subscribe();\n...\n",this.exampleServiceUsageHtml="<ng-template #tableBarTemplate>\n    <p>Template</p>\n</ng-template>\n",this.exampleLazyModule="import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';\nimport {TuiTableBarsService} from '@taiga-ui/addon-tablebars';\nimport {Injector} from '@angular/core';\nimport {CustomTableBarsComponent} from 'customTableBars.component';\n...\n\nconstructor(@Inject(TuiTableBarsService) private readonly tableBarsService: TuiTableBarsService) {\n\n...\n    this.tableBarsService\n        .showTableBar(new PolymorpheusComponent(CustomTableBarsComponent, this.injector))\n        .subscribe();\n...\n",this.exampleModule="import {TuiTableBarsHostModule} from '@taiga-ui/addon-tablebars';\nimport {TuiRootModule} from '@taiga-ui/core';\n...\n\n@NgModule({\n    imports: [\n        TuiRootModule,\n        TuiTableBarsHostModule,\n        ...\n    ]\n...\n",this.exampleHtml='<tui-root>\n    \x3c!-- The rest of your application --\x3e\n    <tui-table-bars-host ngProjectAs="tuiOverAlerts"></tui-table-bars-host>\n</tui-root>\n',this.example1={TypeScript:"import {Component, Inject, ViewChild} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiTableBarsService} from '@taiga-ui/addon-tablebars';\nimport {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';\nimport {Subscription} from 'rxjs';\n\n@Component({\n    selector: 'tui-table-bar-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiTableBarExampleComponent1 {\n    @ViewChild('tableBarTemplate')\n    tableBarTemplate: PolymorpheusContent = '';\n\n    subscription = new Subscription();\n\n    constructor(\n        @Inject(TuiTableBarsService)\n        private readonly tableBarsService: TuiTableBarsService,\n    ) {}\n\n    showTableBar() {\n        this.subscription.unsubscribe();\n\n        this.subscription = this.tableBarsService\n            .open(this.tableBarTemplate || '', {\n                hasCloseButton: true,\n                adaptive: true,\n            })\n            .subscribe();\n    }\n}\n",HTML:'<button\n    tuiButton\n    type="button"\n    size="m"\n    (click)="showTableBar()"\n>\n    Show TableBar\n</button>\n\n<ng-template\n    #tableBarTemplate\n    let-close\n>\n    <div\n        tuiMode="onDark"\n        class="content"\n    >\n        <button\n            tuiButton\n            type="button"\n            size="m"\n        >\n            Save\n        </button>\n        <button\n            tuiButton\n            type="button"\n            appearance="flat"\n            size="m"\n            class="tui-space_left-3"\n            (click)="close()"\n        >\n            Cancel\n        </button>\n        <button\n            tuiButton\n            type="button"\n            appearance="outline"\n            size="m"\n            icon="tuiIconTrashLarge"\n            class="delete-button"\n        >\n            Delete\n        </button>\n    </div>\n</ng-template>\n',LESS:".content {\n    display: flex;\n    align-items: center;\n    padding: 0.875rem 0;\n}\n\n.delete-button {\n    margin-left: auto;\n}\n"},this.modeVariants=["onLight","onDark"],this.mode=this.modeVariants[0],this.adaptive=!1,this.hasCloseButton=!1,this.subscription=new d.a}showTableBar(){this.subscription.unsubscribe(),this.subscription=this.tableBarsService.open(this.tableBarTemplate||"",{adaptive:this.adaptive,mode:this.mode,hasCloseButton:this.hasCloseButton}).pipe(Object(b.a)(this.destroy$)).subscribe()}destroy(){this.destroy$.next()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return e.\u0275fac=function(t){return new(t||e)(h["\u0275\u0275directiveInject"](m.b))},e.\u0275cmp=h["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-table-bar"]],viewQuery:function(e,t){var n;1&e&&h["\u0275\u0275viewQuery"](P,!0),2&e&&h["\u0275\u0275queryRefresh"](n=h["\u0275\u0275loadQuery"]())&&(t.tableBarTemplate=n.first)},decls:4,vars:0,consts:[["header","TableBarsService","package","ADDON-TABLEBARS","path","addon-tablebars/services/table-bars.service.ts"],["pageTab",""],["id","base",3,"content",6,"heading"],["tuiButton","","type","button","size","m",1,"tui-space_right-2",3,"click"],["tuiButton","","type","button","size","m",3,"click"],["tableBarTemplate",""],["documentationPropertyName","adaptive","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","hasCloseButton","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","mode","documentationPropertyType","TuiBrightness",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[1,"b-demo-steps"],["filename","app.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"],["filename","myComponent.component.ts",3,"code"],["filename","customNotification.component.ts",3,"code"]],template:function(e,t){1&e&&(h["\u0275\u0275elementStart"](0,"tui-doc-page",0),h["\u0275\u0275template"](1,A,5,1,"ng-template",1),h["\u0275\u0275template"](2,H,12,4,"ng-template",1),h["\u0275\u0275template"](3,N,23,5,"ng-template",1),h["\u0275\u0275elementEnd"]())},directives:[f.a,T.a,y.a,C,B.a,x.a,E.a,w.a],styles:[".label[_ngcontent-%COMP%]{width:6.25rem}"],changeDetection:0}),e})(),U=(()=>{class e{}return e.\u0275mod=h["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=h["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.c,c.Z,i.g,u.c,s.yb,s.ab,c.xb,o.FormsModule,c.Cb,l.i,r.f.forChild(Object(l.p)(Q))]]}),e})()}}]);