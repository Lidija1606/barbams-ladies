(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./resources/js/src/views/Pages/Products/App.js":
/*!******************************************************!*\
  !*** ./resources/js/src/views/Pages/Products/App.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./resources/js/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./resources/js/node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./resources/js/node_modules/redux/es/index.js");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-loader-spinner */ "./resources/js/node_modules/react-loader-spinner/index.js");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ProductList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProductList */ "./resources/js/src/views/Pages/Products/ProductList/index.js");
/* harmony import */ var _ProductPrices__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ProductPrices */ "./resources/js/src/views/Pages/Products/ProductPrices/index.js");
/* harmony import */ var _helpers_history__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../helpers/history */ "./resources/js/src/helpers/history.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./resources/js/node_modules/react-router-dom/es/index.js");
/* harmony import */ var _actions_productsActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./actions/productsActions */ "./resources/js/src/views/Pages/Products/actions/productsActions.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }











var App =
/*#__PURE__*/
function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, _getPrototypeOf(App).apply(this, arguments));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Router"], {
        history: _helpers_history__WEBPACK_IMPORTED_MODULE_6__["default"]
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Route"], _extends({
        path: "/dashboard/products/list",
        component: _ProductList__WEBPACK_IMPORTED_MODULE_4__["default"]
      }, this.props)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Route"], _extends({
        exact: true,
        path: "/dashboard/products/prices",
        component: _ProductPrices__WEBPACK_IMPORTED_MODULE_5__["default"]
      }, this.props))));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./resources/js/src/views/Pages/Products/ProductList/App.js":
/*!******************************************************************!*\
  !*** ./resources/js/src/views/Pages/Products/ProductList/App.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./resources/js/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./resources/js/node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./resources/js/node_modules/redux/es/index.js");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-loader-spinner */ "./resources/js/node_modules/react-loader-spinner/index.js");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ProductList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/ProductList */ "./resources/js/src/views/Pages/Products/ProductList/components/ProductList.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./resources/js/node_modules/reactstrap/es/index.js");
/* harmony import */ var _actions_productsActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/productsActions */ "./resources/js/src/views/Pages/Products/actions/productsActions.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









var App =
/*#__PURE__*/
function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));

    _this.renderProductList = function () {
      var productsList = _this.props.products.productsList;
      console.log(productsList);
      return productsList.length > 0 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ProductList__WEBPACK_IMPORTED_MODULE_4__["default"], {
        productsList: productsList
      })) : '';
    };

    _this.state = {
      isStatusDDOpen: false
    };
    return _this;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log('========== Product App =========== ');
      var getProducts = this.props.getProducts;
      getProducts();
    }
  }, {
    key: "render",
    value: function render() {
      var products = this.props.products;
      var loader = products.isLoading ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "loader"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loader_spinner__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "Bars",
        color: "#FFFFF"
      })) : '';
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "animated fadeIn"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        xs: "12",
        lg: "12"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Card"], {
        className: "card-orders"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-align-justify"
      }), " Products"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardBody"], null, loader, this.renderProductList())))));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

function mapStateToProps(state) {
  // return {
  //   smsListProps: state.chatSmsReducer.smsList,
  //   text: state.chatSmsReducer.text
  // };
  return {
    products: state.productsReducer
  };
}

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_2__["bindActionCreators"])({
    getProducts: _actions_productsActions__WEBPACK_IMPORTED_MODULE_6__["getProducts"]
  }, dispatch);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(App));

/***/ }),

/***/ "./resources/js/src/views/Pages/Products/ProductList/components/Product.js":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/views/Pages/Products/ProductList/components/Product.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./resources/js/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./resources/js/node_modules/reactstrap/es/index.js");
/* harmony import */ var _ProductActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductActions */ "./resources/js/src/views/Pages/Products/ProductList/components/ProductActions.js");




