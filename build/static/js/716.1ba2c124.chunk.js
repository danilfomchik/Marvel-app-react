/*! For license information please see 716.1ba2c124.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkmarvel=self.webpackChunkmarvel||[]).push([[716,20],{613:function(t,r,e){e.d(r,{Z:function(){return i}});var n=e.p+"static/media/error.42292aa12b6bc303ce99.gif",o=e(184),i=function(){return(0,o.jsx)("img",{src:n,style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},alt:"This is error"})}},346:function(t,r,e){e.r(r);var n=e(613),o=e(871),i=e(184);r.default=function(){var t=(0,o.s0)();return(0,i.jsxs)("div",{children:[(0,i.jsx)(n.Z,{}),(0,i.jsxs)("h1",{className:"app__title",children:["This page are ",(0,i.jsx)("span",{children:"not found!"}),(0,i.jsx)("br",{}),"Make sure you enter correct path!"]}),(0,i.jsx)("p",{className:"return-back__btn",onClick:function(){return t(-1)},children:"Return back"})]})}},472:function(t,r,e){e.r(r),e.d(r,{default:function(){return f}});var n=e(871),o=e(504),i=e(304),a=e(895),c=e(394),u=e(346),s=e(184),l=function(t){var r=t.comic,e=r.title,i=r.description,a=r.pages,c=r.thumbnail,u=r.price,l=r.language,f=(0,n.s0)();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("img",{src:c,alt:e,className:"single-comic__img"}),(0,s.jsxs)("div",{className:"single-comic__info",children:[(0,s.jsx)("h2",{className:"single-comic__name",children:e}),(0,s.jsx)("p",{className:"single-comic__descr",children:i}),(0,s.jsxs)("p",{className:"single-comic__descr",children:[a," pages"]}),(0,s.jsxs)("p",{className:"single-comic__descr",children:["Language: ",l]}),(0,s.jsxs)("div",{className:"single-comic__price",children:[u,"$"]})]}),(0,s.jsxs)("div",{className:"single-comic__buttons",children:[(0,s.jsx)(o.rU,{to:"/comics",className:"single-comic__back",children:"Back to all"}),(0,s.jsx)("p",{onClick:function(){return f(-1)},className:"single-comic__return",children:"Return back"})]})]})},f=function(){var t=(0,n.UO)().comicId;console.log(t);var r=(0,i.Z)(),e=r.loading,o=r.error,f=r.getComic,h=(0,a.Z)(t,f).dataInfo,p=o?(0,s.jsx)(u.default,{}):null,d=e?(0,s.jsx)(c.Z,{}):null,v=e||o||!h?null:(0,s.jsx)(l,{comic:h});return(0,s.jsxs)("div",{className:"single-comic",style:o||e?{gridTemplateColumns:"none"}:{gridTemplateColumns:"293px 550px auto"},children:[v,d,p]})}},895:function(t,r,e){var n=e(430),o=e(791),i=e(304);r.Z=function(t,r){var e=(0,o.useState)(null),a=(0,n.Z)(e,2),c=a[0],u=a[1],s=(0,i.Z)().clearError;(0,o.useEffect)((function(){l()}),[t]);var l=function(){t&&(s(),r(t).then(f))},f=function(t){u(t)};return{dataInfo:c}}},304:function(t,r,e){e.d(r,{Z:function(){return c}});var n=e(166),o=e(32),i=e(430),a=e(791),c=function(){var t=function(){var t=(0,a.useState)(!1),r=(0,i.Z)(t,2),e=r[0],c=r[1],u=(0,a.useState)(null),s=(0,i.Z)(u,2),l=s[0],f=s[1],h=(0,a.useCallback)(function(){var t=(0,o.Z)((0,n.Z)().mark((function t(r){var e,o,i,a,u,s=arguments;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=s.length>1&&void 0!==s[1]?s[1]:"GET",o=s.length>2&&void 0!==s[2]?s[2]:null,i=s.length>3&&void 0!==s[3]?s[3]:{"Content-Type":"application/json"},c(!0),t.prev=4,t.next=7,fetch(r,{method:e,body:o,headers:i});case 7:if((a=t.sent).ok){t.next=10;break}throw new Error("Could not fetch ".concat(r,", status: ").concat(a.status));case 10:return t.next=12,a.json();case 12:return u=t.sent,c(!1),t.abrupt("return",u);case 17:throw t.prev=17,t.t0=t.catch(4),c(!1),f(t.t0.message),t.t0;case 22:case"end":return t.stop()}}),t,null,[[4,17]])})));return function(r){return t.apply(this,arguments)}}(),[]);return{loading:e,request:h,error:l,clearError:(0,a.useCallback)((function(){return f(null)}),[])}}(),r=t.loading,e=t.request,c=t.error,u=t.clearError,s="https://gateway.marvel.com:443/v1/public/",l="apikey=d047076055a53a4dbf6afb64cf4e109b",f=210,h=function(){var t=(0,o.Z)((0,n.Z)().mark((function t(){var r,o,i=arguments;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=i.length>0&&void 0!==i[0]?i[0]:f,t.next=3,e("".concat(s,"characters?limit=9&offset=").concat(r,"&").concat(l));case 3:return o=t.sent,t.abrupt("return",o.data.results.map(g));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,o.Z)((0,n.Z)().mark((function t(r){var o;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("".concat(s,"characters/").concat(r,"?").concat(l));case 2:return o=t.sent,t.abrupt("return",g(o.data.results[0]));case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),d=function(){var t=(0,o.Z)((0,n.Z)().mark((function t(){var r,o,i=arguments;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=i.length>0&&void 0!==i[0]?i[0]:f,t.next=3,e("".concat(s,"comics?limit=12&offset=").concat(r,"&").concat(l));case 3:return o=t.sent,t.abrupt("return",o.data.results.map(m));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),v=function(){var t=(0,o.Z)((0,n.Z)().mark((function t(r){var o;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("".concat(s,"comics/").concat(r,"?").concat(l));case 2:return o=t.sent,t.abrupt("return",m(o.data.results[0]));case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),m=function(t){var r=t.description;return r||(r="There is no description for this comic..."),{id:t.id,title:t.title,description:r,pages:t.pageCount,thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,language:t.textObjects.language||"en-us",price:t.prices[0].price,homepage:t.urls[0].url}},g=function(t){var r=t.description;return 0===r.length?r="There is no description for this character...":t.description.length>=180&&(r=r.substring(0,180)+" ..."),{comics:t.comics.items,id:t.id,name:t.name,description:r,thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,homepage:t.urls[0].url,wiki:t.urls[1].url}};return{loading:r,error:c,getAllCharacters:h,getCharacter:p,getAllComics:d,getComic:v,clearError:u}}},32:function(t,r,e){function n(t,r,e,n,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void e(s)}c.done?r(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var r=this,e=arguments;return new Promise((function(o,i){var a=t.apply(r,e);function c(t){n(a,o,i,c,u,"next",t)}function u(t){n(a,o,i,c,u,"throw",t)}c(void 0)}))}}e.d(r,{Z:function(){return o}})},166:function(t,r,e){e.d(r,{Z:function(){return o}});var n=e(675);function o(){o=function(){return t};var t={},r=Object.prototype,e=r.hasOwnProperty,i=Object.defineProperty||function(t,r,e){t[r]=e.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function l(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{l({},"")}catch(O){l=function(t,r,e){return t[r]=e}}function f(t,r,e,n){var o=r&&r.prototype instanceof d?r:d,a=Object.create(o.prototype),c=new L(n||[]);return i(a,"_invoke",{value:_(t,e,c)}),a}function h(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(O){return{type:"throw",arg:O}}}t.wrap=f;var p={};function d(){}function v(){}function m(){}var g={};l(g,c,(function(){return this}));var y=Object.getPrototypeOf,x=y&&y(y(N([])));x&&x!==r&&e.call(x,c)&&(g=x);var b=m.prototype=d.prototype=Object.create(g);function w(t){["next","throw","return"].forEach((function(r){l(t,r,(function(t){return this._invoke(r,t)}))}))}function j(t,r){function o(i,a,c,u){var s=h(t[i],t,a);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==(0,n.Z)(f)&&e.call(f,"__await")?r.resolve(f.__await).then((function(t){o("next",t,c,u)}),(function(t){o("throw",t,c,u)})):r.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return o("throw",t,c,u)}))}u(s.arg)}var a;i(this,"_invoke",{value:function(t,e){function n(){return new r((function(r,n){o(t,e,r,n)}))}return a=a?a.then(n,n):n()}})}function _(t,r,e){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return C()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=k(a,e);if(c){if(c===p)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var u=h(t,r,e);if("normal"===u.type){if(n=e.done?"completed":"suspendedYield",u.arg===p)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n="completed",e.method="throw",e.arg=u.arg)}}}function k(t,r){var e=r.method,n=t.iterator[e];if(void 0===n)return r.delegate=null,"throw"===e&&t.iterator.return&&(r.method="return",r.arg=void 0,k(t,r),"throw"===r.method)||"return"!==e&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+e+"' method")),p;var o=h(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,p;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,p):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,p)}function Z(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function E(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(Z,this),this.reset(!0)}function N(t){if(t){var r=t[c];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function r(){for(;++n<t.length;)if(e.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=void 0,r.done=!0,r};return o.next=o}}return{next:C}}function C(){return{value:void 0,done:!0}}return v.prototype=m,i(b,"constructor",{value:m,configurable:!0}),i(m,"constructor",{value:v,configurable:!0}),v.displayName=l(m,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===v||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,l(t,s,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},w(j.prototype),l(j.prototype,u,(function(){return this})),t.AsyncIterator=j,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new j(f(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(b),l(b,s,"Generator"),l(b,c,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=N,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(e,n){return a.type="throw",a.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=e.call(i,"catchLoc"),u=e.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),p},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),E(e),p}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;E(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:N(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),p}},t}},675:function(t,r,e){function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}e.d(r,{Z:function(){return n}})}}]);
//# sourceMappingURL=716.1ba2c124.chunk.js.map