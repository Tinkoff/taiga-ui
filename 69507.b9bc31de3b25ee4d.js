(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[69507],{69507:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p,maxFilesLength:()=>d});var o=n(16727),r=n(87742),i=n(19908),c=n(56366),l=n(7826),s=n(55514),u=n(75407);function a(e,t){if(1&e){const e=u.RV6();u.j41(0,"tui-file",7),u.bIt("remove",(function(){const t=u.eBV(e).$implicit,n=u.XpG();return u.Njj(n.onRemove(t))})),u.k0s()}if(2&e){const e=t.$implicit;u.Y8G("file",e)}}function f(e,t){if(1&e){const e=u.RV6();u.j41(0,"tui-file",8),u.bIt("remove",(function(){const t=u.eBV(e).$implicit,n=u.XpG();return u.Njj(n.onRemove(t))})),u.nI1(1,"async"),u.nI1(2,"tuiFileRejected"),u.k0s()}if(2&e){const e=t.$implicit;u.XpG();const n=u.sdS(2);u.Y8G("file",u.bMT(1,1,u.i5U(2,3,e,n))||e)}}const m=function(){return["maxLength"]},p=(()=>{var e;class t{constructor(){this.control=new r.MJ([],[d(5)]),this.accepted$=this.control.valueChanges.pipe((0,s.T)((()=>(0,l.p4p)(this.control)))),this.rejected=[]}onReject(e){this.rejected=Array.from(new Set(this.rejected.concat(e)))}onRemove(e){this.rejected=this.rejected.filter((t=>t!==e)),this.control.setValue(this.control.value?.filter((t=>t!==e))??[])}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=u.VBU({type:e,selectors:[["ng-component"]],standalone:!0,exportAs:"Example2",features:[u.aNF],decls:10,vars:13,consts:[["tuiInputFiles",""],["accept","image/*","tuiInputFiles","",3,"formControl","multiple","reject"],["validator","tuiInputFilesValidator"],[1,"tui-space_top-1"],[3,"file","remove",4,"ngFor","ngForOf"],["state","error",3,"file","remove",4,"ngFor","ngForOf"],[3,"error","formControl"],[3,"file","remove"],["state","error",3,"file","remove"]],template:function(e,t){1&e&&(u.j41(0,"label",0)(1,"input",1,2),u.bIt("reject",(function(e){return t.onReject(e)})),u.k0s()(),u.j41(3,"tui-files",3),u.DNE(4,a,1,1,"tui-file",4),u.nI1(5,"async"),u.DNE(6,f,3,6,"tui-file",5),u.k0s(),u.nrm(7,"tui-error",6),u.nI1(8,"async"),u.nI1(9,"tuiFieldError")),2&e&&(u.R7$(1),u.Y8G("formControl",t.control)("multiple",!0),u.R7$(3),u.Y8G("ngForOf",u.bMT(5,6,t.accepted$)),u.R7$(2),u.Y8G("ngForOf",t.rejected),u.R7$(1),u.Y8G("error",u.bMT(8,8,u.bMT(9,10,u.lJ4(12,m))))("formControl",t.control))},dependencies:[o.Jj,o.Sq,r.X1,r.me,r.BC,r.l_,c.J6n,l.bsk,l.VbL,l.Gps,l.Z1t,l.xwB,l.Xeg],encapsulation:2,changeDetection:0}),t})();function d(e){return({value:t})=>t.length>e?{maxLength:new i.MxN("Error: maximum limit - 5 files for upload")}:null}}}]);