var Product = function Product(props) {
  var product = props.product; // if ('pre-payment' === constants.ORDER_STATUS['PRE-PAYMENT']) {
  //   console.log('JESTE');
  // }
  // else {
  //   console.log('NIJEEES');
  // }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, product.id), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, product.name, " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, product.code), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, product.img), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProductActions__WEBPACK_IMPORTED_MODULE_2__["default"], null)));
};

/* harmony default export */ __webpack_exports__["default"] = (Product);

/***/ }),

/***/ "./resources/js/src/views/Pages/Products/ProductList/components/ProductActions.js":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/views/Pages/Products/ProductList/components/ProductActions.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./resources/js/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./resources/js/node_modules/reactstrap/es/index.js");



var ProductActions = function ProductActions(props) {
  var onEdit = props.onEdit,
      onDelete = props.onDelete,
      onView = props.onView;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ButtonGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    color: "primary",
    size: "lg"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-pencil-square-o"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    color: "success",
    size: "lg"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-eye-slash"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    color: "danger",
    size: "lg"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-ban eye-slash"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    color: "danger",
    size: "lg"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-user-o"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ProductActions);

/***/ }),

/***/ "./resources/js/src/views/Pages/Products/ProductList/components/ProductList.js":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/Pages/Products/ProductList/components/ProductList.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./resources/js/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Product */ "./resources/js/src/views/Pages/Products/ProductList/components/Product.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./resources/js/node_modules/reactstrap/es/index.js");




var ProductList = function ProductList(props) {
  var productsList = props.productsList,
      onSelectChange = props.onSelectChange;
  var renderProducts = productsList.map(function (product) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Product__WEBPACK_IMPORTED_MODULE_1__["default"], {
      onSelectChange: onSelectChange,
      key: product.id,
      product: product
    });
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Table"], {
    responsive: true,
    striped: true,
    className: "loader-table"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "ID"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Code"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Img"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Action"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, renderProducts));
};

/* harmony default export */ __webpack_exports__["default"] = (ProductList);

/***/ }),

/***/ "./resources/js/src/views/Pages/Products/ProductList/index.js":
/*!********************************************************************!*\
  !*** ./resources/js/src/views/Pages/Products/ProductList/index.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ "./resources/js/src/views/Pages/Products/ProductList/App.js");

/* harmony default export */ __webpack_exports__["default"] = (_App__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./resources/js/src/views/Pages/Products/ProductPrices/App.js":
/*!********************************************************************!*\
  !*** ./resources/js/src/views/Pages/Products/ProductPrices/App.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./resources/js/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./resources/js/node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./resources/js/node_modules/redux/es/index.js");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-loader-spinner */ "./resources/js/node_modules/react-loader-spinner/index.js");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ProductPriceList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/ProductPriceList */ "./resources/js/src/views/Pages/Products/ProductPrices/components/ProductPriceList.js");
/* harmony import */ var _components_ProductSelect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/ProductSelect */ "./resources/js/src/views/Pages/Products/ProductPrices/components/ProductSelect.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./resources/js/node_modules/reactstrap/es/index.js");
/* harmony import */ var _actions_productPricesActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actions/productPricesActions */ "./resources/js/src/views/Pages/Products/actions/productPricesActions.js");
/* harmony import */ var _actions_productsActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../actions/productsActions */ "./resources/js/src/views/Pages/Products/actions/productsActions.js");
/* harmony import */ var _actions_countriesActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../actions/countriesActions */ "./resources/js/src/views/Pages/Products/actions/countriesActions.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }












