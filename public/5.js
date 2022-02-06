(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./resources/js/src/containers/DefaultLayout/DefaultLayout.js":
/*!********************************************************************!*\
  !*** ./resources/js/src/containers/DefaultLayout/DefaultLayout.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./resources/js/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./resources/js/node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./resources/js/node_modules/redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./resources/js/node_modules/react-router-dom/es/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./resources/js/node_modules/reactstrap/es/index.js");
/* harmony import */ var _application_actions_authActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../application/actions/authActions */ "./resources/js/src/application/actions/authActions.js");
/* harmony import */ var _helpers_history__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/history */ "./resources/js/src/helpers/history.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @coreui/react */ "./resources/js/node_modules/@coreui/react/es/index.js");
/* harmony import */ var _navigation_nav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../navigation/_nav */ "./resources/js/src/navigation/_nav.js");
/* harmony import */ var _navigation_nonAdminNav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../navigation/_nonAdminNav */ "./resources/js/src/navigation/_nonAdminNav.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../routes */ "./resources/js/src/routes.js");
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








 // sidebar nav config


 // routes config


var DefaultFooter = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 8).then(__webpack_require__.bind(null, /*! ./DefaultFooter */ "./resources/js/src/containers/DefaultLayout/DefaultFooter.js"));
});
var DefaultHeader = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 6).then(__webpack_require__.bind(null, /*! ./DefaultHeader */ "./resources/js/src/containers/DefaultLayout/DefaultHeader.js"));
});

var DefaultLayout =
/*#__PURE__*/
function (_Component) {
  _inherits(DefaultLayout, _Component);

  function DefaultLayout(props) {
    var _this;

    _classCallCheck(this, DefaultLayout);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DefaultLayout).call(this, props));

    _this.loading = function () {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "animated fadeIn pt-1 text-center"
      }, "Loading...");
    };

    _this.signOut = function () {
      console.log(_application_actions_authActions__WEBPACK_IMPORTED_MODULE_5__["logout"]);
    };

    _this.state = {
      email: '',
      password: '',
      error: false,
      errorMessage: null
    };

    if (!_this.props.auth.isLoggedIn) {
      _helpers_history__WEBPACK_IMPORTED_MODULE_6__["default"].push('/login');
    }

    return _this;
  }

  _createClass(DefaultLayout, [{
    key: "render",
    value: function render() {
      var logout = this.props.logout;
      var nav;
      console.log(localStorage.getItem('user_id'));

      if (localStorage.getItem('user_id') == null) {
        nav = _navigation_nonAdminNav__WEBPACK_IMPORTED_MODULE_9__["default"];
      } else {
        nav = localStorage.getItem('user_id') == 1 ? _navigation_nav__WEBPACK_IMPORTED_MODULE_8__["default"] : _navigation_nonAdminNav__WEBPACK_IMPORTED_MODULE_9__["default"];
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "app"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_7__["AppHeader"], {
        fixed: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
        fallback: this.loading()
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DefaultHeader, {
        onLogout: logout
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "app-body"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_7__["AppSidebar"], {
        fixed: true,
        display: "lg"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_7__["AppSidebarHeader"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_7__["AppSidebarForm"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_7__["AppSidebarNav"], _extends({
        navConfig: nav
      }, this.props))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_7__["AppSidebarFooter"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_7__["AppSidebarMinimizer"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
        className: "main"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_7__["AppBreadcrumb"], {
        appRoutes: _routes__WEBPACK_IMPORTED_MODULE_10__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
        fluid: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
        fallback: this.loading()
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Switch"], null, _routes__WEBPACK_IMPORTED_MODULE_10__["default"].map(function (route, idx) {
        return route.component ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
          key: idx,
          path: route.path,
          exact: route.exact,
          name: route.name,
          render: function render(props) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(route.component, props);
          }
        }) : null;
      })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_7__["AppFooter"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
        fallback: this.loading()
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DefaultFooter, null))));
    }
  }]);

  return DefaultLayout;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

