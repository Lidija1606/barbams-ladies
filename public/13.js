(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"n+Kx":function(e,t,n){"use strict";n.r(t);var r=n("62Tq"),a=n.n(r),o=(n("H4EL"),n("o/LO")),c=n("ea6Y"),l=n("CVtH"),u=n("4ZT3"),i=n("pnF/"),s={GET_PRODUCTS_INIT:"GET_PRODUCTS_INIT",GET_PRODUCTS_SUCCESS:"GET_PRODUCTS_SUCCESS",GET_PRODUCT_PRICES_INIT:"GET_PRODUCT_PRICES_INIT",GET_PRODUCT_PRICES_SUCCESS:"GET_PRODUCT_PRICES_SUCCESS",GET_COUNTRIES_INIT:"GET_COUNTRIES_INIT",GET_COUNTRIES_SUCCESS:"GET_COUNTRIES_SUCCESS"};function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){f(e,t,n[t])})}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d={productsList:[],isLoading:!1};function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){y(e,t,n[t])})}return e}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var E={productPricesList:[],isLoading:!1};function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){h(e,t,n[t])})}return e}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g={countriesList:[],isLoading:!1};var S=Object(l.c)({productsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s.GET_PRODUCTS_INIT:return p({},e,{isLoading:!0});case s.GET_PRODUCTS_SUCCESS:return p({},e,{isLoading:!1,productsList:t.payload});default:return e}},productPricesReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s.GET_PRODUCT_PRICES_INIT:return m({},e,{isLoading:!0});case s.GET_PRODUCT_PRICES_SUCCESS:return m({},e,{isLoading:!1,productPricesList:t.payload});default:return e}},countriesReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s.GET_COUNTRIES_INIT:return b({},e,{isLoading:!0});case s.GET_COUNTRIES_SUCCESS:return b({},e,{isLoading:!1,countriesList:t.payload});default:return e}}}),P=n("Dkdv"),v=n.n(P),C=n("CrRY"),O=n("FWnx"),_=function(e){e.onEdit,e.onDelete,e.onView;return a.a.createElement(C.a,null,a.a.createElement(O.a,{color:"primary",size:"lg"},a.a.createElement("i",{className:"fa fa-pencil-square-o"})),a.a.createElement(O.a,{color:"success",size:"lg"},a.a.createElement("i",{className:"fa fa-eye-slash"})),a.a.createElement(O.a,{color:"danger",size:"lg"},a.a.createElement("i",{className:"fa fa-ban eye-slash"})),a.a.createElement(O.a,{color:"danger",size:"lg"},a.a.createElement("i",{className:"fa fa-user-o"})))},T=function(e){var t=e.product;return a.a.createElement("tr",null,a.a.createElement("td",null,t.id),a.a.createElement("td",null,t.name," "),a.a.createElement("td",null,t.code),a.a.createElement("td",null,t.img),a.a.createElement("td",null,a.a.createElement(_,null)))},I=n("YzFN"),j=function(e){var t=e.productsList,n=e.onSelectChange,r=t.map(function(e){return a.a.createElement(T,{onSelectChange:n,key:e.id,product:e})});return a.a.createElement(I.a,{responsive:!0,striped:!0,className:"loader-table"},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"ID"),a.a.createElement("th",null,"Name"),a.a.createElement("th",null,"Code"),a.a.createElement("th",null,"Img"),a.a.createElement("th",null,"Action"))),a.a.createElement("tbody",null,r))},w=n("a7aP"),N=n("+fwl"),R=n("DNf4"),U=n("yzmk"),L=n("BUjj"),D=n("EcoP"),G=function(){return function(e){e({type:s.GET_PRODUCTS_INIT}),D.a.get("/products").then(function(t){e({type:s.GET_PRODUCTS_SUCCESS,payload:t.data.data})})}};function k(e){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function F(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function x(e,t){return!t||"object"!==k(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function z(e){return(z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function A(e,t){return(A=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var M=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=x(this,z(t).call(this,e))).renderProductList=function(){var e=n.props.products.productsList;return console.log(e),e.length>0?a.a.createElement(r.Fragment,null,a.a.createElement(j,{productsList:e})):""},n.state={isStatusDDOpen:!1},n}var n,o,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&A(e,t)}(t,r["Component"]),n=t,(o=[{key:"componentDidMount",value:function(){console.log("========== Product App =========== "),(0,this.props.getProducts)()}},{key:"render",value:function(){var e=this.props.products.isLoading?a.a.createElement("div",{className:"loader"},a.a.createElement(v.a,{type:"Bars",color:"#FFFFF"})):"";return a.a.createElement("div",{className:"animated fadeIn"},a.a.createElement(w.a,null,a.a.createElement(N.a,{xs:"12",lg:"12"},a.a.createElement(R.a,{className:"card-orders"},a.a.createElement(U.a,null,a.a.createElement("i",{className:"fa fa-align-justify"})," Products"),a.a.createElement(L.a,null,e,this.renderProductList())))))}}])&&F(n.prototype,o),c&&F(n,c),t}();var q=Object(c.b)(function(e){return{products:e.productsReducer}},function(e){return Object(l.b)({getProducts:G},e)})(M),B=function(e){var t=e.onEdit;e.onDelete,e.onView;return a.a.createElement(C.a,null,a.a.createElement(O.a,{color:"primary",size:"lg",onClick:t},a.a.createElement("i",{className:"fa fa-pencil-square-o"})),a.a.createElement(O.a,{color:"success",size:"lg"},a.a.createElement("i",{className:"fa fa-eye-slash"})),a.a.createElement(O.a,{color:"danger",size:"lg"},a.a.createElement("i",{className:"fa fa-ban eye-slash"})),a.a.createElement(O.a,{color:"danger",size:"lg"},a.a.createElement("i",{className:"fa fa-user-o"})))},V=function(e){var t=e.productPrice,n=e.editMode,r=function(e){return n?a.a.createElement("input",{type:"text",value:e}):a.a.createElement("span",null,e)};return a.a.createElement("tr",null,a.a.createElement("td",null,t.id),a.a.createElement("td",null,t.product.name," "),a.a.createElement("td",null,t.currency," "),a.a.createElement("td",null,r(t.price)," "),a.a.createElement("td",null,r(t.shipping)," "),a.a.createElement("td",null,t.country_name," "),a.a.createElement("td",null,r(t.shipping_time)," "),a.a.createElement("td",null,a.a.createElement(B,null)))},Y=function(e){var t=e.productPriceList,n=e.onSelectChange,r=t.map(function(e){return a.a.createElement(V,{onSelectChange:n,key:e.id,productPrice:e})});return a.a.createElement(I.a,{responsive:!0,striped:!0,className:"loader-table"},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"ID"),a.a.createElement("th",null,"Product Name"),a.a.createElement("th",null,"Currency"),a.a.createElement("th",null,"Price"),a.a.createElement("th",null,"Shipping"),a.a.createElement("th",null,"Country Name"),a.a.createElement("th",null,"Shipping time"),a.a.createElement("th",null,"Action"))),a.a.createElement("tbody",null,r))},H=n("4GzC"),J=function(e){var t=e.list,n=e.onSelectChange,r=e.activeId,o=e.inputName,c=e.idProperty,l=e.nameProperty,u=e.allName;return a.a.createElement(H.a,{type:"select",name:o,value:r,onChange:n},a.a.createElement("option",{value:"all"},u),t.map(function(e,t){return a.a.createElement("option",{key:"".concat(o,"-").concat(e[c]),value:e[c]},e[l])}))},Z=function(e,t){return function(n){console.log("========== getProductPrices =========== "),n({type:s.GET_PRODUCT_PRICES_INIT}),D.a.get("/products/prices",{params:{productId:e,countryCode:t}}).then(function(e){console.log("========= ordersactions ======== response",e),n({type:s.GET_PRODUCT_PRICES_SUCCESS,payload:e.data.data})})}},K=function(){return function(e){e({type:s.GET_COUNTRIES_INIT}),D.a.get("/countries",{}).then(function(t){console.log("========= ordersactions ======== response",t),e({type:s.GET_COUNTRIES_SUCCESS,payload:t.data.data})})}};function W(e){return(W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function X(e,t){return!t||"object"!==W(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function $(e){return($=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ee(e,t){return(ee=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var te=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=X(this,$(t).call(this,e))).renderProductList=function(){var e=n.props.productPrices.productPricesList;return e.length>0?a.a.createElement(r.Fragment,null,a.a.createElement(Y,{productPriceList:e})):""},n.onSelectChange=function(e){var t=e.target.name,r=e.target.value;switch(t){case"productSelect":n.setState({activeProductId:r})}"productSelect"===t?n.setState({activeProductId:r},function(){}):n.setState({activeCountryCode:r},function(){})},n.onEditAction=function(){},n.state={activeProductId:"all",activeCountryCode:"all"},n}var n,o,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ee(e,t)}(t,r["Component"]),n=t,(o=[{key:"componentDidMount",value:function(){var e=this.props,t=e.getProductPrices,n=e.getProducts,r=e.getCountries,a=this.state,o=a.activeProductId,c=a.activeCountryCode;r(),t(o,c),n()}},{key:"componentDidUpdate",value:function(e,t){var n=this.props.getProductPrices,r=this.state,a=r.activeProductId,o=r.activeCountryCode;t.activeProductId===a&&t.activeCountryCode===o||n(a,o)}},{key:"render",value:function(){var e=this.props,t=e.productPrices,n=e.products,r=e.countries;console.log(this.props);var o=t.isLoading?a.a.createElement("div",{className:"loader"},a.a.createElement(v.a,{type:"Bars",color:"#FFFFF"})):"";return a.a.createElement("div",{className:"animated fadeIn"},a.a.createElement(w.a,null,a.a.createElement(N.a,{xs:"12",lg:"12"},a.a.createElement(R.a,{className:"card-orders"},a.a.createElement(U.a,null,a.a.createElement("i",{className:"fa fa-align-justify"})," Product Prices"),a.a.createElement(L.a,null,a.a.createElement(w.a,{className:"table-filters"},a.a.createElement(N.a,{xs:"3",lg:"3"},a.a.createElement(J,{activeId:this.state.activeCountryCode,list:r.countriesList,onSelectChange:this.onSelectChange,inputName:"countrySelect",allName:"All Countries",idProperty:"country_code",nameProperty:"country_name"})),a.a.createElement(N.a,{xs:"3",lg:"3"},a.a.createElement(J,{activeId:this.state.activeProductId,list:n.productsList,onSelectChange:this.onSelectChange,inputName:"productSelect",allName:"All Products",idProperty:"id",nameProperty:"name"}))),o,this.renderProductList())))))}}])&&Q(n.prototype,o),c&&Q(n,c),t}();var ne=Object(c.b)(function(e){return{productPrices:e.productPricesReducer,products:e.productsReducer,countries:e.countriesReducer}},function(e){return Object(l.b)({getProductPrices:Z,getProducts:G,getCountries:K},e)})(te),re=n("A4SF"),ae=n("3GI0"),oe=n("4MZO");function ce(e){return(ce="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function le(){return(le=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function ue(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ie(e,t){return!t||"object"!==ce(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function se(e){return(se=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function pe(e,t){return(pe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var fe=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),ie(this,se(t).apply(this,arguments))}var n,c,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&pe(e,t)}(t,r["Component"]),n=t,(c=[{key:"render",value:function(){return a.a.createElement(re.a,{history:o.a},a.a.createElement(ae.a,null,a.a.createElement(oe.a,le({path:"/dashboard/products/list",component:q},this.props)),a.a.createElement(oe.a,le({exact:!0,path:"/dashboard/products/prices",component:ne},this.props))))}}])&&ue(n.prototype,c),l&&ue(n,l),t}(),de=Object(u.createLogger)(),me=Object(l.d)(S,Object(l.a)(i.a,de));t.default=function(e){return a.a.createElement(c.a,{store:me},a.a.createElement(fe,e))}}}]);