var App =
/*#__PURE__*/
function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));

    _this.renderProductList = function () {
      var productPricesList = _this.props.productPrices.productPricesList;
      return productPricesList.length > 0 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ProductPriceList__WEBPACK_IMPORTED_MODULE_4__["default"], {
        productPriceList: productPricesList
      })) : '';
    };

    _this.onSelectChange = function (event) {
      var name = event.target.name;
      var value = event.target.value;

      switch (name) {
        case 'productSelect':
          _this.setState({
            activeProductId: value
          });

          break;

        case 'countrySelect':
          break;

        default:
          break;
      }

      if (name === 'productSelect') {
        _this.setState({
          activeProductId: value
        }, function () {// console.log(this.state.activeProductId);
        });
      } else {
        _this.setState({
          activeCountryCode: value
        }, function () {// console.log(this.state.activeCountryCode);
        });
      } // console.log('name ', name, ' value ', value);

    };

    _this.onEditAction = function () {};

    _this.state = {
      activeProductId: 'all',
      activeCountryCode: 'all'
    };
    return _this;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          getProductPrices = _this$props.getProductPrices,
          getProducts = _this$props.getProducts,
          getCountries = _this$props.getCountries;
      var _this$state = this.state,
          activeProductId = _this$state.activeProductId,
          activeCountryCode = _this$state.activeCountryCode;
      getCountries();
      getProductPrices(activeProductId, activeCountryCode);
      getProducts();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(oldProps, prevState) {
      var getProductPrices = this.props.getProductPrices;
      var _this$state2 = this.state,
          activeProductId = _this$state2.activeProductId,
          activeCountryCode = _this$state2.activeCountryCode; // console.log('========== component did update ===========  prevState.activeProductId ', prevState.activeProductId, ' activeProductId ', activeProductId, ' prevState.activeCountryCod ', prevState.activeCountryCode, ' activeCountryCode ', activeCountryCode);

      if (prevState.activeProductId !== activeProductId || prevState.activeCountryCode !== activeCountryCode) {
        getProductPrices(activeProductId, activeCountryCode);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          productPrices = _this$props2.productPrices,
          products = _this$props2.products,
          countries = _this$props2.countries;
      console.log(this.props);
      var loader = productPrices.isLoading ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "loader"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loader_spinner__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "Bars",
        color: "#FFFFF"
      })) : '';
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "animated fadeIn"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        xs: "12",
        lg: "12"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Card"], {
        className: "card-orders"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-align-justify"
      }), " Product Prices"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
        className: "table-filters"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        xs: "3",
        lg: "3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ProductSelect__WEBPACK_IMPORTED_MODULE_5__["default"], {
        activeId: this.state.activeCountryCode,
        list: countries.countriesList,
        onSelectChange: this.onSelectChange,
        inputName: "countrySelect",
        allName: "All Countries",
        idProperty: "country_code",
        nameProperty: "country_name"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        xs: "3",
        lg: "3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ProductSelect__WEBPACK_IMPORTED_MODULE_5__["default"], {
        activeId: this.state.activeProductId,
        list: products.productsList,
        onSelectChange: this.onSelectChange,
        inputName: "productSelect",
        allName: "All Products",
        idProperty: "id",
        nameProperty: "name"
      }))), loader, this.renderProductList())))));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

function mapStateToProps(state) {
  // return {
  //   smsListProps: state.chatSmsReducer.smsList,
  //   text: state.chatSmsReducer.text
  // };
  // console.log('========== mapStateToProps =========== ', state);
  return {
    productPrices: state.productPricesReducer,
    products: state.productsReducer,
    countries: state.countriesReducer
  };
}

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_2__["bindActionCreators"])({
    getProductPrices: _actions_productPricesActions__WEBPACK_IMPORTED_MODULE_7__["getProductPrices"],
    getProducts: _actions_productsActions__WEBPACK_IMPORTED_MODULE_8__["getProducts"],
    getCountries: _actions_countriesActions__WEBPACK_IMPORTED_MODULE_9__["getCountries"]
  }, dispatch);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(App));

/***/ }),

/***/ "./resources/js/src/views/Pages/Products/ProductPrices/components/ProductPrice.js":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/views/Pages/Products/ProductPrices/components/ProductPrice.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./resources/js/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./resources/js/node_modules/reactstrap/es/index.js");
/* harmony import */ var _ProductPriceActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductPriceActions */ "./resources/js/src/views/Pages/Products/ProductPrices/components/ProductPriceActions.js");




