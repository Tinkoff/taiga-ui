function _templateObject6(){var e=_taggedTemplateLiteral([":\u241f856efa24b2b203ad1c001649937b5c5738e38f97\u241f8042412267862615798:Add to the template:"]);return _templateObject6=function(){return e},e}function _templateObject5(){var e=_taggedTemplateLiteral([":\u241f709fb65f50c77159dca5239e1a3405f04b9b28f0\u241f5208450876663294588: Import ",":START_TAG_CODE:TuiColorPickerModule",":CLOSE_TAG_CODE: into a module where you want to use our component "]);return _templateObject5=function(){return e},e}function _templateObject4(){var e=_taggedTemplateLiteral([":\u241fa4186ff325aca7ae0746ccba7533a67b83b1a7cf\u241f2059122116780340968: RGBA color tuple "]);return _templateObject4=function(){return e},e}function _templateObject3(){var e=_taggedTemplateLiteral([":\u241fc58615eb54ebf60ebca6fd2305cf40aaae4abb01\u241f4818970173940003343:ColorSelector in dropdown"]);return _templateObject3=function(){return e},e}function _templateObject2(){var e=_taggedTemplateLiteral([":\u241f076f197d00bec1e1eadd0578f26163a0094bb3c6\u241f1095933938236110379:InputColor"]);return _templateObject2=function(){return e},e}function _templateObject(){var e=_taggedTemplateLiteral([":\u241f67c85c212962109b4b2d7a72c9ed553cd211284c\u241f5926592895853516779: ColorPicker allows to pick a color and its transparency. InputColor and ColorSelector are made with ColorPicker "]);return _templateObject=function(){return e},e}function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{GNRe:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiColorPickerModule",(function(){return U}));var o,r=n("An66"),l=n("3kIJ"),a=n("1VvW"),i=n("SVIu"),c=n("vgRF"),u=n("l4xa"),p=n("Qq0t"),d=n("kZht"),m=n("OZlg"),s=n("e0eB"),f=n("iyc4"),g=n("kT+k"),b=n("2wTY"),h=((o=function e(){_classCallCheck(this,e),this.color="#ffdd2d",this.palette=c.l}).\u0275fac=function(e){return new(e||o)},o.\u0275cmp=d["\u0275\u0275defineComponent"]({type:o,selectors:[["tui-color-picker-example-1"]],decls:6,vars:6,consts:[[1,"b-form",3,"colors","ngModel","ngModelChange"],["tuiTextfieldSize","m",1,"b-form","tui-space_vertical-2",3,"colors","ngModel","ngModelChange"],["tuiTextfieldSize","s",1,"b-form",3,"colors","ngModel","ngModelChange"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"tui-input-color",0),d["\u0275\u0275listener"]("ngModelChange",(function(e){return t.color=e})),d["\u0275\u0275text"](1," Background color\n"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](2,"tui-input-color",1),d["\u0275\u0275listener"]("ngModelChange",(function(e){return t.color=e})),d["\u0275\u0275text"](3," Background color\n"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](4,"tui-input-color",2),d["\u0275\u0275listener"]("ngModelChange",(function(e){return t.color=e})),d["\u0275\u0275text"](5," Background color\n"),d["\u0275\u0275elementEnd"]()),2&e&&(d["\u0275\u0275property"]("colors",t.palette)("ngModel",t.color),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("colors",t.palette)("ngModel",t.color),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("colors",t.palette)("ngModel",t.color))},directives:[g.a,l.NgControlStatus,l.NgModel,b.b],encapsulation:2,changeDetection:0}),o),C=n("ENSU"),k=n("q7Lq"),y=n("SUM+"),S=n("zV1d"),v=n("RZBz"),x=n("4hRd");function _(e,t){if(1&e){var n=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"tui-color-selector",3),d["\u0275\u0275listener"]("colorChange",(function(e){return d["\u0275\u0275restoreView"](n),d["\u0275\u0275nextContext"]().color=e})),d["\u0275\u0275elementEnd"]()}if(2&e){var o=t.$implicit,r=d["\u0275\u0275nextContext"]();d["\u0275\u0275property"]("tuiActiveZoneParent",o)("color",r.color)}}var T,M,w=((T=function(){function e(t){_classCallCheck(this,e),this.sanitizer=t,this.color="#ffdd2d"}return _createClass(e,[{key:"background",get:function(){return this.sanitizer.bypassSecurityTrustStyle(this.color)}}]),e}()).\u0275fac=function(e){return new(e||T)(d["\u0275\u0275directiveInject"](C.DomSanitizer))},T.\u0275cmp=d["\u0275\u0275defineComponent"]({type:T,selectors:[["tui-color-picker-example-2"]],decls:5,vars:6,consts:[["tuiDropdownAlign","left",3,"content","tuiDropdownMaxHeight"],["tuiButton","","type","button","appearance","","automation-id","color-picker__button"],["picker",""],[3,"tuiActiveZoneParent","color","colorChange"]],template:function(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"tui-hosted-dropdown",0),d["\u0275\u0275elementStart"](1,"button",1),d["\u0275\u0275text"](2," Color me Kubrick "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275template"](3,_,1,2,"ng-template",null,2,d["\u0275\u0275templateRefExtractor"])),2&e){var n=d["\u0275\u0275reference"](4);d["\u0275\u0275property"]("content",n)("tuiDropdownMaxHeight",999),d["\u0275\u0275advance"](1),d["\u0275\u0275styleProp"]("background",t.background,d["\u0275\u0275defaultStyleSanitizer"])("color",t.background)}},directives:[k.a,y.a,S.a,v.a,x.a],styles:["[_nghost-%COMP%]     tui-wrapper{-webkit-filter:invert(1);filter:invert(1)}"],changeDetection:0}),T),E=n("EPR0"),j=n("yHor"),O=n("zGJC"),z=n("u8jZ");M=$localize(_templateObject());var P,D,A,I=["heading",$localize(_templateObject2())],B=["heading",$localize(_templateObject3())];function L(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"p"),d["\u0275\u0275i18n"](1,M),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](2,"tui-doc-example",2),d["\u0275\u0275i18nAttributes"](3,I),d["\u0275\u0275element"](4,"tui-color-picker-example-1"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](5,"tui-doc-example",3),d["\u0275\u0275i18nAttributes"](6,B),d["\u0275\u0275element"](7,"tui-color-picker-example-2"),d["\u0275\u0275elementEnd"]()),2&e){var n=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("content",n.example1),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("content",n.example2)}}function Z(e,t){1&e&&d["\u0275\u0275i18n"](0,P)}function N(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"tui-doc-demo"),d["\u0275\u0275element"](1,"tui-color-picker"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](2,"tui-doc-documentation"),d["\u0275\u0275template"](3,Z,1,0,"ng-template",4),d["\u0275\u0275elementEnd"]())}function R(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"ol",5),d["\u0275\u0275elementStart"](1,"li"),d["\u0275\u0275elementStart"](2,"p"),d["\u0275\u0275i18nStart"](3,D),d["\u0275\u0275element"](4,"code"),d["\u0275\u0275i18nEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](5,"tui-doc-code",6),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](6,"li"),d["\u0275\u0275elementStart"](7,"p"),d["\u0275\u0275i18n"](8,A),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](9,"tui-doc-code",7),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e){var n=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](5),d["\u0275\u0275property"]("code",n.exampleImportModule),d["\u0275\u0275advance"](4),d["\u0275\u0275property"]("code",n.exampleInsertTemplate)}}P=$localize(_templateObject4()),D=$localize(_templateObject5(),"\ufffd#4\ufffd","\ufffd/#4\ufffd"),A=$localize(_templateObject6());var H,$,G=(($=function e(){_classCallCheck(this,e),this.exampleImportModule="import {TuiColorPickerModule} from '@taiga-ui/addon-editor';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        TuiColorPickerModule,\n    ],\n...\n",this.exampleInsertTemplate='<tui-color-picker [(color)]="color"></tui-color-picker>\n',this.example1={TypeScript:"import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {defaultEditorColors} from '@taiga-ui/addon-editor';\n\n@Component({\n    selector: 'tui-color-picker-example-1',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiColorPickerExample1 {\n    color = '#ffdd2d';\n\n    readonly palette = defaultEditorColors;\n}\n",HTML:'<tui-input-color class="b-form" [colors]="palette" [(ngModel)]="color">\n    Background color\n</tui-input-color>\n<tui-input-color\n    tuiTextfieldSize="m"\n    class="b-form tui-space_vertical-2"\n    [colors]="palette"\n    [(ngModel)]="color"\n>\n    Background color\n</tui-input-color>\n<tui-input-color\n    tuiTextfieldSize="s"\n    class="b-form"\n    [colors]="palette"\n    [(ngModel)]="color"\n>\n    Background color\n</tui-input-color>\n'},this.example2={TypeScript:"import {Component, Inject} from '@angular/core';\nimport {DomSanitizer, SafeStyle} from '@angular/platform-browser';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-color-picker-example-2',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiColorPickerExample2 {\n    color = '#ffdd2d';\n\n    constructor(@Inject(DomSanitizer) private readonly sanitizer: DomSanitizer) {}\n\n    get background(): SafeStyle {\n        return this.sanitizer.bypassSecurityTrustStyle(this.color);\n    }\n}\n",HTML:'<tui-hosted-dropdown\n    tuiDropdownAlign="left"\n    [content]="picker"\n    [tuiDropdownMaxHeight]="999"\n>\n    <button\n        tuiButton\n        type="button"\n        appearance=""\n        automation-id="color-picker__button"\n        [style.background]="background"\n        [style.color]="background"\n    >\n        Color me Kubrick\n    </button>\n</tui-hosted-dropdown>\n<ng-template #picker let-activeZone>\n    <tui-color-selector\n        [tuiActiveZoneParent]="activeZone"\n        [(color)]="color"\n    ></tui-color-selector>\n</ng-template>\n',LESS:":host {\n    /* stylelint-disable */\n    ::ng-deep tui-wrapper {\n        filter: invert(1);\n    }\n    /* stylelint-enable */\n}\n"}}).\u0275fac=function(e){return new(e||$)},$.\u0275cmp=d["\u0275\u0275defineComponent"]({type:$,selectors:[["example-tui-color-picker"]],decls:4,vars:0,consts:[["header","ColorPicker","package","ADDON-editor","type","components"],["pageTab",""],["id","input",3,"content",6,"heading"],["id","dropdown",3,"content",6,"heading"],["documentationPropertyName","color","documentationPropertyMode","input-output","documentationPropertyType","[number, number, number, number]"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"tui-doc-page",0),d["\u0275\u0275template"](1,L,8,2,"ng-template",1),d["\u0275\u0275template"](2,N,4,0,"ng-template",1),d["\u0275\u0275template"](3,R,10,2,"ng-template"),d["\u0275\u0275elementEnd"]())},directives:[m.a,s.a,f.a,h,w,E.a,j.a,O.a,z.a],encapsulation:2,changeDetection:0}),$),U=((H=function e(){_classCallCheck(this,e)}).\u0275mod=d["\u0275\u0275defineNgModule"]({type:H}),H.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(e){return new(e||H)},imports:[[r.c,p.TuiButtonModule,p.TuiHostedDropdownModule,c.d,u.TuiActiveZoneModule,p.TuiDropdownControllerModule,c.i,p.TuiTextfieldControllerModule,i.h,a.f.forChild(Object(i.o)(G)),l.FormsModule]]}),H)}}]);