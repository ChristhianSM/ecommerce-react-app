(this["webpackJsonpecommerce-react"]=this["webpackJsonpecommerce-react"]||[]).push([[0],{20:function(e,t,c){},21:function(e,t,c){"use strict";c.r(t);var s=c(2),a=c(8),n=c.n(a),r=c(4),i=c.n(r),l=c(5),j=c(3),x=c(10),o=c(9),d=c(1),m=function(e){var t=e.stockProduct,c=e.initialAmount,a=void 0===c?1:c,n=Object(s.useState)(a),r=Object(j.a)(n,2),i=r[0],l=r[1];return Object(d.jsxs)("div",{className:"bg-gray-400 w-52 text-center ",children:[Object(d.jsx)("p",{className:"text-2xl mb-5",children:"Laptop asus"}),Object(d.jsxs)("div",{className:"flex items-center gap-2 justify-center mb-2",children:[Object(d.jsx)(o.a,{className:"text-xl cursor-pointer",onClick:function(){i>0&&l(i-1)}}),Object(d.jsxs)("span",{children:[" ",i," "]}),Object(d.jsx)(x.a,{className:"text-2xl cursor-pointer",onClick:function(){i<t&&l(i+1)}})]}),Object(d.jsx)("button",{className:"my-2 rounded-md bg-blue-500 p-2",children:"Agregar al carrito"})]})},b=c(11),u=function(e){var t=e.product;return Object(d.jsxs)("section",{className:"mx-auto max-w-4xl container ",children:[Object(d.jsxs)("div",{className:"flex mt-10 gap-10",children:[Object(d.jsx)("div",{className:"w-1/2",children:Object(d.jsx)("img",{src:t.image,alt:"",className:"m-auto object-contain"})}),Object(d.jsxs)("div",{className:"w-1/2",children:[Object(d.jsx)("h3",{className:"font-bold text-2xl mb-5",children:t.title}),Object(d.jsx)("p",{className:"font-normal text-xl mb-5",children:t.description}),Object(d.jsxs)("div",{className:"flex justify-between mb-2 font-light text-lg",children:[Object(d.jsx)("p",{className:"",children:"Categoria "}),Object(d.jsx)("p",{children:t.category})]}),Object(d.jsxs)("div",{className:"flex justify-between mb-2 font-medium text-lg",children:[Object(d.jsx)("p",{children:"Ahora"}),Object(d.jsxs)("p",{children:["S/. ",t.price]})]}),Object(d.jsxs)("div",{className:"flex w-full bg-purple-500 rounded-lg border-purple-500 border-2 overflow-hidden",children:[Object(d.jsx)("div",{className:"w-20 p-2 bg-white",children:Object(d.jsx)(b.a,{className:"w-10 h-8 mx-auto text-purple-500"})}),Object(d.jsx)("button",{className:"w-full text-white font-medium text-lg",children:"Agregar al carrito"})]})]})]}),Object(d.jsx)("div",{className:"border-t border-gray-300",children:Object(d.jsx)("p",{className:"my-5",children:"LOS CLIENTES QUE VIERON ESTE PRODUCTO TAMBI\xc9N VIERON"})})]})},h=function(){var e=Object(s.useState)({}),t=Object(j.a)(e,2),c=t[0],a=t[1];return Object(s.useEffect)((function(){var e=function(){var e=Object(l.a)(i.a.mark((function e(){var t,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://fakestoreapi.com/products/1");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,a(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(d.jsx)("div",{children:Object(d.jsx)(u,{product:c})})},O=function(e){var t=e.product;return Object(d.jsxs)("div",{className:"max-w-xs bg-white shadow-lg rounded-lg overflow-hidden my-10 p-4",children:[Object(d.jsxs)("div",{className:"px-4 py-2",children:[Object(d.jsx)("h1",{className:"text-gray-900 font-bold text-lg uppercase h-20 align-middle ",children:t.title}),Object(d.jsx)("p",{className:"text-gray-600 text-sm mt-1 h-20 overflow-y-scroll",children:t.description})]}),Object(d.jsx)("img",{className:"h-56 w-full object-contain mt-2",src:t.image,alt:"NIKE AIR"}),Object(d.jsxs)("div",{className:"flex items-center justify-between px-4 py-2 bg-gray-900",children:[Object(d.jsxs)("h1",{className:"text-gray-200 font-bold text-xl",children:["$ ",t.price]}),Object(d.jsx)("button",{className:"px-3 py-1 bg-gray-200 text-sm text-gray-900 font-semibold rounded",children:"Add to card"})]})]})},p=function(e){var t=e.products;return Object(d.jsx)("div",{className:"container mx-auto max-w-7xl pt-10",children:Object(d.jsx)("div",{className:"grid grid-cols-4 gap-3",children:t.map((function(e){return Object(d.jsx)(O,{product:e},e.id)}))})})},f=function(){var e=Object(s.useState)([]),t=Object(j.a)(e,2),c=t[0],a=t[1];return Object(s.useEffect)((function(){var e=function(){var e=Object(l.a)(i.a.mark((function e(){var t,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://fakestoreapi.com/products");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,a(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(d.jsxs)("div",{className:"bg-gray-300 h-full",children:[Object(d.jsx)(p,{products:c}),Object(d.jsx)(h,{}),Object(d.jsx)(m,{stockProduct:10,initialAmount:5})]})},N=c(7),g=c(13),v=c.p+"static/media/logo.7689e6b7.png",w=c(12),y=function(){return Object(d.jsxs)("div",{className:"login flex items-center",children:[Object(d.jsx)(w.a,{className:"text-2xl"}),Object(d.jsx)("p",{className:"m-2",children:"Mi Carrito"})]})},_=function(){return Object(d.jsx)("nav",{className:"bg-yellow-200",children:Object(d.jsxs)("div",{className:"container mx-auto py-2 flex justify-between items-center",children:[Object(d.jsx)("div",{className:"logo h-20 animate__animated animate__fadeInDown",children:Object(d.jsx)("img",{src:v,alt:"",className:"h-full"})}),Object(d.jsxs)("div",{className:"search shadow-2xl flex w-96 animate__animated animate__fadeIn",children:[Object(d.jsx)("input",{className:"w-full p-2 outline-none",type:"text",placeholder:"Search..."}),Object(d.jsx)("button",{className:"bg-white w-auto flex justify-end items-center text-blue-500 p-2 hover:text-blue-400",children:Object(d.jsx)(N.a,{})})]}),Object(d.jsxs)("div",{className:"user flex justify-between items-center animate__animated animate__fadeIn",children:[Object(d.jsxs)("div",{className:"login flex items-center",children:[Object(d.jsxs)("div",{className:"flex items-center mr-5 ",children:[Object(d.jsx)(N.b,{className:"text-2xl"}),Object(d.jsx)("p",{className:"m-2",children:"Inicia sesi\xf3n"})]}),Object(d.jsxs)("div",{className:"flex items-center mr-5",children:[Object(d.jsx)(g.a,{className:"text-2xl"}),Object(d.jsx)("p",{className:"m-2",children:"Crear cuenta"})]})]}),Object(d.jsx)(y,{})]})]})})};var E=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(_,{}),Object(d.jsx)(f,{})]})};c(20);n.a.render(Object(d.jsx)(E,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.24507482.chunk.js.map