var ProductPrice = function ProductPrice(props) {
  var productPrice = props.productPrice,
      editMode = props.editMode; // if ('pre-payment' === constants.ORDER_STATUS['PRE-PAYMENT']) {
  //   console.log('JESTE');
  // }
  // else {
  //   console.log('NIJEEES');
  // }

  var renderField = function renderField(value) {
    return editMode ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text",
      value: value
    }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, value);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, productPrice.id), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, productPrice.product.name, " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, productPrice.currency, " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, renderField(productPrice.price), " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, renderField(productPrice.shipping), " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, productPrice.country_name, " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, renderField(productPrice.shipping_time), " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProductPriceActions__WEBPACK_IMPORTED_MODULE_2__["default"], null)));
};

/* harmony default export */ __webpack_exports__["default"] = (ProductPrice);

/***/ }),

/***/ "./resources/js/src/views/Pages/Products/ProductPrices/components/ProductPriceActions.js":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/views/Pages/Products/ProductPrices/components/ProductPriceActions.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./resources/js/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./resources/js/node_modules/reactstrap/es/index.js");



var ProductPriceActions = function ProductPriceActions(props) {
  var onEdit = props.onEdit,
      onDelete = props.onDelete,
      onView = props.onView;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ButtonGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    color: "primary",
    size: "lg",
    onClick: onEdit
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-pencil-square-o"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    color: "success",
    size: "lg"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-eye-slash"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    color: "danger",
    size: "lg"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-ban eye-slash"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    color: "danger",
    size: "lg"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-user-o"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ProductPriceActions);

/***/ }),

/***/ "./resources/js/src/views/Pages/Products/ProductPrices/components/ProductPriceList.js":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/views/Pages/Products/ProductPrices/components/ProductPriceList.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./resources/js/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ProductPrice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductPrice */ "./resources/js/src/views/Pages/Products/ProductPrices/components/ProductPrice.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./resources/js/node_modules/reactstrap/es/index.js");




var ProductPriceList = function ProductPriceList(props) {
  var productPriceList = props.productPriceList,
      onSelectChange = props.onSelectChange;
  var renderProducts = productPriceList.map(function (productPrice) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProductPrice__WEBPACK_IMPORTED_MODULE_1__["default"], {
      onSelectChange: onSelectChange,
      key: productPrice.id,
      productPrice: productPrice
    });
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Table"], {
    responsive: true,
    striped: true,
    className: "loader-table"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "ID"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Product Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Currency"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Price"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Shipping"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Country Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Shipping time"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Action"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, renderProducts));
};

/* harmony default export */ __webpack_exports__["default"] = (ProductPriceList);

/***/ }),

/***/ "./resources/js/src/views/Pages/Products/ProductPrices/components/ProductSelect.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/Pages/Products/ProductPrices/components/ProductSelect.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./resources/js/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./resources/js/node_modules/reactstrap/es/index.js");



var ProductSelect = function ProductSelect(props) {
  var list = props.list,
      onSelectChange = props.onSelectChange,
      activeId = props.activeId,
      inputName = props.inputName,
      idProperty = props.idProperty,
      nameProperty = props.nameProperty,
      allName = props.allName;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "select",
    name: inputName,
    value: activeId,
    onChange: onSelectChange
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "all"
  }, allName), list.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      key: "".concat(inputName, "-").concat(item[idProperty]),
      value: item[idProperty]
    }, item[nameProperty]);
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ProductSelect);

/***/ }),

/***/ "./resources/js/src/views/Pages/Products/ProductPrices/index.js":
/*!**********************************************************************!*\
  !*** ./resources/js/src/views/Pages/Products/ProductPrices/index.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ "./resources/js/src/views/Pages/Products/ProductPrices/App.js");

/* harmony default export */ __webpack_exports__["default"] = (_App__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./resources/js/src/views/Pages/Products/actions/countriesActions.js":
/*!***************************************************************************!*\
  !*** ./resources/js/src/views/Pages/Products/actions/countriesActions.js ***!
  \***************************************************************************/
/*! exports provided: getCountries */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCountries", function() { return getCountries; });
/* harmony import */ var _helpers_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../helpers/api */ "./resources/js/src/helpers/api.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./resources/js/src/views/Pages/Products/constants.js");


