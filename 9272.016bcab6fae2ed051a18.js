"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[9272],{9272:(w,d,o)=>{o.r(d),o.d(d,{ExampleTuiPushModule:()=>j});var y=o(12057),g=o(33982),T=o(29851),s=o(3497),x=o(18738),t=o(74788),P=o(88331),f=o(37159),Z=o(57068),m=o(491),c=o(81538),r=o(34880),p=o(76189),h=o(66596);let v=(()=>{class e{constructor(n){this.alert=n}onClose(){this.alert.open("Close button is visible when you subscribe to (close) output").subscribe()}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(s.TuiAlertService))},e.\u0275cmp=t.Xpm({type:e,selectors:[["tui-push-example-1"]],decls:17,vars:2,consts:[[1,"wrapper"],["heading","Rachael","type","Replicant",1,"push",3,"timestamp","close"],["src","tuiIconSettingsLarge"],["tuiButton","","type","button"],["tuiLink","","type","button"],["heading","Deckard","type","Human?",1,"push",3,"timestamp"],["src","tuiIconEyeLarge",1,"human"],["heading","Roy","type","Replicant",3,"close"],["src","assets/images/roy.jpg","alt",""]],template:function(n,u){1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"tui-push",1),t.NdJ("close",function(){return u.onClose()}),t._UZ(2,"tui-svg",2),t._uU(3," Do you like our owl? "),t.TgZ(4,"button",3),t._uU(5," It's artificial? "),t.qZA(),t.TgZ(6,"button",4),t._uU(7," Nice hooters! "),t.qZA(),t.qZA(),t.TgZ(8,"tui-push",5),t._UZ(9,"tui-svg",6),t._uU(10," I've had people walk out on me before, but not when I was being so charming. "),t.qZA(),t.qZA(),t.TgZ(11,"tui-push",7),t.NdJ("close",function(){return u.onClose()}),t._UZ(12,"img",8),t._UZ(13,"tui-svg",2),t._uU(14," I\u2019ve seen things you people wouldn't believe. Attack ships on fire off The Shoulder Of Orion. I watched C-Beams glitter in the dark near The Tannhauser Gate. All those moments will be lost in time, like tears in rain. "),t.TgZ(15,"button",4),t._uU(16," Time to die "),t.qZA(),t.qZA()),2&n&&(t.xp6(1),t.Q6J("timestamp",1661358075379),t.xp6(7),t.Q6J("timestamp",1661357e6))},directives:[m.H,c.G,r.P,p.v,h.V],styles:["[_nghost-%COMP%]{display:block}.wrapper[_ngcontent-%COMP%]{box-shadow:0 .25rem 1.5rem rgba(0,0,0,.12);width:22.5rem;max-width:100%;border-radius:var(--tui-radius-l);margin-bottom:1rem}.push[_ngcontent-%COMP%]{box-shadow:none}.human[_ngcontent-%COMP%]{color:var(--tui-positive)}"],changeDetection:0}),e})();var C=o(15257),E=o(43190);let U=(()=>{class e{constructor(n,u){this.push=n,this.alert=u}onClick(){this.push.open("This is heavy!",{heading:"Great Scott!",type:"Quote",icon:"tuiIconVideoLarge",buttons:["Roads?","1.21 Gigawatts!?!"]}).pipe((0,C.q)(1),(0,E.w)(n=>this.alert.open(n))).subscribe()}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(x.TuiPushService),t.Y36(s.TuiAlertService))},e.\u0275cmp=t.Xpm({type:e,selectors:[["tui-push-example-2"]],decls:2,vars:0,consts:[["tuiButton","","type","button",3,"click"]],template:function(n,u){1&n&&(t.TgZ(0,"button",0),t.NdJ("click",function(){return u.onClick()}),t._uU(1," Show push\n"),t.qZA())},directives:[p.v],encapsulation:2,changeDetection:0}),e})();var A=o(97075);function N(e,i){if(1&e){const n=t.EpF();t.TgZ(0,"tui-push",2),t.NdJ("close",function(){return t.CHM(n),t.oxw().toggle(!1)}),t._UZ(1,"tui-svg",3),t._uU(2," I have a bad feeling about this... "),t.TgZ(3,"button",0),t.NdJ("click",function(){return t.CHM(n),t.oxw().toggle(!1)}),t._uU(4," Fortune "),t.qZA(),t.TgZ(5,"button",4),t.NdJ("click",function(){return t.CHM(n),t.oxw().toggle(!1)}),t._uU(6," Glory "),t.qZA(),t.qZA()}}let J=(()=>{class e{constructor(){this.open=!1}toggle(n){this.open=n}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["tui-push-example-3"]],decls:3,vars:1,consts:[["tuiButton","","type","button",3,"click"],["heading","Indiana Jones","type","Dr. Henry Walton Jones, Jr.",3,"close",4,"tuiPush"],["heading","Indiana Jones","type","Dr. Henry Walton Jones, Jr.",3,"close"],["src","tuiIconMessageSquareLarge"],["tuiLink","","type","button",3,"click"]],template:function(n,u){1&n&&(t.TgZ(0,"button",0),t.NdJ("click",function(){return u.toggle(!0)}),t._uU(1," Show push\n"),t.qZA(),t.YNc(2,N,7,0,"tui-push",1)),2&n&&(t.xp6(2),t.Q6J("tuiPush",u.open))},directives:[p.v,A.K,m.H,c.G,r.P,h.V],encapsulation:2,changeDetection:0}),e})();var M=o(31823),b=o(54476),I=o(17023),S=o(76349);function V(e,i){if(1&e&&(t.TgZ(0,"p"),t._uU(1,"Notifications in style of native browser push"),t.qZA(),t.TgZ(2,"tui-doc-example",2),t._UZ(3,"tui-push-example-1"),t.qZA(),t.TgZ(4,"tui-doc-example",3),t._UZ(5,"tui-push-example-2"),t.qZA(),t.TgZ(6,"tui-doc-example",4),t._UZ(7,"tui-push-example-3"),t.qZA()),2&e){const n=t.oxw();t.xp6(2),t.Q6J("content",n.example1),t.xp6(2),t.Q6J("content",n.example2),t.xp6(2),t.Q6J("content",n.example3)}}function L(e,i){1&e&&t._uU(0," Heading of the push ")}function H(e,i){1&e&&t._uU(0," Small text near icon, typically, category of the message ")}function Y(e,i){1&e&&(t._uU(0," Timestamp of the arrival. Formatted with "),t.TgZ(1,"a",21),t.TgZ(2,"code"),t._uU(3,"FormatDate"),t.qZA(),t.qZA(),t._uU(4," pipe. "))}function _(e,i){1&e&&t._uU(0," Output for close button clicks. If you do not listen to this output, close button is hidden. ")}function Q(e,i){1&e&&t._uU(0," Icon in the corner ")}function B(e,i){1&e&&t._uU(0," Image at the top (360\xd7170px) ")}function F(e,i){1&e&&t._uU(0," Single button ")}function D(e,i){1&e&&t._uU(0," Additional button when it requires two ")}function O(e,i){1&e&&t._uU(0," The rest of the content is that push body. ")}function G(e,i){if(1&e){const n=t.EpF();t.TgZ(0,"tui-doc-demo"),t.TgZ(1,"tui-push",5),t.NdJ("close",function(){return t.CHM(n),t.oxw().onClose()}),t._UZ(2,"img",6),t._UZ(3,"tui-svg",7),t._uU(4," I\u2019ve seen things you people wouldn't believe. Attack ships on fire off The Shoulder Of Orion. I watched C-Beams glitter in the dark near The Tannhauser Gate. All those moments will be lost in time, like tears in rain. "),t.TgZ(5,"button",8),t._uU(6," I want more life "),t.qZA(),t.TgZ(7,"button",9),t._uU(8," Time to die "),t.qZA(),t.qZA(),t.qZA(),t.TgZ(9,"tui-doc-documentation",10),t.YNc(10,L,1,0,"ng-template",11),t.NdJ("documentationPropertyValueChange",function(a){return t.CHM(n),t.oxw().heading=a}),t.YNc(11,H,1,0,"ng-template",12),t.NdJ("documentationPropertyValueChange",function(a){return t.CHM(n),t.oxw().type=a}),t.YNc(12,Y,5,0,"ng-template",13),t.NdJ("documentationPropertyValueChange",function(a){return t.CHM(n),t.oxw().timestamp=a}),t.YNc(13,_,1,0,"ng-template",14),t.qZA(),t.TgZ(14,"tui-doc-documentation",15),t.YNc(15,Q,1,0,"ng-template",16),t.YNc(16,B,1,0,"ng-template",17),t.YNc(17,F,1,0,"ng-template",18),t.YNc(18,D,1,0,"ng-template",19),t.YNc(19,O,1,0,"ng-template",20),t.qZA()}if(2&e){const n=t.oxw();t.xp6(1),t.Q6J("heading",n.heading)("type",n.type)("timestamp",n.timestamp),t.xp6(9),t.Q6J("documentationPropertyValue",n.heading),t.xp6(1),t.Q6J("documentationPropertyValue",n.type),t.xp6(1),t.Q6J("documentationPropertyValue",n.timestamp),t.xp6(2),t.Q6J("showValues",!1)}}function R(e,i){if(1&e&&(t.TgZ(0,"ol",22),t.TgZ(1,"li"),t._uU(2," To use inline import "),t.TgZ(3,"code"),t._uU(4,"TuiPushModule"),t.qZA(),t._uU(5," in the same module where you want to use our component: "),t._UZ(6,"tui-doc-code",23),t.qZA(),t.TgZ(7,"li"),t.TgZ(8,"p"),t._uU(9,"Add to the template:"),t.qZA(),t._UZ(10,"tui-doc-code",24),t.qZA(),t.TgZ(11,"li"),t._uU(12," Make sure to include "),t.TgZ(13,"code"),t._uU(14,"TuiPushModule"),t.qZA(),t._uU(15," in your main module to be able to show push like alerts. "),t.qZA(),t.TgZ(16,"li"),t._uU(17,"See examples to explore display options."),t.qZA(),t.qZA()),2&e){const n=t.oxw();t.xp6(6),t.Q6J("code",n.exampleImportModule),t.xp6(4),t.Q6J("code",n.exampleInsertTemplate)}}let X=(()=>{class e{constructor(n){this.alert=n,this.exampleImportModule=o.e(52301).then(o.t.bind(o,52301,17)),this.exampleInsertTemplate=o.e(3350).then(o.t.bind(o,3350,17)),this.example1={TypeScript:o.e(65745).then(o.t.bind(o,65745,17)),HTML:o.e(72181).then(o.t.bind(o,72181,17)),LESS:o.e(19073).then(o.t.bind(o,19073,17))},this.example2={TypeScript:o.e(99247).then(o.t.bind(o,99247,17)),HTML:o.e(2828).then(o.t.bind(o,2828,17))},this.example3={TypeScript:o.e(92062).then(o.t.bind(o,92062,17)),HTML:o.e(59455).then(o.t.bind(o,59455,17))},this.heading="",this.type="",this.timestamp=0}onClose(){this.alert.open("Close button is visible when you subscribe to (close) output").subscribe()}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(s.TuiAlertService))},e.\u0275cmp=t.Xpm({type:e,selectors:[["example-tui-push"]],decls:4,vars:0,consts:[["header","Push","package","KIT"],["pageTab",""],["id","base","heading","basic",3,"content"],["id","service","heading","with service",3,"content"],["id","directive","heading","with directive",3,"content"],[3,"heading","type","timestamp","close"],["src","assets/images/roy.jpg","alt",""],["src","tuiIconSettingsLarge"],["tuiButton","","type","button"],["tuiLink","","type","button"],["heading","Inputs/Outputs"],["documentationPropertyName","heading","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","type","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","timestamp","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","close","documentationPropertyMode","output","documentationPropertyType","void"],["heading","Content slots",3,"showValues"],["documentationPropertyName","tui-svg","documentationPropertyType","Icon"],["documentationPropertyName","img","documentationPropertyType","Image"],["documentationPropertyName","tuiLink","documentationPropertyType","Link/Button"],["documentationPropertyName","tuiButton","documentationPropertyType","Link/Button"],["documentationPropertyName","ng-content","documentationPropertyType","Arbitrary"],["tuiLink","","routerLink","/pipes/format-date"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(n,u){1&n&&(t.TgZ(0,"tui-doc-page",0),t.YNc(1,V,8,3,"ng-template",1),t.YNc(2,G,20,7,"ng-template",1),t.YNc(3,R,18,2,"ng-template",1),t.qZA())},directives:[P.q,f.n,Z.f,v,U,J,M.F,m.H,c.G,r.P,p.v,h.V,b.z,I.B,g.yS,S.c],encapsulation:2,changeDetection:0}),e})(),j=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[y.ez,x.TuiPushModule,s.TuiButtonModule,s.TuiLinkModule,s.TuiSvgModule,T.fV,g.Bz.forChild((0,T.Ve)(X))]]}),e})()}}]);