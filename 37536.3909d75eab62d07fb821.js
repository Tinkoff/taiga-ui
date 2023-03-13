"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[37536],{37536:(q,d,o)=>{o.r(d),o.d(d,{ExampleTuiRangeModule:()=>B});var g=o(12057),s=o(24751),x=o(33982),T=o(29851),c=o(3497),r=o(18738),e=o(74788),h=o(88331),f=o(37159),C=o(57068),u=o(48740),p=o(87231);let Z=(()=>{class t{constructor(){this.control=new s.NI([4,6])}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["tui-range-example-1"]],decls:1,vars:3,consts:[[3,"formControl","max","step"]],template:function(n,a){1&n&&e._UZ(0,"tui-range",0),2&n&&e.Q6J("formControl",a.control)("max",10)("step",1)},directives:[u.U,p.H,s.JJ,s.oH],encapsulation:2,changeDetection:0}),t})();var P=o(70329);let y=(()=>{class t{constructor(){this.smallRangeValue=[0,40],this.bigRangeControl=new s.NI([40,60])}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["tui-range-example-2"]],decls:20,vars:10,consts:[[1,"island"],[1,"tui-island__title"],["id","s-size-range","size","s",1,"range",3,"max","ngModel","ngModelChange"],[1,"tui-island__paragraph"],["for","s-size-range"],["id","m-size-range","size","m",1,"range",3,"formControl","max"],["for","m-size-range"]],template:function(n,a){1&n&&(e.TgZ(0,"tui-island",0),e.TgZ(1,"h3",1),e._uU(2,"S-size"),e.qZA(),e.TgZ(3,"tui-range",2),e.NdJ("ngModelChange",function(l){return a.smallRangeValue=l}),e.qZA(),e.TgZ(4,"p",3),e._uU(5," Control value: "),e.TgZ(6,"output",4),e.TgZ(7,"code"),e._uU(8),e.ALo(9,"json"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(10,"tui-island",0),e.TgZ(11,"h3",1),e._uU(12,"M-size"),e.qZA(),e._UZ(13,"tui-range",5),e.TgZ(14,"p",3),e._uU(15," Control value: "),e.TgZ(16,"output",6),e.TgZ(17,"code"),e._uU(18),e.ALo(19,"json"),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&n&&(e.xp6(3),e.Q6J("max",100)("ngModel",a.smallRangeValue),e.xp6(5),e.Oqu(e.lcZ(9,6,a.smallRangeValue)),e.xp6(5),e.Q6J("formControl",a.bigRangeControl)("max",100),e.xp6(5),e.Oqu(e.lcZ(19,8,a.bigRangeControl.value)))},directives:[P.h,u.U,p.H,s.JJ,s.On,s.oH],pipes:[g.Ts],styles:["[_nghost-%COMP%]{display:flex;justify-content:space-between;flex-wrap:wrap;grid-row-gap:1rem;row-gap:1rem}.island[_ngcontent-%COMP%]{box-sizing:border-box;width:49%}@media screen and (max-width: 47.9625em){.island[_ngcontent-%COMP%]{width:100%}}.range[_ngcontent-%COMP%]{margin:2rem 0}"],changeDetection:0}),t})();var M=o(79121),U=o(34880);function A(t,i){if(1&t&&(e.ynx(0),e._uU(1),e.ALo(2,"i18nPlural"),e.BQk()),2&t){const n=e.oxw().$implicit,a=e.oxw();e.xp6(1),e.hij(" ",e.xi3(2,1,n,a.pluralMap)," ")}}function O(t,i){if(1&t&&(e.TgZ(0,"div"),e.YNc(1,A,3,4,"ng-container",6),e.qZA()),2&t){const n=i.$implicit;e.oxw();const a=e.MAs(4);e.xp6(1),e.Q6J("ngIf",750!==n)("ngIfElse",a)}}function v(t,i){1&t&&(e._UZ(0,"tui-svg",7),e.TgZ(1,"div"),e._uU(2,"3/4"),e.qZA())}let R=(()=>{class t{constructor(){this.min=0,this.max=1e3,this.step=250,this.segments=4,this.labels=[...new Array(this.segments+1).keys()].map(n=>this.min+this.step*n),this.value=[0,250],this.pluralMap={"=0":"0","=1":"# item","=1000":"MAX",other:"# items"}}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["tui-range-example-3"]],decls:11,vars:9,consts:[["id","range-with-segments","size","m",1,"range",3,"min","max","step","segments","ngModel","ngModelChange"],[1,"ticks-labels"],[4,"ngFor","ngForOf"],["labelWithIcon",""],[1,"tui-space_top-12","tui-space_bottom-0"],["for","range-with-segments"],[4,"ngIf","ngIfElse"],["src","tuiIconArrowUp"]],template:function(n,a){1&n&&(e.TgZ(0,"tui-range",0),e.NdJ("ngModelChange",function(l){return a.value=l}),e.qZA(),e.TgZ(1,"div",1),e.YNc(2,O,2,2,"div",2),e.YNc(3,v,3,0,"ng-template",null,3,e.W1O),e.qZA(),e.TgZ(5,"p",4),e._uU(6," Control value: "),e.TgZ(7,"output",5),e.TgZ(8,"code"),e._uU(9),e.ALo(10,"json"),e.qZA(),e.qZA(),e.qZA()),2&n&&(e.Q6J("min",a.min)("max",a.max)("step",a.step)("segments",a.segments)("ngModel",a.value),e.xp6(2),e.Q6J("ngForOf",a.labels),e.xp6(7),e.Oqu(e.lcZ(10,7,a.value)))},directives:[u.U,p.H,s.JJ,s.On,g.sg,g.O5,U.P],pipes:[g.Ts,g.Gx],styles:['.range[_ngcontent-%COMP%]{z-index:1}.range[_ngcontent-%COMP%]:after{content:"";position:absolute;top:-.5rem;bottom:-1.5rem;width:100%}.ticks-labels[_ngcontent-%COMP%]{display:flex;margin:0 .5rem;font:var(--tui-font-text-s)}.ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{position:relative;flex:2;text-align:center}.ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{left:-.5rem;flex:1;text-align:left}.ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child{right:-.5rem;flex:1;text-align:right}tui-input-slider[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%]{margin-left:calc(var(--tui-radius-m) / 2 + .5rem)}tui-input-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%], tui-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%]{margin-left:1rem;margin-right:1rem}tui-input-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child, tui-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{left:-1rem}tui-input-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child, tui-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child{right:-1rem}'],changeDetection:0}),t})();function E(t,i){if(1&t&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&t){const n=i.$implicit;e.xp6(1),e.Oqu(n)}}let V=(()=>{class t{constructor(){this.ticksLabels=["0","10K","100K","500k","1000K"],this.segments=this.ticksLabels.length-1,this.stepPercentage=100/(2*this.segments),this.value=[0,1e5],this.keySteps=[[0,0],[25,1e4],[50,1e5],[75,5e5],[100,1e6]]}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["tui-range-example-4"]],decls:9,vars:8,consts:[["id","range-with-key-steps","size","m",1,"range",3,"step","keySteps","segments","ngModel","ngModelChange"],[1,"ticks-labels"],[4,"ngFor","ngForOf"],[1,"tui-space_top-12","tui-space_bottom-0"],["for","range-with-key-steps"]],template:function(n,a){1&n&&(e.TgZ(0,"tui-range",0),e.NdJ("ngModelChange",function(l){return a.value=l}),e.qZA(),e.TgZ(1,"div",1),e.YNc(2,E,2,1,"span",2),e.qZA(),e.TgZ(3,"p",3),e._uU(4," Control value: "),e.TgZ(5,"output",4),e.TgZ(6,"code"),e._uU(7),e.ALo(8,"json"),e.qZA(),e.qZA(),e.qZA()),2&n&&(e.Q6J("step",a.stepPercentage)("keySteps",a.keySteps)("segments",a.segments)("ngModel",a.value),e.xp6(2),e.Q6J("ngForOf",a.ticksLabels),e.xp6(5),e.Oqu(e.lcZ(8,6,a.value)))},directives:[u.U,p.H,s.JJ,s.On,g.sg],pipes:[g.Ts],styles:['.range[_ngcontent-%COMP%]{z-index:1}.range[_ngcontent-%COMP%]:after{content:"";position:absolute;top:-.5rem;bottom:-1.5rem;width:100%}.ticks-labels[_ngcontent-%COMP%]{display:flex;margin:0 .5rem;font:var(--tui-font-text-s)}.ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{position:relative;flex:2;text-align:center}.ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{left:-.5rem;flex:1;text-align:left}.ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child{right:-.5rem;flex:1;text-align:right}tui-input-slider[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%]{margin-left:calc(var(--tui-radius-m) / 2 + .5rem)}tui-input-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%], tui-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%]{margin-left:1rem;margin-right:1rem}tui-input-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child, tui-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{left:-1rem}tui-input-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child, tui-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child{right:-1rem}'],changeDetection:0}),t})();var J=o(31823),_=o(54476),N=o(17023),S=o(76349);function z(t,i){if(1&t&&(e.TgZ(0,"p"),e._uU(1,"Component allows to choose a part of a range"),e.qZA(),e.TgZ(2,"tui-doc-example",2),e._UZ(3,"tui-range-example-1"),e.qZA(),e.TgZ(4,"tui-doc-example",3),e._UZ(5,"tui-range-example-2"),e.qZA(),e.TgZ(6,"tui-doc-example",4),e.TgZ(7,"tui-notification",5),e.TgZ(8,"p",6),e._uU(9," Use mixin "),e.TgZ(10,"code"),e._uU(11,"tui-slider-ticks-labels"),e.qZA(),e._uU(12," to arrange ticks' labels (it places them strictly below ticks). "),e.qZA(),e.TgZ(13,"p"),e._uU(14," The mixin accepts only a single argument \u2013 size of the slider ( "),e.TgZ(15,"code"),e._uU(16,"m"),e.qZA(),e._uU(17," or "),e.TgZ(18,"code"),e._uU(19,"s"),e.qZA(),e._uU(20," ). "),e.qZA(),e.qZA(),e._UZ(21,"tui-range-example-3"),e.qZA(),e.TgZ(22,"tui-doc-example",7),e._UZ(23,"tui-range-example-4"),e.qZA()),2&t){const n=e.oxw();e.xp6(2),e.Q6J("content",n.example1),e.xp6(2),e.Q6J("content",n.example2),e.xp6(2),e.Q6J("content",n.example3),e.xp6(16),e.Q6J("content",n.example4)}}function b(t,i){if(1&t&&e._UZ(0,"tui-range",16),2&t){const n=e.oxw(2);e.Q6J("formControl",n.control)("min",n.min)("max",n.max)("step",n.step)("segments",n.segments)("keySteps",n.keySteps)("size",n.size)}}function Q(t,i){1&t&&(e._uU(0," Disabled state (use "),e.TgZ(1,"code"),e._uU(2,"formControl.disable()"),e.qZA(),e._uU(3," ) "))}function H(t,i){1&t&&(e._uU(0," The lowest value in the range of permitted values. "),e.TgZ(1,"p"),e._uU(2," The default is "),e.TgZ(3,"code"),e._uU(4,"0"),e.qZA(),e._uU(5," . "),e.qZA())}function F(t,i){1&t&&(e._uU(0," The greatest value in the range of permitted values. "),e.TgZ(1,"p"),e._uU(2," The default is "),e.TgZ(3,"code"),e._uU(4,"100"),e.qZA(),e._uU(5," . "),e.qZA())}function L(t,i){1&t&&(e._uU(0," A number that specifies the granularity that the value must adhere. "),e.TgZ(1,"p"),e._uU(2," The default is "),e.TgZ(3,"code"),e._uU(4,"1"),e.qZA(),e._uU(5," . "),e.qZA())}function Y(t,i){1&t&&(e._uU(0," Size "),e.TgZ(1,"p"),e._uU(2," The default is "),e.TgZ(3,"code"),e._uU(4,"m"),e.qZA(),e._uU(5," . "),e.qZA())}function I(t,i){1&t&&(e._uU(0," A number of visual segments. "),e.TgZ(1,"p"),e._uU(2," The default is "),e.TgZ(3,"code"),e._uU(4,"1"),e.qZA(),e._uU(5," (no ticks). "),e.qZA())}function j(t,i){1&t&&(e._uU(0," Anchor points of non-uniform format between value and position. "),e.TgZ(1,"p"),e._uU(2," The default is "),e.TgZ(3,"code"),e._uU(4,"null"),e.qZA(),e._uU(5," . "),e.qZA())}function D(t,i){if(1&t){const n=e.EpF();e.TgZ(0,"tui-doc-demo",8),e.YNc(1,b,1,7,"ng-template"),e.qZA(),e.TgZ(2,"tui-doc-documentation"),e.YNc(3,Q,4,0,"ng-template",9),e.NdJ("documentationPropertyValueChange",function(m){return e.CHM(n),e.oxw().disabled=m}),e.YNc(4,H,6,0,"ng-template",10),e.NdJ("documentationPropertyValueChange",function(m){return e.CHM(n),e.oxw().min=m}),e.YNc(5,F,6,0,"ng-template",11),e.NdJ("documentationPropertyValueChange",function(m){return e.CHM(n),e.oxw().max=m}),e.YNc(6,L,6,0,"ng-template",12),e.NdJ("documentationPropertyValueChange",function(m){return e.CHM(n),e.oxw().step=m}),e.YNc(7,Y,6,0,"ng-template",13),e.NdJ("documentationPropertyValueChange",function(m){return e.CHM(n),e.oxw().size=m}),e.YNc(8,I,6,0,"ng-template",14),e.NdJ("documentationPropertyValueChange",function(m){return e.CHM(n),e.oxw().segments=m}),e.YNc(9,j,6,0,"ng-template",15),e.NdJ("documentationPropertyValueChange",function(m){return e.CHM(n),e.oxw().keySteps=m}),e.qZA()}if(2&t){const n=e.oxw();e.Q6J("control",n.control),e.xp6(3),e.Q6J("documentationPropertyValue",n.disabled),e.xp6(1),e.Q6J("documentationPropertyValue",n.min),e.xp6(1),e.Q6J("documentationPropertyValue",n.max),e.xp6(1),e.Q6J("documentationPropertyValue",n.step),e.xp6(1),e.Q6J("documentationPropertyValues",n.sizeVariants)("documentationPropertyValue",n.size),e.xp6(1),e.Q6J("documentationPropertyValue",n.segments),e.xp6(1),e.Q6J("documentationPropertyValues",n.keyStepsVariants)("documentationPropertyValue",n.keySteps)}}function X(t,i){if(1&t&&(e.TgZ(0,"ol",17),e.TgZ(1,"li"),e._uU(2," Import an Angular module for forms and "),e.TgZ(3,"code"),e._uU(4,"TuiRangeModule"),e.qZA(),e._uU(5," in the same module where you want to use our component: "),e._UZ(6,"tui-doc-code",18),e.qZA(),e.TgZ(7,"li"),e.TgZ(8,"p"),e._uU(9," Declare a form ( "),e.TgZ(10,"code"),e._uU(11,"FormGroup"),e.qZA(),e._uU(12," ) or a control ( "),e.TgZ(13,"code"),e._uU(14,"FormControl"),e.qZA(),e._uU(15," ) in your component: "),e.qZA(),e._UZ(16,"tui-doc-code",19),e.qZA(),e.TgZ(17,"li"),e.TgZ(18,"p"),e._uU(19,"Add to the template:"),e.qZA(),e._UZ(20,"tui-doc-code",20),e.qZA(),e.qZA()),2&t){const n=e.oxw();e.xp6(6),e.Q6J("code",n.exampleModule),e.xp6(10),e.Q6J("code",n.exampleForm),e.xp6(4),e.Q6J("code",n.exampleHtml)}}let K=(()=>{class t{constructor(){this.exampleModule=o.e(92677).then(o.t.bind(o,92677,17)),this.exampleHtml=o.e(38951).then(o.t.bind(o,38951,17)),this.exampleForm=o.e(92136).then(o.t.bind(o,92136,17)),this.example1={HTML:o.e(45417).then(o.t.bind(o,45417,17)),TypeScript:o.e(76697).then(o.t.bind(o,76697,17))},this.example2={HTML:o.e(25090).then(o.t.bind(o,25090,17)),TypeScript:o.e(34100).then(o.t.bind(o,34100,17)),LESS:o.e(96585).then(o.t.bind(o,96585,17))},this.example3={HTML:o.e(82509).then(o.t.bind(o,82509,17)),LESS:o.e(91770).then(o.t.bind(o,91770,17)),TypeScript:o.e(81679).then(o.t.bind(o,81679,17))},this.example4={HTML:o.e(85407).then(o.t.bind(o,85407,17)),TypeScript:o.e(7182).then(o.t.bind(o,7182,17)),LESS:o.e(67607).then(o.t.bind(o,67607,17))},this.control=new s.NI([0,0]),this.sizeVariants=["s","m"],this.size=this.sizeVariants[1],this.min=0,this.max=100,this.step=1,this.segments=1,this.keyStepsVariants=[[[0,0],[50,1e3],[100,1e4]]],this.keySteps=null}get disabled(){return this.control.disabled}set disabled(n){n?this.control.disable():this.control.enable()}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["example-range"]],decls:4,vars:0,consts:[["header","Range","package","KIT","type","components"],["pageTab",""],["id","base","heading","Basic",3,"content"],["id","sizes","heading","Sizes",3,"content"],["id","segments","heading","Visual segments + labels for ticks",3,"content"],[1,"tui-space_bottom-8"],[1,"tui-space_top-0"],["id","key-steps","heading","KeySteps",3,"content"],[3,"control"],["documentationPropertyName","","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","min","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","max","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","step","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","size","documentationPropertyMode","input","documentationPropertyType","TuiSizeS",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","segments","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","keySteps","documentationPropertyMode","input","documentationPropertyType","TuiKeySteps | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[3,"formControl","min","max","step","segments","keySteps","size"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.component.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(n,a){1&n&&(e.TgZ(0,"tui-doc-page",0),e.YNc(1,z,24,4,"ng-template",1),e.YNc(2,D,10,10,"ng-template",1),e.YNc(3,X,21,3,"ng-template",1),e.qZA())},directives:[h.q,f.n,C.f,Z,y,M.L,R,V,J.F,_.z,N.B,u.U,p.H,s.JJ,s.oH,S.c],encapsulation:2,changeDetection:0}),t})(),B=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[r.TuiRadioListModule,r.TuiRangeModule,g.ez,s.u5,s.UX,c.TuiLinkModule,T.fV,r.TuiIslandModule,c.TuiNotificationModule,c.TuiSvgModule,x.Bz.forChild((0,T.Ve)(K))]]}),t})()}}]);