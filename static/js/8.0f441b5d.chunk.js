(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[8],{216:function(t,e,n){},228:function(t,e,n){"use strict";n.r(e);var c=n(65),r=n(38),a=n(4),s=n(1),i=n(6),o=n(226),u=n(227),l=n(33),p=n(9),b=n(27),m=(n(216),n(0)),j=function(t){var e=Object(s.useState)([]),n=Object(a.a)(e,2),c=n[0],j=n[1],d=Object(s.useState)(!1),f=Object(a.a)(d,2),h=f[0],v=f[1],O=Object(s.useState)(0),g=Object(a.a)(O,2),x=g[0],w=g[1],_=Object(s.useState)(!1),k=Object(a.a)(_,2),y=k[0],C=k[1],N=Object(l.a)(),A=N.loading,E=N.error,S=N.getAllComics;Object(s.useEffect)((function(){T(x,!0)}),[]);var T=function(t,e){v(!e),S(t).then(q)},q=function(t){var e=!1;t.length<8&&(e=!0),j((function(e){return[].concat(Object(r.a)(e),Object(r.a)(t))})),v(!1),w((function(t){return t+8})),C(e)};var F=function(t){var e=t.map((function(t,e){return Object(m.jsx)(o.a,{timeout:500,in:!0,classNames:"comics__item",children:Object(m.jsx)("li",{className:"comics__item",children:Object(m.jsxs)(i.b,{to:"/comics/".concat(t.id),children:[Object(m.jsx)("img",{src:t.thumbnail,alt:t.title,className:"comics__item-img"}),Object(m.jsx)("div",{className:"comics__item-name",children:t.title}),Object(m.jsx)("div",{className:"comics__item-price",children:t.price})]})})},e)}));return Object(m.jsx)(u.a,{component:null,children:Object(m.jsx)("ul",{className:"comics__grid",children:e})})}(c),J=E?Object(m.jsx)(b.a,{}):null,B=A&&!h?Object(m.jsx)(p.a,{}):null;return Object(m.jsxs)("div",{className:"comics__list",children:[J,B,F,Object(m.jsx)("button",{className:"button button__main button__long",disabled:h,style:{display:y?"none":"block"},onClick:function(){return T(x)},children:Object(m.jsx)("div",{className:"inner",children:"load more"})})]})},d=n(42);e.default=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)(d.a,{children:[Object(m.jsx)("meta",{name:"description",content:"page with list of our comics"}),Object(m.jsx)("title",{children:"Comics Page"})]}),Object(m.jsx)(c.a,{}),Object(m.jsx)(j,{})]})}},27:function(t,e,n){"use strict";var c=n.p+"static/media/error.42292aa1.gif",r=n(0);e.a=function(){return Object(r.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:c,alt:"Error"})}},33:function(t,e,n){"use strict";var c=n(34),r=n.n(c),a=n(35),s=n(4),i=n(1);e.a=function(){var t=function(){var t=Object(i.useState)(!1),e=Object(s.a)(t,2),n=e[0],c=e[1],o=Object(i.useState)(null),u=Object(s.a)(o,2),l=u[0],p=u[1];return{loading:n,request:Object(i.useCallback)(function(){var t=Object(a.a)(r.a.mark((function t(e){var n,a,s,i,o,u=arguments;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=u.length>1&&void 0!==u[1]?u[1]:"GET",a=u.length>2&&void 0!==u[2]?u[2]:null,s=u.length>3&&void 0!==u[3]?u[3]:{"Content-type":"aplication/json"},c(!0),t.prev=4,t.next=7,fetch(e,{method:n,headers:s,body:a});case 7:if((i=t.sent).ok){t.next=10;break}throw new Error("Could not fetch ".concat(e,", status: ").concat(i.status));case 10:return t.next=12,i.json();case 12:return o=t.sent,c(!1),t.abrupt("return",o);case 17:throw t.prev=17,t.t0=t.catch(4),c(!1),p(t.t0.message),t.t0;case 22:case"end":return t.stop()}}),t,null,[[4,17]])})));return function(e){return t.apply(this,arguments)}}(),[]),clearError:Object(i.useCallback)((function(){return p(null)}),[]),error:l}}(),e=t.loading,n=t.request,c=t.error,o=t.clearError,u="https://gateway.marvel.com:443/v1/public/",l="apikey=c118eb92fd6ba5fcfed9da795ebe5e84",p=function(){var t=Object(a.a)(r.a.mark((function t(){var e,c,a=arguments;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:210,t.next=3,n("".concat(u,"characters?limit=9&offset=").concat(e,"&").concat(l));case 3:return c=t.sent,t.abrupt("return",c.data.results.map(f));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),b=function(){var t=Object(a.a)(r.a.mark((function t(e){var c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n("".concat(u,"characters/").concat(e,"?").concat(l));case 2:return c=t.sent,t.abrupt("return",f(c.data.results[0]));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=Object(a.a)(r.a.mark((function t(e){var c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n("".concat(u,"characters?name=").concat(e,"&").concat(l));case 2:return c=t.sent,t.abrupt("return",c.data.results.map(f));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j=function(){var t=Object(a.a)(r.a.mark((function t(){var e,c,a=arguments;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:0,t.next=3,n("".concat(u,"comics?limit=8&offset=").concat(e,"&").concat(l));case 3:return c=t.sent,t.abrupt("return",c.data.results.map(h));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),d=function(){var t=Object(a.a)(r.a.mark((function t(e){var c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n("".concat(u,"comics/").concat(e,"?").concat(l));case 2:return c=t.sent,t.abrupt("return",h(c.data.results[0]));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(t){return{id:t.id,name:t.name,description:t.description?"".concat(t.description.slice(0,210),"..."):"There is no description for this character",thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,homepage:t.urls[0].url,wiki:t.urls[1].url,comics:t.comics.items}},h=function(t){return{id:t.id,title:t.title,description:t.description||"There is no description",pageCount:t.pageCount?"".concat(t.pageCount):"No information about the number of pages",thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,language:t.textObjects.language||"en-us",price:t.prices.price?"".concat(t.prices.price,"$"):"not available"}};return{loading:e,error:c,clearError:o,getAllCharacters:p,getCharacter:b,getCharacterByName:m,getAllComics:j,getComic:d}}},64:function(t,e,n){},65:function(t,e,n){"use strict";n(64);var c=n.p+"static/media/Avengers.4065c8f9.png",r=n.p+"static/media/Avengers_logo.9eaf2193.png",a=n(0);e.a=function(){return Object(a.jsxs)("div",{className:"app__banner",children:[Object(a.jsx)("img",{src:c,alt:"Avengers"}),Object(a.jsxs)("div",{className:"app__banner-text",children:["New comics every week!",Object(a.jsx)("br",{}),"Stay tuned!"]}),Object(a.jsx)("img",{src:r,alt:"Avengers logo"})]})}}}]);
//# sourceMappingURL=8.0f441b5d.chunk.js.map