function mapStateToProps(state) {
  return {
    auth: state.authReducer
  };
}

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_2__["bindActionCreators"])({
    logout: function logout() {
      return Object(_application_actions_authActions__WEBPACK_IMPORTED_MODULE_5__["logout"])(ownProps);
    }
  }, dispatch);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(DefaultLayout));

/***/ }),

/***/ "./resources/js/src/containers/DefaultLayout/index.js":
/*!************************************************************!*\
  !*** ./resources/js/src/containers/DefaultLayout/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./resources/js/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DefaultLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DefaultLayout */ "./resources/js/src/containers/DefaultLayout/DefaultLayout.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./resources/js/node_modules/react-redux/es/index.js");
/* harmony import */ var _application_store_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../application/store/index */ "./resources/js/src/application/store/index.js");



 // import promise from 'redux-promise';

var Index = function Index(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
    store: _application_store_index__WEBPACK_IMPORTED_MODULE_3__["default"]
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DefaultLayout__WEBPACK_IMPORTED_MODULE_1__["default"], props));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./resources/js/src/helpers/api.js":
/*!*****************************************!*\
  !*** ./resources/js/src/helpers/api.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./resources/js/node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _history__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./history */ "./resources/js/src/helpers/history.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var api = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL:  true ?  true ? 'http://127.0.0.1:8000/api' : undefined : undefined,
  headers: {
    Authorization: "".concat(localStorage.getItem('auth_token')),
    'content-type': 'application/json'
  }
}); // api.interceptors.response.use((response) => response, (error) => {
//   // console.log('=========== interceptors ========= response', response);
//   console.log('=========== interceptors ========= error', error.response);
//   if (error.response.status === 401 && error.response.data.error === 'token_expired') {
//     console.log('test');
//   }
// });

api.interceptors.response.use(function (response) {
  if (response.headers.Authorization) {
    var newToken = response.headers.Authorization;
    localStorage.setItem('auth_token', newToken);
  } // const newtoken = get(response, 'headers.authorization')
  // if (newtoken) localStorage.setItem('auth_token', newtoken);
  // console.log(response.data)


  return response;
}, function (error) {
  console.log('=========== arror ========= ', error.data); // localStorage.clear();
  // switch (error.response.status) {
  //   case 401:
  //     store.dispatch('logoff')
  //     break
  //   default:
  //     console.log(error.response)
  // }

  return Promise.reject(_objectSpread({}, error));
});
/* harmony default export */ __webpack_exports__["default"] = (api);

/***/ }),

/***/ "./resources/js/src/navigation/_nav.js":
/*!*********************************************!*\
  !*** ./resources/js/src/navigation/_nav.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  items: [{
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info'
    }
  }, {
    name: 'Orders',
    url: '/dashboard/orders',
    icon: 'icon-list'
  }, {
    name: 'Products',
    url: '/dashboard/products',
    icon: 'icon-diamond',
    children: [{
      name: 'List',
      url: '/dashboard/products/list',
      icon: 'icon-list'
    }, {
      name: 'Prices',
      url: '/dashboard/products/prices',
      icon: 'icon-paypal'
    }]
  }, {
    name: 'Blacklisted emails',
    url: '/dashboard/blacklist',
    icon: 'icon-user',
    badge: {
      variant: 'info'
    }
  }]
});

/***/ }),

/***/ "./resources/js/src/navigation/_nonAdminNav.js":
/*!*****************************************************!*\
  !*** ./resources/js/src/navigation/_nonAdminNav.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  items: [{
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  }, {
    name: 'Orders',
    url: '/dashboard/orders',
    icon: 'icon-list'
  }]
});

/***/ }),

/***/ "./resources/js/src/routes.js":
/*!************************************!*\
  !*** ./resources/js/src/routes.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./resources/js/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _containers_DefaultLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./containers/DefaultLayout */ "./resources/js/src/containers/DefaultLayout/DefaultLayout.js");
/* harmony import */ var _views_Pages_Blacklist_Blacklist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/Pages/Blacklist/Blacklist */ "./resources/js/src/views/Pages/Blacklist/Blacklist.js");



