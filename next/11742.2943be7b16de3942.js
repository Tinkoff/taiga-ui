(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[11742],{11742:(t,e,n)=>{n.d(e,{V2:()=>Xt,KB:()=>m,hK:()=>C,c4:()=>S,XI:()=>ie,wC:()=>ne,hw:()=>oe,kA:()=>$,o5:()=>Kt,li:()=>X,yS:()=>et,IU:()=>L,s6:()=>Ot,dw:()=>ht,PW:()=>q,PU:()=>It,I1:()=>W,Zh:()=>bt,PT:()=>Bt});var i=n(4594),o=n(35548),s=n(43017),r=n(24735);const a=(0,s.N1)((0,r.vv)("showHideText")),c=(0,s.N1)((0,r.vv)("paginationTexts"));var u=n(32962),h=n(47907),l=n(68018);const d=(0,s.JN)({icons:{hide:"@tui.eye-off",show:"@tui.eye",drag:"@tui.grip-vertical"}});var p=n(208);function g(t,e){if(1&t&&(o.ynx(0),o._uU(1),o.BQk()),2&t){const t=e.polymorpheusOutlet;o.xp6(1),o.hij(" ",t," ")}}const f=function(t,e){return{$implicit:t,index:e}};function b(t,e){if(1&t){const t=o.EpF();o.TgZ(0,"tui-tile")(1,"div",2)(2,"div",3),o._UZ(3,"tui-icon",4),o.YNc(4,g,2,1,"ng-container",5),o.qZA(),o.TgZ(5,"button",6),o.NdJ("click",(function(){const e=o.CHM(t).$implicit,n=o.oxw();return o.KtG(n.toggle(e))}))("keydown.arrowDown.prevent",(function(){const e=o.CHM(t).index,n=o.oxw();return o.KtG(n.move(e,1))}))("keydown.arrowUp.prevent",(function(){const e=o.CHM(t).index,n=o.oxw();return o.KtG(n.move(e,-1))})),o._uU(6),o.ALo(7,"async"),o.qZA()()()}if(2&t){const t=e.$implicit,n=e.index,i=o.oxw();o.Udp("order",i.order.get(n)),o.xp6(1),o.ekj("t-item_disabled",!i.isEnabled(t)),o.xp6(2),o.Q6J("icon",i.options.icons.drag),o.xp6(1),o.Q6J("polymorpheusOutlet",i.content)("polymorpheusOutletContext",o.WLB(11,f,t,n)),o.xp6(1),o.Q6J("iconStart",i.getIcon(t)),o.xp6(1),o.hij(" ",o.lcZ(7,9,i.showHideText$)," ")}}let m=(()=>{var t;class e{constructor(){this.dragging=!1,this.order=new Map,this.unsortedItems=[],this.options=(0,o.f3M)(d),this.showHideText$=(0,o.f3M)(a),this.enabled=[],this.itemsChange=new o.vpe,this.enabledChange=new o.vpe,this.content=({$implicit:t})=>String(t)}set items(t){t.length===this.unsortedItems.length&&t.every((t=>this.unsortedItems.includes(t)))||(this.unsortedItems=t)}onDrag(){this.dragging=!0}onDrop(){this.dragging&&(this.dragging=!1,this.updateItems())}isEnabled(t){return this.enabled.includes(t)}getIcon(t){return this.isEnabled(t)?this.options.icons.hide:this.options.icons.show}toggle(t){this.enabled=this.isEnabled(t)?this.enabled.filter((e=>e!==t)):this.enabled.concat(t),this.updateEnabled()}move(t,e){const n=this.order.get(t)??t;if(!n&&e<0||n===this.unsortedItems.length-1&&e>0)return;const i=n+e,o=Array.from(this.order.values()).findIndex((t=>t===i));this.order.set(t,i),this.order.set(o,n),this.order=new Map(this.order),this.updateItems()}getSortedItems(){const t=new Array(this.unsortedItems.length);return this.unsortedItems.forEach(((e,n)=>{t[this.order.get(n)??n]=e})),t}updateItems(){this.itemsChange.emit(this.getSortedItems()),this.updateEnabled()}updateEnabled(){const t=this.getSortedItems().filter((t=>this.isEnabled(t)));this.enabled=t,this.enabledChange.emit(t)}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=o.Xpm({type:t,selectors:[["tui-reorder"]],hostBindings:function(t,e){1&t&&o.NdJ("focusout.stop",(function(){return 0}))("pointerdown.silent",(function(){return e.onDrag()}))("pointerup.silent",(function(){return e.onDrop()}),!1,o.evT)},inputs:{enabled:"enabled",items:"items",content:"content"},outputs:{itemsChange:"itemsChange",enabledChange:"enabledChange"},standalone:!0,features:[o.jDz],decls:2,vars:2,consts:[[1,"t-wrapper",3,"order","orderChange"],[3,"order",4,"ngFor","ngForOf"],[1,"t-item"],["tuiTileHandle","",1,"t-draggable"],[1,"t-icon",3,"icon"],[4,"polymorpheusOutlet","polymorpheusOutletContext"],["appearance","icon","size","xs","tuiIconButton","","type","button",1,"t-button",3,"iconStart","click","keydown.arrowDown.prevent","keydown.arrowUp.prevent"]],template:function(t,e){1&t&&(o.TgZ(0,"tui-tiles",0),o.NdJ("orderChange",(function(t){return e.order=t})),o.YNc(1,b,8,14,"tui-tile",1),o.qZA()),2&t&&(o.Q6J("order",e.order),o.xp6(1),o.Q6J("ngForOf",e.unsortedItems))},dependencies:[p.UZ,p.NY,p.gX,i.sg,h.R,u.xG,i.Ov,l.s$],styles:["[_nghost-%COMP%]{display:block;font:var(--tui-font-text-s);padding:.5rem 0;-webkit-user-select:none;user-select:none}.t-wrapper[_ngcontent-%COMP%]{grid-auto-rows:2rem}.t-draggable[_ngcontent-%COMP%]{cursor:ns-resize;flex:1 1 auto}.t-item[_ngcontent-%COMP%]{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:flex;height:2rem;align-items:center;padding:0 .75rem;background:var(--tui-background-base)}.t-item_disabled[_ngcontent-%COMP%]{opacity:var(--tui-disabled-opacity)}.t-item_disabled[_ngcontent-%COMP%]   .t-button[_ngcontent-%COMP%]{color:var(--tui-text-primary);opacity:1}.t-item[_ngcontent-%COMP%]:hover{background:var(--tui-background-base-alt)}.t-item[_ngcontent-%COMP%]:hover   .t-button[_ngcontent-%COMP%]{opacity:1}.t-icon[_ngcontent-%COMP%]{margin-right:.5rem;color:var(--tui-text-tertiary);border:.25rem solid transparent}.t-button[_ngcontent-%COMP%]{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;margin-left:auto;opacity:0}.t-button[_ngcontent-%COMP%]:focus{opacity:1}"],changeDetection:0}),e})(),C=(()=>{var t;class e{constructor(){this.tuiCell="",this.template=(0,o.f3M)(o.Rgc)}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵdir=o.lG2({type:t,selectors:[["ng-template","tuiCell",""]],inputs:{tuiCell:"tuiCell"},standalone:!0}),e})();var x=n(51160),y=n(71810),_=n(64499),O=n(1145),M=n(17574),k=n(97770),v=n(13448);const w=(0,s.JN)({sticky:!1,resizable:!1,open:!0,size:"m",direction:1,sortIcons:{asc:"@tui.chevron-up",desc:"@tui.chevron-down",off:"@tui.chevrons-up-down"}});var P=n(54795),T=n(70678),z=n(24815),I=n(11751),Z=n(20511);let A=(()=>{var t;class e{constructor(){this.stuck=(0,P.O4)((0,o.f3M)(y.te).pipe((0,x.U)((t=>t[t.length-1].intersectionRatio<1)),(0,z.x)(),(0,T.NA)((0,o.f3M)(o.sBO)),(0,I.K)((()=>Z.E))))}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵdir=o.lG2({type:t,selectors:[["never"]],hostVars:2,hostBindings:function(t,e){2&t&&o.ekj("_stuck",e.stuck())},standalone:!0,features:[o._Bn([y.te,{provide:y.X$,useValue:[0,1]}])]}),e})(),Q=(()=>{var t;class e{}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=o.Xpm({type:t,selectors:[["ng-component"]],hostAttrs:[1,"tui-table"],standalone:!0,features:[o.jDz],decls:0,vars:0,template:function(t,e){},styles:["table[tuiTable] [tuiCell]{padding:0}table[tuiTable] [tuiTitle]{white-space:nowrap}table[tuiTable] [tuiTitle] tui-icon{font-size:1rem}table[tuiTable] [tuiSubtitle]{color:var(--tui-text-secondary)}table[tuiTable] [tuiTh] [tuiCell],table[tuiTable] [tuiTh] [tuiTitle]{font:inherit;color:inherit}\n"],encapsulation:2,changeDetection:0}),e})(),S=(()=>{var t;class e{constructor(){this.options=(0,o.f3M)(w),this.cdr=(0,o.f3M)(o.sBO),this.nothing=(0,s.__)(Q),this.columns=[],this.direction=this.options.direction,this.directionChange=new o.vpe,this.sorterChange=new o.vpe,this.appearance=(0,o.tdS)("table"),this.size=(0,o.tdS)(this.options.size),this.cleaner=(0,o.tdS)(!1),this.change$=new v.x,this.sorter=()=>0}set sizeSetter(t){this.size.set(t)}updateSorterAndDirection(t){this.sorter===t?this.updateDirection(1===this.direction?-1:1):(this.updateSorter(t),this.updateDirection(1))}ngOnChanges(){this.change$.next()}ngAfterViewInit(){this.cdr.detectChanges()}updateSorter(t){this.sorter=t||(()=>0),this.sorterChange.emit(this.sorter),this.change$.next()}updateDirection(t){this.direction=t,this.directionChange.emit(this.direction),this.change$.next()}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵdir=o.lG2({type:t,selectors:[["table","tuiTable",""]],hostAttrs:[2,"border-collapse","separate"],hostVars:1,hostBindings:function(t,e){2&t&&o.uIk("data-size",e.size())},inputs:{columns:"columns",direction:"direction",sizeSetter:["size","sizeSetter"],sorter:"sorter"},outputs:{directionChange:"directionChange",sorterChange:"sorterChange"},standalone:!0,features:[o._Bn([{provide:y.eo,useValue:"10000px 10000px 10000px 0px"},(0,s.Q2)(_.z1,t),(0,O.Es)({size:"m",appearance:"neutral"}),(0,M.Mr)({size:"xxs",appearance:"neutral"}),(0,k.yK)({size:"s",color:"var(--tui-text-action)"})]),o.TTD,o.zW0([A])]}),e})(),$=(()=>{var t;class e{constructor(){this.tuiHead="",this.template=(0,o.f3M)(o.Rgc)}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵdir=o.lG2({type:t,selectors:[["","tuiHead",""]],inputs:{tuiHead:"tuiHead"},standalone:!0}),e})();var B=n(6373),J=n(82850),N=n(275),D=n(14279);let G=(()=>{var t;class e{constructor(){this.doc=(0,o.f3M)(i.K0),this.el=(0,J.AG)(),this.tuiResized=(0,T.mL)(this.el,"mousedown").pipe((0,T.mp)(),(0,N.w)((()=>{const{width:t,right:e}=this.el.closest("th")?.getBoundingClientRect()||B.Jy;return(0,T.mL)(this.doc,"mousemove").pipe((0,z.x)(),(0,x.U)((({clientX:n})=>t+n-e)),(0,D.R)((0,T.mL)(this.doc,"mouseup")))})))}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵdir=o.lG2({type:t,selectors:[["","tuiResized",""]],outputs:{tuiResized:"tuiResized"},standalone:!0}),e})();var U=n(75133),H=n(13591);const F=["tuiTh",""];function j(t,e){if(1&t){const t=o.EpF();o.TgZ(0,"button",3),o.NdJ("click",(function(){o.CHM(t);const e=o.oxw();return o.KtG(e.updateSorterAndDirection())})),o.GkF(1,4),o._uU(2),o.ALo(3,"async"),o._UZ(4,"tui-icon",5),o.qZA()}if(2&t){const t=o.oxw(),e=o.MAs(2);o.ekj("t-sort_sorted",t.isCurrent),o.xp6(1),o.Q6J("ngTemplateOutlet",e),o.xp6(1),o.hij(" ",o.lcZ(3,5,t.table&&t.table.change$)," "),o.xp6(2),o.Q6J("icon",t.icon)}}function E(t,e){1&t&&o.Hsn(0)}function R(t,e){if(1&t){const t=o.EpF();o.TgZ(0,"div",6),o.NdJ("tuiResized",(function(e){o.CHM(t);const n=o.oxw();return o.KtG(n.onResized(e))})),o.qZA()}}const Y=["*"];let q=(()=>{var t;class e{constructor(){this.options=(0,o.f3M)(w),this.head=(0,o.f3M)($,{optional:!0}),this.width=null,this.table=(0,o.f3M)((0,o.Gpc)((()=>S)),{optional:!0}),this.sorter=this.head?(t,e)=>(0,s.A2)(t[this.key],e[this.key]):null,this.resizable=this.options.resizable,this.sticky=this.options.sticky}get key(){if(!this.head)throw new K;return this.head.tuiHead}get isCurrent(){return!!this.sorter&&!!this.table&&this.sorter===this.table.sorter}get icon(){return this.isCurrent?1===this.table?.direction?this.options.sortIcons.desc:this.options.sortIcons.asc:this.options.sortIcons.off}updateSorterAndDirection(){this.table?.updateSorterAndDirection(this.isCurrentAndAscDirection?null:this.sorter)}onResized(t){this.width=t}get isCurrentAndAscDirection(){return this.sorter===this.table?.sorter&&-1===this.table?.direction}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=o.Xpm({type:t,selectors:[["th","tuiTh",""]],hostVars:4,hostBindings:function(t,e){2&t&&(o.Udp("width",e.width,"px"),o.ekj("_sticky",e.sticky))},inputs:{sorter:"sorter",resizable:"resizable",sticky:"sticky"},standalone:!0,features:[o.jDz],attrs:F,ngContentSelectors:Y,decls:4,vars:3,consts:[["type","button","class","t-sort",3,"t-sort_sorted","click",4,"ngIf","ngIfElse"],["content",""],["class","t-bar",3,"tuiResized",4,"ngIf"],["type","button",1,"t-sort",3,"click"],[3,"ngTemplateOutlet"],[1,"t-icon",3,"icon"],[1,"t-bar",3,"tuiResized"]],template:function(t,e){if(1&t&&(o.F$t(),o.YNc(0,j,5,7,"button",0),o.YNc(1,E,1,0,"ng-template",null,1,o.W1O),o.YNc(3,R,1,0,"div",2)),2&t){const t=o.MAs(2);o.Q6J("ngIf",e.sorter&&e.table)("ngIfElse",t),o.xp6(3),o.Q6J("ngIf",e.resizable)}},dependencies:[i.O5,i.tP,h.R,i.Ov,G],styles:['[_nghost-%COMP%]{transition-property:box-shadow;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:relative;top:0;height:var(--tui-height-m);font:var(--tui-font-text-s);text-align:left;font-weight:700;color:var(--tui-text-secondary);background:var(--tui-background-base);cursor:default;padding:0 .75rem;box-sizing:border-box;box-shadow:0 .3125rem #ededed00;border:1px solid var(--tui-border-normal);filter:opacity(1)}@supports (-webkit-hyphens: none){[_nghost-%COMP%]{transform:translateZ(0)}}[_nghost-%COMP%]:not(:first-child){border-left:none}._sticky[_nghost-%COMP%], ._stuck   ._sticky[_nghost-%COMP%]{position:sticky;z-index:30}._sticky[_nghost-%COMP%]:first-child, ._stuck   ._sticky[_nghost-%COMP%]:first-child{left:0}._sticky[_nghost-%COMP%]:after, ._stuck   ._sticky[_nghost-%COMP%]:after{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;content:"";position:absolute;top:0;left:100%;bottom:0;width:.3125rem;pointer-events:none;background:rgba(237,237,237,.7);opacity:0}._stuck   [_nghost-%COMP%]{z-index:20}tr:not(:first-child)[_nghost-%COMP%], tr:not(:first-child)   [_nghost-%COMP%]{border-top:none}table[data-size="l"][_nghost-%COMP%], table[data-size="l"]   [_nghost-%COMP%]{height:var(--tui-height-l);font:var(--tui-font-text-m);font-weight:700;padding:0 1rem}table[data-size="s"][_nghost-%COMP%], table[data-size="s"]   [_nghost-%COMP%]{height:var(--tui-height-s);font:var(--tui-font-text-s);font-weight:700;padding:0 .5rem}thead[tuiThead][_nghost-%COMP%], thead[tuiThead]   [_nghost-%COMP%]{position:sticky}table._stuck._sticky[_nghost-%COMP%]:after, table._stuck   ._sticky[_nghost-%COMP%]:after{opacity:1}thead[tuiThead]._stuck[_nghost-%COMP%], thead[tuiThead]._stuck   [_nghost-%COMP%]{box-shadow:0 .3125rem #edededb3}[tuiTheme="dark"]._sticky[_nghost-%COMP%]:after, [tuiTheme="dark"]   ._sticky[_nghost-%COMP%]:after{background:rgba(60,60,60,.9)}[tuiTheme="dark"]   thead[tuiThead]._stuck[_nghost-%COMP%], [tuiTheme="dark"]   thead[tuiThead]._stuck   [_nghost-%COMP%]{box-shadow:0 .3125rem #3c3c3ce6}[tuiTheme="dark"]   thead[tuiThead]._stuck[_nghost-%COMP%]:first-child, [tuiTheme="dark"]   thead[tuiThead]._stuck   [_nghost-%COMP%]:first-child{box-shadow:.0625rem .3125rem #3c3c3ce6}table[data-size="l"]   thead[tuiThead]   tr:nth-child(2)[_nghost-%COMP%], table[data-size="l"]   thead[tuiThead]   tr:nth-child(2)   [_nghost-%COMP%]{top:var(--tui-height-l)}table[data-size="m"]   thead[tuiThead]   tr:nth-child(2)[_nghost-%COMP%], table[data-size="m"]   thead[tuiThead]   tr:nth-child(2)   [_nghost-%COMP%]{top:var(--tui-height-m)}table[data-size="s"]   thead[tuiThead]   tr:nth-child(2)[_nghost-%COMP%], table[data-size="s"]   thead[tuiThead]   tr:nth-child(2)   [_nghost-%COMP%]{top:var(--tui-height-s)}.t-sort[_ngcontent-%COMP%]{transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;display:inline-flex;flex-direction:inherit;align-items:center;outline:none;font-weight:700;cursor:pointer}.t-sort_sorted[_ngcontent-%COMP%]{color:var(--tui-text-primary)}.t-sort[_ngcontent-%COMP%]:focus-visible{background:var(--tui-service-selection-background)}.t-sort[_ngcontent-%COMP%]:hover{color:var(--tui-text-primary)}.t-bar[_ngcontent-%COMP%]{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:absolute;top:0;bottom:0;right:-1px;width:3px;justify-self:flex-end;border-left:2px solid transparent;background:var(--tui-status-warning);background-clip:content-box;cursor:ew-resize;opacity:0}.t-bar[_ngcontent-%COMP%]:hover, .t-bar[_ngcontent-%COMP%]:active{opacity:1}.t-icon[_ngcontent-%COMP%]{border:.25rem solid transparent}'],changeDetection:0}),e})();class K extends Error{constructor(){super("")}}let L=(()=>{var t;class e{constructor(){this.table=(0,o.f3M)(S),this.th=(0,o.f3M)(q),this.sortBy=(0,o.f3M)((0,o.Gpc)((()=>X))),this.sorter=()=>0}get key(){return this.th.key}ngOnInit(){this.sorter=this.match?this.table.sorter:this.sorter,this.th.sorter=this.sorter}check(){this.match&&this.table.sorter!==this.sorter&&this.table.updateSorter(this.sorter)}get match(){return this.sortBy.tuiSortBy===this.key}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵdir=o.lG2({type:t,selectors:[["th","tuiTh","","tuiSortable",""]],standalone:!0}),e})(),X=(()=>{var t;class e{constructor(){this.sortables=B.Mm,this.table=(0,o.f3M)(S),this.tuiSortByChange=this.table.sorterChange.pipe((0,U.g)(0),(0,H.h)((()=>!!this.sortables.length)),(0,x.U)((t=>this.getKey(t)))),this.tuiSortBy=null}set sortBy(t){this.tuiSortBy=t,this.checkSortables()}checkSortables(){this.sortables.forEach((t=>t.check()))}getKey(t){return this.sortables.find((e=>e.sorter===t))?.key||null}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵdir=o.lG2({type:t,selectors:[["table","tuiTable","","tuiSortBy",""]],contentQueries:function(t,e,n){if(1&t&&o.Suo(n,L,5),2&t){let t;o.iGM(t=o.CRH())&&(e.sortables=t)}},inputs:{sortBy:["tuiSortBy","sortBy"]},outputs:{tuiSortByChange:"tuiSortByChange"},standalone:!0}),e})(),W=(()=>{var t;class e{}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵdir=o.lG2({type:t,selectors:[["thead","tuiThead",""]],standalone:!0,features:[o._Bn([{provide:y.eo,useValue:"0px 10000px 10000px 10000px"}]),o.zW0([A])]}),e})();var V,tt=n(84911);class et{constructor(){this.table=(0,o.f3M)(S)}transform(t){return this.sort(t??[],this.table.sorter,this.table.direction)}sort(t,e,n){return[...t].sort(((t,i)=>n*e(t,i)))}}(V=et).ɵfac=function(t){return new(t||V)},V.ɵpipe=o.Yjl({name:"tuiTableSort",type:V,pure:!1,standalone:!0}),(0,tt.gn)([s.UM],et.prototype,"sort",null);const nt=[{provide:S,deps:[[new o.tp0,S],o.sBO],useFactory:(t,e)=>(t.change$.pipe((0,T.NA)(e),(0,P.sL)()).subscribe(),t)}];var it=n(99903),ot=n(8239),st=n(20982),rt=n(61513),at=n(11853);const ct=["tuiTd",""],ut=["*"];let ht=(()=>{var t;class e{}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=o.Xpm({type:t,selectors:[["th","tuiTd",""],["td","tuiTd",""]],contentQueries:function(t,e,n){if(1&t&&(o.Suo(n,rt.NN,5),o.Suo(n,at.M$,5)),2&t){let t;o.iGM(t=o.CRH())&&(e.current=t.first),o.iGM(t=o.CRH())&&(e.legacy=t.first)}},hostVars:2,hostBindings:function(t,e){2&t&&o.ekj("_editable",e.current||e.legacy)},standalone:!0,features:[o.jDz],attrs:ct,ngContentSelectors:ut,decls:1,vars:0,template:function(t,e){1&t&&(o.F$t(),o.Hsn(0))},styles:['[_nghost-%COMP%]{position:relative;text-align:left;background:var(--tui-background-base);border:1px solid var(--tui-border-normal);border-top:none;box-sizing:border-box;filter:opacity(1)}@supports (-webkit-hyphens: none){[_nghost-%COMP%]{transform:translateZ(0)}}._editable[_nghost-%COMP%]{padding:0!important}[_nghost-%COMP%]:first-child{left:0}[_nghost-%COMP%]:not(:first-child){border-left:none}._editable[_nghost-%COMP%]:focus-within{z-index:1}._editable[_nghost-%COMP%]{padding:0;vertical-align:top}th[_nghost-%COMP%]{position:sticky;z-index:1}th[_nghost-%COMP%]:after{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;content:"";position:absolute;top:0;bottom:0;left:100%;width:.3125rem;pointer-events:none;background:rgba(237,237,237,.7);opacity:0}th[_nghost-%COMP%]:focus-within:not(:disabled){z-index:11}[tuiTheme="dark"][_nghost-%COMP%]:after, [tuiTheme="dark"]   [_nghost-%COMP%]:after{background:rgba(60,60,60,.9)}table._stuck[_nghost-%COMP%], table._stuck   [_nghost-%COMP%]{z-index:10}table._stuck[_nghost-%COMP%]:last-of-type:after, table._stuck   [_nghost-%COMP%]:last-of-type:after{opacity:1}table[data-size="l"][_nghost-%COMP%], table[data-size="l"]   [_nghost-%COMP%]{height:var(--tui-height-l);font:var(--tui-font-text-m);padding:1rem}table[data-size="m"][_nghost-%COMP%], table[data-size="m"]   [_nghost-%COMP%]{height:var(--tui-height-m);font:var(--tui-font-text-s);padding:.75rem}table[data-size="s"][_nghost-%COMP%], table[data-size="s"]   [_nghost-%COMP%]{height:var(--tui-height-s);font:var(--tui-font-text-s);padding:.25rem .5rem}td[_nghost-%COMP%]:focus-within{z-index:1}td[_nghost-%COMP%]:not(:focus-within){z-index:0}'],changeDetection:0}),e})();const lt=["tuiTr",""];function dt(t,e){if(1&t&&(o.TgZ(0,"td",5),o._uU(1),o.qZA()),2&t){const t=e.ngIf,n=o.oxw(2).$implicit;o.xp6(1),o.hij(" ",t[n]," ")}}function pt(t,e){if(1&t&&(o.YNc(0,dt,2,1,"td",4),o.ALo(1,"async")),2&t){const t=o.oxw(3);o.Q6J("ngIf",o.lcZ(1,1,t.item$))}}function gt(t,e){if(1&t&&(o.ynx(0,2),o.YNc(1,pt,2,3,"ng-template",null,3,o.W1O),o.BQk()),2&t){const t=e.$implicit,n=o.MAs(2),i=o.oxw().ngIf;o.Q6J("ngTemplateOutlet",i[t]&&i[t].template||n)}}function ft(t,e){if(1&t&&(o.ynx(0),o.YNc(1,gt,3,1,"ng-container",1),o.BQk()),2&t){const t=o.oxw();o.xp6(1),o.Q6J("ngForOf",t.table.columns)}}let bt=(()=>{var t;class e{constructor(){this.cells=B.Mm,this.body=(0,o.f3M)((0,o.Gpc)((()=>Ot))),this.contentReady$=new st.t(1),this.table=(0,o.f3M)((0,o.Gpc)((()=>S))),this.cells$=this.contentReady$.pipe((0,N.w)((()=>(0,T.ll)(this.cells))),(0,x.U)((t=>t.reduce(((t,e)=>({...t,[e.tuiCell]:e})),{})))),this.item$=this.contentReady$.pipe((0,N.w)((()=>(0,T.ll)(this.body.rows))),(0,x.U)((t=>this.body.data[t.findIndex((t=>t===this))])))}ngAfterContentInit(){var t=this;return(0,ot.Z)((function*(){yield Promise.resolve(),t.contentReady$.next(!0)}))()}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=o.Xpm({type:t,selectors:[["tr","tuiTr",""]],contentQueries:function(t,e,n){if(1&t&&o.Suo(n,C,4),2&t){let t;o.iGM(t=o.CRH())&&(e.cells=t)}},standalone:!0,features:[o._Bn([nt]),o.jDz],attrs:lt,decls:2,vars:3,consts:[[4,"ngIf"],[3,"ngTemplateOutlet",4,"ngFor","ngForOf"],[3,"ngTemplateOutlet"],["plain",""],["tuiTd","",4,"ngIf"],["tuiTd",""]],template:function(t,e){1&t&&(o.YNc(0,ft,2,1,"ng-container",0),o.ALo(1,"async")),2&t&&o.Q6J("ngIf",o.lcZ(1,1,e.cells$))},dependencies:[i.O5,i.Ov,i.sg,i.tP,ht],encapsulation:2,changeDetection:0}),e})();const mt=["tuiTbody",""];function Ct(t,e){if(1&t&&(o.ynx(0),o._uU(1),o.BQk()),2&t){const t=e.polymorpheusOutlet;o.xp6(1),o.hij(" ",t," ")}}function xt(t,e){if(1&t){const t=o.EpF();o.TgZ(0,"tr")(1,"th",1)(2,"button",2),o.NdJ("click",(function(){o.CHM(t);const e=o.oxw();return o.KtG(e.onClick())})),o.TgZ(3,"span",3),o.YNc(4,Ct,2,1,"ng-container",4),o.qZA(),o._UZ(5,"tui-icon",5),o.qZA()()()}if(2&t){const t=o.oxw();o.xp6(1),o.Q6J("colSpan",t.table.columns.length),o.xp6(3),o.Q6J("polymorpheusOutlet",t.heading),o.xp6(1),o.Q6J("tuiChevron",t.open)}}function yt(t,e){1&t&&(o.ynx(0),o.Hsn(1),o.BQk())}const _t=["*"];let Ot=(()=>{var t;class e{constructor(){this.options=(0,o.f3M)(w),this.table=(0,o.f3M)((0,o.Gpc)((()=>S))),this.rows=B.Mm,this.data=[],this.open=this.options.open,this.openChange=new o.vpe,this.toContext=(t,e)=>({$implicit:t,index:e})}onClick(){this.open=!this.open,this.openChange.emit(this.open)}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=o.Xpm({type:t,selectors:[["tbody","tuiTbody",""]],contentQueries:function(t,e,n){if(1&t&&o.Suo(n,bt,4),2&t){let t;o.iGM(t=o.CRH())&&(e.rows=t)}},inputs:{data:"data",heading:"heading",open:"open"},outputs:{openChange:"openChange"},standalone:!0,features:[o._Bn(nt),o.jDz],attrs:mt,ngContentSelectors:_t,decls:2,vars:2,consts:[[4,"ngIf"],[1,"t-heading",3,"colSpan"],["type","button",1,"t-expand",3,"click"],[1,"t-name"],[4,"polymorpheusOutlet"],[1,"t-chevron",3,"tuiChevron"]],template:function(t,e){1&t&&(o.F$t(),o.YNc(0,xt,6,3,"tr",0),o.YNc(1,yt,2,0,"ng-container",0)),2&t&&(o.Q6J("ngIf",e.heading),o.xp6(1),o.Q6J("ngIf",e.open))},dependencies:[i.O5,h.R,l.s$,it.H],styles:['[_nghost-%COMP%]{border-color:var(--tui-border-normal)}[_nghost-%COMP%]   tr[_ngcontent-%COMP%]{border-color:inherit}.t-expand[_ngcontent-%COMP%]{-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;display:flex;width:100%;height:100%;align-items:center;box-sizing:border-box;outline:none;font-weight:700;cursor:pointer;border-color:inherit}.t-expand[_ngcontent-%COMP%]:focus-visible   .t-name[_ngcontent-%COMP%]{background:var(--tui-service-selection-background)}.t-expand[_ngcontent-%COMP%]:before, .t-expand[_ngcontent-%COMP%]:after{content:"";position:sticky;height:100%;border-left:1px solid;border-color:inherit}.t-expand[_ngcontent-%COMP%]:before{left:0}.t-expand[_ngcontent-%COMP%]:after{right:0}.t-heading[_ngcontent-%COMP%]{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;height:var(--tui-height-m);font:var(--tui-font-text-s);padding:0;background:var(--tui-background-neutral-1);border-bottom:1px solid var(--tui-border-normal);border-color:inherit}.t-heading[_ngcontent-%COMP%]:hover{background:var(--tui-background-neutral-1-hover)}table[data-size="l"][_nghost-%COMP%]   .t-heading[_ngcontent-%COMP%], table[data-size="l"]   [_nghost-%COMP%]   .t-heading[_ngcontent-%COMP%]{font:var(--tui-font-text-m);height:var(--tui-height-l)}.t-name[_ngcontent-%COMP%]{position:sticky;left:.75rem;display:inline-block}table[data-size="l"][_nghost-%COMP%]   .t-name[_ngcontent-%COMP%], table[data-size="l"]   [_nghost-%COMP%]   .t-name[_ngcontent-%COMP%]{left:1rem}.t-chevron[_ngcontent-%COMP%]{position:sticky;right:.75rem;margin:0 .6875rem 0 auto}'],changeDetection:0}),e})();var Mt=n(905);const kt=["tuiThGroup",""];function vt(t,e){if(1&t&&(o.TgZ(0,"th",5),o._uU(1),o.qZA()),2&t){const t=o.oxw(2).$implicit;o.xp6(1),o.hij(" ",t.toString()," ")}}function wt(t,e){if(1&t&&o.YNc(0,vt,2,1,"th",4),2&t){const t=o.oxw(3);o.Q6J("ngIf",!t.th&&!t.heads.length)}}function Pt(t,e){if(1&t&&(o.ynx(0,2),o.YNc(1,wt,1,1,"ng-template",null,3,o.W1O),o.BQk()),2&t){const t=e.$implicit,n=o.MAs(2),i=o.oxw().ngIf;o.Q6J("ngTemplateOutlet",i[t]&&i[t].template||n)}}function Tt(t,e){if(1&t&&(o.ynx(0),o.YNc(1,Pt,3,1,"ng-container",1),o.BQk()),2&t){const t=o.oxw();o.xp6(1),o.Q6J("ngForOf",t.table.columns)}}const zt=["*"];let It=(()=>{var t;class e{constructor(){this.heads=B.Mm,this.heads$=null,this.table=(0,o.f3M)((0,o.Gpc)((()=>S)))}ngAfterContentInit(){this.heads$=this.heads.changes.pipe((0,Mt.O)(null),(0,x.U)((()=>this.heads.reduce(((t,e)=>({...t,[e.tuiHead]:e})),{}))))}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=o.Xpm({type:t,selectors:[["tr","tuiThGroup",""]],contentQueries:function(t,e,n){if(1&t&&(o.Suo(n,q,5),o.Suo(n,$,4)),2&t){let t;o.iGM(t=o.CRH())&&(e.th=t.first),o.iGM(t=o.CRH())&&(e.heads=t)}},standalone:!0,features:[o._Bn([nt]),o.jDz],attrs:kt,ngContentSelectors:zt,decls:3,vars:3,consts:[[4,"ngIf"],[3,"ngTemplateOutlet",4,"ngFor","ngForOf"],[3,"ngTemplateOutlet"],["plain",""],["tuiTh","",4,"ngIf"],["tuiTh",""]],template:function(t,e){1&t&&(o.F$t(),o.Hsn(0),o.YNc(1,Tt,2,1,"ng-container",0),o.ALo(2,"async")),2&t&&(o.xp6(1),o.Q6J("ngIf",o.lcZ(2,1,e.heads$)))},dependencies:[i.O5,q,i.tP,i.sg,i.Ov],encapsulation:2,changeDetection:0}),e})();var Zt=n(80030),At=n(77597),Qt=n(52610);const St={sizeOptionContent:function({$implicit:t}){return`${t}`},showPages:!0,items:[10,20,50,100],size:10},$t=(0,s.JN)(St);function Bt(t){return(0,s.vK)($t,t,St)}var Jt=n(80776);function Nt(t,e){if(1&t&&(o.ynx(0),o._uU(1),o.TgZ(2,"strong",6),o._uU(3),o.qZA(),o.BQk()),2&t){const t=o.oxw().ngIf,e=o.oxw();o.xp6(1),o.hij(" ",t.pages," "),o.xp6(2),o.Oqu(e.pages)}}function Dt(t,e){if(1&t){const t=o.EpF();o.TgZ(0,"button",7),o.NdJ("tuiDropdownOpenChange",(function(e){o.CHM(t);const n=o.oxw(2);return o.KtG(n.open=e)})),o.TgZ(1,"strong"),o._uU(2),o.qZA()()}if(2&t){o.oxw();const t=o.MAs(9),e=o.oxw();o.Q6J("tuiDropdown",t)("tuiDropdownOpen",e.open),o.xp6(2),o.AsE("",e.start+1,"–",e.end,"")}}function Gt(t,e){1&t&&(o.TgZ(0,"strong"),o._uU(1,"0 - 0"),o.qZA())}function Ut(t,e){if(1&t&&(o.ynx(0),o._uU(1),o.BQk()),2&t){const t=e.polymorpheusOutlet;o.xp6(1),o.hij(" ",t," ")}}function Ht(t,e){if(1&t&&o._UZ(0,"tui-icon",14),2&t){const t=o.oxw(4);o.Q6J("icon",t.commonIcons.check)}}function Ft(t,e){1&t&&o._UZ(0,"span",15)}const jt=function(t,e){return{$implicit:t,total:e}};function Et(t,e){if(1&t){const t=o.EpF();o.ynx(0),o.TgZ(1,"button",10),o.NdJ("click",(function(){const e=o.CHM(t).$implicit,n=o.oxw(3);return o.KtG(n.onItem(e))})),o.YNc(2,Ut,2,1,"ng-container",11),o.YNc(3,Ht,1,1,"tui-icon",12),o.YNc(4,Ft,1,0,"ng-template",null,13,o.W1O),o.qZA(),o.BQk()}if(2&t){const t=e.$implicit,n=o.MAs(5),i=o.oxw(3);o.xp6(2),o.Q6J("polymorpheusOutlet",i.sizeOptionContent)("polymorpheusOutletContext",o.WLB(4,jt,t,i.total)),o.xp6(1),o.Q6J("ngIf",t===i.size)("ngIfElse",n)}}function Rt(t,e){if(1&t&&(o.TgZ(0,"tui-data-list",8),o.YNc(1,Et,6,7,"ng-container",9),o.qZA()),2&t){const t=o.oxw(2);o.xp6(1),o.Q6J("ngForOf",t.items)}}function Yt(t,e){if(1&t){const t=o.EpF();o.ynx(0),o.TgZ(1,"button",16),o.NdJ("click",(function(){o.CHM(t);const e=o.oxw(2);return o.KtG(e.back())})),o._uU(2),o.qZA(),o.TgZ(3,"button",17),o.NdJ("click",(function(){o.CHM(t);const e=o.oxw(2);return o.KtG(e.forth())})),o._uU(4),o.qZA(),o.BQk()}if(2&t){const t=e.ngIf,n=o.oxw(2);o.xp6(1),o.Q6J("disabled",n.leftDisabled)("iconStart",n.icons.decrement),o.xp6(1),o.hij(" ",t[0]," "),o.xp6(1),o.Q6J("disabled",n.rightDisabled)("iconStart",n.icons.increment),o.xp6(1),o.hij(" ",t[1]," ")}}function qt(t,e){if(1&t&&(o.ynx(0),o.TgZ(1,"span",1),o.YNc(2,Nt,4,2,"ng-container",0),o.qZA(),o.TgZ(3,"span",2),o._uU(4),o.YNc(5,Dt,3,4,"button",3),o.YNc(6,Gt,2,0,"ng-template",null,4,o.W1O),o.YNc(8,Rt,2,1,"ng-template",null,5,o.W1O),o._uU(10),o.TgZ(11,"strong",6),o._uU(12),o.qZA()(),o.YNc(13,Yt,5,6,"ng-container",0),o.ALo(14,"async"),o.BQk()),2&t){const t=e.ngIf,n=o.MAs(7),i=o.oxw();o.xp6(2),o.Q6J("ngIf",i.showPages),o.xp6(2),o.hij(" ",t.linesPerPage," "),o.xp6(1),o.Q6J("ngIf",0!==i.total)("ngIfElse",n),o.xp6(5),o.hij(" ",t.of," "),o.xp6(2),o.Oqu(i.total),o.xp6(1),o.Q6J("ngIf",o.lcZ(14,7,i.spinTexts$))}}let Kt=(()=>{var t;class e{constructor(){this.options=(0,o.f3M)($t),this.open=!1,this.icons=(0,o.f3M)(Qt.oC),this.spinTexts$=(0,o.f3M)(Qt.U4),this.texts$=(0,o.f3M)(c),this.commonIcons=(0,o.f3M)(Qt.Gs),this.items=this.options.items,this.total=0,this.page=0,this.size=this.options.size,this.paginationChange=new o.vpe}onItem(t){const{start:e}=this;this.size=t,this.open=!1,this.page=Math.floor(e/this.size),this.paginationChange.emit(this.pagination)}get pages(){return Math.ceil(this.total/this.size)}get showPages(){return this.options.showPages}get sizeOptionContent(){return this.options.sizeOptionContent}get start(){return this.page*this.size}get end(){return Math.min(this.start+this.size,this.total)}get leftDisabled(){return!this.start}get rightDisabled(){return this.end===this.total}get pagination(){return{page:this.page,size:this.size}}back(){this.page--,this.paginationChange.emit(this.pagination)}forth(){this.page++,this.paginationChange.emit(this.pagination)}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=o.Xpm({type:t,selectors:[["tui-table-pagination"]],inputs:{items:"items",total:"total",page:"page",size:"size"},outputs:{paginationChange:"paginationChange"},standalone:!0,features:[o.jDz],decls:2,vars:3,consts:[[4,"ngIf"],[1,"t-pages"],["automation-id","tui-table-pagination__lines-per-page-wrapper"],["tuiLink","","type","button",3,"tuiDropdown","tuiDropdownOpen","tuiDropdownOpenChange",4,"ngIf","ngIfElse"],["zeroTotal",""],["content",""],[1,"t-strong"],["tuiLink","","type","button",3,"tuiDropdown","tuiDropdownOpen","tuiDropdownOpenChange"],["size","s"],[4,"ngFor","ngForOf"],["tuiOption","",1,"t-item",3,"click"],[4,"polymorpheusOutlet","polymorpheusOutletContext"],["class","t-checkmark",3,"icon",4,"ngIf","ngIfElse"],["fakeIcon",""],[1,"t-checkmark",3,"icon"],[1,"t-checkmark"],["appearance","icon","size","xs","tuiIconButton","","type","button",1,"t-back",3,"disabled","iconStart","click"],["appearance","icon","size","xs","tuiIconButton","","type","button",3,"disabled","iconStart","click"]],template:function(t,e){1&t&&(o.YNc(0,qt,15,9,"ng-container",0),o.ALo(1,"async")),2&t&&o.Q6J("ngIf",o.lcZ(1,1,e.texts$))},dependencies:[i.O5,i.Ov,Zt.lI,At.td,Jt.qi,Jt.bH,l.s$,i.sg,At.Bb,h.R,u.xG],styles:["[_nghost-%COMP%]{display:flex;font:var(--tui-font-text-s);align-items:center;color:var(--tui-text-tertiary)}.t-strong[_ngcontent-%COMP%]{color:var(--tui-text-primary)}.t-pages[_ngcontent-%COMP%]{margin-right:auto}.t-item[_ngcontent-%COMP%]{min-width:5.5rem;box-sizing:border-box}.t-checkmark[_ngcontent-%COMP%]{min-width:1rem;font-size:1rem;margin-inline-start:.25rem}.t-back[_ngcontent-%COMP%]{margin:0 .25rem 0 1.5rem}"],changeDetection:0}),e})();class Lt{}let Xt=(()=>{var t;class e extends Lt{constructor(){super(...arguments),this.filter=B.oN}}return(t=e).ɵfac=function(){let e;return function(n){return(e||(e=o.n5z(t)))(n||t)}}(),t.ɵdir=o.lG2({type:t,selectors:[["","tuiGenericFilter",""]],inputs:{filter:["tuiGenericFilter","filter"]},standalone:!0,features:[o._Bn([(0,s.Q2)(Lt,t)]),o.qOj]}),e})();var Wt=n(66094),Vt=n(49730),te=n(19403),ee=n(60042);let ne=(()=>{var t;class e{constructor(){this.refresh$=new st.t(1),this.filters=[]}register(t){this.filters=this.filters.concat(t),this.update()}unregister(t){this.filters=this.filters.filter((e=>e!==t)),this.update()}filter(t){return this.refresh$.pipe((0,N.w)(ee.y),(0,Mt.O)(null),(0,x.U)((()=>t.filter((t=>this.check(t))))))}check(t){return this.filters.every((e=>e.filter(t)))}update(){this.refresh$.next((0,te.T)(...this.filters.map((({refresh$:t})=>t))))}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵdir=o.lG2({type:t,selectors:[["","tuiTableFilters",""]],standalone:!0}),e})(),ie=(()=>{var t;class e{constructor(){this.head=(0,o.f3M)($,{optional:!0}),this.delegate=(0,o.f3M)(Lt),this.control=(0,o.f3M)(Wt.a5),this.filters=(0,o.f3M)(ne),this.refresh$=(0,Vt.P)((()=>(0,te.T)(this.control.valueChanges||Z.E,this.control.statusChanges?.pipe((0,z.x)())||Z.E)))}ngOnInit(){this.filters.register(this)}ngOnDestroy(){this.filters.unregister(this)}filter(t){const{disabled:e,value:n}=this.control;return!!e||!this.key||this.delegate.filter(t[this.key],n)}get key(){return this.tuiTableFilter||this.head?.tuiHead}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵdir=o.lG2({type:t,selectors:[["","tuiTableFilter",""]],inputs:{tuiTableFilter:"tuiTableFilter"},standalone:!0}),e})(),oe=(()=>{var t;class e{constructor(){this.filters=(0,o.f3M)(ne)}transform(t){return this.filters.filter(t)}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵpipe=o.Yjl({name:"tuiTableFilters",type:t,pure:!0,standalone:!0}),e})()}}]);