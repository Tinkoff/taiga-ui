(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[78408,7055],{31161:(t,i,e)=>{e.r(i),e.d(i,{default:()=>N});var a=e(72133),n=e(93317),o=e(3481),r=e(97733),u=e(20755),s=e(2184),d=e(7637),l=e(78070),c=e(57734),v=e(93342),g=e(20261),p=e(59091),m=e(92891),h=e(35772);function f(t,i){if(1&t&&(u._UZ(0,"tui-data-list-wrapper",8),u.ALo(1,"tuiFilterByInput")),2&t){const t=u.oxw();u.Q6J("items",u.lcZ(1,1,t.items))}}function b(t,i){if(1&t&&u._UZ(0,"tui-data-list-wrapper",8),2&t){const t=u.oxw();u.Q6J("items",t.items)}}const N=(()=>{var t;class i{constructor(){this.value="",this.items=["John Cleese","Eric Idle","Michael Palin","Graham Chapman","Terry Gilliam","Terry Jones"]}}return(t=i).ɵfac=function(i){return new(i||t)},t.ɵcmp=u.Xpm({type:t,selectors:[["ng-component"]],standalone:!0,features:[u.jDz],decls:14,vars:4,consts:[["iconRight","tuiIconSearch","tuiDropdownOpen","",3,"tuiDropdown"],["tuiLabel",""],["placeholder","I am placeholder","tuiTextfield","",3,"ngModel","ngModelChange"],["content","Editable combo-box"],["combobox",""],["tuiChevron","","tuiDropdownOpen","",3,"tuiDropdown"],["content","Fixed choice select"],["select",""],[3,"items"]],template:function(t,i){if(1&t&&(u.TgZ(0,"tui-textfield",0)(1,"label",1),u._uU(2,"Start typing"),u.qZA(),u.TgZ(3,"input",2),u.NdJ("ngModelChange",(function(t){return i.value=t})),u.qZA(),u._UZ(4,"tui-tooltip",3),u.YNc(5,f,2,3,"ng-template",null,4,u.W1O),u.qZA(),u.TgZ(7,"tui-textfield",5)(8,"label",1),u._uU(9,"Select from options"),u.qZA(),u.TgZ(10,"select",2),u.NdJ("ngModelChange",(function(t){return i.value=t})),u.qZA(),u._UZ(11,"tui-tooltip",6),u.YNc(12,b,1,1,"ng-template",null,7,u.W1O),u.qZA()),2&t){const t=u.MAs(6),e=u.MAs(13);u.Q6J("tuiDropdown",t),u.xp6(3),u.Q6J("ngModel",i.value),u.xp6(4),u.Q6J("tuiDropdown",e),u.xp6(3),u.Q6J("ngModel",i.value)}},dependencies:[a.u5,a.Fj,a.EJ,a.JJ,a.On,n.TuiDropdownModule,s.t,d.o,n.TuiTextfieldModule,l.X,c.O,v.M,g.b,o.QA,p.w,r.TuiChevronDirective,r.TuiDataListWrapperModule,m.e,r.TuiFilterByInputPipeModule,h.b],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;gap:1rem}"],changeDetection:0}),i})()},65928:(t,i,e)=>{e.d(i,{I:()=>c});var a=e(93317),n=e(20755),o=e(86250),r=e(35661),u=e(8509);const s=["tuiNavigationAside",""],d=[[["header"]],"*",[["footer"]]],l=["header","*","footer"];let c=(()=>{var t;class i{constructor(){this.tuiNavigationAside=!1}}return(t=i).ɵfac=function(i){return new(i||t)},t.ɵcmp=n.Xpm({type:t,selectors:[["aside","tuiNavigationAside",""]],hostAttrs:["tuiNavigationAside","","tuiTheme","dark"],hostVars:2,hostBindings:function(t,i){2&t&&n.ekj("_expanded",i.tuiNavigationAside)},inputs:{tuiNavigationAside:"tuiNavigationAside"},features:[n._Bn([(0,a.tuiButtonOptionsProvider)({size:"s",appearance:"flat"}),(0,a.tuiDropdownOptionsProvider)({appearance:"dropdown-navigation",align:"right"})])],attrs:s,ngContentSelectors:l,decls:5,vars:0,consts:[[1,"t-nav-scrollbar"],["tuiFade","vertical","tuiScrollable","",1,"t-nav-content"]],template:function(t,i){1&t&&(n.F$t(d),n.Hsn(0),n.TgZ(1,"tui-scrollbar",0)(2,"div",1),n.Hsn(3,1),n.qZA()(),n.Hsn(4,2))},dependencies:[o.I,r.X,u.R],styles:["aside[tuiNavigationAside]{--tui-link: var(--tui-text-01-night);--tui-link-hover: var(--tui-text-01-night);position:sticky;top:3rem;display:flex;width:3rem;flex-direction:column;padding:.5rem .5rem .25rem;box-sizing:border-box;background:var(--tui-theme-color, #000);color:var(--tui-text-01-night);transition-property:width;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out}aside[tuiNavigationAside]._expanded{width:13.75rem}aside[tuiNavigationAside]._expanded+main[tuiNavigationMain]{max-width:calc(100% - 13.75rem)}aside[tuiNavigationAside] a[tuiButton].active{background:var(--tui-clear-hover)}aside[tuiNavigationAside] .t-nav-scrollbar{margin:0 -.25rem}aside[tuiNavigationAside] .t-nav-content{scrollbar-width:none;-ms-overflow-style:none;height:100%;padding:0 .25rem;overflow:auto}aside[tuiNavigationAside] .t-nav-content::-webkit-scrollbar,aside[tuiNavigationAside] .t-nav-content::-webkit-scrollbar-thumb{display:none}aside[tuiNavigationAside] [tuiButton]{width:100%;justify-content:flex-start;gap:.625rem;margin-bottom:.25rem}aside[tuiNavigationAside] [tuiButton]:after{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;margin-left:auto;color:var(--tui-text-03-night)}aside[tuiNavigationAside] tui-expand [tuiButton]{padding-inline-start:2rem}aside[tuiNavigationAside] hr{background:var(--tui-clear-inverse);height:1px;margin:0 0 .25rem;border:none}aside[tuiNavigationAside] header{padding-bottom:.25rem;box-shadow:inset 0 -1px var(--tui-clear);margin-bottom:1rem}aside[tuiNavigationAside] footer{margin-top:auto;border-top:1.75rem solid transparent}aside[tuiNavigationAside]+main[tuiNavigationMain]{max-width:calc(100% - 3rem)}tui-dropdown[data-appearance=dropdown-navigation]{--tui-text-01: var(--tui-text-01-night);--tui-clear: var(--tui-clear-inverse);border:none;background:#323232;background:color-mix(in srgb,var(--tui-theme-color, #000) 80%,#fff)}\n"],encapsulation:2,changeDetection:0}),i})()},88808:(t,i,e)=>{e.d(i,{e:()=>s});var a=e(93317),n=e(97733),o=e(20755);const r=["tuiNavigationHeader",""],u=["*"];let s=(()=>{var t;class i{}return(t=i).ɵfac=function(i){return new(i||t)},t.ɵcmp=o.Xpm({type:t,selectors:[["header","tuiNavigationHeader",""]],hostAttrs:["tuiTheme","dark"],features:[o._Bn([(0,n.tuiAvatarOptionsProvider)({size:"s",appearance:"secondary"}),(0,n.tuiBadgeNotificationOptionsProvider)({size:"xs"}),(0,n.tuiBadgeOptionsProvider)({size:"m",appearance:"primary"}),(0,a.tuiButtonOptionsProvider)({size:"s",appearance:"flat"}),(0,a.tuiDropdownOptionsProvider)({appearance:"dropdown-navigation"})])],attrs:r,ngContentSelectors:u,decls:1,vars:0,template:function(t,i){1&t&&(o.F$t(),o.Hsn(0))},styles:["header[tuiNavigationHeader]{--tui-link: var(--tui-text-01-night);--tui-link-hover: var(--tui-text-01-night);position:sticky;top:0;z-index:1;display:flex;height:3rem;width:100%;align-items:center;gap:.25rem;padding:.5rem;box-sizing:border-box;font:var(--tui-font-text-s);line-height:1rem;background:var(--tui-theme-color, #000);color:var(--tui-text-01-night)}header[tuiNavigationHeader] [tuiNavigationLogo]{padding:0 .5rem;margin-inline-start:.25rem}header[tuiNavigationHeader] [tuiNavigationLogo] tui-icon{font-size:1rem}header[tuiNavigationHeader] [tuiButton],header[tuiNavigationHeader] [tuiBadge],header[tuiNavigationHeader] [tuiChip],header[tuiNavigationHeader] tui-badge,header[tuiNavigationHeader] tui-chip{max-width:8rem}header[tuiNavigationHeader] hr{width:2rem;margin:0 0 0 auto;border:none;visibility:hidden;flex-shrink:0}header[tuiNavigationHeader] hr~[tuiButton]{margin-right:.5rem}tui-dropdown[data-appearance=dropdown-navigation]{--tui-text-01: var(--tui-text-01-night);--tui-clear: var(--tui-clear-inverse);border:none;color:var(--tui-text-01);background:#323232;background:color-mix(in srgb,var(--tui-theme-color, #000) 80%,#fff)}\n"],encapsulation:2,changeDetection:0}),i})()},9469:(t,i,e)=>{e.d(i,{n:()=>s});var a=e(93317),n=e(97733),o=e(20755);const r=["tuiNavigationNav",""],u=["*"];let s=(()=>{var t;class i{}return(t=i).ɵfac=function(i){return new(i||t)},t.ɵcmp=o.Xpm({type:t,selectors:[["nav","tuiNavigationNav",""]],features:[o._Bn([(0,n.tuiBadgeOptionsProvider)({size:"m"}),(0,a.tuiButtonOptionsProvider)({size:"s"}),(0,n.tuiTabsOptionsProvider)({size:"m"})])],attrs:r,ngContentSelectors:u,decls:1,vars:0,template:function(t,i){1&t&&(o.F$t(),o.Hsn(0))},styles:["nav[tuiNavigationNav]{top:3rem;z-index:1;display:flex;min-height:3rem;align-items:center;gap:.5rem;box-shadow:inset 0 -1px var(--tui-base-03);padding:.25rem 1.25rem 0;margin:0 -1.25rem;box-sizing:border-box;white-space:nowrap;overflow:hidden;font:var(--tui-font-text-s);line-height:1rem;color:var(--tui-text-02);background:var(--tui-base-01)}nav[tuiNavigationNav] [tuiNavigationLogo]{font:var(--tui-font-text-m);font-weight:700;color:var(--tui-text-01)}nav[tuiNavigationNav]>a{text-decoration:none;color:inherit}nav[tuiNavigationNav]>hr{width:2rem;margin:0 0 0 auto;border:none;visibility:hidden;flex-shrink:0}nav[tuiNavigationNav] tui-icon{font-size:1rem;vertical-align:bottom}nav[tuiNavigationNav] tui-tabs,nav[tuiNavigationNav] [tuiTabs]{margin-inline-end:1rem}nav[tuiNavigationNav] tui-tabs:before,nav[tuiNavigationNav] [tuiTabs]:before{background:var(--tui-base-07)}\n"],encapsulation:2,changeDetection:0}),i})()}}]);