var getCountries = function getCountries() {
  return function (dispatch) {
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_1__["default"].GET_COUNTRIES_INIT
    });
    _helpers_api__WEBPACK_IMPORTED_MODULE_0__["default"].get('/countries', {}).then(function (response) {
      console.log('========= ordersactions ======== response', response);
      dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_1__["default"].GET_COUNTRIES_SUCCESS,
        payload: response.data.data
      });
    });
  };
};

/***/ }),

/***/ "./resources/js/src/views/Pages/Products/actions/productPricesActions.js":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/views/Pages/Products/actions/productPricesActions.js ***!
  \*******************************************************************************/
/*! exports provided: getProductPrices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductPrices", function() { return getProductPrices; });
/* harmony import */ var _helpers_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../helpers/api */ "./resources/js/src/helpers/api.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./resources/js/src/views/Pages/Products/constants.js");


var getProductPrices = function getProductPrices(productId, countryCode) {
  return function (dispatch) {
    console.log('========== getProductPrices =========== ');
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_1__["default"].GET_PRODUCT_PRICES_INIT
    });
    _helpers_api__WEBPACK_IMPORTED_MODULE_0__["default"].get('/products/prices', {
      params: {
        productId: productId,
        countryCode: countryCode
      }
    }).then(function (response) {
      console.log('========= ordersactions ======== response', response);
      dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_1__["default"].GET_PRODUCT_PRICES_SUCCESS,
        payload: response.data.data
      });
    });
  };
};

/***/ }),

/***/ "./resources/js/src/views/Pages/Products/actions/productsActions.js":
/*!**************************************************************************!*\
  !*** ./resources/js/src/views/Pages/Products/actions/productsActions.js ***!
  \**************************************************************************/
/*! exports provided: getProducts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProducts", function() { return getProducts; });
/* harmony import */ var _helpers_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../helpers/api */ "./resources/js/src/helpers/api.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./resources/js/src/views/Pages/Products/constants.js");


var getProducts = function getProducts() {
  return function (dispatch) {
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_1__["default"].GET_PRODUCTS_INIT
    });
    _helpers_api__WEBPACK_IMPORTED_MODULE_0__["default"].get('/products').then(function (response) {
      // console.log('========= ordersactions ======== response', response);
      dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_1__["default"].GET_PRODUCTS_SUCCESS,
        payload: response.data.data
      });
    });
  };
};

/***/ }),

/***/ "./resources/js/src/views/Pages/Products/constants.js":
/*!************************************************************!*\
  !*** ./resources/js/src/views/Pages/Products/constants.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  GET_PRODUCTS_INIT: "GET_PRODUCTS_INIT",
  GET_PRODUCTS_SUCCESS: "GET_PRODUCTS_SUCCESS",
  GET_PRODUCT_PRICES_INIT: "GET_PRODUCT_PRICES_INIT",
  GET_PRODUCT_PRICES_SUCCESS: "GET_PRODUCT_PRICES_SUCCESS",
  GET_COUNTRIES_INIT: "GET_COUNTRIES_INIT",
  GET_COUNTRIES_SUCCESS: "GET_COUNTRIES_SUCCESS"
});

/***/ }),

/***/ "./resources/js/src/views/Pages/Products/index.js":
/*!********************************************************!*\
  !*** ./resources/js/src/views/Pages/Products/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./resources/js/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./resources/js/node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./resources/js/node_modules/react-router-dom/es/index.js");
/* harmony import */ var _helpers_history__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../helpers/history */ "./resources/js/src/helpers/history.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./resources/js/node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux */ "./resources/js/node_modules/redux/es/index.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux-logger */ "./resources/js/node_modules/redux-logger/dist/redux-logger.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux-thunk */ "./resources/js/node_modules/redux-thunk/es/index.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./reducers */ "./resources/js/src/views/Pages/Products/reducers/index.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./App */ "./resources/js/src/views/Pages/Products/App.js");
/* harmony import */ var _ProductPrices_App__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ProductPrices/App */ "./resources/js/src/views/Pages/Products/ProductPrices/App.js");







 // import promise from 'redux-promise';




