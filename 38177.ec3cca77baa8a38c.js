(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[38177],{38177:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var a=n(16727),o=n(75407),s=n(87742),r=n(9659),i=n(19908),c=n(7287),l=n(95191),d=n(59996),p=n(54148),u=n(55514);const h=(()=>{var e;class t{constructor(){this.dialogs=(0,o.WQX)(c.wXC),this.injector=(0,o.WQX)(o.duS),this.months$=(0,o.WQX)(c.FmP),this.control=new s.MJ(null),this.dialog$=this.dialogs.open(new d.lS(r.kd,o.zZn.create({providers:[{provide:l.eHv,useValue:(0,i.lD9)(this.control)}],parent:this.injector})),{size:"fullscreen",closeable:!1,data:{multi:!0,min:new i.JKS(2018,2,10)}}),this.date$=(0,p.z)([(0,i.lD9)(this.control),this.months$]).pipe((0,u.T)((([e,t])=>e?.length?e.map((e=>`${t[e.month]} ${e.day}, ${e.year}`)).join("; "):"Choose dates")))}get empty(){return!this.control.value?.length}onClick(){this.dialog$.subscribe((e=>this.control.setValue(e)))}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=o.VBU({type:e,selectors:[["ng-component"]],standalone:!0,exportAs:"Example5",features:[o.aNF],decls:6,vars:7,consts:[[1,"wrapper"],["appearance","secondary","iconStart","@tui.calendar","tuiIconButton","","type","button",3,"click"],[1,"date"]],template:function(e,t){1&e&&(o.j41(0,"div",0)(1,"button",1),o.bIt("click",(function(){return t.onClick()})),o.EFF(2," Calendar "),o.k0s(),o.j41(3,"span",2),o.EFF(4),o.nI1(5,"async"),o.k0s()()),2&e&&(o.R7$(1),o.xc7("border-radius",100,"%"),o.R7$(2),o.AVh("date_empty",t.empty),o.R7$(1),o.SpI(" ",o.bMT(5,5,t.date$)," "))},dependencies:[a.Jj,c.paf],styles:[".wrapper[_ngcontent-%COMP%]{display:flex;align-items:center}.date[_ngcontent-%COMP%]{margin-left:1rem}.date_empty[_ngcontent-%COMP%]{color:var(--tui-text-tertiary)}"],changeDetection:0}),t})()}}]);