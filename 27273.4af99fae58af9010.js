(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[27273],{27273:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d});var l=n(16727),r=n(87742),c=n(19908),i=n(56366),o=n(88354),a=n(75407);function s(e,t){if(1&e&&a.nrm(0,"tui-tree",2),2&e){const e=t.$implicit,n=a.XpG(),l=a.sdS(2);a.Y8G("childrenHandler",n.handler)("content",l)("tuiTreeController",!0)("value",e)}}function u(e,t){if(1&e){const e=a.RV6();a.j41(0,"label",3)(1,"input",4),a.bIt("ngModelChange",(function(t){const n=a.eBV(e).$implicit,l=a.XpG();return a.Njj(l.onChecked(n,t))})),a.nI1(2,"tuiMapper"),a.k0s(),a.j41(3,"small"),a.EFF(4),a.k0s()()}if(2&e){const e=t.$implicit,n=a.XpG();a.R7$(1),a.Y8G("ngModel",a.brH(2,2,e,n.getValue,n.map)),a.R7$(3),a.JRh(e.text)}}function p(e){return e.children?e.children.map(p).reduce(((e,t)=>[...e,...t]),[]):[e]}const d=(()=>{var e;class t{constructor(){this.map=new Map,this.data={text:"Topmost",children:[{text:"Top level 1",children:[{text:"Another item",children:[{text:"Next level 1"},{text:"Next level 2"},{text:"Next level 3"}]}]},{text:"Top level 2"},{text:"Top level 3",children:[{text:"Test 1"},{text:"Test 2"}]}]},this.handler=e=>e.children||c.Mlv,this.getValue=(e,t)=>{let n=null;const l=p(e),r=l[0];r&&(n=!!t.get(r));for(const e of l)if(n!==!!t.get(e))return null;return n}}onChecked(e,t){p(e).forEach((e=>this.map.set(e,t))),this.map=new Map(this.map.entries())}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=a.VBU({type:e,selectors:[["ng-component"]],standalone:!0,exportAs:"Example6",features:[a.aNF],decls:3,vars:1,consts:[[3,"childrenHandler","content","tuiTreeController","value",4,"ngFor","ngForOf"],["content",""],[3,"childrenHandler","content","tuiTreeController","value"],["tuiLabel","",1,"tui-space_vertical-2","tui-space_left-1"],["size","s","tuiCheckbox","","type","checkbox",3,"ngModel","ngModelChange"]],template:function(e,t){1&e&&(a.DNE(0,s,1,4,"tui-tree",0),a.DNE(1,u,5,6,"ng-template",null,1,a.C5r)),2&e&&a.Y8G("ngForOf",t.data.children)},dependencies:[r.YN,r.Zm,r.BC,r.vS,l.Sq,o.GYS,i.zRW,c.uAY,o.GQu,o.CHz,o.CtF],encapsulation:2,changeDetection:0}),t})()}}]);