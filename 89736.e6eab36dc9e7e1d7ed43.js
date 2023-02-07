"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[89736],{89736:(w,s,o)=>{o.r(s),o.d(s,{ExampleTuiBadgedContentModule:()=>j});var D=o(12057),T=o(24751),f=o(33982),_=o(29851),S=o(76040),r=o(48611),t=o(74788),x=o(88331),B=o(37159),P=o(57068),u=o(82583),p=o(44124);let h=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["tui-badged-content-example-1"]],decls:14,vars:6,consts:[[1,"row"],["colorTop","var(--tui-error-fill)","size","l",1,"tui-space_right-5",3,"rounded"],["text","a b","size","l",3,"rounded"],["colorBottom","var(--tui-success-fill)","size","l",1,"tui-space_right-5",3,"rounded"],["text","c d","size","l",3,"rounded"],["colorTop","var(--tui-success-fill)","colorBottom","var(--tui-error-fill)","size","l",1,"tui-space_right-5",3,"rounded"],["text","e","size","l",3,"rounded"],[1,"row","tui-space_top-5"],["colorTop","var(--tui-error-fill)","size","l",1,"tui-space_right-5"],["text","a b","size","l"],["colorBottom","var(--tui-success-fill)","size","l",1,"tui-space_right-5"],["text","c d","size","l"],["colorTop","var(--tui-success-fill)","colorBottom","var(--tui-error-fill)","size","l",1,"tui-space_right-5"],["text","e","size","l"]],template:function(n,a){1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"tui-badged-content",1),t._UZ(2,"tui-avatar",2),t.qZA(),t.TgZ(3,"tui-badged-content",3),t._UZ(4,"tui-avatar",4),t.qZA(),t.TgZ(5,"tui-badged-content",5),t._UZ(6,"tui-avatar",6),t.qZA(),t.qZA(),t.TgZ(7,"div",7),t.TgZ(8,"tui-badged-content",8),t._UZ(9,"tui-avatar",9),t.qZA(),t.TgZ(10,"tui-badged-content",10),t._UZ(11,"tui-avatar",11),t.qZA(),t.TgZ(12,"tui-badged-content",12),t._UZ(13,"tui-avatar",13),t.qZA(),t.qZA()),2&n&&(t.xp6(1),t.Q6J("rounded",!0),t.xp6(1),t.Q6J("rounded",!0),t.xp6(1),t.Q6J("rounded",!0),t.xp6(1),t.Q6J("rounded",!0),t.xp6(1),t.Q6J("rounded",!0),t.xp6(1),t.Q6J("rounded",!0))},directives:[u.V,p.J],encapsulation:2,changeDetection:0}),e})();var A=o(77027),y=o(41360),Z=o(76189);function v(e,i){1&e&&(t.TgZ(0,"div",6),t._uU(1,"... and nothing happened"),t.qZA())}let F=(()=>{class e{constructor(){this.value="",this.contentTop=0}get badgeValue(){return this.value.length}get color(){return 50===this.contentTop?"tuiIconCheck":"var(--tui-error-fill)"}get contentBottom(){return""}onClick(){this.contentTop++}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["tui-badged-content-example-2"]],decls:9,vars:6,consts:[["colorTop","var(--tui-support-01)",3,"contentTop"],[1,"b-form",3,"ngModel","ngModelChange"],[1,"tui-space_top-5"],[3,"contentTop","contentBottom","colorTop"],["tuiButton","","type","button","appearance","secondary","size","xl",3,"disabled","click"],["customBadge",""],[1,"template"]],template:function(n,a){if(1&n&&(t.TgZ(0,"tui-badged-content",0),t.TgZ(1,"tui-input",1),t.NdJ("ngModelChange",function(l){return a.value=l}),t._uU(2," Input text "),t.qZA(),t.qZA(),t.TgZ(3,"div",2),t.TgZ(4,"tui-badged-content",3),t.TgZ(5,"button",4),t.NdJ("click",function(){return a.onClick()}),t._uU(6," Let's click 50 times ... "),t.qZA(),t.qZA(),t.YNc(7,v,2,0,"ng-template",null,5,t.W1O),t.qZA()),2&n){const d=t.MAs(8);t.Q6J("contentTop",a.badgeValue),t.xp6(1),t.Q6J("ngModel",a.value),t.xp6(3),t.Q6J("contentTop",a.contentTop)("contentBottom",50===a.contentTop?d:"")("colorTop",a.color),t.xp6(1),t.Q6J("disabled",50===a.contentTop)}},directives:[u.V,A.K,y.w,T.JJ,T.On,Z.v],styles:[".template[_ngcontent-%COMP%]{background:var(--tui-primary);color:var(--tui-primary-text);padding:0 .375rem}"],changeDetection:0}),e})(),R=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["tui-badged-content-example-3"]],decls:14,vars:10,consts:[[1,"row"],["contentTop","tuiIconCheckCircleLarge","colorTop","var(--tui-error-fill)","size","l",1,"tui-space_right-5",3,"rounded"],["text","a b","size","l",3,"rounded"],["colorBottom","var(--tui-success-fill)","size","l",1,"tui-space_right-5",3,"contentBottom","rounded"],["text","c d","size","l",3,"rounded"],["contentBottom","tuiIconSettings","colorTop","var(--tui-success-fill)","colorBottom","var(--tui-error-fill)","size","l",1,"tui-space_right-5",3,"contentTop","rounded"],["text","e","size","l",3,"rounded"],[1,"row","tui-space_top-5"],["colorTop","var(--tui-error-fill)","size","l",1,"tui-space_right-5",3,"contentTop"],["text","a b","size","l"],["contentBottom","tuiIconSettings","colorBottom","var(--tui-success-fill)","size","l",1,"tui-space_right-5"],["text","c d","size","l"],["contentBottom","tuiIconCheckCircleLarge","colorBottom","var(--tui-error-fill)","size","l",1,"tui-space_right-5",3,"contentTop"],["text","e","size","l"]],template:function(n,a){1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"tui-badged-content",1),t._UZ(2,"tui-avatar",2),t.qZA(),t.TgZ(3,"tui-badged-content",3),t._UZ(4,"tui-avatar",4),t.qZA(),t.TgZ(5,"tui-badged-content",5),t._UZ(6,"tui-avatar",6),t.qZA(),t.qZA(),t.TgZ(7,"div",7),t.TgZ(8,"tui-badged-content",8),t._UZ(9,"tui-avatar",9),t.qZA(),t.TgZ(10,"tui-badged-content",10),t._UZ(11,"tui-avatar",11),t.qZA(),t.TgZ(12,"tui-badged-content",12),t._UZ(13,"tui-avatar",13),t.qZA(),t.qZA()),2&n&&(t.xp6(1),t.Q6J("rounded",!0),t.xp6(1),t.Q6J("rounded",!0),t.xp6(1),t.Q6J("contentBottom",64)("rounded",!0),t.xp6(1),t.Q6J("rounded",!0),t.xp6(1),t.Q6J("contentTop",64)("rounded",!0),t.xp6(1),t.Q6J("rounded",!0),t.xp6(2),t.Q6J("contentTop",64),t.xp6(4),t.Q6J("contentTop",64))},directives:[u.V,p.J],encapsulation:2,changeDetection:0}),e})();var G=o(31823),$=o(54476),J=o(17023),b=o(76349);function L(e,i){if(1&e&&(t.TgZ(0,"p"),t.SDv(1,2),t.qZA(),t.TgZ(2,"tui-doc-example",3),t._UZ(3,"tui-badged-content-example-1"),t.qZA(),t.TgZ(4,"tui-doc-example",4),t._UZ(5,"tui-badged-content-example-2"),t.qZA(),t.TgZ(6,"tui-doc-example",5),t._UZ(7,"tui-badged-content-example-3"),t.qZA()),2&e){const n=t.oxw();t.xp6(2),t.Q6J("content",n.example1),t.xp6(2),t.Q6J("content",n.example2),t.xp6(2),t.Q6J("content",n.example3)}}function z(e,i){1&e&&t._UZ(0,"tui-avatar",15),2&e&&t.Q6J("rounded",!0)}function U(e,i){1&e&&(t.tHW(0,16),t._UZ(1,"b"),t.N_p())}function V(e,i){1&e&&(t.tHW(0,17),t._UZ(1,"b"),t.N_p())}function I(e,i){1&e&&t.SDv(0,18)}function X(e,i){1&e&&t.SDv(0,19)}function Q(e,i){1&e&&t.SDv(0,20)}function H(e,i){1&e&&t.SDv(0,21)}function Y(e,i){if(1&e){const n=t.EpF();t.TgZ(0,"tui-doc-demo"),t.TgZ(1,"tui-badged-content",6),t._UZ(2,"tui-avatar",7),t.qZA(),t.YNc(3,z,1,1,"ng-template",null,8,t.W1O),t.qZA(),t.TgZ(5,"tui-doc-documentation"),t.YNc(6,U,2,0,"ng-template",9),t.NdJ("documentationPropertyValueChange",function(d){return t.CHM(n),t.oxw().contentBottom=d}),t.YNc(7,V,2,0,"ng-template",10),t.NdJ("documentationPropertyValueChange",function(d){return t.CHM(n),t.oxw().contentTop=d}),t.YNc(8,I,1,0,"ng-template",11),t.NdJ("documentationPropertyValueChange",function(d){return t.CHM(n),t.oxw().colorBottom=d}),t.YNc(9,X,1,0,"ng-template",12),t.NdJ("documentationPropertyValueChange",function(d){return t.CHM(n),t.oxw().colorTop=d}),t.YNc(10,Q,1,0,"ng-template",13),t.NdJ("documentationPropertyValueChange",function(d){return t.CHM(n),t.oxw().size=d}),t.YNc(11,H,1,0,"ng-template",14),t.NdJ("documentationPropertyValueChange",function(d){return t.CHM(n),t.oxw().rounded=d}),t.qZA()}if(2&e){const n=t.MAs(4),a=t.oxw();t.xp6(1),t.Q6J("contentTop","Template"===a.contentTop?n:a.contentTop)("contentBottom","Template"===a.contentBottom?n:a.contentBottom)("rounded",a.rounded)("colorTop",a.colorTop)("colorBottom",a.colorBottom)("size",a.size),t.xp6(1),t.Q6J("rounded",a.rounded)("size",a.size),t.xp6(4),t.Q6J("documentationPropertyValues",a.contentVariants)("documentationPropertyValue",a.contentBottom),t.xp6(1),t.Q6J("documentationPropertyValues",a.contentVariants)("documentationPropertyValue",a.contentTop),t.xp6(1),t.Q6J("documentationPropertyValue",a.colorBottom),t.xp6(1),t.Q6J("documentationPropertyValue",a.colorTop),t.xp6(1),t.Q6J("documentationPropertyValues",a.sizeVariants)("documentationPropertyValue",a.size),t.xp6(1),t.Q6J("documentationPropertyValue",a.rounded)}}function W(e,i){if(1&e&&(t.TgZ(0,"ol",22),t.TgZ(1,"li"),t.TgZ(2,"p"),t.tHW(3,23),t._UZ(4,"code"),t.N_p(),t.qZA(),t._UZ(5,"tui-doc-code",24),t.qZA(),t.TgZ(6,"li"),t.TgZ(7,"p"),t.SDv(8,25),t.qZA(),t._UZ(9,"tui-doc-code",26),t.qZA(),t.qZA()),2&e){const n=t.oxw();t.xp6(5),t.Q6J("code",n.exampleModule),t.xp6(4),t.Q6J("code",n.exampleHtml)}}let K=(()=>{class e{constructor(){this.exampleModule=o.e(94951).then(o.t.bind(o,94951,17)),this.exampleHtml=o.e(58202).then(o.t.bind(o,58202,17)),this.example1={TypeScript:o.e(68364).then(o.t.bind(o,68364,17)),HTML:o.e(38145).then(o.t.bind(o,38145,17))},this.example2={TypeScript:o.e(1336).then(o.t.bind(o,1336,17)),LESS:o.e(48622).then(o.t.bind(o,48622,17)),HTML:o.e(62246).then(o.t.bind(o,62246,17))},this.example3={TypeScript:o.e(33029).then(o.t.bind(o,33029,17)),HTML:o.e(98701).then(o.t.bind(o,25697,17))},this.rounded=!1,this.sizeVariants=["xs","s","m","l","xl","xxl"],this.size=this.sizeVariants[2],this.colorTop="",this.colorBottom="",this.contentTop="",this.contentBottom="",this.contentVariants=["",1,5,155,"tuiIconCheck","Template","tuiIconCheckCircleLarge"]}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["example-avatar"]],decls:4,vars:0,consts:function(){let i,n,a,d,l,m,g,E,C,N,O,M;return i=$localize`:␟205dbe908c92dcaf7e04699470ab3821e588b071␟926360384859945807:BadgedContent is a wrapper for other components to add badges and notifications to them.`,n=$localize`:␟2cafd3774163dbba7bfd8f323d1ec5e5daf29370␟5069453316184338315:with notification`,a=$localize`:␟09a7c1494df8e6916cbb3701edb1684ab3dc87bb␟929436895344517188:with different components`,d=$localize`:␟911b7fce6f9839becf82349838934c39f049a9bd␟4352677288238793646:with a badge and icon`,l=$localize`:␟8cff0fa19df3e1cf10de0043d62004b6624574b6␟1023691772623575830: Bottom right content. If it is a number, badge shows it. If it is a string, it will be used as icon. ${"\ufffd#1\ufffd"}:START_BOLD_TEXT:Warning:${"\ufffd/#1\ufffd"}:CLOSE_BOLD_TEXT: use big icons for all sizes except 'xs'. `,m=$localize`:␟756e389c9541f42303db20232db1aa27b3cdf53a␟6215357838798063691: Top right content. If it is a number, badge shows it. If it is a string, it will be used as icon. ${"\ufffd#1\ufffd"}:START_BOLD_TEXT:Warning:${"\ufffd/#1\ufffd"}:CLOSE_BOLD_TEXT: use big icons for all sizes except 'xs'. `,g=$localize`:␟42055ebd6d2f0f8fece6b8d4f1dafa0903e6567b␟2994445860003734892: Bottom right content color. If there is no content, shows a small circle of this color. `,E=$localize`:␟1dd2d4094c130e11dbd4c311d685ab75083151bd␟4865192425937239978: Top right content color. If there is no content, shows a small circle of this color. `,C=$localize`:␟179c074c54faa08ac2cd371aae91270430094cb4␟5919257397270847364: Size `,N=$localize`:␟6f3bd0a381b0f06876aa2784116206982c42c257␟8720720071780904257: Rounded mode `,O=$localize`:␟c4c036235fe0d58089ec47e1c5874ba94a02284e␟7293437017109719147: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiBadgedContentModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,M=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`,[["header","BadgedContent","package","KIT","type","components"],["pageTab",""],i,["id","base","heading",n,3,"content"],["id","components","heading",a,3,"content"],["id","badge","heading",d,3,"content"],[3,"contentTop","contentBottom","rounded","colorTop","colorBottom","size"],["new","","text","daenerys targaryen",3,"rounded","size"],["example",""],["documentationPropertyName","contentBottom","documentationPropertyMode","input","documentationPropertyType","PolymorpheusContent",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","contentTop","documentationPropertyMode","input","documentationPropertyType","PolymorpheusContent",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","colorBottom","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","colorTop","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","size","documentationPropertyType","TuiSizeXS | TuiSizeXXL","documentationPropertyMode","input",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","rounded","documentationPropertyType","boolean","documentationPropertyMode","input",3,"documentationPropertyValue","documentationPropertyValueChange"],["text","Example","size","s","avatarUrl","https://ng-web-apis.github.io/dist/assets/images/web-api.svg",3,"rounded"],l,m,g,E,C,N,[1,"b-demo-steps"],O,["filename","myComponent.module.ts",3,"code"],M,["filename","myComponent.template.html",3,"code"]]},template:function(n,a){1&n&&(t.TgZ(0,"tui-doc-page",0),t.YNc(1,L,8,3,"ng-template",1),t.YNc(2,Y,12,17,"ng-template",1),t.YNc(3,W,10,2,"ng-template",1),t.qZA())},directives:[x.q,B.n,P.f,h,F,R,G.F,u.V,p.J,$.z,J.B,b.c],encapsulation:2,changeDetection:0}),e})(),j=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[D.ez,T.u5,r.TuiAvatarModule,r.TuiBadgedContentModule,r.TuiInputModule,S.TuiButtonModule,_.fV,f.Bz.forChild((0,_.Ve)(K))]]}),e})()}}]);