(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{16:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var a=c(9),n=c.n(a),s=c(4),b=(c(14),c(15),c(16),c(2)),i=c(0),j=c(1),r=function(){return Object(j.jsx)("h1",{className:"title",children:"Home page"})},l=c(6),d=c.n(l),o=Object(i.memo)((function(e){var t=e.tabs,c=e.selectedTab;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"tabs is-boxed",children:Object(j.jsx)("ul",{children:t.map((function(e){var t=e===c;return Object(j.jsx)("li",{"data-cy":"Tab",className:d()({"is-active":t}),children:Object(j.jsx)(s.b,{to:"../".concat(e.id),children:e.title})})}))})})})})),x=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],h=Object(i.memo)((function(){var e=Object(b.h)().tabId,t=void 0===e?"":e,c=x.find((function(e){return e.id===t}))||null;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{className:"title",children:"Tabs page"}),Object(j.jsx)(o,{tabs:x,selectedTab:c}),Object(j.jsx)("div",{className:"block","data-cy":"TabContent",children:c?c.content:"Please select a tab"})]})})),O=function(){return Object(j.jsx)("h1",{className:"title",children:"Page not found"})},m=function(e){var t=e.to,c=e.text;return Object(j.jsx)(s.c,{to:t,className:function(e){var t=e.isActive;return d()("navbar-item",{"is-active":t})},children:c})},u=function(){return Object(j.jsx)("nav",{className:"navbar is-light is-fixed-top is-mobile has-shadow","data-cy":"Nav",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"navbar-brand",children:[Object(j.jsx)(m,{to:"/",text:"Home"}),Object(j.jsx)(m,{to:"tabs",text:"Tabs"})]})})})},v=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(u,{}),Object(j.jsx)("div",{className:"section",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)(b.d,{children:[Object(j.jsx)(b.b,{path:"*",element:Object(j.jsx)(O,{})}),Object(j.jsx)(b.b,{path:"/",element:Object(j.jsx)(r,{})}),Object(j.jsxs)(b.b,{path:"tabs",children:[Object(j.jsx)(b.b,{index:!0,element:Object(j.jsx)(h,{})}),Object(j.jsx)(b.b,{path:":tabId",element:Object(j.jsx)(h,{})})]}),Object(j.jsx)(b.b,{path:"/home",element:Object(j.jsx)(b.a,{to:"/",replace:!0})})]})})})]})};n.a.render(Object(j.jsx)(s.a,{children:Object(j.jsx)(v,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.c65fc1f8.chunk.js.map