/*! For license information please see 25.59da6db9.chunk.js.LICENSE.txt */
(this["webpackJsonp@mikecodeur/react-hooks-avances"]=this["webpackJsonp@mikecodeur/react-hooks-avances"]||[]).push([[25],{250:function(e,r,t){"use strict";t.r(r);var n=t(7),o=t(83),c=t(0),u=t(324),a={light:{ul:{listStyleType:"square"},li:{background:"#eeeeee",color:"#000000"},foreground:"#000000",background:"#eeeeee"},dark:{ul:{listStyleImage:"url('https://www.w3schools.com/css/sqpurple.gif')"},li:{background:"#222222",color:"white"},foreground:"#ffffff",background:"#222222"}};function s(e){var r=e.theme;return Object(u.jsxs)("div",{children:[Object(u.jsx)(l,{theme:r}),Object(u.jsx)(i,{theme:r})]})}function l(e){var r=e.theme;return Object(u.jsx)("button",{style:{background:r.background,color:r.foreground},children:"Envoyer"})}function i(e){var r=e.theme;return Object(u.jsx)("ul",{style:Object(o.a)({},r.ul),children:["react","angular","vue"].map((function(e,t){return Object(u.jsx)(f,{theme:r,children:e},t)}))})}function f(e){var r=e.children,t=e.theme;return Object(u.jsx)("li",{style:Object(o.a)({},t.li),children:r})}function d(e){var r=e.darkMode,t=e.onChange,n=e.theme;return Object(u.jsxs)("label",{style:{background:n.background,color:n.foreground},children:[Object(u.jsx)("input",{type:"checkbox",checked:r,onChange:function(e){t(e.target.checked)}})," ","utiliser le DarkMode ?"]})}r.default=function(){var e=c.useState(!1),r=Object(n.a)(e,2),t=r[0],o=r[1],l=t?a.dark:a.light;return Object(u.jsxs)("div",{children:[Object(u.jsx)(d,{theme:l,darkMode:t,onChange:o}),Object(u.jsx)(s,{theme:l})]})}},324:function(e,r,t){"use strict";e.exports=t(325)},325:function(e,r,t){"use strict";t(93);var n=t(0),o=60103;if(r.Fragment=60107,"function"===typeof Symbol&&Symbol.for){var c=Symbol.for;o=c("react.element"),r.Fragment=c("react.fragment")}var u=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a=Object.prototype.hasOwnProperty,s={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,t){var n,c={},l=null,i=null;for(n in void 0!==t&&(l=""+t),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(i=r.ref),r)a.call(r,n)&&!s.hasOwnProperty(n)&&(c[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===c[n]&&(c[n]=r[n]);return{$$typeof:o,type:e,key:l,ref:i,props:c,_owner:u.current}}r.jsx=l,r.jsxs=l}}]);
//# sourceMappingURL=25.59da6db9.chunk.js.map