var Dashboard = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(7), __webpack_require__.e(9)]).then(__webpack_require__.bind(null, /*! ./views/Dashboard */ "./resources/js/src/views/Dashboard/Dashboard.js"));
});
var Orders = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(4)]).then(__webpack_require__.bind(null, /*! ./views/Pages/Orders */ "./resources/js/src/views/Pages/Orders/index.js"));
});
var Products = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, /*! ./views/Pages/Products */ "./resources/js/src/views/Pages/Products/index.js"));
});
var routes = [{
  path: '/dashboard',
  exact: true,
  name: 'Dashboard',
  component: Dashboard
}, {
  path: '/dashboard/orders',
  name: 'Orders',
  component: Orders
}, {
  path: '/dashboard/products',
  name: 'Products',
  component: Products
}, {
  path: '/dashboard/blacklist',
  name: 'Blacklist',
  component: _views_Pages_Blacklist_Blacklist__WEBPACK_IMPORTED_MODULE_2__["Blacklist"]
}];
/* harmony default export */ __webpack_exports__["default"] = (routes);

/***/ }),

/***/ "./resources/js/src/views/Pages/Blacklist/Blacklist.js":
/*!*************************************************************!*\
  !*** ./resources/js/src/views/Pages/Blacklist/Blacklist.js ***!
  \*************************************************************/
/*! exports provided: Blacklist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Blacklist", function() { return Blacklist; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./resources/js/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./resources/js/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./resources/js/node_modules/reactstrap/es/index.js");
/* harmony import */ var _SingleItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SingleItem */ "./resources/js/src/views/Pages/Blacklist/SingleItem.js");
/* harmony import */ var _helpers_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../helpers/api */ "./resources/js/src/helpers/api.js");


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var Blacklist = function Blacklist() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      list = _useState2[0],
      setList = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      _useState4 = _slicedToArray(_useState3, 2),
      input = _useState4[0],
      setInput = _useState4[1];

  var getBlacklisted =
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var x;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _helpers_api__WEBPACK_IMPORTED_MODULE_4__["default"].get("/clients/blacklistedEmails");

            case 2:
              x = _context.sent;
              setList(x.data.data);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function getBlacklisted() {
      return _ref.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    getBlacklisted();
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"], {
    style: {
      marginBottom: "20px"
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    style: {
      marginRight: "20px"
    },
    value: input,
    onChange: function onChange(e) {
      return setInput(e.target.value);
    },
    placeholder: "enter email here..."
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick:
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _helpers_api__WEBPACK_IMPORTED_MODULE_4__["default"].put("/clients/blacklistEmail", {
                email: input
              });

            case 2:
              getBlacklisted();
              setInput("");

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }))
  }, " Add email to blacklist ")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Table"], {
    responsive: true,
    striped: true,
    className: "loader-table"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, "ID"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, "Email"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody", null, list.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SingleItem__WEBPACK_IMPORTED_MODULE_3__["SingleItem"], _extends({
      getBlacklisted: getBlacklisted,
      key: index
    }, item));
  }))));
};

/***/ }),

/***/ "./resources/js/src/views/Pages/Blacklist/SingleItem.js":
/*!**************************************************************!*\
  !*** ./resources/js/src/views/Pages/Blacklist/SingleItem.js ***!
  \**************************************************************/
/*! exports provided: SingleItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleItem", function() { return SingleItem; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./resources/js/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./resources/js/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../helpers/api */ "./resources/js/src/helpers/api.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./resources/js/node_modules/reactstrap/es/index.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var SingleItem = function SingleItem(_ref) {
  var id = _ref.id,
      email = _ref.email,
      getBlacklisted = _ref.getBlacklisted;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, id), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
    style: {
      display: "flex",
      justifyContent: "space-between"
    }
  }, email, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    onClick:
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _helpers_api__WEBPACK_IMPORTED_MODULE_2__["default"].delete("/clients/deleteBlacklistedEmail", {
                data: {
                  email: email
                }
              });

            case 2:
              getBlacklisted();

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    })),
    color: "danger",
    size: "sm"
  }, "remove")));
};

/***/ })

}]);