(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[25843,61386,99503,50517,11820,61505,99781],{10882:(t,e,i)=>{i.d(e,{Fb:()=>n,UR:()=>s,bM:()=>r});var a=i(87882);const s={currency:null,currencyAlign:"right",sign:"negative-only"},r=(0,a.tuiCreateToken)(s);function n(t){return(0,a.tuiProvideOptions)(r,t,s)}},61386:(t,e,i)=>{i.d(e,{E:()=>d});var a=i(20755),s=i(93517),r=i(87882),n=i(93317),u=i(92425),o=i(10882);let d=(()=>{var t;class e{constructor(){this.options=(0,a.f3M)(o.bM),this.format=(0,a.f3M)(n.TUI_NUMBER_FORMAT)}transform(t,e=this.options.currency,i=this.options.currencyAlign){return this.format.pipe((0,u.U)((a=>{const u=(0,s.$v)(t,this.options.sign),o=(0,s.BP)(e),d=(0,n.tuiFormatNumber)(Math.abs(t),{...a,precision:Number.isNaN(a.precision)?2:a.precision}),c=o?.length>1||"right"===i?r.CHAR_NO_BREAK_SPACE:"";return"right"===i?`${u}${d}${c}${o}`:`${u}${o}${c}${d}`})))}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵpipe=a.Yjl({name:"tuiAmount",type:t,pure:!0,standalone:!0}),e})()},73225:(t,e,i)=>{i.d(e,{J:()=>o});var a=i(87882),s=i(93317),r=i(97733),n=i(20755);let u=(()=>{var t;class e{}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=n.Xpm({type:t,selectors:[["ng-component"]],hostAttrs:[1,"tui-header"],standalone:!0,features:[n.jDz],decls:0,vars:0,template:function(t,e){},styles:['[tuiHeader]{position:relative;display:flex;align-items:flex-start;box-sizing:content-box;color:var(--tui-text-01);text-align:left}[tuiHeader] [tuiTitle]{flex-grow:2}[tuiHeader] [tuiAccessories]{display:flex;align-items:center;gap:.75rem}[tuiHeader] [tuiAccessories]:before{content:"\\200b";visibility:hidden}[tuiHeader] [tuiSubtitle]{font:var(--tui-font-text-m);color:var(--tui-text-02)}[tuiHeader] [tuiCaption]{font:var(--tui-font-text-s);color:var(--tui-text-02);font-weight:500;text-transform:uppercase}[tuiHeader][data-size=xxl] [tuiTitle],[tuiHeader][data-size=xxl] [tuiAccessories]{font:var(--tui-font-heading-1)}[tuiHeader][data-size=xl] [tuiTitle],[tuiHeader][data-size=xl] [tuiAccessories]{font:var(--tui-font-heading-2)}[tuiHeader][data-size=l] [tuiTitle],[tuiHeader][data-size=l] [tuiAccessories]{font:var(--tui-font-heading-3)}[tuiHeader][data-size=m] [tuiTitle],[tuiHeader][data-size=m] [tuiAccessories]{font:var(--tui-font-heading-4)}[tuiHeader][data-size=s] [tuiTitle],[tuiHeader][data-size=s] [tuiAccessories]{font:var(--tui-font-heading-5)}[tuiHeader][data-size=xs] [tuiTitle],[tuiHeader][data-size=xs] [tuiAccessories]{font:var(--tui-font-heading-6)}[tuiHeader][data-size=xxs] [tuiTitle],[tuiHeader][data-size=xxs] [tuiAccessories]{font:var(--tui-font-text-xl)}[tuiHeader][data-size=xxl] [tuiSubtitle],[tuiHeader][data-size=xl] [tuiSubtitle],[tuiHeader][data-size=l] [tuiSubtitle]{font:var(--tui-font-text-l)}tui-root._mobile [tuiHeader] [tuiAccessories]{gap:1rem}tui-root._mobile [tuiHeader][data-size=xxs] [tuiTitle],tui-root._mobile [tuiHeader][data-size=xxs] [tuiAccessories]{font:var(--tui-font-heading-6)}\n'],encapsulation:2,changeDetection:0}),e})(),o=(()=>{var t;class e{constructor(){this.nothing=(0,a.tuiWithStyles)(u),this.size="s"}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵdir=n.lG2({type:t,selectors:[["","tuiHeader",""]],hostAttrs:["tuiHeader",""],hostVars:1,hostBindings:function(t,e){2&t&&n.uIk("data-size",e.size||"s")},inputs:{size:["tuiHeader","size"]},standalone:!0,features:[n._Bn([(0,r.tuiAvatarOptionsProvider)({size:"s"}),(0,s.tuiButtonOptionsProvider)({size:"s"}),(0,r.tuiBadgeOptionsProvider)({size:"m"})])]}),e})()}}]);