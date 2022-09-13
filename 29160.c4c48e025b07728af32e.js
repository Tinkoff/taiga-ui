"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[29160],{29160:(me,d,o)=>{o.r(d),o.d(d,{ExampleTuiAxesModule:()=>de});var m=o(12057),p=o(12021),r=o(50179),X=o(23121),S=o(78697),D=o(90987),$=o(89570),e=o(74788),Y=o(88331),V=o(37159),b=o(57068),u=o(70390);let H=(()=>{class n{constructor(){this.axisXLabels=["Jan 2019","Feb","Mar"],this.axisYLabels=["","25%","50%","75%","100%"],this.axisYSecondaryLabels=["80 k","100 k","120 k"],this.verticalLinesHandler=(t,l)=>t===l-1?"none":"dashed"}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["tui-axes-example-1"]],decls:1,vars:7,consts:[["axisYName","Target","axisYSecondaryName","Sum",1,"axes",3,"axisYInset","horizontalLines","verticalLines","axisXLabels","axisYLabels","axisYSecondaryLabels","verticalLinesHandler"]],template:function(t,l){1&t&&e._UZ(0,"tui-axes",0),2&t&&e.Q6J("axisYInset",!0)("horizontalLines",2)("verticalLines",3)("axisXLabels",l.axisXLabels)("axisYLabels",l.axisYLabels)("axisYSecondaryLabels",l.axisYSecondaryLabels)("verticalLinesHandler",l.verticalLinesHandler)},directives:[u.v],styles:[".axes[_ngcontent-%COMP%]{height:18.75rem;width:37.5rem}"],changeDetection:0}),n})();var v=o(64762),E=o(36692),J=o(88549),I=o(84848),F=o(16996);function U(n,a){if(1&n&&(e.TgZ(0,"p",4),e._UZ(1,"span",5),e.TgZ(2,"span",6),e._uU(3),e.qZA(),e._UZ(4,"tui-money",7),e.qZA()),2&n){const t=a.$implicit,l=a.index,s=e.oxw().$implicit,i=e.oxw();e.xp6(1),e.Udp("background",i.getBackground(l)),e.xp6(2),e.Oqu(i.getSetName(l)),e.xp6(1),e.Q6J("singleColor",!0)("value",1e3*t[s])}}function z(n,a){if(1&n&&e.YNc(0,U,5,5,"p",3),2&n){const t=e.oxw();e.Q6J("ngForOf",t.value)}}class c{constructor(){this.setNames=["cdk","core","kit","charts"],this.value=[[10,20,3,7],[15,18,24,1],[34,23,12,9],[30,14,18,14]],this.axisYSecondaryLabels=["",this.getMax(this.value)/2+" k",`${this.getMax(this.value)} k`],this.axisXLabels=["Q1","Q2","Q3","Q4"],this.horizontalLinesHandler=r.TUI_ALWAYS_DASHED,this.verticalLinesHandler=r.TUI_ALWAYS_NONE}getPercent(a){return 100*Math.max(...a)/this.getMax(this.value)}getSetName(a){return this.setNames[a]}getBackground(a){return`var(--tui-chart-${a})`}getMax(a){return(0,E.tuiCeil)(a.reduce((t,l)=>Math.max(...l,t),0),-1)}}c.\u0275fac=function(a){return new(a||c)},c.\u0275cmp=e.Xpm({type:c,selectors:[["tui-axes-example-2"]],decls:4,vars:8,consts:[["axisY","none",1,"axes",3,"axisXLabels","axisYSecondaryLabels","horizontalLines","verticalLines","horizontalLinesHandler","verticalLinesHandler"],[1,"chart",3,"value","tuiHintContent"],["hint",""],["class","hint",4,"ngFor","ngForOf"],[1,"hint"],[1,"dot"],[1,"name"],[3,"singleColor","value"]],template:function(a,t){if(1&a&&(e.TgZ(0,"tui-axes",0),e._UZ(1,"tui-bar-chart",1),e.qZA(),e.YNc(2,z,1,1,"ng-template",null,2,e.W1O)),2&a){const l=e.MAs(3);e.Q6J("axisXLabels",t.axisXLabels)("axisYSecondaryLabels",t.axisYSecondaryLabels)("horizontalLines",2)("verticalLines",4)("horizontalLinesHandler",t.horizontalLinesHandler)("verticalLinesHandler",t.verticalLinesHandler),e.xp6(1),e.Q6J("value",t.value)("tuiHintContent",l)}},directives:[u.v,J.g,I.b,m.sg,F.o],styles:["[_nghost-%COMP%], .hint[_ngcontent-%COMP%]{--tui-chart-0: #c779d0;--tui-chart-1: #feac5e;--tui-chart-2: #ff5f6d;--tui-chart-3: #4bc0c8}.axes[_ngcontent-%COMP%]{height:18.75rem;width:37.5rem}.chart[_ngcontent-%COMP%]{height:100%}.wrapper[_ngcontent-%COMP%]{position:relative;display:flex;flex:1;align-items:flex-end;justify-content:center;height:100%;margin-bottom:-.0625rem;cursor:pointer}.wrapper[_ngcontent-%COMP%]:hover{background-color:rgba(0,0,0,.05)}.hint[_ngcontent-%COMP%]{display:flex;align-items:center}.dot[_ngcontent-%COMP%]{border-radius:100%;width:.75rem;height:.75rem;margin-right:.5rem}.name[_ngcontent-%COMP%]{margin-right:.5rem}"],changeDetection:0}),(0,v.gn)([E.tuiPure],c.prototype,"getMax",null);var Z=o(31823),Q=o(44051),W=o(17023),B=o(76349);function j(n,a){if(1&n&&(e.TgZ(0,"p"),e.SDv(1,2),e.qZA(),e.TgZ(2,"tui-doc-example",3),e._UZ(3,"tui-axes-example-1"),e.qZA(),e.TgZ(4,"tui-doc-example",4),e._UZ(5,"tui-axes-example-2"),e.qZA()),2&n){const t=e.oxw();e.xp6(2),e.Q6J("content",t.example1),e.xp6(2),e.Q6J("content",t.example2)}}function K(n,a){1&n&&e.SDv(0,19)}function w(n,a){1&n&&(e.tHW(0,20),e._UZ(1,"code"),e.N_p())}function k(n,a){1&n&&e.SDv(0,21)}function q(n,a){1&n&&e.SDv(0,22)}function ee(n,a){1&n&&e.SDv(0,23)}function te(n,a){1&n&&e.SDv(0,24)}function ne(n,a){1&n&&e.SDv(0,25)}function oe(n,a){1&n&&e.SDv(0,26)}function ae(n,a){1&n&&e.SDv(0,27)}function ie(n,a){1&n&&e.SDv(0,28)}function le(n,a){1&n&&e.SDv(0,29)}function se(n,a){1&n&&e.SDv(0,30)}function _e(n,a){1&n&&e.SDv(0,31)}function re(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"tui-doc-demo"),e._UZ(1,"tui-axes",5),e.qZA(),e.TgZ(2,"tui-doc-documentation"),e.YNc(3,K,1,0,"ng-template",6),e.NdJ("documentationPropertyValueChange",function(s){return e.CHM(t),e.oxw().axisX=s}),e.YNc(4,w,2,0,"ng-template",7),e.NdJ("documentationPropertyValueChange",function(s){return e.CHM(t),e.oxw().axisXLabels=s}),e.YNc(5,k,1,0,"ng-template",8),e.NdJ("documentationPropertyValueChange",function(s){return e.CHM(t),e.oxw().axisY=s}),e.YNc(6,q,1,0,"ng-template",9),e.NdJ("documentationPropertyValueChange",function(s){return e.CHM(t),e.oxw().axisYInset=s}),e.YNc(7,ee,1,0,"ng-template",10),e.NdJ("documentationPropertyValueChange",function(s){return e.CHM(t),e.oxw().axisYLabels=s}),e.YNc(8,te,1,0,"ng-template",11),e.NdJ("documentationPropertyValueChange",function(s){return e.CHM(t),e.oxw().axisYName=s}),e.YNc(9,ne,1,0,"ng-template",12),e.NdJ("documentationPropertyValueChange",function(s){return e.CHM(t),e.oxw().axisYSecondaryInset=s}),e.YNc(10,oe,1,0,"ng-template",13),e.NdJ("documentationPropertyValueChange",function(s){return e.CHM(t),e.oxw().axisYSecondaryLabels=s}),e.YNc(11,ae,1,0,"ng-template",14),e.NdJ("documentationPropertyValueChange",function(s){return e.CHM(t),e.oxw().axisYSecondaryName=s}),e.YNc(12,ie,1,0,"ng-template",15),e.NdJ("documentationPropertyValueChange",function(s){return e.CHM(t),e.oxw().horizontalLines=s}),e.YNc(13,le,1,0,"ng-template",16),e.NdJ("documentationPropertyValueChange",function(s){return e.CHM(t),e.oxw().horizontalLinesHandler=s}),e.YNc(14,se,1,0,"ng-template",17),e.NdJ("documentationPropertyValueChange",function(s){return e.CHM(t),e.oxw().verticalLines=s}),e.YNc(15,_e,1,0,"ng-template",18),e.NdJ("documentationPropertyValueChange",function(s){return e.CHM(t),e.oxw().verticalLinesHandler=s}),e.qZA()}if(2&n){const t=e.oxw();e.xp6(1),e.Q6J("axisX",t.axisX)("axisXLabels",t.axisXLabels)("axisY",t.axisY)("axisYInset",t.axisYInset)("axisYLabels",t.axisYLabels)("axisYName",t.axisYName)("axisYSecondaryInset",t.axisYSecondaryInset)("axisYSecondaryLabels",t.axisYSecondaryLabels)("axisYSecondaryName",t.axisYSecondaryName)("horizontalLines",t.horizontalLines)("horizontalLinesHandler",t.horizontalLinesHandler)("verticalLines",t.verticalLines)("verticalLinesHandler",t.verticalLinesHandler),e.xp6(2),e.Q6J("documentationPropertyValues",t.lineVariants)("documentationPropertyValue",t.axisX),e.xp6(1),e.Q6J("documentationPropertyValues",t.labelsXVariants)("documentationPropertyValue",t.axisXLabels),e.xp6(1),e.Q6J("documentationPropertyValues",t.lineVariants)("documentationPropertyValue",t.axisY),e.xp6(1),e.Q6J("documentationPropertyValue",t.axisYInset),e.xp6(1),e.Q6J("documentationPropertyValues",t.labelsYVariants)("documentationPropertyValue",t.axisYLabels),e.xp6(1),e.Q6J("documentationPropertyValue",t.axisYName),e.xp6(1),e.Q6J("documentationPropertyValue",t.axisYSecondaryInset),e.xp6(1),e.Q6J("documentationPropertyValues",t.labelsYVariants)("documentationPropertyValue",t.axisYSecondaryLabels),e.xp6(1),e.Q6J("documentationPropertyValue",t.axisYSecondaryName),e.xp6(1),e.Q6J("documentationPropertyValue",t.horizontalLines),e.xp6(1),e.Q6J("documentationPropertyValues",t.handlerVariants)("documentationPropertyValue",t.horizontalLinesHandler),e.xp6(1),e.Q6J("documentationPropertyValue",t.verticalLines),e.xp6(1),e.Q6J("documentationPropertyValues",t.handlerVariants)("documentationPropertyValue",t.verticalLinesHandler)}}function ce(n,a){if(1&n&&(e.TgZ(0,"ol",32),e.TgZ(1,"li"),e.TgZ(2,"p"),e.tHW(3,33),e._UZ(4,"code"),e.N_p(),e.qZA(),e._UZ(5,"tui-doc-code",34),e.qZA(),e.TgZ(6,"li"),e.TgZ(7,"p"),e.SDv(8,35),e.qZA(),e._UZ(9,"tui-doc-code",36),e.qZA(),e.qZA()),2&n){const t=e.oxw();e.xp6(5),e.Q6J("code",t.exampleModule),e.xp6(4),e.Q6J("code",t.exampleHtml)}}let ue=(()=>{class n{constructor(){this.exampleModule=o.e(49477).then(o.t.bind(o,49477,17)),this.exampleHtml=o.e(70123).then(o.t.bind(o,70123,17)),this.example1={TypeScript:o.e(79766).then(o.t.bind(o,79766,17)),HTML:o.e(67112).then(o.t.bind(o,67112,17)),LESS:o.e(43475).then(o.t.bind(o,43475,17))},this.example2={TypeScript:o.e(77781).then(o.t.bind(o,77781,17)),HTML:o.e(72570).then(o.t.bind(o,72570,17)),LESS:o.e(49767).then(o.t.bind(o,49767,17))},this.lineVariants=["solid","dashed","none","hidden"],this.labelsXVariants=[[],["","25%","50%","100%"],["One","Two","Three"],["One",null,"","Two and a half","Three",null]],this.labelsYVariants=[[],["","25%","50%","100%"],["One","Two","Three"],["One","","Two and a half","Three"]],this.handlerVariants=[r.TUI_ALWAYS_SOLID,r.TUI_ALWAYS_DASHED,t=>t%2?"dashed":"solid"],this.axisX=this.lineVariants[0],this.axisXLabels=this.labelsXVariants[0],this.axisY=this.lineVariants[0],this.axisYInset=!1,this.axisYLabels=this.labelsYVariants[0],this.axisYName="",this.axisYSecondaryInset=!1,this.axisYSecondaryLabels=this.labelsYVariants[0],this.axisYSecondaryName="",this.horizontalLines=0,this.horizontalLinesHandler=this.handlerVariants[0],this.verticalLines=0,this.verticalLinesHandler=this.handlerVariants[1]}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["example-tui-axes"]],decls:4,vars:0,consts:function(){let a,t,l,s,i,T,g,C,x,M,A,y,O,f,P,h,N,L,R;return a=$localize`:␟157063b95e7de3b711a5e65f8b1b4a66bf51a9a7␟3176053473328457908:Axes`,t=$localize`:␟299892581b7c29a4afe856bb50e83f932e7c19f9␟3749794859286359761:Just axes for charts`,l=$localize`:␟9b735478d27ada48a6cc734cb7f499ffe3b60f31␟5400608477820076858:Cool one`,s=$localize`:␟befa476ed5c37d3ed4be47fe5759c340c6e24cd4␟927609271953315702:With bars`,i=$localize`:␟f64e1f5d1e794dab4b787c26bf022a2c9898d1ef␟7040174970690647937: Axis X `,T=$localize`:␟2f8e23a3f6977505fbbb8b3213e5912e32a2188d␟5270458325684962839: Labels for X. Emptry string is empty stroke, ${"\ufffd#1\ufffd"}:START_TAG_CODE:null${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: — no stroke `,g=$localize`:␟2642d8e7bc40dbf7276fb69cb640c80ac1c07be9␟5140923464869546529: Axis Y `,C=$localize`:␟60800456eca99202fc6cebb2fc9f5a10a5e0a72d␟2837390181413385612: Inset of labels on axis Y `,x=$localize`:␟06d8e98f8b5258586ff187e97dae0d16518e9ab5␟2657129922321475589: Labels for Y `,M=$localize`:␟7e478ef44515adc35026c32852851c7f7d84d651␟4037762709948884159: Name of Y axis `,A=$localize`:␟ac60157a8311a55856019cafd6b36016eb669dab␟1884145993509521583: Inset labels for Y `,y=$localize`:␟83b47ed4c100d02f8d9266656e0a0cd4868829a1␟5391635047792570800: Secondary Y axis labels `,O=$localize`:␟264edf3e9d07bdae2defe9a9a8083e92d020d303␟1495535954616436734: Secondary Y axis name `,f=$localize`:␟b320bfbd957dcc40c0482581c996f149ec3ffbf5␟8249773395630076811: Horizontal lines number `,P=$localize`:␟36af86f2988f299294e7c3e39259c33da740851b␟7177151488130232990: Horizontal lines type handler `,h=$localize`:␟5495dd2570db74aef538977c664775059a1554c9␟6546346680735354696: Number of vertical lines `,N=$localize`:␟cf738f0fc8a03a466440318b0f21a2b9199b10c6␟1142374539392645294: Vertical lines type handler `,L=$localize`:␟44a035fbfcb4f3f0ef301785a4fea1e80b4afe55␟2561454909924995663: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiAxesModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,R=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`,[["header",a,"package","ADDON-CHARTS","type","components"],["pageTab",""],t,["id","advanced","heading",l,3,"content"],["id","bars","heading",s,3,"content"],[1,"axes",3,"axisX","axisXLabels","axisY","axisYInset","axisYLabels","axisYName","axisYSecondaryInset","axisYSecondaryLabels","axisYSecondaryName","horizontalLines","horizontalLinesHandler","verticalLines","verticalLinesHandler"],["documentationPropertyName","axisX","documentationPropertyMode","input","documentationPropertyType","TuiLineTypeT",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","axisXLabels","documentationPropertyMode","input","documentationPropertyType","ReadonlyArray<string | null>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","axisY","documentationPropertyMode","input","documentationPropertyType","TuiLineTypeT",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","axisYInset","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","axisYLabels","documentationPropertyMode","input","documentationPropertyType","readonly string[]",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","axisYName","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","axisYSecondaryInset","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","axisYSecondaryLabels","documentationPropertyMode","input","documentationPropertyType","readonly string[]",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","axisYSecondaryName","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","horizontalLines","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","horizontalLinesHandler","documentationPropertyMode","input","documentationPropertyType","TuiLineHandler",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","verticalLines","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","verticalLinesHandler","documentationPropertyMode","input","documentationPropertyType","TuiLineHandler",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],i,T,g,C,x,M,A,y,O,f,P,h,N,[1,"b-demo-steps"],L,["filename","myComponent.module.ts",3,"code"],R,["filename","myComponent.template.html",3,"code"]]},template:function(t,l){1&t&&(e.TgZ(0,"tui-doc-page",0),e.YNc(1,j,6,2,"ng-template",1),e.YNc(2,re,16,33,"ng-template",1),e.YNc(3,ce,10,2,"ng-template",1),e.qZA())},directives:[Y.q,V.n,b.f,H,c,Z.F,u.v,Q.z,W.B,B.c],styles:[".axes[_ngcontent-%COMP%]{height:12.5rem}"],changeDetection:0}),n})(),de=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[m.ez,p.Bz,r.TuiAxesModule,r.TuiBarChartModule,D.TuiHintModule,$.wq,X.TuiMoneyModule,S.fV,p.Bz.forChild((0,S.Ve)(ue))]]}),n})()}}]);