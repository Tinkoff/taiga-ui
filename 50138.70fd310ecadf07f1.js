(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[50138],{53913:(t,e,i)=>{i.d(e,{d:()=>l});var n=i(16727),s=i(75407),o=i(8865);function a(t,e){if(1&t&&s.eu8(0,2),2&t){const t=s.XpG();s.Y8G("ngTemplateOutlet",t.content||null)}}const r=["*"];let l=(()=>{var t;class e{constructor(){this.signal=(0,s.vPA)(!1),this.animating=(0,s.vPA)(!1)}set expanded(t){this.signal.set(t)}onTransitionEnd({propertyName:t}){"grid-template-rows"===t&&this.animating.set(this.signal())}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=s.VBU({type:t,selectors:[["tui-expand"]],contentQueries:function(t,e,i){if(1&t&&s.wni(i,o.K,5,s.C4Q),2&t){let t;s.mGM(t=s.lsd())&&(e.content=t.first)}},hostVars:2,hostBindings:function(t,e){1&t&&s.bIt("transitionend.self",(function(t){return e.onTransitionEnd(t)})),2&t&&s.AVh("_expanded",e.signal())},inputs:{expanded:"expanded"},standalone:!0,features:[s.aNF],ngContentSelectors:r,decls:3,vars:1,consts:[[1,"t-wrapper"],[3,"ngTemplateOutlet",4,"ngIf"],[3,"ngTemplateOutlet"]],template:function(t,e){1&t&&(s.NAR(),s.j41(0,"div",0),s.DNE(1,a,1,1,"ng-container",1),s.SdG(2),s.k0s()),2&t&&(s.R7$(1),s.Y8G("ngIf",e.signal()||e.animating()))},dependencies:[n.bT,n.T3],styles:["[_nghost-%COMP%]{transition-property:grid-template-rows,padding;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:grid;grid-template-rows:0fr;transition-delay:1ms}[_nghost-%COMP%]:not(._expanded){padding-block:0}._expanded[_nghost-%COMP%]{grid-template-rows:1fr}._expanded[_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]{opacity:1;visibility:visible}.t-wrapper[_ngcontent-%COMP%]{transition-property:all;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;grid-row:1 / span 2;overflow:hidden;opacity:0;visibility:hidden}"],changeDetection:0}),e})()},50138:(t,e,i)=>{i.d(e,{o3:()=>h,S3:()=>d,dA:()=>s.d,hd:()=>ut,xQ:()=>S});var n=i(8865),s=i(53913),o=i(75407),a=i(50009),r=i(89512),l=i(35626),u=i(43707),c=i(78881);let d=(()=>{var t;class e{constructor(){this.accordion=(0,o.WQX)(h),this.size=(0,l.hp)(u.p,"size",this.accordion.size),this.tuiAccordion="",this.tuiAccordionChange=new o.bkB,this.open=(0,l.hp)(c.k,"tuiChevron",(0,o.vPA)(!1))}ngOnChanges(){this.open.set(!!this.tuiAccordion),this.accordion.toggle(this,this.open())}toggle(){this.open.set(!this.open()),this.tuiAccordionChange.emit(this.open()),this.accordion.toggle(this,this.open())}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵdir=o.FsC({type:t,selectors:[["button","tuiAccordion",""]],hostAttrs:["tuiButton","","tuiAccordion","","type","button"],hostVars:2,hostBindings:function(t,e){1&t&&o.bIt("click",(function(){return e.toggle()})),2&t&&o.AVh("_open",e.open())},inputs:{tuiAccordion:"tuiAccordion"},outputs:{tuiAccordionChange:"tuiAccordionChange"},standalone:!0,features:[o.Jv_([(0,u.e)({appearance:"outline-grayscale"})]),o.OA$,o.nM4([u.p,c.k])]}),e})();const p=["*"];let h=(()=>{var t;class e{constructor(){this.expands=a.xQ,this.directives=a.xQ,this.closeOthers=!0,this.size=(0,o.vPA)("l")}set sizeSetter(t){this.size.set(t)}toggle(t,e){this.closeOthers&&e&&(this.expands.forEach((t=>{t.expanded=!1})),this.directives.forEach((e=>{e!==t&&(e.open.set(!1),e.tuiAccordionChange.emit(!1))}))),this.expands.get(this.directives.toArray().indexOf(t)).expanded=e}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=o.VBU({type:t,selectors:[["tui-accordion"]],contentQueries:function(t,e,i){if(1&t&&(o.wni(i,s.d,6),o.wni(i,d,6)),2&t){let t;o.mGM(t=o.lsd())&&(e.expands=t),o.mGM(t=o.lsd())&&(e.directives=t)}},hostVars:1,hostBindings:function(t,e){2&t&&o.BMQ("data-size",e.size())},inputs:{closeOthers:"closeOthers",sizeSetter:["size","sizeSetter"]},standalone:!0,features:[o.Jv_([(0,r.rm)({orientation:"vertical",collapsed:!0})]),o.aNF,o.nM4([r.w7])],ngContentSelectors:p,decls:1,vars:0,template:function(t,e){1&t&&(o.NAR(),o.SdG(0))},styles:["tui-accordion{inline-size:-webkit-fill-available;inline-size:-moz-available;inline-size:stretch;border-radius:var(--t-group-radius);overflow:hidden}tui-accordion>[tuiAccordion]{text-align:start;justify-content:flex-start}tui-accordion>[tuiAccordion]:last-of-type:not(._open){-webkit-mask-image:var(--t-group-mask-end);mask-image:var(--t-group-mask-end);border-end-start-radius:inherit;border-end-end-radius:inherit}tui-accordion>[tuiAccordion]:first-child{border-start-start-radius:inherit!important;border-start-end-radius:inherit!important}tui-accordion>[tuiAccordion]:first-child:last-of-type:not(._open){-webkit-mask:none;mask:none}tui-accordion>[tuiAccordion]:after{margin-inline-start:auto!important}tui-accordion>[tuiAccordion]._open+tui-expand{visibility:visible}tui-accordion>tui-expand{visibility:hidden;min-block-size:1px!important;padding:1.25rem;font:var(--tui-font-text-m);transition-property:grid-template-rows,padding,visibility!important;box-shadow:inset 0 0 0 1px var(--tui-border-normal)}tui-accordion>tui-expand:last-child{border-end-start-radius:inherit!important;border-end-end-radius:inherit!important}tui-accordion[data-size=m]>tui-expand{padding:1rem;font:var(--tui-font-text-s)}tui-accordion[data-size=s]>tui-expand{padding:.625rem;font:var(--tui-font-text-s)}\n"],encapsulation:2,changeDetection:0}),e})();s.d,n.K;var m,g=i(97270),f=i(15585),v=i(16057),C=i(61542),b=i(75941),x=i(26016),y=i(80572),z=i(5574),k=i(48024),w=i(72616),A=i(77069),M=i(25378),O=i(13523),P=i(89711),I=i(59996),T=i(2144),_=i(55514);function B(t,e){if(1&t&&o.nrm(0,"span",1),2&t){const t=e.polymorpheusOutlet;o.Y8G("innerHTML",t,o.npT)}}class Q{constructor(){this.el=(0,b.qW)(),this.hover=(0,o.WQX)(A.YO),this.vvs=(0,o.WQX)(M.yt),this.dummy={value:"",params:{end:1,start:1}},this.options=(0,P.mo)((0,o.WQX)(O.nV),"cubic-bezier(0.35, 1.3, 0.25, 1)"),this.pointer=(0,o.WQX)(A.nV,{optional:!0}),this.accessor=(0,o.WQX)(k.cf),this.hint=(0,I.Dm)().$implicit,this.isMobile=(0,o.WQX)(C.Td),this.content=this.hint.component.component===A.NB?(0,o.vPA)(""):this.hint.content,this.theme=this.hint.el.closest("[tuiTheme]")?.getAttribute("tuiTheme"),this.appearance=(0,w.lT)(this.hint.appearance),(0,o.WQX)(M.ZE).pipe((0,T.v)((()=>this.hint.el.isConnected)),(0,_.T)((t=>this.vvs.correct(t))),(0,f.pQ)()).subscribe({next:([t,e])=>this.update(t,e),complete:()=>this.hover.toggle(!1)}),(0,o.WQX)(v.Lo).pipe((0,f.pQ)()).subscribe((t=>this.hover.toggle(t)))}onClick(t){(!t.closest("tui-hint")&&!this.hint.el.contains(t)||(0,P.GS)(this.hint.el))&&this.hover.toggle(!1)}apply(t,e,i,n){this.el.style.top=t,this.el.style.left=e,this.el.style.setProperty("--top",`${i}%`),this.el.style.setProperty("--left",`${n}%`),this.el.style.setProperty("--rotate",n&&100!==Math.ceil(n)?"0deg":"90deg")}update(t,e){const{clientHeight:i,clientWidth:n}=this.el,s=this.accessor.getClientRect();if(s===a.Lo||!i||!n)return;const[o,r]=this.vvs.correct([s.top+s.height/2-t,s.left+s.width/2-e]);this.apply((0,y.Pp)(Math.round(t)),(0,y.Pp)(Math.round(e)),Math.round((0,x.w)(o,0,i)/i*100),Math.round((0,x.w)(r,0,n)/n*100))}}function S(){return{provide:A.L,useValue:Q}}(m=Q).ɵfac=function(t){return new(t||m)},m.ɵcmp=o.VBU({type:m,selectors:[["tui-hint"]],hostVars:7,hostBindings:function(t,e){1&t&&o.bIt("click",(function(t){return e.onClick(t.target)}),!1,o.EBC),2&t&&(o.BMQ("tuiTheme",e.theme),o.zvX("@tuiScaleIn",e.isMobile?e.options:e.dummy)("@tuiFadeIn",e.options),o.AVh("_untouchable",e.pointer)("_mobile",e.isMobile))},standalone:!0,features:[o.Jv_([A.om,(0,u.e)({size:"s"})]),o.aNF,o.nM4([w.bC])],ngContentSelectors:["*"],decls:2,vars:2,consts:[[3,"innerHTML",4,"polymorpheusOutlet","polymorpheusOutletContext"],[3,"innerHTML"]],template:function(t,e){1&t&&(o.NAR(),o.SdG(0),o.DNE(1,B,1,1,"span",0)),2&t&&(o.R7$(1),o.Y8G("polymorpheusOutlet",e.content())("polymorpheusOutletContext",e.hint.context))},dependencies:[I.xr],styles:['[_nghost-%COMP%]{position:absolute;max-inline-size:20rem;padding:.75rem 1rem;background:var(--tui-background-accent-1);border-radius:var(--tui-radius-l);color:var(--tui-text-primary-on-accent-1);box-sizing:border-box;font:var(--tui-font-text-s);white-space:pre-line;overflow-wrap:break-word;transform-origin:var(--left) var(--top)}[_nghost-%COMP%]:before{content:"";position:absolute;top:var(--top);left:var(--left);inline-size:.75rem;block-size:.5rem;background:inherit;-webkit-mask-image:url(\'data:image/svg+xml,<svg viewBox="0 0 12 8" xmlns="http://www.w3.org/2000/svg"><path d="M3.61336 1.69607L2.44882 2.96493C1.84795 3.61964 0.949361 3.99951 0.00053941 4C0.000359608 4 0.000179805 4 0 4C0.000179863 4 0.000359764 4 0.000539623 4C0.949362 4.00049 1.84795 4.38036 2.44882 5.03506L3.61336 6.30394C4.55981 7.33517 5.03303 7.85079 5.63254 7.96535C5.87433 8.01155 6.12436 8.01155 6.36616 7.96535C6.96567 7.85079 7.43889 7.33517 8.38534 6.30393L9.54988 5.03507C10.1511 4.37994 11.0505 4 12 4C11.0505 4 10.1511 3.62006 9.54988 2.96493L8.38534 1.69606C7.43889 0.664826 6.96567 0.149207 6.36616 0.0346517C6.12436 -0.0115506 5.87433 -0.0115506 5.63254 0.0346517C5.03303 0.149207 4.55981 0.664827 3.61336 1.69607Z" /></svg>\');mask-image:url(\'data:image/svg+xml,<svg viewBox="0 0 12 8" xmlns="http://www.w3.org/2000/svg"><path d="M3.61336 1.69607L2.44882 2.96493C1.84795 3.61964 0.949361 3.99951 0.00053941 4C0.000359608 4 0.000179805 4 0 4C0.000179863 4 0.000359764 4 0.000539623 4C0.949362 4.00049 1.84795 4.38036 2.44882 5.03506L3.61336 6.30394C4.55981 7.33517 5.03303 7.85079 5.63254 7.96535C5.87433 8.01155 6.12436 8.01155 6.36616 7.96535C6.96567 7.85079 7.43889 7.33517 8.38534 6.30393L9.54988 5.03507C10.1511 4.37994 11.0505 4 12 4C11.0505 4 10.1511 3.62006 9.54988 2.96493L8.38534 1.69606C7.43889 0.664826 6.96567 0.149207 6.36616 0.0346517C6.12436 -0.0115506 5.87433 -0.0115506 5.63254 0.0346517C5.03303 0.149207 4.55981 0.664827 3.61336 1.69607Z" /></svg>\');transform:translate(-50%,-50%) rotate(var(--rotate))}._mobile[_nghost-%COMP%]{font:var(--tui-font-text-m)}._mobile[_nghost-%COMP%]:before{inline-size:1.5rem;block-size:1.125rem;-webkit-mask-image:url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 18"><path d="M7.22854 3.81615L4.89971 6.6711C3.69732 8.14514 1.8988 9 0 9C1.8988 9 3.69732 9.85486 4.89971 11.3289L7.22854 14.1839L7.22854 14.1839C9.12123 16.5041 10.0676 17.6643 11.2665 17.922C11.75 18.026 12.25 18.026 12.7335 17.922C13.9324 17.6643 14.8788 16.5041 16.7715 14.1839L19.1003 11.3289C20.3027 9.85486 22.1012 9 24 9C22.1012 9 20.3027 8.14514 19.1003 6.6711L16.7715 3.81614C14.8788 1.49586 13.9324 0.335716 12.7335 0.0779663C12.25 -0.0259888 11.75 -0.0259888 11.2665 0.0779663C10.0676 0.335716 9.12123 1.49586 7.22854 3.81614L7.22854 3.81615Z" /></svg>\');mask-image:url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 18"><path d="M7.22854 3.81615L4.89971 6.6711C3.69732 8.14514 1.8988 9 0 9C1.8988 9 3.69732 9.85486 4.89971 11.3289L7.22854 14.1839L7.22854 14.1839C9.12123 16.5041 10.0676 17.6643 11.2665 17.922C11.75 18.026 12.25 18.026 12.7335 17.922C13.9324 17.6643 14.8788 16.5041 16.7715 14.1839L19.1003 11.3289C20.3027 9.85486 22.1012 9 24 9C22.1012 9 20.3027 8.14514 19.1003 6.6711L16.7715 3.81614C14.8788 1.49586 13.9324 0.335716 12.7335 0.0779663C12.25 -0.0259888 11.75 -0.0259888 11.2665 0.0779663C10.0676 0.335716 9.12123 1.49586 7.22854 3.81614L7.22854 3.81615Z" /></svg>\')}[_nghost-%COMP%]:not([style*=top]){visibility:hidden}._untouchable[_nghost-%COMP%]{pointer-events:none}[_nghost-%COMP%]     [tuiTitle]{margin-block-end:.75rem}[_nghost-%COMP%]     [tuiTitle] [tuiSubtitle]{color:var(--tui-text-secondary)}[_nghost-%COMP%]     [tuiTitle]+footer{margin-block-start:.75rem}[_nghost-%COMP%]     [tuiIconButton][data-appearance=icon][data-size=xs]{float:inline-end;margin-inline-end:-.25rem}[_nghost-%COMP%]     img{display:block;border-radius:var(--tui-radius-m)}[_nghost-%COMP%]     footer{display:flex;justify-content:flex-end;gap:.5rem;inline-size:18rem;margin:1rem 0 .25rem}'],data:{animation:[z.uy,z.Y0]},changeDetection:0}),(0,g.Cg)([y.PE],Q.prototype,"apply",null);var G=i(16727),V=i(87742),N=i(54073),L=i(34770),E=i(6057),X=i(51125),W=i(61361),F=i(18331),R=i(40483),Y=i(19526),j=i(52609),$=i(29735),D=i(71789),J=i(23855),H=i(42019),U=i(41096),Z=i(51475),q=i(69277),K=i(70948),tt=i(73269),et=i(58212);const it=["tuiInputPhoneInternational",""];function nt(t,e){if(1&t){const t=o.RV6();o.qex(0),o.j41(1,"button",2),o.bIt("mousedown.prevent",(function(){o.eBV(t);const e=o.XpG();return o.Njj(e.interactive()&&e.open.set(!e.open()))})),o.nrm(2,"img",3),o.nI1(3,"tuiFlag"),o.k0s(),o.bVm()}if(2&t){const t=o.XpG();let e;o.R7$(1),o.AVh("t-ipi-select_readonly",t.readOnly()),o.Y8G("disabled",t.disabled())("size",t.size())("tuiAppearanceFocus",t.open()),o.BMQ("data-mode",t.mode()),o.R7$(1),o.AVh("t-ipi-flag_small","s"===t.size()),o.Y8G("alt",null==(e=t.names())?null:e[t.code()])("src",o.bMT(3,10,t.code()),o.B4B)}}const st=function(){return{standalone:!0}};function ot(t,e){if(1&t){const t=o.RV6();o.j41(0,"div",7,8)(2,"tui-textfield",9)(3,"input",10),o.bIt("keydown.arrowDown",(function(){o.eBV(t);const e=o.XpG(2);let i;return o.Njj(null==(i=e.list.get(0))||null==i.nativeElement?null:i.nativeElement.focus())}))("ngModelChange",(function(e){o.eBV(t);const i=o.XpG(2);return o.Njj(i.search.set(e))})),o.k0s()()()}if(2&t){const t=o.sdS(1),e=o.XpG(2);o.R7$(2),o.Y8G("iconStart",e.icons.search)("tuiTextfieldSize","s"===e.size()?"s":"m"),o.R7$(1),o.Y8G("focused",!0)("ngModel",e.search())("ngModelOptions",o.lJ4(7,st))("placeholder",e.label())("tuiAutoFocus",!!t.closest("tui-dropdown-mobile"))}}function at(t,e){if(1&t){const t=o.RV6();o.j41(0,"button",11),o.bIt("click",(function(){const e=o.eBV(t).$implicit,i=o.XpG(2);return o.Njj(i.onItemClick(e.iso))})),o.nrm(1,"img",12),o.nI1(2,"tuiFlag"),o.j41(3,"span",13),o.EFF(4),o.k0s(),o.j41(5,"span",14),o.EFF(6),o.k0s()()}if(2&t){const t=e.$implicit,i=o.XpG(2);o.Y8G("tuiCell",i.size()),o.R7$(1),o.AVh("t-ipi-flag_small","s"===i.size()),o.Y8G("src",o.bMT(2,6,t.iso),o.B4B),o.R7$(3),o.JRh(t.name),o.R7$(2),o.JRh(t.code)}}function rt(t,e){if(1&t&&(o.qex(0),o.DNE(1,ot,4,8,"div",4),o.j41(2,"tui-data-list",5),o.DNE(3,at,7,8,"button",6),o.k0s(),o.bVm()),2&t){const t=o.XpG();o.R7$(1),o.Y8G("ngIf",t.countrySearch),o.R7$(2),o.Y8G("ngForOf",t.filtered())}}const lt=/[^+\d]/g;let ut=(()=>{var t;class e extends E.OH{constructor(){super(...arguments),this.list=a.xQ,this.el=(0,b.qW)(),this.ios=(0,o.WQX)(C.mg),this.icons=(0,o.WQX)(O._Z),this.options=(0,o.WQX)(D.L0),this.countries=(0,o.vPA)(this.options.countries),this.code=(0,o.vPA)(this.options.countryIsoCode),this.label=(0,f.ot)((0,o.WQX)(J.tj)),this.metadata=(0,f.ot)((0,q.H)(this.options.metadata)),this.names=(0,f.ot)((0,o.WQX)(J.MH)),this.open=(0,Y.ED)(),this.dropdown=(0,Y.WI)(null),this.search=(0,o.vPA)(""),this.size=(0,o.WQX)(R.KB).size,this.mask=(0,H.nJ)((0,o.EWP)((()=>this.computeMask(this.code(),this.metadata())))),this.masked=(0,o.EWP)((()=>(0,N.bc)(this.value(),this.mask()||N.oI)||this.el.value)),this.filtered=(0,o.EWP)((()=>this.countries().map((t=>({iso:t,name:this.names()?.[t]||"",code:(0,H.YN)(t,this.metadata())}))).filter((({name:t,code:e})=>(0,a.Gb)(t+e,this.search()))))),this.enabled=(0,y.hp)(Y.iE,"tuiDropdownEnabled",this.interactive,{}),this.$=(0,o.WQX)(X.N).tuiActiveZoneChange.pipe((0,K.p)((()=>!this.readOnly())),(0,f.pQ)()).subscribe((t=>{const e=`${(0,H.YN)(this.code(),this.metadata())} `,i=t?this.el.value||e:this.el.value;this.search.set(""),this.el.value=this.el.value===e?"":i})),this.countrySearch=!1,this.countryIsoCodeChange=(0,f.br)(this.code).pipe((0,tt.i)(1))}set countriesValue(t){this.countries.set(t)}set isoCode(t){this.code.set(t)}set template(t){this.dropdown.set(t)}get unmasked(){const t=this.el.value.replaceAll(lt,"");return t===(0,H.YN)(this.code(),this.metadata())?"":t}onPaste(t){const e=this.metadata(),i=(0,b.jr)(t)&&t.data;if(!i||!e||!t.inputType.includes("Drop")&&!t.inputType.includes("Paste"))return;const n=i.startsWith(a.QE)?i:a.QE+i,s=(0,L.Q)(n,e);s&&"TOO_SHORT"!==(0,Z.M)(n)&&this.code.set(s)}onItemClick(t){this.el.focus(),this.el.value=this.unmasked,this.open.set(!1),this.code.set(t),this.search.set(""),this.el.value=(0,N.bc)(this.el.value||(0,H.YN)(t,this.metadata()),this.mask()||N.oI),this.onChange(this.unmasked)}computeMask(t,e){if(!e)return null;const{plugins:i,...n}=(0,L.K)({countryIsoCode:t,metadata:e,separator:this.options.separator});return{...n,plugins:[...i,(0,N.mz)()]}}}return(t=e).ɵfac=function(){let e;return function(i){return(e||(e=o.xGo(t)))(i||t)}}(),t.ɵcmp=o.VBU({type:t,selectors:[["input","tuiInputPhoneInternational",""]],viewQuery:function(t,e){if(1&t&&(o.GBs(R.U9,5,o.C4Q),o.GBs(F.aO,5,o.aKT)),2&t){let t;o.mGM(t=o.lsd())&&(e.template=t.first),o.mGM(t=o.lsd())&&(e.list=t)}},hostAttrs:["type","tel"],hostVars:4,hostBindings:function(t,e){1&t&&o.bIt("blur",(function(){return e.onTouched()}))("input",(function(){return e.onChange(e.unmasked)}))("click",(function(){return e.open.set(!1)}))("beforeinput.capture",(function(t){return e.onPaste(t)})),2&t&&(o.Mr5("disabled",e.disabled())("value",e.masked()),o.BMQ("readonly",e.readOnly()||null)("inputmode",!e.ios&&e.open()?"none":null))},inputs:{countrySearch:"countrySearch",countriesValue:["countries","countriesValue"],isoCode:["countryIsoCode","isoCode"]},outputs:{countryIsoCodeChange:"countryIsoCodeChange"},standalone:!0,features:[o.Jv_([(0,E.SN)(t),(0,C.Nk)(""),(0,W.fl)({preventScroll:!0})]),o.Vt3,o.aNF,o.nM4([et.u,R.Mm])],attrs:it,decls:2,vars:0,consts:[[4,"tuiTextfieldContent"],[4,"tuiTextfieldDropdown"],["appearance","textfield","tabindex","-1","tuiButton","","tuiChevron","","type","button",1,"t-ipi-select",3,"disabled","size","tuiAppearanceFocus","mousedown.prevent"],[1,"t-ipi-flag",3,"alt","src"],["class","t-ipi-search",4,"ngIf"],[1,"t-ipi-options"],["tuiOption","","type","button",3,"tuiCell","click",4,"ngFor","ngForOf"],[1,"t-ipi-search"],["element",""],[3,"iconStart","tuiTextfieldSize"],["autocomplete","off","tuiTextfield","","type","text",3,"focused","ngModel","ngModelOptions","placeholder","tuiAutoFocus","keydown.arrowDown","ngModelChange"],["tuiOption","","type","button",3,"tuiCell","click"],["alt","",1,"t-ipi-flag",3,"src"],["tuiTitle",""],[1,"t-ipi-code"]],template:function(t,e){1&t&&(o.DNE(0,nt,4,12,"ng-container",0),o.DNE(1,rt,4,2,"ng-container",1))},dependencies:[V.YN,V.me,V.BC,V.vS,G.Sq,G.bT,W.s8,u.p,U.n,c.k,F.uE,F.aO,$.dB,R.Bw,R.j8,R.TB,R.U9,R.PY,j.R],styles:["[tuiInputPhoneInternational][tuiInputPhoneInternational]{left:var(--t-offset);border-start-start-radius:0;border-end-start-radius:0;inline-size:calc(100% - var(--t-offset))}tui-root:has(tui-dropdown-mobile) [tuiInputPhoneInternational][tuiInputPhoneInternational]{caret-color:transparent}[tuiInputPhoneInternational][tuiInputPhoneInternational]+label{padding-left:var(--t-offset)}tui-textfield[data-size=s]{--t-offset: 4.125rem}tui-textfield[data-size=s] .t-ipi-flag{margin:0 .1875rem}tui-textfield[data-size=m]{--t-offset: 4.875rem}tui-textfield[data-size=m] .t-ipi-flag{margin:0 -.1875rem}tui-textfield[data-size=l]{--t-offset: 5.25rem}tui-textfield[data-size=l] .t-ipi-flag{margin:0 -.1875rem}.t-ipi-select{position:absolute;left:0;border-radius:inherit;border-start-end-radius:0;border-end-end-radius:0}.t-ipi-select_readonly{pointer-events:none}.t-ipi-flag{inline-size:1.75rem;block-size:1.75rem;border-radius:100%}.t-ipi-flag_small{inline-size:1.25rem;block-size:1.25rem}.t-ipi-code{color:var(--tui-text-secondary)}.t-ipi-search{position:sticky;top:0;z-index:1;background:var(--tui-background-elevation-3);padding:.375rem .375rem 0}@supports (-webkit-touch-callout: none){.t-ipi-search input:focus{animation:tuiPreventIOSScroll 1ms}}@keyframes tuiPreventIOSScroll{0%{opacity:0}to{opacity:1}}tui-dropdown-mobile .t-ipi-search{background:var(--tui-background-elevation-1)}tui-dropdown-mobile .t-ipi-options:not(:first-child){min-block-size:calc(100 * var(--tui-viewport-vh) - 8.75rem)}\n"],encapsulation:2,changeDetection:0}),e})()},41096:(t,e,i)=>{i.d(e,{n:()=>l});var n=i(80572),s=i(43707),o=i(4864),a=i(75407);let r=(()=>{var t;class e{}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=a.VBU({type:t,selectors:[["ng-component"]],hostAttrs:[1,"tui-cell"],standalone:!0,features:[a.aNF],decls:0,vars:0,template:function(t,e){},styles:["[tuiCell]{--t-padding: .125rem 1rem;--t-radius: var(--tui-radius-s);-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;position:relative;display:flex;align-items:center;box-sizing:content-box;isolation:isolate;color:var(--tui-text-primary);padding:var(--t-padding);min-block-size:var(--t-height);border-radius:var(--t-radius)}[tuiCell]:disabled{pointer-events:none}[tuiCell] [tuiAccessories]{position:relative;display:flex;max-block-size:var(--t-height);align-items:center;align-self:stretch}[tuiCell] [tuiCellActions]{position:absolute;right:0;z-index:1;padding-right:inherit}[tuiCell] [tuiCellActions]~*{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out}[tuiCell] [tuiCellActions] button,[tuiCell] [tuiCellActions] a{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;opacity:0}[tuiCell] [tuiCellActions] button:focus-visible,[tuiCell] [tuiCellActions] a:focus-visible{opacity:1}[tuiCell] [tuiSubtitle]{display:flex;align-items:center;gap:.25rem;color:var(--tui-text-secondary)}[tuiCell] [tuiTitle]{flex-shrink:7;margin-inline-end:auto;align-items:normal;text-align:start}[tuiCell] [tuiTitle]~[tuiTitle]{flex-shrink:3;margin-inline-end:0;text-align:end;align-items:flex-end}[tuiCell] [tuiTitle]~[tuiTitle][tuiFade]{align-items:flex-start}[tuiCell] tui-badge-notification[data-size=xs]{position:absolute;top:50%;transform:translateY(-50%);left:-.625rem}[tuiCell][data-size=s]{--t-height: calc(var(--tui-height-s) - .5rem);--t-padding: .125rem 1rem}[tuiCell][data-size=s] [tuiTitle]{max-block-size:100%;font:var(--tui-font-text-ui-s);gap:0}[tuiCell][data-size=s] [tuiSubtitle]{font:var(--tui-font-text-ui-xs)}[tuiCell][data-size=s]>*:not(:first-child),[tuiCell][data-size=s]>[tuiAccessories]>*:not(:first-child){margin-inline-start:.5rem}[tuiCell][data-size=s]>tui-avatar,[tuiCell][data-size=s]>tui-avatar-stack tui-avatar,[tuiCell][data-size=s]>[tuiAccessories] tui-avatar,[tuiCell][data-size=s]>[tuiAccessories] tui-avatar-stack tui-avatar{--t-size: 1.5rem;font:var(--tui-font-text-m);font-size:.5625rem}[tuiCell][data-size=m]{--t-height: calc(var(--tui-height-m) - .75rem);--t-padding: .375rem 1rem}[tuiCell][data-size=m] [tuiTitle]{font:var(--tui-font-text-ui-s);gap:.125rem}[tuiCell][data-size=m] [tuiSubtitle]{font:var(--tui-font-text-ui-xs)}[tuiCell][data-size=m]>*:not(:first-child),[tuiCell][data-size=m]>[tuiAccessories]>*:not(:first-child){margin-inline-start:.75rem}[tuiCell][data-size=m]>tui-avatar,[tuiCell][data-size=m]>tui-avatar-stack tui-avatar,[tuiCell][data-size=m]>[tuiAccessories] tui-avatar,[tuiCell][data-size=m]>[tuiAccessories] tui-avatar-stack tui-avatar{--t-size: 2rem;align-self:flex-start}[tuiCell][data-size=l]{--t-height: calc(var(--tui-height-l) - 1rem);--t-padding: .5rem 1rem;--t-radius: var(--tui-radius-l)}[tuiCell][data-size=l]>*:not(:first-child),[tuiCell][data-size=l]>[tuiAccessories]>*:not(:first-child){margin-inline-start:1rem}[tuiCell][data-size=l]>tui-avatar,[tuiCell][data-size=l]>tui-avatar-stack tui-avatar,[tuiCell][data-size=l]>[tuiAccessories] tui-avatar,[tuiCell][data-size=l]>[tuiAccessories] tui-avatar-stack tui-avatar{--t-size: 2.5rem;font:var(--tui-font-text-m);font-weight:700;align-self:flex-start}[tuiCell]:hover [tuiCellActions]~*{opacity:0}[tuiCell]:hover [tuiCellActions] button,[tuiCell]:hover [tuiCellActions] a,[tuiCell]:hover [tuiCellActions] label{opacity:1}[tuiOption] [tuiCell],tui-primitive-textfield [tuiCell]{padding:0}@media (hover: hover) and (pointer: fine){a[tuiCell]:not([tuiSurface]):hover,button[tuiCell]:not([tuiSurface]):hover,label[tuiCell]:not([tuiSurface]):hover{background:var(--tui-background-neutral-1);cursor:pointer}}\n"],encapsulation:2,changeDetection:0}),e})(),l=(()=>{var t;class e{constructor(){this.nothing=(0,n.Ty)(r),this.size=""}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵdir=a.FsC({type:t,selectors:[["","tuiCell","",5,"ng-template"]],hostAttrs:["tuiCell",""],hostVars:1,hostBindings:function(t,e){2&t&&a.BMQ("data-size",e.size||"l")},inputs:{size:["tuiCell","size"]},standalone:!0,features:[a.Jv_([(0,o.vQ)({size:"m"}),(0,s.e)({size:"s"})])]}),e})()}}]);