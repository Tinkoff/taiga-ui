(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[82864],{82864:(t,e,i)=>{i.d(e,{dA:()=>l,hd:()=>ot,xQ:()=>B});var n=i(16727),s=i(75407),a=i(10743);function o(t,e){if(1&t&&s.eu8(0,2),2&t){const t=s.XpG();s.Y8G("ngTemplateOutlet",t.content||null)}}const r=["*"];let l=(()=>{var t;class e{constructor(){this.animating=!1,this.expanded=!1}onTransitionEnd({propertyName:t}){"grid-template-rows"===t&&(this.animating=this.expanded)}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=s.VBU({type:t,selectors:[["tui-expand"]],contentQueries:function(t,e,i){if(1&t&&s.wni(i,a.KV,5,s.C4Q),2&t){let t;s.mGM(t=s.lsd())&&(e.content=t.first)}},hostVars:2,hostBindings:function(t,e){1&t&&s.bIt("transitionend.self",(function(t){return e.onTransitionEnd(t)})),2&t&&s.AVh("_expanded",e.expanded)},inputs:{expanded:"expanded"},standalone:!0,features:[s.aNF],ngContentSelectors:r,decls:3,vars:1,consts:[[1,"t-wrapper"],[3,"ngTemplateOutlet",4,"ngIf"],[3,"ngTemplateOutlet"]],template:function(t,e){1&t&&(s.NAR(),s.j41(0,"div",0),s.DNE(1,o,1,1,"ng-container",1),s.SdG(2),s.k0s()),2&t&&(s.R7$(1),s.Y8G("ngIf",e.expanded||e.animating))},dependencies:[n.bT,n.T3],styles:["[_nghost-%COMP%]{transition-property:grid-template-rows;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:grid;grid-template-rows:0fr;transition-delay:1ms}._expanded[_nghost-%COMP%]{grid-template-rows:1fr}._expanded[_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]{opacity:1;visibility:visible}.t-wrapper[_ngcontent-%COMP%]{transition-property:all;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;grid-row:1 / span 2;overflow:hidden;opacity:0;visibility:hidden}"],changeDetection:0}),e})();var u,c=i(97270),d=i(15585),p=i(50009),h=i(16057),m=i(61542),g=i(75941),f=i(26016),v=i(80572),C=i(5574),b=i(48024),y=i(43707),x=i(72616),z=i(77069),k=i(25378),w=i(13523),M=i(89711),I=i(59996),O=i(2144),P=i(55514);function T(t,e){if(1&t&&s.nrm(0,"span",1),2&t){const t=e.polymorpheusOutlet;s.Y8G("innerHTML",t,s.npT)}}class A{constructor(){this.el=(0,g.qW)(),this.hover=(0,s.WQX)(z.YO),this.vvs=(0,s.WQX)(k.yt),this.viewport=(0,s.WQX)(w.ob),this.dummy={value:"",params:{end:1,start:1}},this.options=(0,M.mo)((0,s.WQX)(w.nV),"cubic-bezier(0.35, 1.3, 0.25, 1)"),this.pointer=(0,s.WQX)(z.nV,{optional:!0}),this.accessor=(0,s.WQX)(b.cf),this.hint=(0,I.Dm)().$implicit,this.isMobile=(0,s.WQX)(m.Td),this.content=this.hint.component.component===z.NB?(0,s.vPA)(""):this.hint.content,this.theme=this.hint.el.closest("[tuiTheme]")?.getAttribute("tuiTheme"),this.appearance=(0,x.lT)(this.hint.appearance),(0,s.WQX)(k.ZE).pipe((0,O.v)((()=>this.hint.el.isConnected)),(0,P.T)((t=>this.vvs.correct(t))),(0,d.pQ)()).subscribe({next:([t,e])=>this.update(t,e),complete:()=>this.hover.toggle(!1)}),(0,s.WQX)(h.Lo).pipe((0,d.pQ)()).subscribe((t=>this.hover.toggle(t)))}onClick(t){(!t.closest("tui-hint")&&!this.hint.el.contains(t)||(0,M.GS)(this.hint.el))&&this.hover.toggle(!1)}apply(t,e,i,n){this.el.style.top=t,this.el.style.left=e,this.el.style.setProperty("--top",`${i}%`),this.el.style.setProperty("--left",`${n}%`),this.el.style.setProperty("--rotate",n&&100!==Math.ceil(n)?"0deg":"90deg")}update(t,e){const{clientHeight:i,clientWidth:n}=this.el,s=this.accessor.getClientRect(),a=this.viewport.getClientRect();if(s===p.Lo||!i||!n)return;const o=(0,f.w)(e,8,a.width-n-8),[r,l]=this.vvs.correct([s.top+s.height/2-t,s.left+s.width/2-o]);this.apply((0,v.Pp)(Math.round(t)),(0,v.Pp)(Math.round(o)),Math.round((0,f.w)(r,0,i)/i*100),Math.round((0,f.w)(l,0,n)/n*100))}}function B(){return{provide:z.L,useValue:A}}(u=A).ɵfac=function(t){return new(t||u)},u.ɵcmp=s.VBU({type:u,selectors:[["tui-hint"]],hostVars:7,hostBindings:function(t,e){1&t&&s.bIt("click",(function(t){return e.onClick(t.target)}),!1,s.EBC),2&t&&(s.BMQ("tuiTheme",e.theme),s.zvX("@tuiScaleIn",e.isMobile?e.options:e.dummy)("@tuiFadeIn",e.options),s.AVh("_untouchable",e.pointer)("_mobile",e.isMobile))},standalone:!0,features:[s.Jv_([z.om,(0,y.e)({size:"s"})]),s.aNF,s.nM4([x.bC])],ngContentSelectors:["*"],decls:2,vars:2,consts:[[3,"innerHTML",4,"polymorpheusOutlet","polymorpheusOutletContext"],[3,"innerHTML"]],template:function(t,e){1&t&&(s.NAR(),s.SdG(0),s.DNE(1,T,1,1,"span",0)),2&t&&(s.R7$(1),s.Y8G("polymorpheusOutlet",e.content())("polymorpheusOutletContext",e.hint.context))},dependencies:[I.xr],styles:['[_nghost-%COMP%]{position:absolute;max-inline-size:20rem;padding:.75rem 1rem;background:var(--tui-background-accent-1);border-radius:var(--tui-radius-l);color:var(--tui-text-primary-on-accent-1);box-sizing:border-box;font:var(--tui-font-text-s);white-space:pre-line;overflow-wrap:break-word;transform-origin:var(--left) var(--top)}[_nghost-%COMP%]:before{content:"";position:absolute;top:var(--top);left:var(--left);inline-size:.75rem;block-size:.5rem;background:inherit;-webkit-mask-image:url(\'data:image/svg+xml,<svg viewBox="0 0 12 8" xmlns="http://www.w3.org/2000/svg"><path d="M3.61336 1.69607L2.44882 2.96493C1.84795 3.61964 0.949361 3.99951 0.00053941 4C0.000359608 4 0.000179805 4 0 4C0.000179863 4 0.000359764 4 0.000539623 4C0.949362 4.00049 1.84795 4.38036 2.44882 5.03506L3.61336 6.30394C4.55981 7.33517 5.03303 7.85079 5.63254 7.96535C5.87433 8.01155 6.12436 8.01155 6.36616 7.96535C6.96567 7.85079 7.43889 7.33517 8.38534 6.30393L9.54988 5.03507C10.1511 4.37994 11.0505 4 12 4C11.0505 4 10.1511 3.62006 9.54988 2.96493L8.38534 1.69606C7.43889 0.664826 6.96567 0.149207 6.36616 0.0346517C6.12436 -0.0115506 5.87433 -0.0115506 5.63254 0.0346517C5.03303 0.149207 4.55981 0.664827 3.61336 1.69607Z" /></svg>\');mask-image:url(\'data:image/svg+xml,<svg viewBox="0 0 12 8" xmlns="http://www.w3.org/2000/svg"><path d="M3.61336 1.69607L2.44882 2.96493C1.84795 3.61964 0.949361 3.99951 0.00053941 4C0.000359608 4 0.000179805 4 0 4C0.000179863 4 0.000359764 4 0.000539623 4C0.949362 4.00049 1.84795 4.38036 2.44882 5.03506L3.61336 6.30394C4.55981 7.33517 5.03303 7.85079 5.63254 7.96535C5.87433 8.01155 6.12436 8.01155 6.36616 7.96535C6.96567 7.85079 7.43889 7.33517 8.38534 6.30393L9.54988 5.03507C10.1511 4.37994 11.0505 4 12 4C11.0505 4 10.1511 3.62006 9.54988 2.96493L8.38534 1.69606C7.43889 0.664826 6.96567 0.149207 6.36616 0.0346517C6.12436 -0.0115506 5.87433 -0.0115506 5.63254 0.0346517C5.03303 0.149207 4.55981 0.664827 3.61336 1.69607Z" /></svg>\');transform:translate(-50%,-50%) rotate(var(--rotate))}._mobile[_nghost-%COMP%]{font:var(--tui-font-text-m)}._mobile[_nghost-%COMP%]:before{inline-size:1.5rem;block-size:1.125rem;-webkit-mask-image:url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 18"><path d="M7.22854 3.81615L4.89971 6.6711C3.69732 8.14514 1.8988 9 0 9C1.8988 9 3.69732 9.85486 4.89971 11.3289L7.22854 14.1839L7.22854 14.1839C9.12123 16.5041 10.0676 17.6643 11.2665 17.922C11.75 18.026 12.25 18.026 12.7335 17.922C13.9324 17.6643 14.8788 16.5041 16.7715 14.1839L19.1003 11.3289C20.3027 9.85486 22.1012 9 24 9C22.1012 9 20.3027 8.14514 19.1003 6.6711L16.7715 3.81614C14.8788 1.49586 13.9324 0.335716 12.7335 0.0779663C12.25 -0.0259888 11.75 -0.0259888 11.2665 0.0779663C10.0676 0.335716 9.12123 1.49586 7.22854 3.81614L7.22854 3.81615Z" /></svg>\');mask-image:url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 18"><path d="M7.22854 3.81615L4.89971 6.6711C3.69732 8.14514 1.8988 9 0 9C1.8988 9 3.69732 9.85486 4.89971 11.3289L7.22854 14.1839L7.22854 14.1839C9.12123 16.5041 10.0676 17.6643 11.2665 17.922C11.75 18.026 12.25 18.026 12.7335 17.922C13.9324 17.6643 14.8788 16.5041 16.7715 14.1839L19.1003 11.3289C20.3027 9.85486 22.1012 9 24 9C22.1012 9 20.3027 8.14514 19.1003 6.6711L16.7715 3.81614C14.8788 1.49586 13.9324 0.335716 12.7335 0.0779663C12.25 -0.0259888 11.75 -0.0259888 11.2665 0.0779663C10.0676 0.335716 9.12123 1.49586 7.22854 3.81614L7.22854 3.81615Z" /></svg>\')}[_nghost-%COMP%]:not([style*=top]){visibility:hidden}._untouchable[_nghost-%COMP%]{pointer-events:none}[_nghost-%COMP%]     [tuiTitle]{margin-block-end:.75rem}[_nghost-%COMP%]     [tuiTitle] [tuiSubtitle]{color:var(--tui-text-secondary)}[_nghost-%COMP%]     [tuiTitle]+footer{margin-block-start:.75rem}[_nghost-%COMP%]     [tuiIconButton][data-appearance=icon][data-size=xs]{float:inline-end;margin-inline-end:-.25rem}[_nghost-%COMP%]     img{display:block;border-radius:var(--tui-radius-m)}[_nghost-%COMP%]     footer{display:flex;justify-content:flex-end;gap:.5rem;inline-size:18rem;margin:1rem 0 .25rem}'],data:{animation:[C.uy,C.Y0]},changeDetection:0}),(0,c.Cg)([v.PE],A.prototype,"apply",null);var _=i(87742),Q=i(54073),G=i(34770),S=i(6057),V=i(51125),L=i(61361),N=i(18331),X=i(40483),E=i(19526),W=i(52609),R=i(29735),Y=i(71789),F=i(78881),j=i(23855),$=i(42019),D=i(41096),H=i(51475),J=i(69277),Z=i(70948),U=i(73269),q=i(58212);const K=["tuiInputPhoneInternational",""];function tt(t,e){if(1&t){const t=s.RV6();s.qex(0),s.j41(1,"button",2),s.bIt("mousedown.prevent",(function(){s.eBV(t);const e=s.XpG();return s.Njj(e.interactive()&&e.open.set(!e.open()))})),s.nrm(2,"img",3),s.nI1(3,"tuiFlag"),s.k0s(),s.bVm()}if(2&t){const t=s.XpG();let e;s.R7$(1),s.AVh("t-ipi-select_readonly",t.readOnly()),s.Y8G("disabled",t.disabled())("size",t.size())("tuiAppearanceFocus",t.open()),s.BMQ("data-mode",t.mode()),s.R7$(1),s.AVh("t-ipi-flag_small","s"===t.size()),s.Y8G("alt",null==(e=t.names())?null:e[t.code()])("src",s.bMT(3,10,t.code()),s.B4B)}}const et=function(){return{standalone:!0}};function it(t,e){if(1&t){const t=s.RV6();s.j41(0,"div",7,8)(2,"tui-textfield",9)(3,"input",10),s.bIt("keydown.arrowDown",(function(){s.eBV(t);const e=s.XpG(2);let i;return s.Njj(null==(i=e.list.get(0))||null==i.nativeElement?null:i.nativeElement.focus())}))("ngModelChange",(function(e){s.eBV(t);const i=s.XpG(2);return s.Njj(i.search.set(e))})),s.k0s()()()}if(2&t){const t=s.sdS(1),e=s.XpG(2);s.R7$(2),s.Y8G("iconStart",e.icons.search)("tuiTextfieldSize","s"===e.size()?"s":"m"),s.R7$(1),s.Y8G("focused",!0)("ngModel",e.search())("ngModelOptions",s.lJ4(7,et))("placeholder",e.label())("tuiAutoFocus",!!t.closest("tui-dropdown-mobile"))}}function nt(t,e){if(1&t){const t=s.RV6();s.j41(0,"button",11),s.bIt("click",(function(){const e=s.eBV(t).$implicit,i=s.XpG(2);return s.Njj(i.onItemClick(e.iso))})),s.nrm(1,"img",12),s.nI1(2,"tuiFlag"),s.j41(3,"span",13),s.EFF(4),s.k0s(),s.j41(5,"span",14),s.EFF(6),s.k0s()()}if(2&t){const t=e.$implicit,i=s.XpG(2);s.Y8G("tuiCell",i.size()),s.R7$(1),s.AVh("t-ipi-flag_small","s"===i.size()),s.Y8G("src",s.bMT(2,6,t.iso),s.B4B),s.R7$(3),s.JRh(t.name),s.R7$(2),s.JRh(t.code)}}function st(t,e){if(1&t&&(s.qex(0),s.DNE(1,it,4,8,"div",4),s.j41(2,"tui-data-list",5),s.DNE(3,nt,7,8,"button",6),s.k0s(),s.bVm()),2&t){const t=s.XpG();s.R7$(1),s.Y8G("ngIf",t.countrySearch),s.R7$(2),s.Y8G("ngForOf",t.filtered())}}const at=/[^+\d]/g;let ot=(()=>{var t;class e extends S.OH{constructor(){super(...arguments),this.list=p.xQ,this.el=(0,g.qW)(),this.ios=(0,s.WQX)(m.mg),this.icons=(0,s.WQX)(w._Z),this.options=(0,s.WQX)(Y.L0),this.countries=(0,s.vPA)(this.options.countries),this.code=(0,s.vPA)(this.options.countryIsoCode),this.label=(0,d.ot)((0,s.WQX)(j.tj)),this.metadata=(0,d.ot)((0,J.H)(this.options.metadata)),this.names=(0,d.ot)((0,s.WQX)(j.MH)),this.open=(0,E.ED)(),this.dropdown=(0,E.WI)(null),this.search=(0,s.vPA)(""),this.size=(0,s.WQX)(X.KB).size,this.mask=(0,$.nJ)((0,s.EWP)((()=>this.computeMask(this.code(),this.metadata())))),this.masked=(0,s.EWP)((()=>(0,Q.bc)(this.value(),this.mask()||Q.oI)||this.el.value)),this.filtered=(0,s.EWP)((()=>this.countries().map((t=>({iso:t,name:this.names()?.[t]||"",code:(0,$.YN)(t,this.metadata())}))).filter((({name:t,code:e})=>(0,p.Gb)(t+e,this.search()))))),this.enabled=(0,v.hp)(E.iE,"tuiDropdownEnabled",this.interactive,{}),this.$=(0,s.WQX)(V.N).tuiActiveZoneChange.pipe((0,Z.p)((()=>!this.readOnly())),(0,d.pQ)()).subscribe((t=>{const e=`${(0,$.YN)(this.code(),this.metadata())} `,i=t?this.el.value||e:this.el.value;this.search.set(""),this.el.value=this.el.value===e?"":i})),this.countrySearch=!1,this.countryIsoCodeChange=(0,d.br)(this.code).pipe((0,U.i)(1))}set countriesValue(t){this.countries.set(t)}set isoCode(t){this.code.set(t)}set template(t){this.dropdown.set(t)}get unmasked(){const t=this.el.value.replaceAll(at,"");return t===(0,$.YN)(this.code(),this.metadata())?"":t}onPaste(t){const e=this.metadata(),i=(0,g.jr)(t)&&t.data;if(!i||!e||!t.inputType.includes("Drop")&&!t.inputType.includes("Paste"))return;const n=i.startsWith(p.QE)?i:p.QE+i,s=(0,G.Q)(n,e);s&&"TOO_SHORT"!==(0,H.M)(n)&&this.code.set(s)}onItemClick(t){this.el.focus(),this.el.value=this.unmasked,this.open.set(!1),this.code.set(t),this.search.set(""),this.el.value=(0,Q.bc)(this.el.value||(0,$.YN)(t,this.metadata()),this.mask()||Q.oI),this.onChange(this.unmasked)}computeMask(t,e){if(!e)return null;const{plugins:i,...n}=(0,G.K)({countryIsoCode:t,metadata:e,separator:this.options.separator});return{...n,plugins:[...i,(0,Q.mz)()]}}}return(t=e).ɵfac=function(){let e;return function(i){return(e||(e=s.xGo(t)))(i||t)}}(),t.ɵcmp=s.VBU({type:t,selectors:[["input","tuiInputPhoneInternational",""]],viewQuery:function(t,e){if(1&t&&(s.GBs(X.U9,5,s.C4Q),s.GBs(N.aO,5,s.aKT)),2&t){let t;s.mGM(t=s.lsd())&&(e.template=t.first),s.mGM(t=s.lsd())&&(e.list=t)}},hostAttrs:["type","tel"],hostVars:4,hostBindings:function(t,e){1&t&&s.bIt("blur",(function(){return e.onTouched()}))("input",(function(){return e.onChange(e.unmasked)}))("click",(function(){return e.open.set(!1)}))("beforeinput.capture",(function(t){return e.onPaste(t)})),2&t&&(s.Mr5("disabled",e.disabled())("value",e.masked()),s.BMQ("readonly",e.readOnly()||null)("inputmode",!e.ios&&e.open()?"none":null))},inputs:{countrySearch:"countrySearch",countriesValue:["countries","countriesValue"],isoCode:["countryIsoCode","isoCode"]},outputs:{countryIsoCodeChange:"countryIsoCodeChange"},standalone:!0,features:[s.Jv_([(0,S.SN)(t),(0,m.Nk)(""),(0,L.fl)({preventScroll:!0})]),s.Vt3,s.aNF,s.nM4([q.u,X.Mm])],attrs:K,decls:2,vars:0,consts:[[4,"tuiTextfieldContent"],[4,"tuiTextfieldDropdown"],["appearance","textfield","tabindex","-1","tuiButton","","tuiChevron","","type","button",1,"t-ipi-select",3,"disabled","size","tuiAppearanceFocus","mousedown.prevent"],[1,"t-ipi-flag",3,"alt","src"],["class","t-ipi-search",4,"ngIf"],[1,"t-ipi-options"],["tuiOption","","type","button",3,"tuiCell","click",4,"ngFor","ngForOf"],[1,"t-ipi-search"],["element",""],[3,"iconStart","tuiTextfieldSize"],["autocomplete","off","tuiTextfield","","type","text",3,"focused","ngModel","ngModelOptions","placeholder","tuiAutoFocus","keydown.arrowDown","ngModelChange"],["tuiOption","","type","button",3,"tuiCell","click"],["alt","",1,"t-ipi-flag",3,"src"],["tuiTitle",""],[1,"t-ipi-code"]],template:function(t,e){1&t&&(s.DNE(0,tt,4,12,"ng-container",0),s.DNE(1,st,4,2,"ng-container",1))},dependencies:[_.YN,_.me,_.BC,_.vS,n.Sq,n.bT,L.s8,y.p,D.n,F.k,N.uE,N.aO,R.dB,X.Bw,X.j8,X.TB,X.U9,X.PY,W.R],styles:["[tuiInputPhoneInternational][tuiInputPhoneInternational]{left:var(--t-offset);border-start-start-radius:0;border-end-start-radius:0;inline-size:calc(100% - var(--t-offset))}tui-root:has(tui-dropdown-mobile) [tuiInputPhoneInternational][tuiInputPhoneInternational]{caret-color:transparent}[tuiInputPhoneInternational][tuiInputPhoneInternational]+label{padding-left:var(--t-offset)}tui-textfield[data-size=s]{--t-offset: 4.125rem}tui-textfield[data-size=s] .t-ipi-flag{margin:0 .1875rem}tui-textfield[data-size=m]{--t-offset: 4.875rem}tui-textfield[data-size=m] .t-ipi-flag{margin:0 -.1875rem}tui-textfield[data-size=l]{--t-offset: 5.25rem}tui-textfield[data-size=l] .t-ipi-flag{margin:0 -.1875rem}.t-ipi-select{position:absolute;left:0;border-radius:inherit;border-start-end-radius:0;border-end-end-radius:0}.t-ipi-select_readonly{pointer-events:none}.t-ipi-flag{inline-size:1.75rem;block-size:1.75rem;border-radius:100%}.t-ipi-flag_small{inline-size:1.25rem;block-size:1.25rem}.t-ipi-code{color:var(--tui-text-secondary)}.t-ipi-search{position:sticky;top:0;z-index:1;background:var(--tui-background-elevation-3);padding:.375rem .375rem 0}@supports (-webkit-touch-callout: none){.t-ipi-search input:focus{animation:tuiPreventIOSScroll 1ms}}@keyframes tuiPreventIOSScroll{0%{opacity:0}to{opacity:1}}tui-dropdown-mobile .t-ipi-search{background:var(--tui-background-elevation-1)}tui-dropdown-mobile .t-ipi-options:not(:first-child){min-block-size:calc(100 * var(--tui-viewport-vh) - 8.75rem)}\n"],encapsulation:2,changeDetection:0}),e})()},41096:(t,e,i)=>{i.d(e,{n:()=>l});var n=i(80572),s=i(43707),a=i(4864),o=i(75407);let r=(()=>{var t;class e{}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=o.VBU({type:t,selectors:[["ng-component"]],hostAttrs:[1,"tui-cell"],standalone:!0,features:[o.aNF],decls:0,vars:0,template:function(t,e){},styles:["[tuiCell]{--t-padding: .125rem 1rem;--t-radius: var(--tui-radius-s);-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;position:relative;display:flex;align-items:center;box-sizing:content-box;isolation:isolate;color:var(--tui-text-primary);padding:var(--t-padding);min-block-size:var(--t-height);border-radius:var(--t-radius)}[tuiCell]:disabled{pointer-events:none}[tuiCell] [tuiAccessories]{position:relative;display:flex;max-block-size:var(--t-height);align-items:center;align-self:stretch}[tuiCell] [tuiCellActions]{position:absolute;right:0;z-index:1;padding-right:inherit}[tuiCell] [tuiCellActions]~*{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out}[tuiCell] [tuiCellActions] button,[tuiCell] [tuiCellActions] a{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;opacity:0}[tuiCell] [tuiCellActions] button:focus-visible,[tuiCell] [tuiCellActions] a:focus-visible{opacity:1}[tuiCell] [tuiSubtitle]{display:flex;align-items:center;gap:.25rem;color:var(--tui-text-secondary)}[tuiCell] [tuiTitle]{flex-shrink:7;margin-inline-end:auto;align-items:normal;text-align:start}[tuiCell] [tuiTitle]~[tuiTitle]{flex-shrink:3;margin-inline-end:0;text-align:end;align-items:flex-end}[tuiCell] [tuiTitle]~[tuiTitle][tuiFade]{align-items:flex-start}[tuiCell] tui-badge-notification[data-size=xs]{position:absolute;top:50%;transform:translateY(-50%);left:-.625rem}[tuiCell][data-size=s]{--t-height: calc(var(--tui-height-s) - .5rem);--t-padding: .125rem 1rem}[tuiCell][data-size=s] [tuiTitle]{max-block-size:100%;font:var(--tui-font-text-ui-s);gap:0}[tuiCell][data-size=s] [tuiSubtitle]{font:var(--tui-font-text-ui-xs)}[tuiCell][data-size=s]>*:not(:first-child),[tuiCell][data-size=s]>[tuiAccessories]>*:not(:first-child){margin-inline-start:.5rem}[tuiCell][data-size=s]>tui-avatar,[tuiCell][data-size=s]>tui-avatar-stack tui-avatar,[tuiCell][data-size=s]>[tuiAccessories] tui-avatar,[tuiCell][data-size=s]>[tuiAccessories] tui-avatar-stack tui-avatar{--t-size: 1.5rem;font:var(--tui-font-text-m);font-size:.5625rem}[tuiCell][data-size=m]{--t-height: calc(var(--tui-height-m) - .75rem);--t-padding: .375rem 1rem}[tuiCell][data-size=m] [tuiTitle]{font:var(--tui-font-text-ui-s);gap:.125rem}[tuiCell][data-size=m] [tuiSubtitle]{font:var(--tui-font-text-ui-xs)}[tuiCell][data-size=m]>*:not(:first-child),[tuiCell][data-size=m]>[tuiAccessories]>*:not(:first-child){margin-inline-start:.75rem}[tuiCell][data-size=m]>tui-avatar,[tuiCell][data-size=m]>tui-avatar-stack tui-avatar,[tuiCell][data-size=m]>[tuiAccessories] tui-avatar,[tuiCell][data-size=m]>[tuiAccessories] tui-avatar-stack tui-avatar{--t-size: 2rem;align-self:flex-start}[tuiCell][data-size=l]{--t-height: calc(var(--tui-height-l) - 1rem);--t-padding: .5rem 1rem;--t-radius: var(--tui-radius-l)}[tuiCell][data-size=l]>*:not(:first-child),[tuiCell][data-size=l]>[tuiAccessories]>*:not(:first-child){margin-inline-start:1rem}[tuiCell][data-size=l]>tui-avatar,[tuiCell][data-size=l]>tui-avatar-stack tui-avatar,[tuiCell][data-size=l]>[tuiAccessories] tui-avatar,[tuiCell][data-size=l]>[tuiAccessories] tui-avatar-stack tui-avatar{--t-size: 2.5rem;font:var(--tui-font-text-m);font-weight:700;align-self:flex-start}[tuiCell]:hover [tuiCellActions]~*{opacity:0}[tuiCell]:hover [tuiCellActions] button,[tuiCell]:hover [tuiCellActions] a,[tuiCell]:hover [tuiCellActions] label{opacity:1}[tuiOption] [tuiCell],tui-primitive-textfield [tuiCell]{padding:0}@media (hover: hover) and (pointer: fine){a[tuiCell]:not([tuiSurface]):hover,button[tuiCell]:not([tuiSurface]):hover,label[tuiCell]:not([tuiSurface]):hover{background:var(--tui-background-neutral-1);cursor:pointer}}\n"],encapsulation:2,changeDetection:0}),e})(),l=(()=>{var t;class e{constructor(){this.nothing=(0,n.Ty)(r),this.size=""}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵdir=o.FsC({type:t,selectors:[["","tuiCell","",5,"ng-template"]],hostAttrs:["tuiCell",""],hostVars:1,hostBindings:function(t,e){2&t&&o.BMQ("data-size",e.size||"l")},inputs:{size:["tuiCell","size"]},standalone:!0,features:[o.Jv_([(0,a.vQ)({size:"m"}),(0,s.e)({size:"s"})])]}),e})()}}]);