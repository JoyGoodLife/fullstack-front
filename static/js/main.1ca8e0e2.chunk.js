(this.webpackJsonpdqflex=this.webpackJsonpdqflex||[]).push([[0],{39:function(e,t,c){},40:function(e,t,c){},60:function(e,t,c){},65:function(e,t,c){},68:function(e,t,c){},69:function(e,t,c){},71:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(13),o=c.n(s),i=(c(39),c(3)),r="YOUR-API-URL",l={fetchDQsPick:"/all",fetchActionMovies:"/genres/action",fetchComedyMovies:"/genres/comedy",fetchHorrorMovies:"/genres/horror",fetchRomanceMovies:"/genres/romance"},d=(c(40),c(7)),j=c(15),b=c(16),u=c.n(b),m=c(28),h=c.n(m).a.create({baseURL:r}),O=(c(60),c(1)),f=function(){var e,t,c=Object(n.useState)([]),a=Object(i.a)(c,2),s=a[0],o=a[1];return Object(n.useEffect)((function(){function e(){return(e=Object(j.a)(Object(d.a)().mark((function e(){var t;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get(l.fetchDQsPick,{headers:{"Access-Control-Allow-Origin":"*"}});case 2:return t=e.sent,o(t.data.result[Math.floor(Math.random()*t.data.result.length-1)]),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(O.jsxs)("header",{className:"banner",style:{backgroundImage:'url(\n                    "https://image.tmdb.org/t/p/original/'.concat(null===s||void 0===s?void 0:s.poster_path,'"\n                    )'),backgroundPosition:"top center",backgroundSize:"cover"},children:[Object(O.jsxs)("div",{className:"banner__contents",children:[Object(O.jsx)("h1",{className:"banner__title",children:(null===s||void 0===s?void 0:s.title)||(null===s||void 0===s?void 0:s.name)||(null===s||void 0===s?void 0:s.original_name)}),Object(O.jsx)("div",{className:"banner__buttons",children:Object(O.jsxs)("button",{className:"banner__button play",children:[Object(O.jsx)(u.a,{}),"Play"]})}),Object(O.jsx)("h1",{className:"banner__description",children:(e=null===s||void 0===s?void 0:s.overview,t=150,(null===e||void 0===e?void 0:e.length)>t?e.substr(0,t-1)+"...":e)})]}),Object(O.jsx)("div",{className:"banner--fadeBottom"})]})},v=(c(65),function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){return window.addEventListener("scroll",(function(){window.scrollY>50?a(!0):a(!1)})),function(){window.removeEventListener("scroll",(function(){}))}}),[]),Object(O.jsxs)("nav",{className:"nav ".concat(c&&"nav__black"),children:[Object(O.jsx)("img",{alt:"DQflex logo",src:"https://i.ibb.co/svtr2tD/dqflex-logo.png",className:"nav__logo"}),Object(O.jsx)("img",{alt:"User logged",src:"https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png",className:"nav__avatar"})]})}),p=c(18),g=c(32),x=c.n(g),_=c(33),w=c.n(_),N=c(31),M=c.n(N),k=c(30),y=c.n(k),R=(c(68),function(e){var t=e.poster_path,c=e.movieId,n=e.title,a=e.genres,s=e.url,o=e.rating_avg,i=e.rating_count,l=e.setModalVisibility,d=e.addRating;return Object(O.jsx)("div",{className:"presentation",role:"presentation",children:Object(O.jsx)("div",{className:"wrapper-modal",children:Object(O.jsxs)("div",{className:"modal",children:[Object(O.jsx)("span",{onClick:function(){return l(!1)},className:"modal-close",children:Object(O.jsx)(M.a,{})}),Object(O.jsxs)("div",{className:"modal__header",children:[Object(O.jsx)("img",{className:"modal__poster-img",src:"".concat(t),alt:"".concat(n)}),Object(O.jsxs)("div",{className:"modal__content",children:[Object(O.jsxs)("p",{className:"modal__details",children:[Object(O.jsx)("span",{className:"modal__user-perc",children:"Genre: "})," ",a.replaceAll("|"," | ")]}),Object(O.jsx)("h3",{className:"modal__title",children:n}),Object(O.jsxs)("p",{className:"modal__overview",children:["Vote Average: ",o.toFixed(2)]}),Object(O.jsxs)("p",{className:"modal__overview",children:["Vote Count: ",i]}),Object(O.jsxs)("div",{className:"modal__header",children:[Object(O.jsxs)("button",{className:"banner__button play",onClick:function(){window.open(s)},children:[Object(O.jsx)(u.a,{}),"Detail"]}),Object(O.jsx)(y.a,{count:5,onChange:function(e){var t="".concat(c,":").concat(e);console.log(t),d(t),l(!1)},size:24,color2:"#ffd700"})]})]})]}),Object(O.jsx)(C,{title:"You may also like...",id:c,fetchUrl:"".concat(r,"/item-based/").concat(c)})]})})})}),C=(c(69),function(e){var t=e.title,c=e.fetchUrl,a=e.id,s=e.addRating,o=Object(n.useState)([]),r=Object(i.a)(o,2),l=r[0],b=r[1],u=Object(n.useState)(!1),m=Object(i.a)(u,2),f=m[0],v=m[1],g=Object(n.useState)({}),_=Object(i.a)(g,2),N=_[0],M=_[1];Object(n.useEffect)((function(){function e(){return(e=Object(j.a)(Object(d.a)().mark((function e(){var t;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get(c,{headers:{"Access-Control-Allow-Origin":"*"}});case 2:return t=e.sent,b(t.data.result),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}console.log(a,c),function(){e.apply(this,arguments)}()}),[c]);return Object(O.jsxs)("section",{className:"row",children:[Object(O.jsx)("h2",{children:t}),Object(O.jsxs)("div",{className:"slider",children:[Object(O.jsx)("div",{className:"slider__arrow-left",children:Object(O.jsx)("span",{className:"arrow",onClick:function(){document.getElementById(a).scrollLeft-=window.innerWidth-80},children:Object(O.jsx)(x.a,{})})}),Object(O.jsx)("div",{id:a,className:"row__posters",children:l.map((function(e,t){return Object(O.jsx)("img",{onClick:function(){return function(e){v(!0),M(e)}(e)},className:"row__poster row__posterLarge",src:"".concat("https://image.tmdb.org/t/p/original/").concat(e.poster_path),loading:"lazy",alt:e.title},t)}))}),Object(O.jsx)("div",{className:"slider__arrow-right",children:Object(O.jsx)("span",{className:"arrow",onClick:function(){document.getElementById(a).scrollLeft+=window.innerWidth-80},children:Object(O.jsx)(w.a,{})})})]}),f&&Object(O.jsx)(R,Object(p.a)(Object(p.a)({},N),{},{setModalVisibility:v,addRating:s}))]})}),U=function(){var e=Object(n.useState)(r+"/all"),t=Object(i.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)([]),o=Object(i.a)(s,2),d=o[0],j=o[1],b=function(e){d.push(e),j(d);var t=d.join("&params="),c="".concat(r,"/user-based/?params=").concat(t);a(c)};return Object(n.useEffect)((function(){if(d.length>0){var e=d.join("&params="),t="".concat(r,"/user-based/?params=").concat(e);a(t)}console.log(c)})),Object(O.jsxs)("div",{className:"app",children:[Object(O.jsx)(v,{}),Object(O.jsx)(f,{}),Object(O.jsx)(C,{title:"Recommend For You",id:"RF",fetchUrl:c,addRating:b},c),Object(O.jsx)(C,{title:"DQ's Pick",id:"DP",fetchUrl:l.fetchDQsPick,addRating:b}),Object(O.jsx)(C,{title:"Action Movies",id:"AM",fetchUrl:l.fetchActionMovies,addRating:b}),Object(O.jsx)(C,{title:"Comedy Movies",id:"CM",fetchUrl:l.fetchComedyMovies,addRating:b}),Object(O.jsx)(C,{title:"Horror Movies",id:"HM",fetchUrl:l.fetchHorrorMovies,addRating:b}),Object(O.jsx)(C,{title:"Romance  Movies",id:"RM",fetchUrl:l.fetchRomanceMovies,addRating:b})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(U,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[71,1,2]]]);
//# sourceMappingURL=main.1ca8e0e2.chunk.js.map