var logger = Object(redux_logger__WEBPACK_IMPORTED_MODULE_6__["createLogger"])();
var store = Object(redux__WEBPACK_IMPORTED_MODULE_5__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_8__["default"], Object(redux__WEBPACK_IMPORTED_MODULE_5__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_7__["default"], logger));

var Index = function Index(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_4__["Provider"], {
    store: store
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_9__["default"], props));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./resources/js/src/views/Pages/Products/reducers/countriesReducer.js":
/*!****************************************************************************!*\
  !*** ./resources/js/src/views/Pages/Products/reducers/countriesReducer.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return reducer; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./resources/js/src/views/Pages/Products/constants.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initialState = {
  countriesList: [],
  isLoading: false
};
function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants__WEBPACK_IMPORTED_MODULE_0__["default"].GET_COUNTRIES_INIT:
      return _objectSpread({}, state, {
        isLoading: true
      });

    case _constants__WEBPACK_IMPORTED_MODULE_0__["default"].GET_COUNTRIES_SUCCESS:
      return _objectSpread({}, state, {
        isLoading: false,
        countriesList: action.payload
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./resources/js/src/views/Pages/Products/reducers/index.js":
/*!*****************************************************************!*\
  !*** ./resources/js/src/views/Pages/Products/reducers/index.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./resources/js/node_modules/redux/es/index.js");
/* harmony import */ var _productsReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./productsReducer */ "./resources/js/src/views/Pages/Products/reducers/productsReducer.js");
/* harmony import */ var _productPricesReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./productPricesReducer */ "./resources/js/src/views/Pages/Products/reducers/productPricesReducer.js");
/* harmony import */ var _countriesReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./countriesReducer */ "./resources/js/src/views/Pages/Products/reducers/countriesReducer.js");




var rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  productsReducer: _productsReducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  productPricesReducer: _productPricesReducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  countriesReducer: _countriesReducer__WEBPACK_IMPORTED_MODULE_3__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./resources/js/src/views/Pages/Products/reducers/productPricesReducer.js":
/*!********************************************************************************!*\
  !*** ./resources/js/src/views/Pages/Products/reducers/productPricesReducer.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return reducer; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./resources/js/src/views/Pages/Products/constants.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initialState = {
  productPricesList: [],
  isLoading: false
};
function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants__WEBPACK_IMPORTED_MODULE_0__["default"].GET_PRODUCT_PRICES_INIT:
      return _objectSpread({}, state, {
        isLoading: true
      });

    case _constants__WEBPACK_IMPORTED_MODULE_0__["default"].GET_PRODUCT_PRICES_SUCCESS:
      return _objectSpread({}, state, {
        isLoading: false,
        productPricesList: action.payload
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./resources/js/src/views/Pages/Products/reducers/productsReducer.js":
/*!***************************************************************************!*\
  !*** ./resources/js/src/views/Pages/Products/reducers/productsReducer.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return reducer; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./resources/js/src/views/Pages/Products/constants.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initialState = {
  productsList: [],
  isLoading: false
};
function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants__WEBPACK_IMPORTED_MODULE_0__["default"].GET_PRODUCTS_INIT:
      return _objectSpread({}, state, {
        isLoading: true
      });

    case _constants__WEBPACK_IMPORTED_MODULE_0__["default"].GET_PRODUCTS_SUCCESS:
      return _objectSpread({}, state, {
        isLoading: false,
        productsList: action.payload
      });

    default:
      return state;
  }
}

/***/ })

}]);