(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,a,t){e.exports=t(22)},19:function(e,a,t){},20:function(e,a,t){},22:function(e,a,t){"use strict";t.r(a);var n=t(1),c=t.n(n),l=t(8),r=t.n(l),m=(t(19),t(20),t(21),t(5)),i=t(2);var s=function(){return c.a.createElement("div",{className:"cart-widget"},c.a.createElement("i",{className:"bi bi-cart3"}))};function o(e){return c.a.createElement("li",null,c.a.createElement("a",{href:"#/"},e.title))}var u=function(){return c.a.createElement("nav",{className:"lf-navbar"},c.a.createElement("ul",{className:"lf-navUl"},["Home","Categories","Favorites","History","Deals"].map(function(e){var a;return a="Home"==e?"/":"/".concat(e),c.a.createElement(m.b,{to:a},c.a.createElement(o,{key:e,title:e}))})))};var d=function(){return c.a.createElement("header",{className:"lf-header"},c.a.createElement("input",{type:"checkbox",style:{display:"none"},id:"nav-switch"}),c.a.createElement("div",{className:"top-header"},c.a.createElement(m.b,{to:"/"},c.a.createElement("h2",null,"LaissezFaire")),c.a.createElement("div",{className:"top-end"},c.a.createElement("label",{htmlFor:"nav-switch",className:"burger-btn"},c.a.createElement("i",{className:"bi bi-list"})),c.a.createElement(s,null))),c.a.createElement(u,null))},E=t(4),g=t(6);function p(e){return c.a.createElement("button",{className:"count-btn",onClick:e.callback},e.children)}var v=function(e){var a=Object(n.useState)(e.initial),t=Object(E.a)(a,2),l=t[0],r=t[1];function m(e,a,t,n){switch(e){case"increment":l>=a&&l<=t-n&&r(l+n);break;case"decrement":l>=a+n&&r(l-n)}}return c.a.createElement("div",{className:"ic-container"},c.a.createElement("div",{className:"ic-title"},c.a.createElement("h2",null,"Select Amount")),c.a.createElement("div",{className:"ic-body"},c.a.createElement("div",{className:"counter"},c.a.createElement(p,{callback:function(){return m("decrement",e.initial,e.stock,e.unit)}},c.a.createElement(g.a,null)),c.a.createElement("span",null,l),c.a.createElement(p,{callback:function(){return m("increment",e.initial,e.stock,e.unit)}},c.a.createElement(g.b,null)," ")),c.a.createElement("div",{className:"add-to-cart"},c.a.createElement("button",{onClick:function(){return e.onAdd(l)}},c.a.createElement("span",{className:"button_top"},"Add To Cart")))))},b=t(9);function f(e){var a=e.amount,t=e.title,n=e.close,l=Object(i.f)();return c.a.createElement("div",{className:"buying-confirmation"},c.a.createElement("div",{className:"close-btn",onClick:n},c.a.createElement(b.a,null)),c.a.createElement("h1",null,"You are buying ",a," of"," ",c.a.createElement("span",{className:"product-name"},'"',t,'"')),c.a.createElement("div",{className:"add-to-cart"},c.a.createElement("button",{onClick:function(){l("/cart")}},c.a.createElement("span",{className:"button_top"},"Check-out"))))}function h(e){var a=e.title,t=e.price,l=e.image,r=e.description,m=Object(n.useState)(0),i=Object(E.a)(m,2),s=i[0],o=i[1];return c.a.createElement(c.a.Fragment,null,0!==s&&c.a.createElement(f,{amount:s,title:a,close:function(){o(0)}}),c.a.createElement("div",{className:"product-detail"},c.a.createElement("div",{className:"detail-image"},c.a.createElement("img",{src:l,alt:"".concat(a)})),c.a.createElement("div",{className:"detail-body"},c.a.createElement("div",{className:"detail-title"},c.a.createElement("h3",null,a)),c.a.createElement("div",{className:"detail-description"},c.a.createElement("p",null,r)),c.a.createElement("div",{className:"detail-price"},c.a.createElement("p",null,t)),0==s&&c.a.createElement(v,{initial:1,stock:10,unit:1,onAdd:function(e){console.log(e),o(e)}}))))}var N=function(e){var a=e.data;return c.a.createElement(c.a.Fragment,null,c.a.createElement(h,{title:a.title,image:a.image,price:a.price,description:a.description}))};var j=function(){return c.a.createElement("div",{className:"la-ball-clip-rotate la-2x"},c.a.createElement("div",null))};var y=function(){var e=Object(n.useState)([]),a=Object(E.a)(e,2),t=a[0],l=a[1],r=Object(n.useState)(!0),m=Object(E.a)(r,2),s=m[0],o=m[1],u=Object(i.g)(),d=Number(u.id)-1;return Object(n.useEffect)(function(){o(!0),new Promise(function(e,a){e(fetch("https://fakestoreapi.com/products").then(function(e){return e.json()}))}).then(function(e){l(e),o(!1)})},[]),s?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"detail-container",style:{height:"100vh"}},c.a.createElement(j,null))):c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"detail-container"},c.a.createElement(N,{data:t[d]})))};function F(e){var a=e.title,t=e.price,n=e.image;return c.a.createElement("div",{className:"product-card"},c.a.createElement("div",{className:"product-card-image"},c.a.createElement("img",{src:n,alt:"".concat(a)})),c.a.createElement("div",{className:"product-card-body"},c.a.createElement("div",{className:"product-card-price"},c.a.createElement("p",null,t)),c.a.createElement("div",{className:"product-card-title"},c.a.createElement("h3",null,a)),c.a.createElement("button",{className:"buy-btn"},"Buy")))}var _=function(e){var a=e.data;return c.a.createElement(c.a.Fragment,null,a.map(function(e){return c.a.createElement(m.b,{key:e.id,to:"/product/".concat(e.id)},c.a.createElement(F,{title:e.title,image:e.image,price:e.price}))}))};var k=function(e){var a=Object(i.g)().categoryId,t=Object(n.useState)([]),l=Object(E.a)(t,2),r=l[0],m=l[1],s=Object(n.useState)(!1),o=Object(E.a)(s,2),u=o[0],d=o[1],g=["electronics","jewelery","men's clothing","women's clothing"][a-1];return Object(n.useEffect)(function(){d(!0),new Promise(function(e,a){e(fetch("https://fakestoreapi.com/products").then(function(e){return e.json()}))}).then(function(e){m(a?e.filter(function(e){return e.category==g}):e),d(!1)})},[Object(i.g)()]),u?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"detail-container",style:{height:"100vh"}},c.a.createElement(j,null))):c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"greeting"},"Welcome to LaissezFaire.com "),c.a.createElement("div",{className:"cards-container"},c.a.createElement(_,{data:r})))};function w(e){var a=e.name,t=e.image;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"category-card"},c.a.createElement("div",{className:"category-image",style:{backgroundImage:"url(".concat(t,")")}}),c.a.createElement("div",{className:"category-name"},c.a.createElement("h3",null,a))))}function O(){return c.a.createElement(c.a.Fragment,null,[{name:"electronics",id:"1",image:"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_2x._SY608_CB432774322_.jpg"},{name:"jewelry",id:"2",image:"https://m.media-amazon.com/images/I/71AtSoXAawL._AC_UL480_FMwebp_QL65_.jpg"},{name:"men's clothing",id:"3",image:"https://m.media-amazon.com/images/I/712AJrtKVoL._AC_UL480_FMwebp_QL65_.jpg"},{name:"women's clothing",id:"4",image:"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/Fuji_dash_dress_2X._SY608_CB626369146_.jpg"}].map(function(e){return c.a.createElement(m.b,{key:e.id,to:"/category/".concat(e.id)},c.a.createElement(w,{name:e.name,image:e.image}))}))}var C=function(){return c.a.createElement("div",{className:"categories-container"},c.a.createElement(O,null))};var S=function(){return c.a.createElement("div",{className:"greeting"},"Cart")};var A=function(){return c.a.createElement(m.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(d,null),c.a.createElement(i.c,null,c.a.createElement(i.a,{path:"/",element:c.a.createElement(k,null)}),c.a.createElement(i.a,{path:"/LaissezFaire-DosSantos-React8/",element:c.a.createElement(k,null)}),c.a.createElement(i.a,{path:"/category/:categoryId",element:c.a.createElement(k,null)}),c.a.createElement(i.a,{path:"/product/:id",element:c.a.createElement(y,null)}),c.a.createElement(i.a,{path:"/categories",element:c.a.createElement(C,null)}),c.a.createElement(i.a,{path:"/cart",element:c.a.createElement(S,null)}),c.a.createElement(i.a,{path:"*",element:c.a.createElement("div",{className:"error404"},c.a.createElement("h1",null,"Error 404"))}))))},L=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,23)).then(function(a){var t=a.getCLS,n=a.getFID,c=a.getFCP,l=a.getLCP,r=a.getTTFB;t(e),n(e),c(e),l(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(A,null))),L()}},[[10,1,2]]]);
//# sourceMappingURL=main.00c21fc4.chunk.js.map