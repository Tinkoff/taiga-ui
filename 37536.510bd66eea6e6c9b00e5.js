"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[37536],{37536:(ie,d,o)=>{o.r(d),o.d(d,{ExampleTuiRangeModule:()=>le});var _=o(12057),u=o(24751),A=o(33982),C=o(29851),p=o(76040),T=o(48611),e=o(74788),h=o(88331),x=o(37159),$=o(57068),c=o(48740),F=o(87231);let y=(()=>{class n{constructor(){this.control=new u.NI([4,6])}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["tui-range-example-1"]],decls:1,vars:3,consts:[[3,"formControl","max","step"]],template:function(t,a){1&t&&e._UZ(0,"tui-range",0),2&t&&e.Q6J("formControl",a.control)("max",10)("step",1)},directives:[c.U,F.H,u.JJ,u.oH],encapsulation:2,changeDetection:0}),n})();var G=o(70329);let Z=(()=>{class n{constructor(){this.smallRangeValue=[0,40],this.bigRangeControl=new u.NI([40,60])}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["tui-range-example-2"]],decls:20,vars:10,consts:[[1,"island"],[1,"tui-island__title"],["id","s-size-range","size","s",1,"range",3,"max","ngModel","ngModelChange"],[1,"tui-island__paragraph"],["for","s-size-range"],["id","m-size-range","size","m",1,"range",3,"formControl","max"],["for","m-size-range"]],template:function(t,a){1&t&&(e.TgZ(0,"tui-island",0),e.TgZ(1,"h3",1),e._uU(2,"S-size"),e.qZA(),e.TgZ(3,"tui-range",2),e.NdJ("ngModelChange",function(i){return a.smallRangeValue=i}),e.qZA(),e.TgZ(4,"p",3),e._uU(5," Control value: "),e.TgZ(6,"output",4),e.TgZ(7,"code"),e._uU(8),e.ALo(9,"json"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(10,"tui-island",0),e.TgZ(11,"h3",1),e._uU(12,"M-size"),e.qZA(),e._UZ(13,"tui-range",5),e.TgZ(14,"p",3),e._uU(15," Control value: "),e.TgZ(16,"output",6),e.TgZ(17,"code"),e._uU(18),e.ALo(19,"json"),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(3),e.Q6J("max",100)("ngModel",a.smallRangeValue),e.xp6(5),e.Oqu(e.lcZ(9,6,a.smallRangeValue)),e.xp6(5),e.Q6J("formControl",a.bigRangeControl)("max",100),e.xp6(5),e.Oqu(e.lcZ(19,8,a.bigRangeControl.value)))},directives:[G.h,c.U,F.H,u.JJ,u.On,u.oH],pipes:[_.Ts],styles:["[_nghost-%COMP%]{display:flex;justify-content:space-between;flex-wrap:wrap;grid-row-gap:1rem;row-gap:1rem}.island[_ngcontent-%COMP%]{box-sizing:border-box;width:49%}@media screen and (max-width: 47.9625em){.island[_ngcontent-%COMP%]{width:100%}}.range[_ngcontent-%COMP%]{margin:2rem 0}"],changeDetection:0}),n})();var L=o(79121),U=o(34880);function v(n,l){if(1&n&&(e.ynx(0),e._uU(1),e.ALo(2,"i18nPlural"),e.BQk()),2&n){const t=e.oxw().$implicit,a=e.oxw();e.xp6(1),e.hij(" ",e.xi3(2,1,t,a.pluralMap)," ")}}function J(n,l){if(1&n&&(e.TgZ(0,"div"),e.YNc(1,v,3,4,"ng-container",6),e.qZA()),2&n){const t=l.$implicit;e.oxw();const a=e.MAs(4);e.xp6(1),e.Q6J("ngIf",750!==t)("ngIfElse",a)}}function b(n,l){1&n&&(e._UZ(0,"tui-svg",7),e.TgZ(1,"div"),e._uU(2,"3/4"),e.qZA())}let V=(()=>{class n{constructor(){this.min=0,this.max=1e3,this.step=250,this.segments=4,this.labels=[...new Array(this.segments+1).keys()].map(t=>this.min+this.step*t),this.value=[0,250],this.pluralMap={"=0":"0","=1":"# item","=1000":"MAX",other:"# items"}}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["tui-range-example-3"]],decls:11,vars:9,consts:[["id","range-with-segments","size","m",1,"range",3,"min","max","step","segments","ngModel","ngModelChange"],[1,"ticks-labels"],[4,"ngFor","ngForOf"],["labelWithIcon",""],[1,"tui-space_top-12","tui-space_bottom-0"],["for","range-with-segments"],[4,"ngIf","ngIfElse"],["src","tuiIconArrowUp"]],template:function(t,a){1&t&&(e.TgZ(0,"tui-range",0),e.NdJ("ngModelChange",function(i){return a.value=i}),e.qZA(),e.TgZ(1,"div",1),e.YNc(2,J,2,2,"div",2),e.YNc(3,b,3,0,"ng-template",null,3,e.W1O),e.qZA(),e.TgZ(5,"p",4),e._uU(6," Control value: "),e.TgZ(7,"output",5),e.TgZ(8,"code"),e._uU(9),e.ALo(10,"json"),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.Q6J("min",a.min)("max",a.max)("step",a.step)("segments",a.segments)("ngModel",a.value),e.xp6(2),e.Q6J("ngForOf",a.labels),e.xp6(7),e.Oqu(e.lcZ(10,7,a.value)))},directives:[c.U,F.H,u.JJ,u.On,_.sg,_.O5,U.P],pipes:[_.Ts,_.Gx],styles:['.range[_ngcontent-%COMP%]{z-index:1}.range[_ngcontent-%COMP%]:after{content:"";position:absolute;top:-.5rem;bottom:-1.5rem;width:100%}.ticks-labels[_ngcontent-%COMP%]{display:flex;margin:0 .5rem;font:var(--tui-font-text-s)}.ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{position:relative;flex:2;text-align:center}.ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{left:-.5rem;flex:1;text-align:left}.ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child{right:-.5rem;flex:1;text-align:right}tui-input-slider[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%]{margin-left:calc(var(--tui-radius-m) / 2 + .5rem)}tui-input-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%], tui-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%]{margin-left:1rem;margin-right:1rem}tui-input-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child, tui-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{left:-1rem}tui-input-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child, tui-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child{right:-1rem}'],changeDetection:0}),n})();function z(n,l){if(1&n&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&n){const t=l.$implicit;e.xp6(1),e.Oqu(t)}}let I=(()=>{class n{constructor(){this.ticksLabels=["0","10K","100K","500k","1000K"],this.segments=this.ticksLabels.length-1,this.stepPercentage=100/(2*this.segments),this.value=[0,1e5],this.keySteps=[[0,0],[25,1e4],[50,1e5],[75,5e5],[100,1e6]]}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["tui-range-example-4"]],decls:9,vars:8,consts:[["id","range-with-key-steps","size","m",1,"range",3,"step","keySteps","segments","ngModel","ngModelChange"],[1,"ticks-labels"],[4,"ngFor","ngForOf"],[1,"tui-space_top-12","tui-space_bottom-0"],["for","range-with-key-steps"]],template:function(t,a){1&t&&(e.TgZ(0,"tui-range",0),e.NdJ("ngModelChange",function(i){return a.value=i}),e.qZA(),e.TgZ(1,"div",1),e.YNc(2,z,2,1,"span",2),e.qZA(),e.TgZ(3,"p",3),e._uU(4," Control value: "),e.TgZ(5,"output",4),e.TgZ(6,"code"),e._uU(7),e.ALo(8,"json"),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.Q6J("step",a.stepPercentage)("keySteps",a.keySteps)("segments",a.segments)("ngModel",a.value),e.xp6(2),e.Q6J("ngForOf",a.ticksLabels),e.xp6(5),e.Oqu(e.lcZ(8,6,a.value)))},directives:[c.U,F.H,u.JJ,u.On,_.sg],pipes:[_.Ts],styles:['.range[_ngcontent-%COMP%]{z-index:1}.range[_ngcontent-%COMP%]:after{content:"";position:absolute;top:-.5rem;bottom:-1.5rem;width:100%}.ticks-labels[_ngcontent-%COMP%]{display:flex;margin:0 .5rem;font:var(--tui-font-text-s)}.ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{position:relative;flex:2;text-align:center}.ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{left:-.5rem;flex:1;text-align:left}.ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child{right:-.5rem;flex:1;text-align:right}tui-input-slider[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%]{margin-left:calc(var(--tui-radius-m) / 2 + .5rem)}tui-input-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%], tui-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%]{margin-left:1rem;margin-right:1rem}tui-input-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child, tui-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{left:-1rem}tui-input-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child, tui-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child{right:-1rem}'],changeDetection:0}),n})();var H=o(31823),X=o(54476),Q=o(17023),Y=o(76349);function W(n,l){if(1&n&&(e.TgZ(0,"p"),e.SDv(1,2),e.qZA(),e.TgZ(2,"tui-doc-example",3),e._UZ(3,"tui-range-example-1"),e.qZA(),e.TgZ(4,"tui-doc-example",4),e._UZ(5,"tui-range-example-2"),e.qZA(),e.TgZ(6,"tui-doc-example",5),e.TgZ(7,"tui-notification",6),e.TgZ(8,"p",7),e.tHW(9,8),e._UZ(10,"code"),e.N_p(),e.qZA(),e.TgZ(11,"p"),e.tHW(12,9),e._UZ(13,"code"),e._UZ(14,"code"),e.N_p(),e.qZA(),e.qZA(),e._UZ(15,"tui-range-example-3"),e.qZA(),e.TgZ(16,"tui-doc-example",10),e._UZ(17,"tui-range-example-4"),e.qZA()),2&n){const t=e.oxw();e.xp6(2),e.Q6J("content",t.example1),e.xp6(2),e.Q6J("content",t.example2),e.xp6(2),e.Q6J("content",t.example3),e.xp6(10),e.Q6J("content",t.example4)}}function j(n,l){if(1&n&&e._UZ(0,"tui-range",19),2&n){const t=e.oxw(2);e.Q6J("formControl",t.control)("min",t.min)("max",t.max)("step",t.step)("segments",t.segments)("keySteps",t.keySteps)("size",t.size)}}function K(n,l){1&n&&(e.tHW(0,20),e._UZ(1,"code"),e.N_p())}function B(n,l){1&n&&(e.tHW(0,21),e.TgZ(1,"p"),e._UZ(2,"code"),e.qZA(),e.N_p())}function k(n,l){1&n&&(e.tHW(0,22),e.TgZ(1,"p"),e._UZ(2,"code"),e.qZA(),e.N_p())}function q(n,l){1&n&&(e.tHW(0,23),e.TgZ(1,"p"),e._UZ(2,"code"),e.qZA(),e.N_p())}function w(n,l){1&n&&(e.tHW(0,24),e.TgZ(1,"p"),e._UZ(2,"code"),e.qZA(),e.N_p())}function ee(n,l){1&n&&(e.tHW(0,25),e.TgZ(1,"p"),e._UZ(2,"code"),e.qZA(),e.N_p())}function te(n,l){1&n&&(e.tHW(0,26),e.TgZ(1,"p"),e._UZ(2,"code"),e.qZA(),e.N_p())}function ne(n,l){if(1&n){const t=e.EpF();e.TgZ(0,"tui-doc-demo",11),e.YNc(1,j,1,7,"ng-template"),e.qZA(),e.TgZ(2,"tui-doc-documentation"),e.YNc(3,K,2,0,"ng-template",12),e.NdJ("documentationPropertyValueChange",function(s){return e.CHM(t),e.oxw().disabled=s}),e.YNc(4,B,3,0,"ng-template",13),e.NdJ("documentationPropertyValueChange",function(s){return e.CHM(t),e.oxw().min=s}),e.YNc(5,k,3,0,"ng-template",14),e.NdJ("documentationPropertyValueChange",function(s){return e.CHM(t),e.oxw().max=s}),e.YNc(6,q,3,0,"ng-template",15),e.NdJ("documentationPropertyValueChange",function(s){return e.CHM(t),e.oxw().step=s}),e.YNc(7,w,3,0,"ng-template",16),e.NdJ("documentationPropertyValueChange",function(s){return e.CHM(t),e.oxw().size=s}),e.YNc(8,ee,3,0,"ng-template",17),e.NdJ("documentationPropertyValueChange",function(s){return e.CHM(t),e.oxw().segments=s}),e.YNc(9,te,3,0,"ng-template",18),e.NdJ("documentationPropertyValueChange",function(s){return e.CHM(t),e.oxw().keySteps=s}),e.qZA()}if(2&n){const t=e.oxw();e.Q6J("control",t.control),e.xp6(3),e.Q6J("documentationPropertyValue",t.disabled),e.xp6(1),e.Q6J("documentationPropertyValue",t.min),e.xp6(1),e.Q6J("documentationPropertyValue",t.max),e.xp6(1),e.Q6J("documentationPropertyValue",t.step),e.xp6(1),e.Q6J("documentationPropertyValues",t.sizeVariants)("documentationPropertyValue",t.size),e.xp6(1),e.Q6J("documentationPropertyValue",t.segments),e.xp6(1),e.Q6J("documentationPropertyValues",t.keyStepsVariants)("documentationPropertyValue",t.keySteps)}}function oe(n,l){if(1&n&&(e.TgZ(0,"ol",27),e.TgZ(1,"li"),e._uU(2," Import an Angular module for forms and "),e.TgZ(3,"code"),e._uU(4,"TuiRangeModule"),e.qZA(),e._uU(5," in the same module where you want to use our component: "),e._UZ(6,"tui-doc-code",28),e.qZA(),e.TgZ(7,"li"),e.TgZ(8,"p"),e.tHW(9,29),e._UZ(10,"code"),e._UZ(11,"code"),e.N_p(),e.qZA(),e._UZ(12,"tui-doc-code",30),e.qZA(),e.TgZ(13,"li"),e.TgZ(14,"p"),e.SDv(15,31),e.qZA(),e._UZ(16,"tui-doc-code",32),e.qZA(),e.qZA()),2&n){const t=e.oxw();e.xp6(6),e.Q6J("code",t.exampleModule),e.xp6(6),e.Q6J("code",t.exampleForm),e.xp6(4),e.Q6J("code",t.exampleHtml)}}let ae=(()=>{class n{constructor(){this.exampleModule=o.e(92677).then(o.t.bind(o,92677,17)),this.exampleHtml=o.e(38951).then(o.t.bind(o,38951,17)),this.exampleForm=o.e(92136).then(o.t.bind(o,92136,17)),this.example1={HTML:o.e(45417).then(o.t.bind(o,45417,17)),TypeScript:o.e(76697).then(o.t.bind(o,76697,17))},this.example2={HTML:o.e(25090).then(o.t.bind(o,25090,17)),TypeScript:o.e(34100).then(o.t.bind(o,34100,17)),LESS:o.e(96585).then(o.t.bind(o,96585,17))},this.example3={HTML:o.e(82509).then(o.t.bind(o,82509,17)),LESS:o.e(91770).then(o.t.bind(o,91770,17)),TypeScript:o.e(81679).then(o.t.bind(o,81679,17))},this.example4={HTML:o.e(85407).then(o.t.bind(o,85407,17)),TypeScript:o.e(7182).then(o.t.bind(o,7182,17)),LESS:o.e(67607).then(o.t.bind(o,67607,17))},this.control=new u.NI([0,0]),this.sizeVariants=["s","m"],this.size=this.sizeVariants[1],this.min=0,this.max=100,this.step=1,this.segments=1,this.keyStepsVariants=[[[0,0],[50,1e3],[100,1e4]]],this.keySteps=null}get disabled(){return this.control.disabled}set disabled(t){t?this.control.disable():this.control.enable()}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["example-range"]],decls:4,vars:0,consts:function(){let l,t,a,s,i,r,E,O,M,N,P,S,R,D,m,f;return l=$localize`:␟39507a5d0ef5f798ed73885e520e5ac975a9e93f␟2601219398064138169:Component allows to choose a part of a range`,t=$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`,a=$localize`:␟287516b9b4b5fac08bbffe1ebbaa2575b8ef50d8␟2165905371258601036:Sizes`,s=$localize`:␟da3ee626899400b20e2eec11b3ddadea8a3ddcc5␟7433618922144942348:Visual segments + labels for ticks`,i=$localize`:␟b71cff54548c311b9382985ce173ddbd05b1455a␟7222770680801212686: Use mixin ${"\ufffd#10\ufffd"}:START_TAG_CODE:tui-slider-ticks-labels${"\ufffd/#10\ufffd"}:CLOSE_TAG_CODE: to arrange ticks' labels (it places them strictly below ticks). `,r=$localize`:␟b43e37a55c51eed01f3c7b31c7fb8c20e9ea09ce␟7490709384902699339: The mixin accepts only a single argument – size of the slider ( ${"[\ufffd#13\ufffd|\ufffd#14\ufffd]"}:START_TAG_CODE:m${"[\ufffd/#13\ufffd|\ufffd/#14\ufffd]"}:CLOSE_TAG_CODE: or ${"[\ufffd#13\ufffd|\ufffd#14\ufffd]"}:START_TAG_CODE:s${"[\ufffd/#13\ufffd|\ufffd/#14\ufffd]"}:CLOSE_TAG_CODE: ). `,r=e.Zx4(r),E=$localize`:␟1c2f048f4281e4ee3db216fc44e19c2c36fb4478␟8285530445387044058:KeySteps`,O=$localize`:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\ufffd#1\ufffd"}:START_TAG_CODE:formControl.disable()${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: ) `,M=$localize`:␟b8f13e24037b8e37136220f2fcfa67de66368405␟5635388352294250683: The lowest value in the range of permitted values. ${"\ufffd#1\ufffd"}:START_PARAGRAPH: The default is ${"\ufffd#2\ufffd"}:START_TAG_CODE:0${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE: . ${"\ufffd/#1\ufffd"}:CLOSE_PARAGRAPH:`,N=$localize`:␟bac956ac180d4051388e367a22fb96a00f688ca3␟3066049154007365132: The greatest value in the range of permitted values. ${"\ufffd#1\ufffd"}:START_PARAGRAPH: The default is ${"\ufffd#2\ufffd"}:START_TAG_CODE:100${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE: . ${"\ufffd/#1\ufffd"}:CLOSE_PARAGRAPH:`,P=$localize`:␟519baa2ec87d2212fe4db94e72d31abddb37bed2␟7112676481597050736: A number that specifies the granularity that the value must adhere. ${"\ufffd#1\ufffd"}:START_PARAGRAPH: The default is ${"\ufffd#2\ufffd"}:START_TAG_CODE:1${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE: . ${"\ufffd/#1\ufffd"}:CLOSE_PARAGRAPH:`,S=$localize`:␟3022be8ed39aab591dcea6f66fe5d8e1fc16b760␟7523554682254599073: Size ${"\ufffd#1\ufffd"}:START_PARAGRAPH: The default is ${"\ufffd#2\ufffd"}:START_TAG_CODE:m${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE: . ${"\ufffd/#1\ufffd"}:CLOSE_PARAGRAPH:`,R=$localize`:␟e0d12b22b6fb62f9d55529a92d17732756812f37␟5983131530842327313: A number of visual segments. ${"\ufffd#1\ufffd"}:START_PARAGRAPH: The default is ${"\ufffd#2\ufffd"}:START_TAG_CODE:1${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE: (no ticks). ${"\ufffd/#1\ufffd"}:CLOSE_PARAGRAPH:`,D=$localize`:␟7eea5e25c7c779de0c243e63c903a01c765cee78␟4663723342255442280: Anchor points of non-uniform format between value and position. ${"\ufffd#1\ufffd"}:START_PARAGRAPH: The default is ${"\ufffd#2\ufffd"}:START_TAG_CODE:null${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE: . ${"\ufffd/#1\ufffd"}:CLOSE_PARAGRAPH:`,m=$localize`:␟456424fe8e0d32d35e8189a73951290607573253␟6039324497180220606: Declare a form ( ${"[\ufffd#10\ufffd|\ufffd#11\ufffd]"}:START_TAG_CODE:FormGroup${"[\ufffd/#10\ufffd|\ufffd/#11\ufffd]"}:CLOSE_TAG_CODE: ) or a control ( ${"[\ufffd#10\ufffd|\ufffd#11\ufffd]"}:START_TAG_CODE:FormControl${"[\ufffd/#10\ufffd|\ufffd/#11\ufffd]"}:CLOSE_TAG_CODE: ) in your component: `,m=e.Zx4(m),f=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`,[["header","Range","package","KIT","type","components"],["pageTab",""],l,["id","base","heading",t,3,"content"],["id","sizes","heading",a,3,"content"],["id","segments","heading",s,3,"content"],[1,"tui-space_bottom-8"],[1,"tui-space_top-0"],i,r,["id","key-steps","heading",E,3,"content"],[3,"control"],["documentationPropertyName","","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","min","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","max","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","step","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","size","documentationPropertyMode","input","documentationPropertyType","TuiSizeS",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","segments","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","keySteps","documentationPropertyMode","input","documentationPropertyType","TuiKeySteps | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[3,"formControl","min","max","step","segments","keySteps","size"],O,M,N,P,S,R,D,[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],m,["filename","myComponent.component.ts",3,"code"],f,["filename","myComponent.template.html",3,"code"]]},template:function(t,a){1&t&&(e.TgZ(0,"tui-doc-page",0),e.YNc(1,W,18,4,"ng-template",1),e.YNc(2,ne,10,10,"ng-template",1),e.YNc(3,oe,17,3,"ng-template",1),e.qZA())},directives:[h.q,x.n,$.f,y,Z,L.L,V,I,H.F,X.z,Q.B,c.U,F.H,u.JJ,u.oH,Y.c],encapsulation:2,changeDetection:0}),n})(),le=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[T.TuiRadioListModule,T.TuiRangeModule,_.ez,u.u5,u.UX,p.TuiLinkModule,C.fV,T.TuiIslandModule,p.TuiNotificationModule,p.TuiSvgModule,A.Bz.forChild((0,C.Ve)(ae))]]}),n})()}}]);