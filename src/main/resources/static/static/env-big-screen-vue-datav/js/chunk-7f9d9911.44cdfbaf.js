(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7f9d9911"],{1276:function(t,e,n){"use strict";var r=n("2ba4"),a=n("c65b"),u=n("e330"),i=n("d784"),o=n("44e7"),s=n("825a"),c=n("1d80"),d=n("4840"),l=n("8aa5"),f=n("50c4"),m=n("577e"),y=n("dc4a"),h=n("4dae"),g=n("14c3"),p=n("9263"),v=n("9f7f"),M=n("d039"),b=v.UNSUPPORTED_Y,D=4294967295,T=Math.min,w=[].push,N=u(/./.exec),x=u(w),H=u("".slice),U=!M((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));i("split",(function(t,e,n){var u;return u="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var u=m(c(this)),i=void 0===n?D:n>>>0;if(0===i)return[];if(void 0===t)return[u];if(!o(t))return a(e,u,t,i);var s,d,l,f=[],y=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),g=0,v=new RegExp(t.source,y+"g");while(s=a(p,v,u)){if(d=v.lastIndex,d>g&&(x(f,H(u,g,s.index)),s.length>1&&s.index<u.length&&r(w,f,h(s,1)),l=s[0].length,g=d,f.length>=i))break;v.lastIndex===s.index&&v.lastIndex++}return g===u.length?!l&&N(v,"")||x(f,""):x(f,H(u,g)),f.length>i?h(f,0,i):f}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:a(e,this,t,n)}:e,[function(e,n){var r=c(this),i=void 0==e?void 0:y(e,t);return i?a(i,e,r,n):a(u,m(r),e,n)},function(t,r){var a=s(this),i=m(t),o=n(u,a,i,r,u!==e);if(o.done)return o.value;var c=d(a,RegExp),y=a.unicode,h=(a.ignoreCase?"i":"")+(a.multiline?"m":"")+(a.unicode?"u":"")+(b?"g":"y"),p=new c(b?"^(?:"+a.source+")":a,h),v=void 0===r?D:r>>>0;if(0===v)return[];if(0===i.length)return null===g(p,i)?[i]:[];var M=0,w=0,N=[];while(w<i.length){p.lastIndex=b?0:w;var U,C=g(p,b?H(i,w):i);if(null===C||(U=T(f(p.lastIndex+(b?w:0)),i.length))===M)w=l(i,w,y);else{if(x(N,H(i,M,w)),N.length===v)return N;for(var S=1;S<=C.length-1;S++)if(x(N,C[S]),N.length===v)return N;w=M=U}}return x(N,H(i,M)),N}]}),!U,b)},"209d":function(t,e,n){},"44e7":function(t,e,n){var r=n("861d"),a=n("c6b6"),u=n("b622"),i=u("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==a(t))}},a1db:function(t,e,n){"use strict";n("209d")},b9b9:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=/d{1,4}|D{3,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|W{1,2}|[LlopSZN]|"[^"]*"|'[^']*'/g,a=/\b(?:[A-Z]{1,3}[A-Z][TC])(?:[-+]\d{4})?|((?:Australian )?(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time)\b/g,u=/[^-+\dA-Z]/g;function i(t,e,n,a){if(1!==arguments.length||"string"!==typeof t||/\d/.test(t)||(e=t,t=void 0),t=t||0===t?t:new Date,t instanceof Date||(t=new Date(t)),isNaN(t))throw TypeError("Invalid date");e=String(o[e]||e||o["default"]);var u=e.slice(0,4);"UTC:"!==u&&"GMT:"!==u||(e=e.slice(4),n=!0,"GMT:"===u&&(a=!0));var i=function(){return n?"getUTC":"get"},y=function(){return t[i()+"Date"]()},h=function(){return t[i()+"Day"]()},g=function(){return t[i()+"Month"]()},p=function(){return t[i()+"FullYear"]()},v=function(){return t[i()+"Hours"]()},M=function(){return t[i()+"Minutes"]()},b=function(){return t[i()+"Seconds"]()},D=function(){return t[i()+"Milliseconds"]()},T=function(){return n?0:t.getTimezoneOffset()},w=function(){return l(t)},N=function(){return f(t)},x={d:function(){return y()},dd:function(){return c(y())},ddd:function(){return s.dayNames[h()]},DDD:function(){return d({y:p(),m:g(),d:y(),_:i(),dayName:s.dayNames[h()],short:!0})},dddd:function(){return s.dayNames[h()+7]},DDDD:function(){return d({y:p(),m:g(),d:y(),_:i(),dayName:s.dayNames[h()+7]})},m:function(){return g()+1},mm:function(){return c(g()+1)},mmm:function(){return s.monthNames[g()]},mmmm:function(){return s.monthNames[g()+12]},yy:function(){return String(p()).slice(2)},yyyy:function(){return c(p(),4)},h:function(){return v()%12||12},hh:function(){return c(v()%12||12)},H:function(){return v()},HH:function(){return c(v())},M:function(){return M()},MM:function(){return c(M())},s:function(){return b()},ss:function(){return c(b())},l:function(){return c(D(),3)},L:function(){return c(Math.floor(D()/10))},t:function(){return v()<12?s.timeNames[0]:s.timeNames[1]},tt:function(){return v()<12?s.timeNames[2]:s.timeNames[3]},T:function(){return v()<12?s.timeNames[4]:s.timeNames[5]},TT:function(){return v()<12?s.timeNames[6]:s.timeNames[7]},Z:function(){return a?"GMT":n?"UTC":m(t)},o:function(){return(T()>0?"-":"+")+c(100*Math.floor(Math.abs(T())/60)+Math.abs(T())%60,4)},p:function(){return(T()>0?"-":"+")+c(Math.floor(Math.abs(T())/60),2)+":"+c(Math.floor(Math.abs(T())%60),2)},S:function(){return["th","st","nd","rd"][y()%10>3?0:(y()%100-y()%10!=10)*y()%10]},W:function(){return w()},WW:function(){return c(w())},N:function(){return N()}};return e.replace(r,(function(t){return t in x?x[t]():t.slice(1,t.length-1)}))}var o={default:"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",paddedShortDate:"mm/dd/yyyy",mediumDate:"mmm d, yyyy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",mediumTime:"h:MM:ss TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:sso",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",expiresHeaderFormat:"ddd, dd mmm yyyy HH:MM:ss Z"},s={dayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"],timeNames:["a","p","am","pm","A","P","AM","PM"]},c=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return String(t).padStart(e,"0")},d=function(t){var e=t.y,n=t.m,r=t.d,a=t._,u=t.dayName,i=t["short"],o=void 0!==i&&i,s=new Date,c=new Date;c.setDate(c[a+"Date"]()-1);var d=new Date;d.setDate(d[a+"Date"]()+1);var l=function(){return s[a+"Date"]()},f=function(){return s[a+"Month"]()},m=function(){return s[a+"FullYear"]()},y=function(){return c[a+"Date"]()},h=function(){return c[a+"Month"]()},g=function(){return c[a+"FullYear"]()},p=function(){return d[a+"Date"]()},v=function(){return d[a+"Month"]()},M=function(){return d[a+"FullYear"]()};return m()===e&&f()===n&&l()===r?o?"Tdy":"Today":g()===e&&h()===n&&y()===r?o?"Ysd":"Yesterday":M()===e&&v()===n&&p()===r?o?"Tmw":"Tomorrow":u},l=function(t){var e=new Date(t.getFullYear(),t.getMonth(),t.getDate());e.setDate(e.getDate()-(e.getDay()+6)%7+3);var n=new Date(e.getFullYear(),0,4);n.setDate(n.getDate()-(n.getDay()+6)%7+3);var r=e.getTimezoneOffset()-n.getTimezoneOffset();e.setHours(e.getHours()-r);var a=(e-n)/6048e5;return 1+Math.floor(a)},f=function(t){var e=t.getDay();return 0===e&&(e=7),e},m=function(t){return(String(t).match(a)||[""]).pop().replace(u,"").replace(/GMT\+0000/g,"UTC")}},ee04:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"download"}},[t.loading?e("div",{staticClass:"load1"},[e("div",{staticClass:"rect1"}),e("div",{staticClass:"rect2"}),e("div",{staticClass:"rect3"}),e("div",{staticClass:"rect4"}),e("div",{staticClass:"rect5"}),e("p",{staticClass:"text"},[t._v("正在获取报告...")])]):e("div",{staticClass:"loadOver"},[e("div"),e("div"),e("div"),e("div"),e("div"),e("p",{staticClass:"text"},[t._v("下载完成")])])])},a=[],u=n("c7eb"),i=n("1da1"),o=(n("a9e3"),n("ac1f"),n("1276"),n("5319"),n("c1fb")),s=n("b9b9"),c="",d="",l={requestDocUrl:function(t,e){if(c){var n="yyyy-mm-dd HH:MM:00",r=Object(s["a"])(t,n).replace(" ","T"),a=Object(s["a"])(e,n).replace(" ","T");return o["a"].post(c,{start_time:r,end_time:a,token:d})}},setRequestUrl:function(t){c="http://"+t},setToken:function(t){d=t}},f=l,m={name:"downloadReport",data:function(){return{loading:!0,reportURL:"",from:"",to:"",url:"",token:""}},mounted:function(){console.log("get download url"),this.from=Number(this.$route.query.from),this.to=Number(this.$route.query.to),this.url=this.$route.query.url,this.token=this.$route.query.token,this.downloadReport()},methods:{downloadReport:function(){var t=this;return Object(i["a"])(Object(u["a"])().mark((function e(){var n,r;return Object(u["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.loading=!0,""!==t.reportURL){e.next=4;break}return e.next=4,t.getReportUrl(t.from,t.to);case 4:n=document.createElement("a"),r=t.reportURL.split("/"),r=r[r.length-1],n.setAttribute("download",r),n.setAttribute("href",t.reportURL),console.log("get download url, successfully"),n.click(),t.loading=!1;case 12:case"end":return e.stop()}}),e)})))()},getReportUrl:function(t,e){var n=this;return Object(i["a"])(Object(u["a"])().mark((function r(){var a,i;return Object(u["a"])().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return f.setRequestUrl(n.url),f.setToken(n.token),r.next=4,f.requestDocUrl(t,e);case 4:a=r.sent,i=a.report,i=i.replace("/data/aizoo-slurm/project/aizoo-release/data-report-designer/","http://10.102.33.49:9095/"),n.reportURL=i;case 8:case"end":return r.stop()}}),r)})))()}}},y=m,h=(n("a1db"),n("2877")),g=Object(h["a"])(y,r,a,!1,null,"6655f738",null);e["default"]=g.exports}}]);
//# sourceMappingURL=chunk-7f9d9911.44cdfbaf.js.map