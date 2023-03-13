"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[83173],{83173:(M,s,e)=>{e.r(s),e.d(s,{ExampleTuiSwipeModule:()=>U});var d=e(12057),g=e(33982),c=e(29851),x=e(63414),u=e(68339),t=e(74788),T=e(88331),r=e(37159),S=e(57068),m=e(99021);let h=(()=>{class n{constructor(){this.swiped="default"}onSwipe(i){this.swiped=i.direction}}return n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["tui-swipe-example-1"]],hostVars:2,hostBindings:function(i,p){2&i&&t.Tol(p.swiped)},decls:2,vars:2,consts:[[1,"box","tui-text_body-l",3,"ngClass","tuiSwipe"]],template:function(i,p){1&i&&(t.TgZ(0,"div",0),t.NdJ("tuiSwipe",function(l){return p.onSwipe(l)}),t._uU(1),t.qZA()),2&i&&(t.Q6J("ngClass",p.swiped),t.xp6(1),t.hij(" Swiped ",p.swiped,"\n"))},directives:[d.mk,m.W],styles:[".box[_ngcontent-%COMP%]{width:200px;height:200px;background-color:var(--tui-primary);transition:all .5s ease-out;display:flex;justify-content:center;align-items:center;touch-action:none}.box.left[_ngcontent-%COMP%]{background-color:var(--tui-support-12)}.box.right[_ngcontent-%COMP%]{background-color:var(--tui-support-03)}.box.top[_ngcontent-%COMP%]{background-color:var(--tui-support-08)}.box.bottom[_ngcontent-%COMP%]{background-color:var(--tui-support-10)}"],changeDetection:0}),n})();var Z=e(79765),f=e(83628);function v(n,o){if(1&n){const i=t.EpF();t.TgZ(0,"div",2),t.NdJ("tuiSwipe",function(a){return t.CHM(i),t.oxw().onSwipe(a)}),t._uU(1," Swipe right to close "),t.qZA()}}let w=(()=>{class n{constructor(){this.open$=new Z.xQ}toggle(i){this.open$.next(i)}onSwipe(i){console.info(i.direction),"left"===i.direction&&this.toggle(!0),"right"===i.direction&&this.toggle(!1)}}return n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["tui-swipe-example-2"]],decls:4,vars:4,consts:[[1,"container","tui-text_body-l",3,"tuiSwipe"],["class","sidebar tui-text_body-l",3,"tuiSwipe",4,"tuiSidebar","tuiSidebarDirection"],[1,"sidebar","tui-text_body-l",3,"tuiSwipe"]],template:function(i,p){1&i&&(t.TgZ(0,"div",0),t.NdJ("tuiSwipe",function(l){return p.onSwipe(l)}),t._uU(1," Swipe left to open "),t.YNc(2,v,2,0,"div",1),t.ALo(3,"async"),t.qZA()),2&i&&(t.xp6(2),t.Q6J("tuiSidebar",!!t.lcZ(3,2,p.open$))("tuiSidebarDirection","right"))},directives:[m.W,f.B],pipes:[d.Ov],styles:[".container[_ngcontent-%COMP%]{width:200px;height:200px}.sidebar[_ngcontent-%COMP%]{width:100%;height:100%}.container[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}"],changeDetection:0}),n})();var A=e(76349);function E(n,o){if(1&n&&(t.TgZ(0,"p"),t.TgZ(1,"code"),t._uU(2,"tuiSwipe"),t.qZA(),t._uU(3," directive allows detecting swipes on mobile devices. "),t.qZA(),t.TgZ(4,"p"),t._uU(5," You can configure the directive with "),t.TgZ(6,"code"),t._uU(7,"TUI_SWIPE_OPTIONS"),t.qZA(),t._uU(8," token. "),t._UZ(9,"br"),t._uU(10," Allowed options: "),t.qZA(),t.TgZ(11,"dl"),t.TgZ(12,"dt"),t.TgZ(13,"strong"),t._uU(14,"timeout:"),t.qZA(),t.qZA(),t.TgZ(15,"dd"),t._uU(16,"max time between touchstart and touchend"),t.qZA(),t.TgZ(17,"dt"),t.TgZ(18,"strong"),t._uU(19,"threshold"),t.qZA(),t._uU(20," : "),t.qZA(),t.TgZ(21,"dd"),t._uU(22,"min distance between touchstart and touchend."),t.qZA(),t.qZA(),t.TgZ(23,"tui-doc-example",3),t._UZ(24,"tui-swipe-example-1"),t.qZA(),t.TgZ(25,"tui-doc-example",4),t._UZ(26,"tui-swipe-example-2"),t.qZA()),2&n){const i=t.oxw();t.xp6(23),t.Q6J("content",i.example1),t.xp6(2),t.Q6J("content",i.example2)}}function y(n,o){if(1&n&&(t.TgZ(0,"ol",5),t.TgZ(1,"li"),t.TgZ(2,"p"),t._uU(3," Import "),t.TgZ(4,"code"),t._uU(5,"TuiSwipeModule"),t.qZA(),t._uU(6," into a module where you want to use our directive "),t.qZA(),t._UZ(7,"tui-doc-code",6),t.qZA(),t.TgZ(8,"li"),t.TgZ(9,"p"),t._uU(10,"Add to the template:"),t.qZA(),t._UZ(11,"tui-doc-code",7),t.qZA(),t.qZA()),2&n){const i=t.oxw();t.xp6(7),t.Q6J("code",i.exampleModule),t.xp6(4),t.Q6J("code",i.exampleHtml)}}let C=(()=>{class n{constructor(){this.exampleModule=e.e(72030).then(e.t.bind(e,72030,17)),this.exampleHtml=e.e(68817).then(e.t.bind(e,68817,17)),this.example1={TypeScript:e.e(67610).then(e.t.bind(e,67610,17)),HTML:e.e(69445).then(e.t.bind(e,69445,17)),LESS:e.e(83914).then(e.t.bind(e,83914,17))},this.example2={TypeScript:e.e(62531).then(e.t.bind(e,62531,17)),HTML:e.e(34473).then(e.t.bind(e,34473,17)),LESS:e.e(60499).then(e.t.bind(e,60499,17))}}}return n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["example-tui-swipe"]],decls:3,vars:0,consts:[["header","Swipe","package","CDK","type","directives"],["pageTab",""],["pageTab","Setup"],["id","base","heading","Basic",3,"content"],["id","sidebar","heading","With sidebar",3,"content"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(i,p){1&i&&(t.TgZ(0,"tui-doc-page",0),t.YNc(1,E,27,2,"ng-template",1),t.YNc(2,y,12,2,"ng-template",2),t.qZA())},directives:[T.q,r.n,S.f,h,w,A.c],encapsulation:2,changeDetection:0}),n})(),U=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[d.ez,u.TuiSwipeModule,c.fV,x.TuiSidebarModule,u.TuiActiveZoneModule,g.Bz.forChild((0,c.Ve)(C))]]}),n})()}}]);