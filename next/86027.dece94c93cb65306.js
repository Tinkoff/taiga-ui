(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[86027],{86027:(e,t,n)=>{n.r(t),n.d(t,{default:()=>y});var a=n(16727),i=n(15585),l=n(87742),o=n(56366),s=n(88354),r=n(78568),c=n(55514),u=n(75407),m=n(7740),b=n(21154),d=n(35630),f=n(3358),p=n(69468),h=n(46654);function g(e,t){1&e&&(u.j41(0,"td",13)(1,"tui-input",14),u.EFF(2," Type an name "),u.nrm(3,"input",15),u.k0s()())}function F(e,t){1&e&&(u.j41(0,"td",13)(1,"tui-input-number",16),u.EFF(2,"Type a balance"),u.k0s()())}function T(e,t){if(1&e&&(u.j41(0,"tr",11),u.DNE(1,g,4,0,"td",12),u.DNE(2,F,3,0,"td",12),u.k0s()),2&e){const e=t.$implicit;u.Y8G("formGroup",e),u.R7$(1),u.Y8G("tuiCell","name"),u.R7$(1),u.Y8G("tuiCell","balance")}}const k=function(){return{standalone:!0}},y=(()=>{var e;class t{constructor(){this.testData=[{name:"James",balance:1e4},{name:"Michael",balance:2e4},{name:"Richard",balance:3e4},{name:"Robert",balance:4e4},{name:"Daniel",balance:5e4}],this.filterForm=new l.gE({balance:new l.MJ(0)}),this.array=new l.Yp([]),this.items=(0,i.ot)(this.array.valueChanges.pipe((0,c.T)((()=>[...this.array.controls]))),{initialValue:[]}),this.testIndex=0,this.columns=["name","balance"],this.filter=({balance:e},t)=>e?.value>=t}addRow(){const e=this.testData[this.testIndex]?.name??"",t=this.testData?.[this.testIndex]?.balance??0;this.array.push(new l.gE({name:new l.MJ(e),balance:new l.MJ(t,{updateOn:"blur"})})),this.testIndex++}onToggle(e){e?this.filterForm.enable():this.filterForm.disable()}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=u.VBU({type:e,selectors:[["ng-component"]],standalone:!0,exportAs:"Example2",features:[u.aNF],decls:20,vars:12,consts:[["tuiTableFilters",""],[3,"formGroup"],["formControlName","balance","tuiTableFilter","controls",3,"tuiGenericFilter"],[1,"toggle"],["size","s","tuiSwitch","","type","checkbox",3,"ngModel","ngModelOptions","showIcons","ngModelChange"],["tuiTable","",1,"table",3,"columns"],["tuiThGroup",""],["tuiTh",""],["tuiTbody",""],["tuiTr","",3,"formGroup",4,"ngFor","ngForOf"],["tuiButton","","type","button",1,"tui-space_top-2",3,"click"],["tuiTr","",3,"formGroup"],["tuiTd","",4,"tuiCell"],["tuiTd",""],["formControlName","name","tuiTextfieldSize","s"],["autocomplete","name","tuiTextfieldLegacy","","type","name"],["formControlName","balance"]],template:function(e,t){1&e&&(u.qex(0,0),u.j41(1,"form",1)(2,"tui-input-number",2),u.EFF(3," Minimal balance "),u.k0s(),u.j41(4,"label",3)(5,"input",4),u.bIt("ngModelChange",(function(e){return t.onToggle(e)})),u.k0s(),u.EFF(6," Enable filtering "),u.k0s()(),u.j41(7,"table",5)(8,"thead")(9,"tr",6)(10,"th",7),u.EFF(11,"Name"),u.k0s(),u.j41(12,"th",7),u.EFF(13,"Balance"),u.k0s()()(),u.j41(14,"tbody",8),u.DNE(15,T,3,3,"tr",9),u.nI1(16,"async"),u.nI1(17,"tuiTableFilters"),u.k0s()(),u.j41(18,"button",10),u.bIt("click",(function(){return t.addRow()})),u.EFF(19," Add "),u.k0s(),u.bVm()),2&e&&(u.R7$(1),u.Y8G("formGroup",t.filterForm),u.R7$(1),u.Y8G("tuiGenericFilter",t.filter),u.R7$(3),u.Y8G("ngModel",t.filterForm.enabled)("ngModelOptions",u.lJ4(11,k))("showIcons",!1),u.R7$(2),u.Y8G("columns",t.columns),u.R7$(8),u.Y8G("ngForOf",u.bMT(16,7,u.bMT(17,9,t.items()))))},dependencies:[a.Jj,l.YN,l.qT,l.Zm,l.BC,l.cb,l.vS,a.Sq,l.X1,l.j4,l.JD,o.paf,r.ziW,m.m,b.W,d.B,r.O9v,f.Z,p.x,s.vtR,h.gJ,h.hO,h.ke,h.z2,h.z8,h.zv,h.nS,h.lx,h.Ey,h.al,h.__],styles:[".toggle[_ngcontent-%COMP%]{display:flex;align-items:center;inline-size:-webkit-fit-content;inline-size:-moz-fit-content;inline-size:fit-content;gap:1rem;margin:1rem 0}.table[_ngcontent-%COMP%]{inline-size:100%}"],changeDetection:0}),t})()}}]);