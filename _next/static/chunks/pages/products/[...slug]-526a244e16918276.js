(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[594],{2290:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/products/[...slug]",function(){return t(622)}])},5024:function(e,n,t){"use strict";t.d(n,{Z:function(){return x}});var r=t(5666),a=t.n(r),c=t(5893),i=t(7294);function s(e,n,t,r,a,c,i){try{var s=e[c](i),o=s.value}catch(l){return void t(l)}s.done?n(o):Promise.resolve(o).then(r,a)}function o(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var c=e.apply(n,t);function i(e){s(c,r,a,i,o,"next",e)}function o(e){s(c,r,a,i,o,"throw",e)}i(void 0)}))}}function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){l(e,n,t[n])}))}return e}var d="--loading",m="--success",f="--error";function h(e,n,t){return function(r){var s=function(){p("".concat(t).concat(d)),b.current=Date.now()},l=function(e){var n=Date.now()-b.current,t=r.minimumLoadingTime||1e3;n>=t?x(e):setTimeout((function(){x(e)}),t-n)},h=(0,i.useState)(""),v=h[0],p=h[1],b=(0,i.useRef)(0),x=function(e){p("".concat(t).concat(e?m:f)),!1!==r.autoReset&&setTimeout((function(){p(""),b.current=0}),r.resetTimeout||2e3)};function j(){return(j=o(a().mark((function e(t){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(),e.next=3,n(t);case 3:r=e.sent,l(r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,c.jsx)("span",{className:v,children:(0,c.jsx)(e,u({onClick:function(e){return function(e){return j.apply(this,arguments)}(e)}},r))})}}function v(e,n,t,r,a,c,i){try{var s=e[c](i),o=s.value}catch(l){return void t(l)}s.done?n(o):Promise.resolve(o).then(r,a)}function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var b=function(e){var n=e.label,t=e.articleNumber,r=e.quantityFieldId,a=e.href,s=e.cssClass,o=e.onClick;return(0,c.jsx)(i.Fragment,{children:t?(0,c.jsx)("a",{className:s,onClick:function(){return o({articleNumber:t,quantityFieldId:r})},children:n}):(0,c.jsx)("a",{className:s,href:a,children:n})})},x=function(e){var n,t=(n=a().mark((function e(n){var t,r=n.articleNumber,c=n.quantityFieldId;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=c?document.getElementById(c).value:1,e.next=4,addToCartService({articleNumber:r,quantity:t});case 4:return e.sent,e.abrupt("return",!0);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})),function(){var e=this,t=arguments;return new Promise((function(r,a){var c=n.apply(e,t);function i(e){v(c,r,a,i,s,"next",e)}function s(e){v(c,r,a,i,s,"throw",e)}i(void 0)}))}),r=h(b,t,"buy-button");return(0,c.jsx)(r,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){p(e,n,t[n])}))}return e}({},e))}},6009:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var r=t(5893),a=t(5675);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){c(e,n,t[n])}))}return e}function s(e){var n=i({},e,{priority:void 0});return(0,r.jsx)(a.default,i({},n,{loader:o}))}var o=function(e){var n=e.src;e.width,e.quality;return"".concat(n)}},9663:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var r=t(5893);function a(e){var n=e.price;return(0,r.jsx)("span",{className:"price",children:n})}},9935:function(e,n,t){"use strict";t.d(n,{Z:function(){return p}});var r=t(5893),a=t(1664),c=t(3310);function i(e){var n=e.sectionList;return(0,r.jsx)("footer",{className:"footer",children:(0,r.jsx)("div",{className:"row",children:n&&n.map((function(e){return(0,r.jsxs)("section",{className:"columns small-10 small-offset-1 medium-offset-0 medium-5 large-3 footer__section",children:[(0,r.jsx)("h4",{className:"footer__header",children:e.sectionTitle}),e.sectionLinkList&&e.sectionLinkList.map((function(e){return(0,r.jsx)("p",{children:(0,r.jsx)(a.default,{href:"".concat((0,c.l)(e.href)),children:(0,r.jsx)("a",{className:"footer__link",children:e.text})})},e.href)})),e.sectionText&&(0,r.jsx)("div",{dangerouslySetInnerHTML:{__html:e.sectionText}})]},e.sectionTitle)}))})})}var s=t(6009),o=t(7294),l=t(1163),u=function(e){var n=e.links,t=void 0===n?[]:n,i=e.contentLink,s=void 0===i?null:i,d=(0,o.useRef)(null),m=function(){d.current.classList.toggle("navbar__menu--show")},f=s&&s.attributes?s.attributes.cssValue:null,h=(0,l.useRouter)().query.slug||[],v=s&&s.href&&"/".concat(h.join("/"),"/").startsWith("".concat((0,c.l)(s.href),"/"))?"navbar__link--selected":"",p=t.length>0?"has-children":null;return(0,r.jsxs)(o.Fragment,{children:[s?(0,r.jsxs)(o.Fragment,{children:[(0,r.jsx)(a.default,{href:"/categories".concat((0,c.l)(s.href)),children:(0,r.jsx)("a",{className:"navbar__link ".concat(v," ").concat(p||""," ").concat(f||""),children:s.sectionText||s.text})}),t.length>0&&(0,r.jsx)("i",{className:"navbar__icon--caret-right navbar__icon navbar__icon--open",onClick:m})]}):(0,r.jsx)("a",{className:"navbar__link--block navbar__icon--menu navbar__icon",onClick:m}),t.length>0&&(0,r.jsxs)("ul",{className:"navbar__menu",ref:d,children:[(0,r.jsx)("div",{className:"navbar__menu-header",children:s?(0,r.jsxs)(o.Fragment,{children:[(0,r.jsx)("i",{className:"navbar__icon--caret-left navbar__icon",onClick:m}),(0,r.jsx)("span",{className:"navbar__title",onClick:m,dangerouslySetInnerHTML:{__html:s.sectionText||s.text}})]}):(0,r.jsx)("span",{className:"navbar__icon navbar__icon--close",onClick:m})}),t.length>0&&t.map((function(e,n){return function(e){return e.text||(e.sectionLinkList||[]).length>0}(e)&&(0,r.jsx)("li",{className:"navbar__item",children:(0,r.jsx)(u,{links:e.sectionLinkList,contentLink:e})},e.href||e.text||e.sectionText)}))]})]})},d=u,m=function(e){var n=e.contentLinks;return(0,r.jsx)(d,{links:n})};function f(e){var n=e.logoUrl,t=e.topLinkList,c=e.contentLinks;return(0,r.jsx)("header",{id:"header",role:"banner",className:"header",children:(0,r.jsxs)("div",{className:"header__row ".concat("compact-header"," ").concat("header__row--one-row"),children:[(0,r.jsx)(a.default,{href:"/",children:(0,r.jsx)("a",{className:"header__logo",children:(0,r.jsx)(s.Z,{priority:!0,src:"".concat("http://localhost:5000").concat(n),height:50,width:203,alt:"Accelerator"})})}),(0,r.jsxs)("div",{className:"header__components",children:[t&&t.length&&t.map((function(e){e&&(a.default,e.href,e.text)})),(0,r.jsx)("div",{className:"profile",children:(0,r.jsxs)("a",{className:"profile__link--block",children:[(0,r.jsx)("i",{className:"profile__icon"}),(0,r.jsx)("span",{className:"profile__title"})]})})]}),(0,r.jsx)("div",{className:"header__break"}),(0,r.jsx)("nav",{role:"navigation",className:"navbar",children:(0,r.jsx)(m,{contentLinks:c})})]})})}function h(e){var n=e.data;return(0,r.jsx)(f,{logoUrl:null===n||void 0===n?void 0:n.website.logoUrl,contentLinks:(null===n||void 0===n?void 0:n.website.header.sectionList)||[]})}function v(e){var n=e.data;return(0,r.jsx)(i,{sectionList:(null===n||void 0===n?void 0:n.website.footer.sectionList)||[]})}function p(e){var n=e.data,t=e.children;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(h,{data:n}),t,(0,r.jsx)(v,{data:n})]})}},622:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return x},default:function(){return j}});var r=t(5893),a=t(9663),c=t(5024),i=t(7294),s=t(3253),o=t.n(s),l=(t(244),t(615)),u=t(6009);function d(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){d(e,n,t[n])}))}return e}var f={content:{background:"none",padding:0,border:"none"},overlay:{background:"rgba(0, 0, 0, 0.8)",zIndex:2003}},h={showStatus:!1,showIndicators:!1,useKeyboardArrows:!0,thumbWidth:50,autoPlay:!1,autoFocus:!0},v=function(e){return e.map((function(e,n){if(e&&e.props&&e.props.children){var t=e.props.children.find((function(e){return"img"===e.type}));if(t&&t.props&&t.props.src)return(0,r.jsx)("div",{style:{backgroundImage:"url("+t.props.src+")"},className:"thumbnail__image"},n)}}))},p=function(e){var n=(0,i.useState)(!1),t=n[0],a=n[1],c=(0,i.useState)(0),s=c[0],d=c[1],p=(0,i.useCallback)((function(){return a(!1)}),[a]),b=function(e){a(!0),d(e)};return!e.images||e.images.length<1?(0,r.jsx)(i.Fragment,{}):(0,r.jsxs)(i.Fragment,{children:[(0,r.jsxs)("div",{className:"row product-images",children:[(0,r.jsx)("div",{className:"small-12 large-9 columns large-order-1",children:(0,r.jsx)("figure",{className:"product-detail__image-container",children:(0,r.jsx)("a",{"data-src":e.images[0],itemProp:"url",onClick:function(){return b(0)},className:"product-image",children:(0,r.jsx)("img",{className:"product-detail__image--main",src:"".concat("http://localhost:5000").concat(e.thumbnails[0])})})})}),(0,r.jsx)("div",{className:"small-12 large-3 columns medium-flex-dir-column",children:(0,r.jsx)("div",{className:"row",children:e.images.map((function(n,t){return t>0&&(0,r.jsx)("div",{className:"product-detail__image-container columns large-12",children:(0,r.jsx)("a",{"data-src":n,itemProp:"url",onClick:function(){return b(t)},className:"product-image",children:(0,r.jsx)(u.Z,{priority:!0,className:"product-detail__image--alter",src:"".concat("http://localhost:5000").concat(e.thumbnails[t]),height:120,width:100})})},t)}))})})]}),(0,r.jsx)(o(),{ariaHideApp:!1,preventScroll:!0,isOpen:t,onRequestClose:p,style:f,shouldCloseOnOverlayClick:!1,children:(0,r.jsx)(l.lr,m({},h,{selectedItem:s,className:"light-box",renderThumbs:v,children:e.images.map((function(e,n){return(0,r.jsxs)("div",{className:"light-box__container",children:[(0,r.jsx)("button",{onClick:p,className:"light-box__close-btn",children:"\xd7"}),(0,r.jsx)("img",{src:"".concat("http://localhost:5000").concat(e),className:"light-box__image"})]},"figure".concat(n))}))}))})]})},b=t(9935),x=!0;function j(e){var n=e.product;return(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"small-12 medium-7 columns",children:(0,r.jsx)(p,{images:n.imageUrls,thumbnails:n.imageUrls})}),(0,r.jsx)("div",{className:"small-12 medium-5 columns",children:(0,r.jsxs)("div",{className:"product-detail",children:[(0,r.jsxs)("hgroup",{children:[n.brand&&(0,r.jsx)("h2",{className:"product-detail__brand",children:n.brand}),(0,r.jsx)("h1",{className:"product-detail__name",children:n.name})]}),n.description&&(0,r.jsx)("div",{className:"product-detail__description",children:n.description}),(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"product-detail__price-info",children:(0,r.jsx)(a.Z,{price:n.formattedPrice})}),(0,r.jsx)("div",{children:(0,r.jsx)("div",{className:"row",children:(0,r.jsx)("div",{className:"small-12 columns"})})})]}),(0,r.jsx)(c.Z,{articleNumber:n.id,cssClass:"product-detail__buy-button",label:"Add to cart"})]})})]})}j.Layout=b.Z},3310:function(e,n,t){"use strict";t.d(n,{l:function(){return r}});var r=function(e){try{return new URL(e).pathname}catch(n){return e}}}},function(e){e.O(0,[774,640,847,888,179],(function(){return n=2290,e(e.s=n);var n}));var n=e.O();_N_E=n}]);