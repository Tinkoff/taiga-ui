"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[48339],{48339:(Ne,E,o)=>{o.r(E),o.d(E,{ExampleTuiInputCountModule:()=>ce});var A=o(12057),u=o(24751),m=o(33982),r=o(29851),C=o(76040),S=o(48611),b=o(75695),e=o(74788),h=o(82880),J=o(98204),Z=o(88331),X=o(37159),G=o(66596),v=o(57068),V=o(79121),O=o(88135),d=o(65009),s=o(10383),z=o(91030),c=o(68874);let Q=(()=>{class n{constructor(){this.testForm=new u.cw({testValue1:new u.NI(10,u.kI.required),testValue2:new u.NI(10,u.kI.required),testValue3:new u.NI(-10,u.kI.required)})}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["tui-input-count-example-1"]],decls:9,vars:8,consts:function(){let _,t,i;return _=$localize`:␟b159ec7c42ae077a8407364cc726a54b1adb6b12␟4517713429238727398:Step is 1 by default`,t=$localize`:␟c81f9040e56ff2939bfcc8f7303ea190fc62a518␟2290251155545250605:Step is 100`,i=$localize`:␟b4300d745195687ae85fb9b2cbcbdb97af131830␟2074374908429047288:Also works with negative values`,[[1,"b-form",3,"formGroup"],["tuiLabel",_],["formControlName","testValue1",3,"min","max"],["tuiTextfield","","placeholder","1.. 2.. 3.."],["tuiLabel",t,1,"tui-space_top-4"],["formControlName","testValue2",3,"tuiTextfieldLabelOutside","step"],["tuiLabel",i,1,"tui-space_top-4"],["formControlName","testValue3",3,"tuiTextfieldLabelOutside","min","max"]]},template:function(t,i){1&t&&(e.TgZ(0,"form",0),e.TgZ(1,"label",1),e.TgZ(2,"tui-input-count",2),e._uU(3," Count something "),e._UZ(4,"input",3),e.qZA(),e.qZA(),e.TgZ(5,"label",4),e._UZ(6,"tui-input-count",5),e.qZA(),e.TgZ(7,"label",6),e._UZ(8,"tui-input-count",7),e.qZA(),e.qZA()),2&t&&(e.Q6J("formGroup",i.testForm),e.xp6(2),e.Q6J("min",1)("max",200),e.xp6(4),e.Q6J("tuiTextfieldLabelOutside",!0)("step",100),e.xp6(2),e.Q6J("tuiTextfieldLabelOutside",!0)("min",-100)("max",100))},directives:[u._Y,u.JL,u.sg,O.A,d.E,s.a,u.JJ,u.u,z.M,c.x],encapsulation:2,changeDetection:0}),n})();var p=o(10200);let H=(()=>{class n{constructor(){this.testForm=new u.cw({testValue1:new u.NI(10,u.kI.required),testValue2:new u.NI(10,u.kI.required)})}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["tui-input-count-example-2"]],decls:5,vars:6,consts:function(){let _,t;return _=$localize`:␟b159ec7c42ae077a8407364cc726a54b1adb6b12␟4517713429238727398:Step is 1 by default`,t=$localize`:␟c81f9040e56ff2939bfcc8f7303ea190fc62a518␟2290251155545250605:Step is 100`,[[1,"b-form",3,"formGroup"],["tuiLabel",_],["formControlName","testValue1","tuiTextfieldSize","m",3,"max","tuiTextfieldLabelOutside"],["tuiLabel",t,1,"tui-space_top-4"],["formControlName","testValue2","tuiTextfieldSize","m",3,"step","max","tuiTextfieldLabelOutside"]]},template:function(t,i){1&t&&(e.TgZ(0,"form",0),e.TgZ(1,"label",1),e._UZ(2,"tui-input-count",2),e.qZA(),e.TgZ(3,"label",3),e._UZ(4,"tui-input-count",4),e.qZA(),e.qZA()),2&t&&(e.Q6J("formGroup",i.testForm),e.xp6(2),e.Q6J("max",999999)("tuiTextfieldLabelOutside",!0),e.xp6(2),e.Q6J("step",100)("max",999999)("tuiTextfieldLabelOutside",!0))},directives:[u._Y,u.JL,u.sg,O.A,d.E,s.a,u.JJ,u.u,p.s,c.x],encapsulation:2,changeDetection:0}),n})(),B=(()=>{class n{constructor(){this.testForm=new u.cw({testValue1:new u.NI(10,u.kI.required),testValue2:new u.NI(10,u.kI.required)})}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["tui-input-count-example-3"]],features:[e._Bn([(0,S.tuiInputCountOptionsProvider)({icons:{up:"tuiIconChevronUp",down:"tuiIconChevronDown"},appearance:"secondary",step:10,min:10,max:100})])],decls:5,vars:3,consts:function(){let _,t;return _=$localize`:␟ca426ccdbb6cc86ab33b1135e42c32e2786d4700␟5758694726409722369:With custom options`,t=$localize`:␟bf0cf1e190f62dac6e22474c00ebd6f99d2889b0␟2713636921764569690:With custom options and medium size`,[[1,"b-form",3,"formGroup"],["tuiLabel",_],["formControlName","testValue1",3,"tuiTextfieldLabelOutside"],["tuiLabel",t,1,"tui-space_top-4"],["formControlName","testValue2","tuiTextfieldSize","m",3,"tuiTextfieldLabelOutside"]]},template:function(t,i){1&t&&(e.TgZ(0,"form",0),e.TgZ(1,"label",1),e._UZ(2,"tui-input-count",2),e.qZA(),e.TgZ(3,"label",3),e._UZ(4,"tui-input-count",4),e.qZA(),e.qZA()),2&t&&(e.Q6J("formGroup",i.testForm),e.xp6(2),e.Q6J("tuiTextfieldLabelOutside",!0),e.xp6(2),e.Q6J("tuiTextfieldLabelOutside",!0))},directives:[u._Y,u.JL,u.sg,O.A,d.E,s.a,u.JJ,u.u,c.x,p.s],encapsulation:2,changeDetection:0}),n})();var Y=o(31823),W=o(54476),j=o(17023),K=o(54218),w=o(3729),q=o(87205),k=o(76349);function ee(n,_){if(1&n&&(e.TgZ(0,"div",2),e.tHW(1,3),e._UZ(2,"code"),e.N_p(),e.qZA(),e.TgZ(3,"div",2),e.SDv(4,4),e.qZA(),e.TgZ(5,"p"),e.SDv(6,5),e.qZA(),e.TgZ(7,"p"),e.tHW(8,6),e._UZ(9,"a",7),e.N_p(),e.qZA(),e.TgZ(10,"tui-doc-example",8),e.TgZ(11,"tui-notification",9),e._uU(12," If you need to set some attributes or listen to events on native "),e.TgZ(13,"code"),e._uU(14,"input"),e.qZA(),e._uU(15," , you can put it inside with "),e.TgZ(16,"code"),e._uU(17,"Textfield"),e.qZA(),e._uU(18," directive as shown below "),e.qZA(),e._UZ(19,"tui-input-count-example-1"),e.qZA(),e.TgZ(20,"tui-doc-example",10),e._UZ(21,"tui-input-count-example-2"),e.qZA(),e.TgZ(22,"tui-doc-example",11),e._UZ(23,"tui-input-count-example-3"),e.qZA()),2&n){const t=e.oxw();e.xp6(10),e.Q6J("content",t.example1),e.xp6(10),e.Q6J("content",t.example2),e.xp6(2),e.Q6J("content",t.example3)}}function te(n,_){if(1&n&&(e.TgZ(0,"tui-input-count",22),e._uU(1," Number of accounts "),e.qZA()),2&n){const t=e.oxw(2);e.Udp("text-align",t.textAlign),e.Q6J("formControl",t.control)("focusable",t.focusable)("min",t.min)("max",t.max)("hideButtons",t.hideButtons)("step",t.step)("prefix",t.prefix)("postfix",t.postfix)("readOnly",t.readOnly)("tuiTextfieldIconLeft",t.iconLeft)("tuiTextfieldLabelOutside",t.labelOutside)("tuiTextfieldFiller",t.filler)("tuiTextfieldSize",t.size)}}function oe(n,_){1&n&&(e.tHW(0,23),e._UZ(1,"code"),e.N_p())}function ne(n,_){1&n&&e.SDv(0,24)}function _e(n,_){1&n&&e.SDv(0,25)}function ue(n,_){1&n&&(e.tHW(0,26),e._UZ(1,"code"),e.N_p())}function ie(n,_){1&n&&(e.tHW(0,27),e._UZ(1,"code"),e.N_p())}function ae(n,_){1&n&&(e.tHW(0,28),e._UZ(1,"code"),e.N_p())}function Te(n,_){1&n&&e.SDv(0,29)}function le(n,_){1&n&&e.SDv(0,30)}function Ce(n,_){if(1&n){const t=e.EpF();e.TgZ(0,"tui-doc-demo",12),e.YNc(1,te,2,15,"ng-template"),e.qZA(),e.TgZ(2,"tui-doc-documentation"),e.YNc(3,oe,2,0,"ng-template",13),e.NdJ("documentationPropertyValueChange",function(a){return e.CHM(t),e.oxw().disabled=a}),e.YNc(4,ne,1,0,"ng-template",14),e.NdJ("documentationPropertyValueChange",function(a){return e.CHM(t),e.oxw().hideButtons=a}),e.YNc(5,_e,1,0,"ng-template",15),e.NdJ("documentationPropertyValueChange",function(a){return e.CHM(t),e.oxw().min=a}),e.YNc(6,ue,2,0,"ng-template",16),e.NdJ("documentationPropertyValueChange",function(a){return e.CHM(t),e.oxw().max=a}),e.YNc(7,ie,2,0,"ng-template",17),e.NdJ("documentationPropertyValueChange",function(a){return e.CHM(t),e.oxw().prefix=a}),e.YNc(8,ae,2,0,"ng-template",18),e.NdJ("documentationPropertyValueChange",function(a){return e.CHM(t),e.oxw().postfix=a}),e.YNc(9,Te,1,0,"ng-template",19),e.NdJ("documentationPropertyValueChange",function(a){return e.CHM(t),e.oxw().step=a}),e.qZA(),e._UZ(10,"inherited-documentation"),e.TgZ(11,"tui-doc-documentation",20),e.YNc(12,le,1,0,"ng-template",21),e.NdJ("documentationPropertyValueChange",function(a){return e.CHM(t),e.oxw().textAlign=a}),e.qZA()}if(2&n){const t=e.oxw();e.Q6J("control",t.control),e.xp6(3),e.Q6J("documentationPropertyValue",t.disabled),e.xp6(1),e.Q6J("documentationPropertyValue",t.hideButtons),e.xp6(1),e.Q6J("documentationPropertyValue",t.min),e.xp6(1),e.Q6J("documentationPropertyValue",t.max),e.xp6(1),e.Q6J("documentationPropertyDeprecated",!0)("documentationPropertyValue",t.prefix),e.xp6(1),e.Q6J("documentationPropertyDeprecated",!0)("documentationPropertyValue",t.postfix),e.xp6(1),e.Q6J("documentationPropertyValues",t.stepValues)("documentationPropertyValue",t.step),e.xp6(3),e.Q6J("documentationPropertyValues",t.textAlignVariants)("documentationPropertyValue",t.textAlign)}}function de(n,_){if(1&n&&(e.TgZ(0,"ol",31),e.TgZ(1,"li"),e.TgZ(2,"p"),e.tHW(3,32),e._UZ(4,"code"),e.N_p(),e.qZA(),e._UZ(5,"tui-doc-code",33),e.qZA(),e.TgZ(6,"li"),e.TgZ(7,"p"),e.tHW(8,34),e._UZ(9,"code"),e._UZ(10,"code"),e.N_p(),e.qZA(),e._UZ(11,"tui-doc-code",35),e.qZA(),e.TgZ(12,"li"),e.TgZ(13,"p"),e.SDv(14,36),e.qZA(),e._UZ(15,"tui-doc-code",37),e.qZA(),e.TgZ(16,"li"),e.TgZ(17,"p"),e.tHW(18,38),e._UZ(19,"code"),e.N_p(),e.qZA(),e._UZ(20,"tui-doc-code",33),e.qZA(),e.qZA()),2&n){const t=e.oxw();e.xp6(5),e.Q6J("code",t.exampleModule),e.xp6(6),e.Q6J("code",t.exampleForm),e.xp6(4),e.Q6J("code",t.exampleHtml),e.xp6(5),e.Q6J("code",t.exampleOptions)}}let se=(()=>{class n extends h.b{constructor(){super(...arguments),this.exampleForm=o.e(45884).then(o.t.bind(o,45884,17)),this.exampleModule=o.e(566).then(o.t.bind(o,566,17)),this.exampleHtml=o.e(14847).then(o.t.bind(o,14847,17)),this.exampleOptions=o.e(45252).then(o.t.bind(o,45252,17)),this.example1={TypeScript:o.e(63227).then(o.t.bind(o,63227,17)),HTML:o.e(84798).then(o.t.bind(o,84798,17))},this.example2={TypeScript:o.e(49084).then(o.t.bind(o,49084,17)),HTML:o.e(14108).then(o.t.bind(o,14108,17))},this.example3={TypeScript:o.e(17486).then(o.t.bind(o,17486,17)),HTML:o.e(6701).then(o.t.bind(o,6701,17))},this.min=0,this.max=999,this.step=1,this.stepValues=[1,2,3,4,5],this.sizeVariants=["m","l"],this.size=this.sizeVariants[1],this.hideButtons=!1,this.control=new u.NI}}return n.\u0275fac=function(){let _;return function(i){return(_||(_=e.n5z(n)))(i||n)}}(),n.\u0275cmp=e.Xpm({type:n,selectors:[["example-tui-input-count"]],features:[e._Bn([{provide:J.x,useExisting:(0,e.Gpc)(()=>n)}]),e.qOj],decls:4,vars:0,consts:function(){let _,t,i,a,T,M,g,f,P,F,U,D,I,x,R,$,N,L,y;return _=$localize`:␟b9669bf4d7cd2041365aecab26edefeae395b627␟7116640048935486801:${"\ufffd#2\ufffd"}:START_TAG_CODE:InputCount${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE: is a good choice to input integer positive numbers under 999 `,t=$localize`:␟93ac744bf41984c8f980cafd646b71db909b71a3␟6434254909743697518: It allows limit value with min and max and handles such cases `,i=$localize`:␟756f0b4a649d274f59cdcd92ecebd22121a58de5␟3317726340623526124:It does not indicate validation status`,a=$localize`:␟0e557432cc61605fc75bbddcf8b886ac4208be05␟6882510303030671599: Number formatting can be customized by using ${"\ufffd#9\ufffd"}:START_LINK: TUI_NUMBER_FORMAT ${"\ufffd/#9\ufffd"}:CLOSE_LINK:`,T=$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`,M=$localize`:␟0d72ce2c862fae2cccbe564228d17758c058bc20␟7861254305604213764:Size M`,g=$localize`:␟24813b8a3e45f0b57136c18d003027262cfe2d1f␟8432562579042371182:Options`,f=$localize`:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\ufffd#1\ufffd"}:START_TAG_CODE:formControl.disable()${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: ) `,P=$localize`:␟ea14b95b26f0ac7cd0db32a42bd60e8ef5eb7cdc␟4295858242233154356: Hide icon buttons `,F=$localize`:␟41d4dbb03bf5617301e95d4fbce6b0e39ca47f01␟1090761179854672750: Minimum value `,U=$localize`:␟ff319fe89f5215270e87674b1c4bc8696341e90a␟4080008404588596650: Maximum value ( ${"\ufffd#1\ufffd"}:START_TAG_CODE:Infinity${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: by default) `,D=$localize`:␟d55d1388b4efab9ee15f5c14ce1c120f40729dcd␟1879425198292284445: A prefix symbol, like currency. Use ${"\ufffd#1\ufffd"}:START_TAG_CODE:tuiTextfieldPrefix${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: instead `,I=$localize`:␟427cbcb0e2209f5bc22b0a05f196615f10ee3541␟1309337568784566202: Some string after value. Use ${"\ufffd#1\ufffd"}:START_TAG_CODE:tuiTextfieldPostfix${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: instead `,x=$localize`:␟95f52be4795cdd2b39ffd9707f83e9721e0e17e9␟5700630542385259856: Step for buttons `,R=$localize`:␟f53a375d54d7a00804c315043a43ae281c9efcb8␟226068063890007003: Custom align content by text-align `,$=$localize`:␟4033559e8c5b3ecd794da4fd8d5d21edd63b93eb␟5253084050799099966: Import an Angular module for forms and ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiInputCountModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: in the same module where you want to use our component: `,N=$localize`:␟456424fe8e0d32d35e8189a73951290607573253␟6039324497180220606: Declare a form ( ${"[\ufffd#9\ufffd|\ufffd#10\ufffd]"}:START_TAG_CODE:FormGroup${"[\ufffd/#9\ufffd|\ufffd/#10\ufffd]"}:CLOSE_TAG_CODE: ) or a control ( ${"[\ufffd#9\ufffd|\ufffd#10\ufffd]"}:START_TAG_CODE:FormControl${"[\ufffd/#9\ufffd|\ufffd/#10\ufffd]"}:CLOSE_TAG_CODE: ) in your component: `,N=e.Zx4(N),L=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`,y=$localize`:␟5159db99b1a8aa0ecf3deb24f56aaf37ea98f7b0␟6054484045241435137: Optionally use the ${"\ufffd#19\ufffd"}:START_TAG_CODE:TUI_INPUT_COUNT_OPTIONS${"\ufffd/#19\ufffd"}:CLOSE_TAG_CODE: injection token to override the default options for the component. `,[["header","InputCount","package","KIT","type","components"],["pageTab",""],[1,"tui-space_bottom-3"],_,t,i,a,["tuiLink","","routerLink","/utils/tokens","fragment","number-format"],["id","base","heading",T,3,"content"],[1,"tui-space_bottom-4","b-form"],["id","medium-large","heading",M,3,"content"],["id","options","heading",g,3,"content"],[3,"control"],["documentationPropertyName","","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","hideButtons","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","min","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","max","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","prefix","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyDeprecated","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","postfix","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyDeprecated","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","step","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["heading","CSS customization"],["documentationPropertyMode","input","documentationPropertyType","string","documentationPropertyName","style.text-align",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[3,"formControl","focusable","min","max","hideButtons","step","prefix","postfix","readOnly","tuiTextfieldIconLeft","tuiTextfieldLabelOutside","tuiTextfieldFiller","tuiTextfieldSize"],f,P,F,U,D,I,x,R,[1,"b-demo-steps"],$,["filename","myComponent.module.ts",3,"code"],N,["filename","myComponent.component.ts",3,"code"],L,["filename","myComponent.template.html",3,"code"],y]},template:function(t,i){1&t&&(e.TgZ(0,"tui-doc-page",0),e.YNc(1,ee,24,3,"ng-template",1),e.YNc(2,Ce,13,13,"ng-template",1),e.YNc(3,de,21,4,"ng-template",1),e.qZA())},directives:[Z.q,X.n,G.V,m.yS,v.f,V.L,Q,H,B,Y.F,W.z,j.B,K.w,d.E,s.a,u.JJ,u.oH,w.aR,c.x,q.k,p.s,k.c],encapsulation:2,changeDetection:0}),n})(),ce=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[A.ez,u.u5,u.UX,S.TuiInputCountModule,C.TuiLabelModule,C.TuiLinkModule,r.fV,C.TuiTextfieldControllerModule,C.TuiNotificationModule,b.f,m.Bz.forChild((0,r.Ve)(se))]]}),n})()}}]);