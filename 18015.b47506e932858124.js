(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[18015],{18015:(e,t,n)=>{n.r(t),n.d(t,{ExampleTuiFormatDateModule:()=>U});var a=n(88692),o=n(91795),r=n(64500),i=n(75526),u=n(64537),s=n(83074),d=n(43560),c=n(93525),m=n(38868);function l(e){const t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new e.constructor(+e):"number"==typeof e||"[object Number]"===t||"string"==typeof e||"[object String]"===t?new Date(e):new Date(NaN)}function h(e,t){const n=l(e),a=l(t),o=n.getTime()-a.getTime();return o<0?-1:o>0?1:o}Math.pow(10,8);const f=43200;function g(e,t){const n=l(e),a=l(t),o=h(n,a),r=Math.abs(function(e,t){const n=l(e),a=l(t);return 12*(n.getFullYear()-a.getFullYear())+(n.getMonth()-a.getMonth())}(n,a));let i;if(r<1)i=0;else{1===n.getMonth()&&n.getDate()>27&&n.setDate(30),n.setMonth(n.getMonth()-o*r);let t=h(n,a)===-o;(function(e){const t=l(e);return+function(e){const t=l(e);return t.setHours(23,59,59,999),t}(t)==+function(e){const t=l(e),n=t.getMonth();return t.setFullYear(t.getFullYear(),n+1,0),t.setHours(23,59,59,999),t}(t)})(l(e))&&1===r&&1===h(e,a)&&(t=!1),i=o*(r-Number(t))}return 0===i?0:i}const p={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function b(e){return(t={})=>{const n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}const y={date:b({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:b({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:b({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},v={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function w(e){return(t,n)=>{let a;if("formatting"===(n?.context?String(n.context):"standalone")&&e.formattingValues){const t=e.defaultFormattingWidth||e.defaultWidth,o=n?.width?String(n.width):t;a=e.formattingValues[o]||e.formattingValues[t]}else{const t=e.defaultWidth,o=n?.width?String(n.width):e.defaultWidth;a=e.values[o]||e.values[t]}return a[e.argumentCallback?e.argumentCallback(t):t]}}function M(e){return(t,n={})=>{const a=n.width,o=a&&e.matchPatterns[a]||e.matchPatterns[e.defaultMatchWidth],r=t.match(o);if(!r)return null;const i=r[0],u=a&&e.parsePatterns[a]||e.parsePatterns[e.defaultParseWidth],s=Array.isArray(u)?function(e,t){for(let t=0;t<e.length;t++)if(e[t].test(i))return t}(u):function(e,t){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&e[t].test(i))return t}(u);let d;return d=e.valueCallback?e.valueCallback(s):s,d=n.valueCallback?n.valueCallback(d):d,{value:d,rest:t.slice(i.length)}}}var D;const x={code:"en-US",formatDistance:(e,t,n)=>{let a;const o=p[e];return a="string"==typeof o?o:1===t?o.one:o.other.replace("{{count}}",t.toString()),n?.addSuffix?n.comparison&&n.comparison>0?"in "+a:a+" ago":a},formatLong:y,formatRelative:(e,t,n,a)=>v[e],localize:{ordinalNumber:(e,t)=>{const n=Number(e),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:w({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:w({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:e=>e-1}),month:w({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:w({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:w({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(D={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:e=>parseInt(e,10)},(e,t={})=>{const n=e.match(D.matchPattern);if(!n)return null;const a=n[0],o=e.match(D.parsePattern);if(!o)return null;let r=D.valueCallback?D.valueCallback(o[0]):o[0];return r=t.valueCallback?t.valueCallback(r):r,{value:r,rest:e.slice(a.length)}}),era:M({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:M({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:e=>e+1}),month:M({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:M({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:M({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};let T={};function W(){return T}function P(e){const t=l(e),n=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return n.setUTCFullYear(t.getFullYear()),+e-+n}var S=n(1995),k=n(27969);let A=(()=>{var e;class t extends i.TuiFormatDateService{format(e){return(0,S.H)(0,1e3).pipe((0,k.U)((()=>function(e,t,n){const a=W().locale??x,o=h(e,t);if(isNaN(o))throw new RangeError("Invalid time value");const r=Object.assign({},n,{addSuffix:n?.addSuffix,comparison:o});let i,u;o>0?(i=l(t),u=l(e)):(i=l(e),u=l(t));const s=function(e,t,n){const a=function(e,t){return+l(e)-+l(t)}(e,t)/1e3;return(o=n?.roundingMethod,e=>{const t=(o?Math[o]:Math.trunc)(e);return 0===t?0:t})(a);var o}(u,i),d=(P(u)-P(i))/1e3,c=Math.round((s-d)/60);let m;if(c<2)return 0===c?a.formatDistance("lessThanXMinutes",1,r):a.formatDistance("xMinutes",c,r);if(c<45)return a.formatDistance("xMinutes",c,r);if(c<90)return a.formatDistance("aboutXHours",1,r);if(c<1440){const e=Math.round(c/60);return a.formatDistance("aboutXHours",e,r)}if(c<2520)return a.formatDistance("xDays",1,r);if(c<f){const e=Math.round(c/1440);return a.formatDistance("xDays",e,r)}if(c<86400)return m=Math.round(c/f),a.formatDistance("aboutXMonths",m,r);if(m=g(u,i),m<12){const e=Math.round(c/f);return a.formatDistance("xMonths",e,r)}{const e=m%12,t=Math.trunc(m/12);return e<3?a.formatDistance("aboutXYears",t,r):e<9?a.formatDistance("overXYears",t,r):a.formatDistance("almostXYears",t+1,r)}}(e,Date.now()))))}}return(e=t).ɵfac=function(){let t;return function(n){return(t||(t=u.n5z(e)))(n||e)}}(),e.ɵprov=u.Yz7({token:e,factory:e.ɵfac}),t})();var Z=n(93446);let C=(()=>{var e;class t{constructor(){this.now=Date.now()}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=u.Xpm({type:e,selectors:[["tui-format-date-example-1"]],features:[u._Bn([{provide:i.TuiFormatDateService,useClass:A}])],decls:3,vars:5,template:function(e,t){1&e&&(u._uU(0),u.ALo(1,"async"),u.ALo(2,"tuiFormatDate")),2&e&&u.hij("Page refreshed ",u.lcZ(1,1,u.lcZ(2,3,t.now))," ago\n")},dependencies:[a.Ov,Z.x],encapsulation:2,changeDetection:0}),t})();function F(e,t){if(1&e&&(u.TgZ(0,"p"),u._uU(1,"Pipe to format timestamps/dates dynamically"),u.qZA(),u.TgZ(2,"p"),u._uU(3," Differs from built-in Angular date formatting pipe because it returns an "),u.TgZ(4,"code"),u._uU(5,"Observable"),u.qZA()(),u.TgZ(6,"tui-doc-example",3),u._UZ(7,"tui-format-date-example-1"),u.qZA()),2&e){const e=u.oxw();u.xp6(6),u.Q6J("content",e.example1)}}function j(e,t){if(1&e&&(u.TgZ(0,"ol",4)(1,"li")(2,"p"),u._uU(3," Import "),u.TgZ(4,"code"),u._uU(5,"TuiFormatDatePipeModule"),u.qZA(),u._uU(6," into a module where you want to use the pipe "),u.qZA(),u._UZ(7,"tui-doc-code",5),u.qZA(),u.TgZ(8,"li")(9,"p"),u._uU(10,"Use pipe in template"),u.qZA(),u._UZ(11,"tui-doc-code",6),u.qZA(),u.TgZ(12,"li")(13,"p"),u._uU(14,"Provide custom service for formatting"),u.qZA(),u._UZ(15,"tui-doc-code",7),u.qZA()()),2&e){const e=u.oxw();u.xp6(7),u.Q6J("code",e.exampleModule),u.xp6(4),u.Q6J("code",e.exampleHtml),u.xp6(4),u.Q6J("code",e.exampleTs)}}let q=(()=>{var e;class t{constructor(){this.exampleModule=n.e(12381).then(n.t.bind(n,12381,17)),this.exampleHtml=n.e(88205).then(n.t.bind(n,88205,17)),this.exampleTs=n.e(14164).then(n.t.bind(n,14164,17)),this.example1={TypeScript:n.e(44673).then(n.t.bind(n,44673,17)),HTML:n.e(55981).then(n.t.bind(n,55981,17)),"service.ts":n.e(37900).then(n.t.bind(n,37900,17))}}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=u.Xpm({type:e,selectors:[["example-tui-format-date"]],decls:3,vars:0,consts:[["header","FormatDate","package","CORE","type","pipes"],["pageTab",""],["pageTab","Setup"],["id","base","heading","Custom service",3,"content"],[1,"b-demo-steps"],["filename","my.module.ts",3,"code"],["filename","my.component.html",3,"code"],["filename","my.component.ts",3,"code"]],template:function(e,t){1&e&&(u.TgZ(0,"tui-doc-page",0),u.YNc(1,F,8,1,"ng-template",1),u.YNc(2,j,16,3,"ng-template",2),u.qZA())},dependencies:[s.c,d.q,c.n,m.f,C],encapsulation:2,changeDetection:0}),t})(),U=(()=>{var e;class t{}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵmod=u.oAB({type:e}),e.ɵinj=u.cJS({imports:[a.ez,r.fV,i.TuiFormatDatePipeModule,o.Bz.forChild((0,r.Ve)(q))]}),t})()}}]);