(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[92537],{92537:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var s=n(16727),o=n(87742),i=n(56366),r=n(88354),c=n(75407);function u(e,t){if(1&e&&(c.j41(0,"label"),c.nrm(1,"input",5),c.EFF(2),c.k0s()),2&e){const e=t.$implicit,n=t.index;c.R7$(1),c.Y8G("formControlName",n),c.R7$(1),c.SpI(" ",e," ")}}function l(e,t){if(1&e){const e=c.RV6();c.qex(0),c.j41(1,"p"),c.EFF(2),c.k0s(),c.j41(3,"form",2),c.DNE(4,u,3,2,"label",3),c.k0s(),c.j41(5,"button",4),c.bIt("click",(function(){c.eBV(e);const t=c.XpG();return c.Njj(t.nextQuestion())})),c.EFF(6," Next "),c.k0s(),c.bVm()}if(2&e){const e=c.XpG();c.R7$(2),c.Lme("",e.currentQuestion+1,". ",e.questionTitles[e.currentQuestion],""),c.R7$(1),c.Y8G("formGroup",e.form),c.R7$(1),c.Y8G("ngForOf",e.questions[e.currentQuestion])}}function a(e,t){if(1&e&&(c.j41(0,"label"),c.nrm(1,"input",8),c.EFF(2),c.k0s()),2&e){const e=t.$implicit,n=t.index,s=c.XpG().$implicit;c.R7$(1),c.Y8G("checked",s[n]),c.R7$(1),c.SpI(" ",e," ")}}function p(e,t){if(1&e&&(c.j41(0,"div",7)(1,"p"),c.EFF(2),c.k0s(),c.DNE(3,a,3,2,"label",3),c.k0s()),2&e){const e=t.index,n=c.XpG(2);c.R7$(2),c.Lme("",e+1,". ",n.questionTitles[e],""),c.R7$(1),c.Y8G("ngForOf",n.questions[e])}}function f(e,t){if(1&e&&(c.j41(0,"p")(1,"b"),c.EFF(2,"Your answers"),c.k0s()(),c.DNE(3,p,4,3,"div",6)),2&e){const e=c.XpG();c.R7$(3),c.Y8G("ngForOf",e.results)}}const m=(()=>{var e;class t{constructor(){this.questionTitles=["What framework do you like?","What library do you like?"],this.questions=[["Angular","React","Vue"],["Taiga UI","Material UI","PrimeNG"]],this.currentQuestion=0,this.results=[],this.form=new o.gE({0:new o.MJ(!1),1:new o.MJ(!1),2:new o.MJ(!1)})}nextQuestion(){this.currentQuestion++,this.results.push(Object.values(this.form.value).map(Boolean)),this.form=new o.gE({0:new o.MJ(!1),1:new o.MJ(!1),2:new o.MJ(!1)})}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=c.VBU({type:e,selectors:[["ng-component"]],standalone:!0,exportAs:"Example3",features:[c.aNF],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["result",""],[3,"formGroup"],[4,"ngFor","ngForOf"],["size","s","tuiButton","","type","button",1,"tui-space_top-4",3,"click"],["size","s","tuiCheckbox","","type","checkbox",3,"formControlName"],["class","tui-space_top-4",4,"ngFor","ngForOf"],[1,"tui-space_top-4"],["size","s","tuiCheckbox","","type","checkbox",3,"checked"]],template:function(e,t){if(1&e&&(c.DNE(0,l,7,4,"ng-container",0),c.DNE(1,f,4,1,"ng-template",null,1,c.C5r)),2&e){const e=c.sdS(2);c.Y8G("ngIf",t.currentQuestion<2)("ngIfElse",e)}},dependencies:[o.YN,o.qT,o.Zm,o.BC,o.cb,s.Sq,s.bT,o.X1,o.j4,o.JD,i.paf,r.GYS],styles:["label[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem}"],changeDetection:0}),t})()}}]);