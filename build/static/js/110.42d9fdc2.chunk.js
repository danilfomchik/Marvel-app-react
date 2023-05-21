"use strict";(self.webpackChunkmarvel=self.webpackChunkmarvel||[]).push([[110],{554:function(e,n,r){var t=r(853),a=r(901),c=r(932),s=r(70),i=r(791),o=r(613),l=r(184),u=function(e){(0,c.Z)(r,e);var n=(0,s.Z)(r);function r(){var e;(0,t.Z)(this,r);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=n.call.apply(n,[this].concat(c))).state={error:!1},e.componentDidCatch=function(n,r){console.log(n,r),e.setState({error:!0})},e}return(0,a.Z)(r,[{key:"render",value:function(){return this.state.error?(0,l.jsx)(o.Z,{}):this.props.children}}]),r}(i.Component);n.Z=u},613:function(e,n,r){r.d(n,{Z:function(){return c}});var t=r.p+"static/media/error.42292aa12b6bc303ce99.gif",a=r(184),c=function(){return(0,a.jsx)("img",{src:t,style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},alt:"This is error"})}},524:function(e,n,r){r.r(n),r.d(n,{default:function(){return Z}});var t=r(430),a=r(791),c=r(394),s=r(304),i=r(613),o=r.p+"static/media/mjolnir.61f31e1809f12183a524.png",l=r(184),u=function(e){var n=e.char,r=n.name,t=n.description,a=n.thumbnail,c=n.homepage,s=n.wiki,i={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===a&&(i={objectFit:"contain"}),(0,l.jsxs)("div",{className:"randomchar__block",children:[(0,l.jsx)("img",{src:a,alt:r,className:"randomchar__img",style:i}),(0,l.jsxs)("div",{className:"randomchar__info",children:[(0,l.jsx)("p",{className:"randomchar__name",children:r}),(0,l.jsx)("p",{className:"randomchar__descr",children:t}),(0,l.jsxs)("div",{className:"randomchar__btns",children:[(0,l.jsx)("a",{href:c,className:"button button__main",target:"_blank",rel:"noreferrer",children:(0,l.jsx)("div",{className:"inner",children:"homepage"})}),(0,l.jsx)("a",{href:s,className:"button button__secondary",target:"_blank",rel:"noreferrer",children:(0,l.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},d=function(){var e=(0,a.useState)({}),n=(0,t.Z)(e,2),r=n[0],d=n[1],h=(0,s.Z)(),m=h.loading,f=h.error,p=h.getCharacter,v=h.clearError;(0,a.useEffect)((function(){_()}),[]);var x=function(e){d(e)},_=function(){v();var e=Math.floor(400*Math.random()+1011e3);p(e).then(x)},j=f?(0,l.jsx)(i.Z,{}):null,b=m?(0,l.jsx)(c.Z,{}):null,g=m||f?null:(0,l.jsx)(u,{char:r});return(0,l.jsxs)("div",{className:"randomchar",children:[j,b,g,(0,l.jsxs)("div",{className:"randomchar__static",children:[(0,l.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",(0,l.jsx)("br",{}),"Do you want to get to know him better?"]}),(0,l.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),(0,l.jsx)("button",{className:"button button__main",onClick:_,children:(0,l.jsx)("div",{className:"inner",children:"try it"})}),(0,l.jsx)("img",{src:o,alt:"mjolnir",className:"randomchar__decoration"})]})]})},h=r(461),m=function(e){var n=e.name,r=e.thumbnail,t=e.id,a=e.itemRef,c=e.updateCharId,s=e.setActiveCard,i=r.includes("image_not_available");return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("li",{className:"char__item",tabIndex:0,onClick:function(){c(),s(t)},onKeyPress:function(e){" "!==e.key&&"Enter"!==e.key||(c(),s(t))},"data-id":t,ref:a,children:[(0,l.jsx)("img",{src:r,alt:n,style:i?{objectFit:"contain"}:null}),(0,l.jsx)("div",{className:"char__name",children:n})]})})},f=function(e){var n=(0,s.Z)(),r=n.loading,t=n.error,o=n.getAllCharacters,u=(0,h.Z)(o),d=u.data,f=u.newItemLoading,p=u.offset,v=u.charEnded,x=u.updateDataList;(0,a.useEffect)((function(){x(p,!0)}),[]);var _=(0,a.useRef)([]),j=function(e){_.current.forEach((function(n){n.classList.remove("char__item_selected"),+n.getAttribute("data-id")===e&&n.classList.add("char__item_selected")}))},b=function(n){var r=e.updateCharId,t=n.map((function(e,n){return(0,l.jsx)(m,{setActiveCard:j,itemRef:function(e){return _.current[n]=e},id:e.id,name:e.name,thumbnail:e.thumbnail,updateCharId:function(){return r(e.id)}},e.id)}));return(0,l.jsx)("ul",{className:"char__grid",children:t})}(d),g=t?(0,l.jsx)(i.Z,{}):null,Z=r&&!f?(0,l.jsx)(c.Z,{}):null;return(0,l.jsxs)("div",{className:"char__list",children:[g,Z,b,(0,l.jsx)("button",{className:"button button__main button__long",onClick:function(){return x(p)},disabled:f,style:{display:v?"none":"block"},children:(0,l.jsx)("div",{className:"inner",children:"load more"})})]})},p=r(504),v=r(895),x=function(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),(0,l.jsxs)("div",{className:"skeleton",children:[(0,l.jsxs)("div",{className:"pulse skeleton__header",children:[(0,l.jsx)("div",{className:"pulse skeleton__circle"}),(0,l.jsx)("div",{className:"pulse skeleton__mini"})]}),(0,l.jsx)("div",{className:"pulse skeleton__block"}),(0,l.jsx)("div",{className:"pulse skeleton__block"}),(0,l.jsx)("div",{className:"pulse skeleton__block"})]})]})},_=function(e){var n=e.char,r=n.name,t=n.description,a=n.thumbnail,c=n.homepage,s=n.wiki,i=n.comics,o=a.includes("image_not_available"),u=i.map((function(e,n){return(0,l.jsx)(p.rU,{to:"/comics/".concat(e.resourceURI.match(/\d+/g)[1]),className:"char__comics-item",children:(0,l.jsx)("li",{children:e.name})},n)}));return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"char__basics",children:[(0,l.jsx)("img",{src:a,alt:r,style:o?{objectFit:"contain"}:null}),(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"char__info-name",children:r}),(0,l.jsxs)("div",{className:"char__btns",children:[(0,l.jsx)("a",{href:c,className:"button button__main",target:"_blank",rel:"noreferrer",children:(0,l.jsx)("div",{className:"inner",children:"homepage"})}),(0,l.jsx)("a",{href:s,className:"button button__secondary",target:"_blank",rel:"noreferrer",children:(0,l.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),(0,l.jsx)("div",{className:"char__descr",children:t}),(0,l.jsx)("div",{className:"char__comics",children:"Comics:"}),(0,l.jsx)("ul",{className:"char__comics-list",children:u.length>0?u.filter((function(e,n){return n<10?e:null})):"Nothing to show..."})]})},j=function(e){var n=(0,s.Z)(),r=n.loading,t=n.error,a=n.getCharacter,o=(0,v.Z)(e.charId,a).dataInfo,u=t?(0,l.jsx)(i.Z,{}):null,d=r||t||o?null:(0,l.jsx)(x,{}),h=r?(0,l.jsx)(c.Z,{}):null,m=r||t||!o?null:(0,l.jsx)(_,{char:o});return(0,l.jsxs)("div",{className:"char__info",children:[d,m,h,u]})},b=r(554),g=r.p+"static/media/vision.067d4ae1936d64a577ce.png",Z=function(){var e=(0,a.useState)(null),n=(0,t.Z)(e,2),r=n[0],c=n[1];return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(b.Z,{children:(0,l.jsx)(d,{})}),(0,l.jsxs)("div",{className:"char__content",children:[(0,l.jsx)(b.Z,{children:(0,l.jsx)(f,{updateCharId:function(e){c(e)},charId:r})}),(0,l.jsx)(b.Z,{children:(0,l.jsx)(j,{charId:r})})]}),(0,l.jsx)("img",{className:"bg-decoration",src:g,alt:"vision"})]})}},461:function(e,n,r){var t=r(531),a=r(430),c=r(791);n.Z=function(e){var n=(0,c.useState)([]),r=(0,a.Z)(n,2),s=r[0],i=r[1],o=(0,c.useState)(!1),l=(0,a.Z)(o,2),u=l[0],d=l[1],h=(0,c.useState)(210),m=(0,a.Z)(h,2),f=m[0],p=m[1],v=(0,c.useState)(!1),x=(0,a.Z)(v,2),_=x[0],j=x[1],b=(0,c.useCallback)((function(n,r){d(!r),e(n).then(g)}),[f]),g=function(e){var n=!1;e.length<9&&(n=!0),i((function(n){return[].concat((0,t.Z)(n),(0,t.Z)(e))})),d(!1),p((function(e){return e+9})),j(n)};return{data:s,newItemLoading:u,offset:f,charEnded:_,updateDataList:b}}},895:function(e,n,r){var t=r(430),a=r(791),c=r(304);n.Z=function(e,n){var r=(0,a.useState)(null),s=(0,t.Z)(r,2),i=s[0],o=s[1],l=(0,c.Z)().clearError;(0,a.useEffect)((function(){u()}),[e]);var u=function(){e&&(l(),n(e).then(d))},d=function(e){o(e)};return{dataInfo:i}}},304:function(e,n,r){r.d(n,{Z:function(){return i}});var t=r(166),a=r(32),c=r(430),s=r(791),i=function(){var e=function(){var e=(0,s.useState)(!1),n=(0,c.Z)(e,2),r=n[0],i=n[1],o=(0,s.useState)(null),l=(0,c.Z)(o,2),u=l[0],d=l[1],h=(0,s.useCallback)(function(){var e=(0,a.Z)((0,t.Z)().mark((function e(n){var r,a,c,s,o,l=arguments;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=l.length>1&&void 0!==l[1]?l[1]:"GET",a=l.length>2&&void 0!==l[2]?l[2]:null,c=l.length>3&&void 0!==l[3]?l[3]:{"Content-Type":"application/json"},i(!0),e.prev=4,e.next=7,fetch(n,{method:r,body:a,headers:c});case 7:if((s=e.sent).ok){e.next=10;break}throw new Error("Could not fetch ".concat(n,", status: ").concat(s.status));case 10:return e.next=12,s.json();case 12:return o=e.sent,i(!1),e.abrupt("return",o);case 17:throw e.prev=17,e.t0=e.catch(4),i(!1),d(e.t0.message),e.t0;case 22:case"end":return e.stop()}}),e,null,[[4,17]])})));return function(n){return e.apply(this,arguments)}}(),[]);return{loading:r,request:h,error:u,clearError:(0,s.useCallback)((function(){return d(null)}),[])}}(),n=e.loading,r=e.request,i=e.error,o=e.clearError,l="https://gateway.marvel.com:443/v1/public/",u="apikey=d047076055a53a4dbf6afb64cf4e109b",d=210,h=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(){var n,a,c=arguments;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>0&&void 0!==c[0]?c[0]:d,e.next=3,r("".concat(l,"characters?limit=9&offset=").concat(n,"&").concat(u));case 3:return a=e.sent,e.abrupt("return",a.data.results.map(x));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(n){var a;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r("".concat(l,"characters/").concat(n,"?").concat(u));case 2:return a=e.sent,e.abrupt("return",x(a.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(){var n,a,c=arguments;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>0&&void 0!==c[0]?c[0]:d,e.next=3,r("".concat(l,"comics?limit=12&offset=").concat(n,"&").concat(u));case 3:return a=e.sent,e.abrupt("return",a.data.results.map(v));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(n){var a;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r("".concat(l,"comics/").concat(n,"?").concat(u));case 2:return a=e.sent,e.abrupt("return",v(a.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(e){var n=e.description;return n||(n="There is no description for this comic..."),{id:e.id,title:e.title,description:n,pages:e.pageCount,thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,language:e.textObjects.language||"en-us",price:e.prices[0].price,homepage:e.urls[0].url}},x=function(e){var n=e.description;return 0===n.length?n="There is no description for this character...":e.description.length>=180&&(n=n.substring(0,180)+" ..."),{comics:e.comics.items,id:e.id,name:e.name,description:n,thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url}};return{loading:n,error:i,getAllCharacters:h,getCharacter:m,getAllComics:f,getComic:p,clearError:o}}}}]);
//# sourceMappingURL=110.42d9fdc2.chunk.js.map