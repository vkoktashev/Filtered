(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{27:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(3),r=n.n(s),a=(n(27),n(5)),i=n(4),o=n(10),l=n.n(o),m=n(19),d="GET_COMMENTS_STARTED",u="GET_COMMENTS_SUCCESS",j="GET_COMMENTS_FAILURE",b=n(20),v=n.n(b);var f=n(21),h=Object(f.a)({isLoading:!1,comments:[],error:null});function O(e){return e.get("comments")}var _=n(1);var p=function(e){var t=e.comment,n=e.className;return Object(_.jsx)("div",{className:"comment "+n,children:Object(_.jsxs)("div",{className:"comment__body",children:[Object(_.jsx)("h1",{className:"comment__header",children:t.name}),Object(_.jsx)("h6",{className:"comment__email",children:t.email}),Object(_.jsx)("p",{className:"comment__text",children:t.body})]})})};var x=function(e){var t=e.comments;return Object(_.jsx)("div",{className:"comments",children:Object(_.jsx)("div",{className:"comments__body",children:(null===t||void 0===t?void 0:t.length)>0?t.map((function(e){return Object(_.jsx)(p,{comment:e,className:"comments__comment"})})):"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u044b"})})};var N=function(e){var t=e.domains,n=e.searchFilter,c=e.setSearchFilter,s=e.domainFilter,r=e.setDomainFilter;return Object(_.jsx)("div",{className:"filters",children:Object(_.jsxs)("div",{className:"filters__body",children:[Object(_.jsx)("div",{className:"filters__label",children:"Search"}),Object(_.jsx)("input",{type:"text",placeholder:"Enter Name",className:"filters__search-input",value:n,onChange:function(e){return c(e.target.value)}}),Object(_.jsxs)("div",{className:"filters__domains-list",children:[Object(_.jsx)("div",{className:"filters__label",children:"Show only"}),t.map((function(e){return Object(_.jsx)("button",{onClick:function(){r(s===e?"":e)},className:"filters__domain ".concat(s===e?"filters__domain_active":""),children:e})}))]})]})})};var E=Object(i.b)((function(e){return{comments:O(e)}}),(function(e){return{requestComments:function(){e(function(){var e=Object(m.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:d}),v.a.get("https://jsonplaceholder.typicode.com/comments").then((function(e){t({type:u,data:e.data})})).catch((function(e){console.log(e.message),t({type:j,error:e.message})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}}))((function(e){var t=e.comments,n=e.requestComments,s=Object(c.useState)([]),r=Object(a.a)(s,2),i=r[0],o=r[1],l=Object(c.useState)(""),m=Object(a.a)(l,2),d=m[0],u=m[1],j=Object(c.useState)(""),b=Object(a.a)(j,2),v=b[0],f=b[1],h=Object(c.useMemo)((function(){return function(e){var t=[];for(var n in e){var c,s,r="."+(null===(c=e[n])||void 0===c||null===(s=c.email)||void 0===s?void 0:s.split(".").pop());-1===t.indexOf(r)&&t.push(r)}return t}(t)}),[t]);return Object(c.useEffect)((function(){n()}),[n]),Object(c.useEffect)((function(){o(null===t||void 0===t?void 0:t.filter((function(e){var t,n;return(null===e||void 0===e||null===(t=e.email)||void 0===t?void 0:t.endsWith(d))&&(null===e||void 0===e||null===(n=e.name)||void 0===n?void 0:n.includes(v))})))}),[d,v,t]),Object(_.jsxs)("div",{className:"filtered",children:[Object(_.jsx)("header",{className:"header",children:"Filtered List"}),Object(_.jsx)(N,{domains:h,searchFilter:v,setSearchFilter:f,domainFilter:d,setDomainFilter:u}),Object(_.jsx)(x,{comments:i})]})})),g=n(6),S=n(22),y=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||g.b,C=Object(g.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return e.merge({comments:t.data,isLoading:!1,error:null});case d:return e.set("isLoading",!0);case j:return e.merge({isLoading:!1,error:t.error});default:return e}}),y(Object(g.a)(S.a)));r.a.render(Object(_.jsx)(i.a,{store:C,children:Object(_.jsx)(E,{})}),document.getElementById("root"));t.default=C}},[[52,1,2]]]);
//# sourceMappingURL=main.141bf342.chunk.js.map