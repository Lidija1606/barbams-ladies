(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/node_modules/react-loader-spinner/dist/loader/css/CradleLoader.css":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--15-1!./node_modules/postcss-loader/src??ref--15-2!./resources/js/node_modules/react-loader-spinner/dist/loader/css/CradleLoader.css ***!
  \***************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".react-spinner-loader-swing div {\n  border-radius: 50%;\n  float: left;\n  height: 1em;\n  width: 1em;\n}\n.react-spinner-loader-swing div:nth-of-type(1) {\n  background: -webkit-linear-gradient(left, #385c78 0%, #325774 100%);\n  background: linear-gradient(to right, #385c78 0%, #325774 100%);\n}\n.react-spinner-loader-swing div:nth-of-type(2) {\n  background: -webkit-linear-gradient(left, #325774 0%, #47536a 100%);\n  background: linear-gradient(to right, #325774 0%, #47536a 100%);\n}\n.react-spinner-loader-swing div:nth-of-type(3) {\n  background: -webkit-linear-gradient(left, #4a5369 0%, #6b4d59 100%);\n  background: linear-gradient(to right, #4a5369 0%, #6b4d59 100%);\n}\n.react-spinner-loader-swing div:nth-of-type(4) {\n  background: -webkit-linear-gradient(left, #744c55 0%, #954646 100%);\n  background: linear-gradient(to right, #744c55 0%, #954646 100%);\n}\n.react-spinner-loader-swing div:nth-of-type(5) {\n  background: -webkit-linear-gradient(left, #9c4543 0%, #bb4034 100%);\n  background: linear-gradient(to right, #9c4543 0%, #bb4034 100%);\n}\n.react-spinner-loader-swing div:nth-of-type(6) {\n  background: -webkit-linear-gradient(left, #c33f31 0%, #d83b27 100%);\n  background: linear-gradient(to right, #c33f31 0%, #d83b27 100%);\n}\n.react-spinner-loader-swing div:nth-of-type(7) {\n  background: -webkit-linear-gradient(left, #da3b26 0%, #db412c 100%);\n  background: linear-gradient(to right, #da3b26 0%, #db412c 100%);\n}\n.react-spinner-loader-shadow {\n  clear: left;\n  padding-top: 1.5em;\n}\n.react-spinner-loader-shadow div {\n  -webkit-filter: blur(1px);\n  filter: blur(1px);\n  float: left;\n  width: 1em;\n  height: .25em;\n  border-radius: 50%;\n  background: #e3dbd2;\n}\n.react-spinner-loader-shadow .react-spinner-loader-shadow-l {\n  background: #d5d8d6;\n}\n.react-spinner-loader-shadow .react-spinner-loader-shadow-r {\n  background: #eed3ca;\n}\n@-webkit-keyframes ball-l {\n  0%, 50% {\n    -webkit-transform: rotate(0) translateX(0);\n    transform: rotate(0) translateX(0);\n  }\n  100% {\n    -webkit-transform: rotate(50deg) translateX(-2.5em);\n    transform: rotate(50deg) translateX(-2.5em);\n  }\n}\n@keyframes ball-l {\n  0%, 50% {\n    -webkit-transform: rotate(0) translate(0);\n    transform: rotate(0) translateX(0);\n  }\n  100% {\n    -webkit-transform: rotate(50deg) translateX(-2.5em);\n    transform: rotate(50deg) translateX(-2.5em);\n  }\n}\n@-webkit-keyframes ball-r {\n  0% {\n    -webkit-transform: rotate(-50deg) translateX(2.5em);\n    transform: rotate(-50deg) translateX(2.5em);\n  }\n  50%,\n  100% {\n    -webkit-transform: rotate(0) translateX(0);\n    transform: rotate(0) translateX(0);\n  }\n}\n@keyframes ball-r {\n  0% {\n    -webkit-transform: rotate(-50deg) translateX(2.5em);\n    transform: rotate(-50deg) translateX(2.5em);\n  }\n  50%,\n  100% {\n    -webkit-transform: rotate(0) translateX(0);\n    transform: rotate(0) translateX(0)\n  }\n}\n@-webkit-keyframes shadow-l-n {\n  0%, 50% {\n    opacity: .5;\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n  100% {\n    opacity: .125;\n    -webkit-transform: translateX(-1.57em);\n    transform: translateX(-1.75em);\n  }\n}\n@keyframes shadow-l-n {\n  0%, 50% {\n    opacity: .5;\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n  100% {\n    opacity: .125;\n    -webkit-transform: translateX(-1.75);\n    transform: translateX(-1.75em);\n  }\n}\n@-webkit-keyframes shadow-r-n {\n  0% {\n    opacity: .125;\n    -webkit-transform: translateX(1.75em);\n    transform: translateX(1.75em);\n  }\n  50%,\n  100% {\n    opacity: .5;\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n@keyframes shadow-r-n {\n  0% {\n    opacity: .125;\n    -webkit-transform: translateX(1.75em);\n    transform: translateX(1.75em);\n  }\n  50%,\n  100% {\n    opacity: .5;\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n.react-spinner-loader-swing-l {\n  -webkit-animation: ball-l .425s ease-in-out infinite alternate;\n  animation: ball-l .425s ease-in-out infinite alternate;\n}\n.react-spinner-loader-swing-r {\n  -webkit-animation: ball-r .425s ease-in-out infinite alternate;\n  animation: ball-r .425s ease-in-out infinite alternate;\n}\n.react-spinner-loader-shadow-l {\n  -webkit-animation: shadow-l-n .425s ease-in-out infinite alternate;\n  animation: shadow-l-n .425s ease-in-out infinite alternate;\n}\n.react-spinner-loader-shadow-r {\n  -webkit-animation: shadow-r-n .425s ease-in-out infinite alternate;\n  animation: shadow-r-n .425s ease-in-out infinite alternate;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/node_modules/react-loader-spinner/dist/loader/css/Plane.css":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--15-1!./node_modules/postcss-loader/src??ref--15-2!./resources/js/node_modules/react-loader-spinner/dist/loader/css/Plane.css ***!
  \********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.react-spinner-loader-svg-calLoader {\n  width: 230px;\n  height: 230px;\n  -webkit-transform-origin: 115px 115px;\n          transform-origin: 115px 115px;\n  -webkit-animation: 1.4s linear infinite loader-spin;\n          animation: 1.4s linear infinite loader-spin;\n}\n\n.react-spinner-loader-svg-cal-loader__path {\n\n  -webkit-animation: 1.4s ease-in-out infinite loader-path;\n\n          animation: 1.4s ease-in-out infinite loader-path;\n}\n\n@-webkit-keyframes loader-spin {\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes loader-spin {\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@-webkit-keyframes loader-path {\n  0% {\n    stroke-dasharray: 0, 580, 0, 0, 0, 0, 0, 0, 0;\n  }\n  50% {\n    stroke-dasharray: 0, 450, 10, 30, 10, 30, 10, 30, 10;\n  }\n  100% {\n    stroke-dasharray: 0, 580, 0, 0, 0, 0, 0, 0, 0;\n  }\n}\n@keyframes loader-path {\n  0% {\n    stroke-dasharray: 0, 580, 0, 0, 0, 0, 0, 0, 0;\n  }\n  50% {\n    stroke-dasharray: 0, 450, 10, 30, 10, 30, 10, 30, 10;\n  }\n  100% {\n    stroke-dasharray: 0, 580, 0, 0, 0, 0, 0, 0, 0;\n  }\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/node_modules/react-loader-spinner/dist/loader/css/Triangle.css":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--15-1!./node_modules/postcss-loader/src??ref--15-2!./resources/js/node_modules/react-loader-spinner/dist/loader/css/Triangle.css ***!
  \***********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.react-spinner-loader-svg svg {\n  -webkit-transform-origin: 50% 65%;\n          transform-origin: 50% 65%;\n}\n\n.react-spinner-loader-svg svg polygon {\n  stroke-dasharray: 17;\n  -webkit-animation: dash 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;\n          animation: dash 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;\n}\n\n@-webkit-keyframes dash {\n  to {\n    stroke-dashoffset: 136;\n  }\n}\n\n@keyframes dash {\n  to {\n    stroke-dashoffset: 136;\n  }\n}\n@-webkit-keyframes rotate {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes rotate {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n", ""]);

// exports


/***/ }),

/***/ "./resources/js/node_modules/react-loader-spinner/dist/index.js":
/*!**********************************************************************!*\
  !*** ./resources/js/node_modules/react-loader-spinner/dist/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! react */ "./resources/js/node_modules/react/index.js"), __webpack_require__(/*! prop-types */ "./resources/js/node_modules/prop-types/index.js"), __webpack_require__(/*! ./loader/Audio */ "./resources/js/node_modules/react-loader-spinner/dist/loader/Audio.js"), __webpack_require__(/*! ./loader/BallTriangle */ "./resources/js/node_modules/react-loader-spinner/dist/loader/BallTriangle.js"), __webpack_require__(/*! ./loader/Bars */ "./resources/js/node_modules/react-loader-spinner/dist/loader/Bars.js"), __webpack_require__(/*! ./loader/Circles */ "./resources/js/node_modules/react-loader-spinner/dist/loader/Circles.js"), __webpack_require__(/*! ./loader/Grid */ "./resources/js/node_modules/react-loader-spinner/dist/loader/Grid.js"), __webpack_require__(/*! ./loader/Hearts */ "./resources/js/node_modules/react-loader-spinner/dist/loader/Hearts.js"), __webpack_require__(/*! ./loader/Oval */ "./resources/js/node_modules/react-loader-spinner/dist/loader/Oval.js"), __webpack_require__(/*! ./loader/Puff */ "./resources/js/node_modules/react-loader-spinner/dist/loader/Puff.js"), __webpack_require__(/*! ./loader/Rings */ "./resources/js/node_modules/react-loader-spinner/dist/loader/Rings.js"), __webpack_require__(/*! ./loader/TailSpin */ "./resources/js/node_modules/react-loader-spinner/dist/loader/TailSpin.js"), __webpack_require__(/*! ./loader/ThreeDots */ "./resources/js/node_modules/react-loader-spinner/dist/loader/ThreeDots.js"), __webpack_require__(/*! ./loader/Watch */ "./resources/js/node_modules/react-loader-spinner/dist/loader/Watch.js"), __webpack_require__(/*! ./loader/RevolvingDot */ "./resources/js/node_modules/react-loader-spinner/dist/loader/RevolvingDot.js"), __webpack_require__(/*! ./loader/CradleLoader */ "./resources/js/node_modules/react-loader-spinner/dist/loader/CradleLoader.js"), __webpack_require__(/*! ./loader/Triangle */ "./resources/js/node_modules/react-loader-spinner/dist/loader/Triangle.js"), __webpack_require__(/*! ./loader/Plane */ "./resources/js/node_modules/react-loader-spinner/dist/loader/Plane.js"), __webpack_require__(/*! ./loader/MutatingDot */ "./resources/js/node_modules/react-loader-spinner/dist/loader/MutatingDot.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (exports, _react, _propTypes, _Audio, _BallTriangle, _Bars, _Circles, _Grid, _Hearts, _Oval, _Puff, _Rings, _TailSpin, _ThreeDots, _Watch, _RevolvingDot, _CradleLoader, _Triangle, _Plane, _MutatingDot) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var Loader = function (_React$Component) {
    _inherits(Loader, _React$Component);

    function Loader() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, Loader);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Loader.__proto__ || Object.getPrototypeOf(Loader)).call.apply(_ref, [this].concat(args))), _this), _this.svgRenderer = function (type) {
        switch (type) {
          case "Audio":
            return _react2.default.createElement(_Audio.Audio, _this.props);
          case "Ball-Triangle":
            return _react2.default.createElement(_BallTriangle.BallTriangle, _this.props);
          case "Bars":
            return _react2.default.createElement(_Bars.Bars, _this.props);
          case "Circles":
            return _react2.default.createElement(_Circles.Circles, _this.props);
          case "Grid":
            return _react2.default.createElement(_Grid.Grid, _this.props);
          case "Hearts":
            return _react2.default.createElement(_Hearts.Hearts, _this.props);
          case "Oval":
            return _react2.default.createElement(_Oval.Oval, _this.props);
          case "Puff":
            return _react2.default.createElement(_Puff.Puff, _this.props);
          case "Rings":
            return _react2.default.createElement(_Rings.Rings, _this.props);
          case "TailSpin":
            return _react2.default.createElement(_TailSpin.TailSpin, _this.props);
          case "ThreeDots":
            return _react2.default.createElement(_ThreeDots.ThreeDots, _this.props);
          case "Watch":
            return _react2.default.createElement(_Watch.Watch, _this.props);
          case "RevolvingDot":
            return _react2.default.createElement(_RevolvingDot.RevolvingDot, _this.props);
          case "CradleLoader":
            return _react2.default.createElement(_CradleLoader.CradleLoader, _this.props);
          case "Triangle":
            return _react2.default.createElement(_Triangle.Triangle, _this.props);
          case "Plane":
            return _react2.default.createElement(_Plane.Plane, _this.props);
          case "MutatingDot":
            return _react2.default.createElement(_MutatingDot.MutatingDot, _this.props);
          default:
            return _react2.default.createElement(
              "div",
              null,
              _react2.default.createElement(
                "span",
                { style: { color: "Green" } },
                "LOADING"
              ),
              _react2.default.createElement(
                "small",
                null,
                _react2.default.createElement(
                  "i",
                  null,
                  _react2.default.createElement("br", null),
                  "Note:No specific svg type exist"
                )
              )
            );
        }
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Loader, [{
      key: "render",
      value: function render() {
        var type = this.props.type;

        return _react2.default.createElement(
          "div",
          { className: this.props.style },
          this.svgRenderer(type)
        );
      }
    }]);

    return Loader;
  }(_react2.default.Component);

  Loader.propTypes = {
    color: _propTypes2.default.string,
    type: _propTypes2.default.string,
    height: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
    width: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
    style: _propTypes2.default.shape({})
  };
  Loader.defaultProps = {
    color: "#71238",
    type: "Audio",
    height: 80,
    width: 80
  };
  exports.default = Loader;
});

/***/ }),

/***/ "./resources/js/node_modules/react-loader-spinner/dist/loader/Audio.js":
/*!*****************************************************************************!*\
  !*** ./resources/js/node_modules/react-loader-spinner/dist/loader/Audio.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! react */ "./resources/js/node_modules/react/index.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (exports, _react) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Audio = undefined;

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var Audio = exports.Audio = function Audio(svg) {
    return _react2.default.createElement(
      "svg",
      {
        height: svg.height,
        width: svg.width,
        fill: svg.color,
        viewBox: "0 0 55 80",
        xmlns: "http://www.w3.org/2000/svg"
      },
      _react2.default.createElement(
        "g",
        { transform: "matrix(1 0 0 -1 0 80)" },
        _react2.default.createElement(
          "rect",
          { width: "10", height: "20", rx: "3" },
          _react2.default.createElement("animate", {
            attributeName: "height",
            begin: "0s",
            dur: "4.3s",
            values: "20;45;57;80;64;32;66;45;64;23;66;13;64;56;34;34;2;23;76;79;20",
            calcMode: "linear",
            repeatCount: "indefinite"
          })
        ),
        _react2.default.createElement(
          "rect",
          { x: "15", width: "10", height: "80", rx: "3" },
          _react2.default.createElement("animate", {
            attributeName: "height",
            begin: "0s",
            dur: "2s",
            values: "80;55;33;5;75;23;73;33;12;14;60;80",
            calcMode: "linear",
            repeatCount: "indefinite"
          })
        ),
        _react2.default.createElement(
          "rect",
          { x: "30", width: "10", height: "50", rx: "3" },
          _react2.default.createElement("animate", {
            attributeName: "height",
            begin: "0s",
            dur: "1.4s",
            values: "50;34;78;23;56;23;34;76;80;54;21;50",
            calcMode: "linear",
            repeatCount: "indefinite"
          })
        ),
        _react2.default.createElement(
          "rect",
          { x: "45", width: "10", height: "30", rx: "3" },
          _react2.default.createElement("animate", {
            attributeName: "height",
            begin: "0s",
            dur: "2s",
            values: "30;45;13;80;56;72;45;76;34;23;67;30",
            calcMode: "linear",
            repeatCount: "indefinite"
          })
        )
      )
    );
  };
});

/***/ }),

/***/ "./resources/js/node_modules/react-loader-spinner/dist/loader/BallTriangle.js":
/*!************************************************************************************!*\
  !*** ./resources/js/node_modules/react-loader-spinner/dist/loader/BallTriangle.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! react */ "./resources/js/node_modules/react/index.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (exports, _react) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.BallTriangle = undefined;

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var BallTriangle = exports.BallTriangle = function BallTriangle(svg) {
    return _react2.default.createElement(
      "svg",
      {
        height: svg.height,
        width: svg.width,
        stroke: svg.color,
        viewBox: "0 0 57 57",
        xmlns: "http://www.w3.org/2000/svg"
      },
      _react2.default.createElement(
        "g",
        { fill: "none", fillRule: "evenodd" },
        _react2.default.createElement(
          "g",
          { transform: "translate(1 1)", strokeWidth: "2" },
          _react2.default.createElement(
            "circle",
            { cx: "5", cy: "50", r: "5" },
            _react2.default.createElement("animate", {
              attributeName: "cy",
              begin: "0s",
              dur: "2.2s",
              values: "50;5;50;50",
              calcMode: "linear",
              repeatCount: "indefinite"
            }),
            _react2.default.createElement("animate", {
              attributeName: "cx",
              begin: "0s",
              dur: "2.2s",
              values: "5;27;49;5",
              calcMode: "linear",
              repeatCount: "indefinite"
            })
          ),
          _react2.default.createElement(
            "circle",
            { cx: "27", cy: "5", r: "5" },
            _react2.default.createElement("animate", {
              attributeName: "cy",
              begin: "0s",
              dur: "2.2s",
              from: "5",
              to: "5",
              values: "5;50;50;5",
              calcMode: "linear",
              repeatCount: "indefinite"
            }),
            _react2.default.createElement("animate", {
              attributeName: "cx",
              begin: "0s",
              dur: "2.2s",
              from: "27",
              to: "27",
              values: "27;49;5;27",
              calcMode: "linear",
              repeatCount: "indefinite"
            })
          ),
          _react2.default.createElement(
            "circle",
            { cx: "49", cy: "50", r: "5" },
            _react2.default.createElement("animate", {
              attributeName: "cy",
              begin: "0s",
              dur: "2.2s",
              values: "50;50;5;50",
              calcMode: "linear",
              repeatCount: "indefinite"
            }),
            _react2.default.createElement("animate", {
              attributeName: "cx",
              from: "49",
              to: "49",
              begin: "0s",
              dur: "2.2s",
              values: "49;5;27;49",
              calcMode: "linear",
              repeatCount: "indefinite"
            })
          )
        )
      )
    );
  };
});

/***/ }),

/***/ "./resources/js/node_modules/react-loader-spinner/dist/loader/Bars.js":
/*!****************************************************************************!*\
  !*** ./resources/js/node_modules/react-loader-spinner/dist/loader/Bars.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! react */ "./resources/js/node_modules/react/index.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (exports, _react) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Bars = undefined;

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var Bars = exports.Bars = function Bars(svg) {
    return _react2.default.createElement(
      "svg",
      {
        width: svg.height,
        height: svg.width,
        fill: svg.color,
        viewBox: "0 0 135 140",
        xmlns: "http://www.w3.org/2000/svg"
      },
      _react2.default.createElement(
        "rect",
        { y: "10", width: "15", height: "120", rx: "6" },
        _react2.default.createElement("animate", {
          attributeName: "height",
          begin: "0.5s",
          dur: "1s",
          values: "120;110;100;90;80;70;60;50;40;140;120",
          calcMode: "linear",
          repeatCount: "indefinite"
        }),
        _react2.default.createElement("animate", {
          attributeName: "y",
          begin: "0.5s",
          dur: "1s",
          values: "10;15;20;25;30;35;40;45;50;0;10",
          calcMode: "linear",
          repeatCount: "indefinite"
        })
      ),
      _react2.default.createElement(
        "rect",
        { x: "30", y: "10", width: "15", height: "120", rx: "6" },
        _react2.default.createElement("animate", {
          attributeName: "height",
          begin: "0.25s",
          dur: "1s",
          values: "120;110;100;90;80;70;60;50;40;140;120",
          calcMode: "linear",
          repeatCount: "indefinite"
        }),
        _react2.default.createElement("animate", {
          attributeName: "y",
          begin: "0.25s",
          dur: "1s",
          values: "10;15;20;25;30;35;40;45;50;0;10",
          calcMode: "linear",
          repeatCount: "indefinite"
        })
      ),
      _react2.default.createElement(
        "rect",
        { x: "60", width: "15", height: "140", rx: "6" },
        _react2.default.createElement("animate", {
          attributeName: "height",
          begin: "0s",
          dur: "1s",
          values: "120;110;100;90;80;70;60;50;40;140;120",
          calcMode: "linear",
          repeatCount: "indefinite"
        }),
        _react2.default.createElement("animate", {
          attributeName: "y",
          begin: "0s",
          dur: "1s",
          values: "10;15;20;25;30;35;40;45;50;0;10",
          calcMode: "linear",
          repeatCount: "indefinite"
        })
      ),
      _react2.default.createElement(
        "rect",
        { x: "90", y: "10", width: "15", height: "120", rx: "6" },
        _react2.default.createElement("animate", {
          attributeName: "height",
          begin: "0.25s",
          dur: "1s",
          values: "120;110;100;90;80;70;60;50;40;140;120",
          calcMode: "linear",
          repeatCount: "indefinite"
        }),
        _react2.default.createElement("animate", {
          attributeName: "y",
          begin: "0.25s",
          dur: "1s",
          values: "10;15;20;25;30;35;40;45;50;0;10",
          calcMode: "linear",
          repeatCount: "indefinite"
        })
      ),
      _react2.default.createElement(
        "rect",
        { x: "120", y: "10", width: "15", height: "120", rx: "6" },
        _react2.default.createElement("animate", {
          attributeName: "height",
          begin: "0.5s",
          dur: "1s",
          values: "120;110;100;90;80;70;60;50;40;140;120",
          calcMode: "linear",
          repeatCount: "indefinite"
        }),
        _react2.default.createElement("animate", {
          attributeName: "y",
          begin: "0.5s",
          dur: "1s",
          values: "10;15;20;25;30;35;40;45;50;0;10",
          calcMode: "linear",
          repeatCount: "indefinite"
        })
      )
    );
  };
});

/***/ }),

/***/ "./resources/js/node_modules/react-loader-spinner/dist/loader/Circles.js":
/*!*******************************************************************************!*\
  !*** ./resources/js/node_modules/react-loader-spinner/dist/loader/Circles.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! react */ "./resources/js/node_modules/react/index.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (exports, _react) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Circles = undefined;

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var Circles = exports.Circles = function Circles(svg) {
    return _react2.default.createElement(
      "svg",
      {
        width: svg.width,
        height: svg.height,
        viewBox: "0 0 135 135",
        xmlns: "http://www.w3.org/2000/svg",
        fill: svg.color
      },
      _react2.default.createElement(
        "path",
        { d: "M67.447 58c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10zm9.448 9.447c0 5.523 4.477 10 10 10 5.522 0 10-4.477 10-10s-4.478-10-10-10c-5.523 0-10 4.477-10 10zm-9.448 9.448c-5.523 0-10 4.477-10 10 0 5.522 4.477 10 10 10s10-4.478 10-10c0-5.523-4.477-10-10-10zM58 67.447c0-5.523-4.477-10-10-10s-10 4.477-10 10 4.477 10 10 10 10-4.477 10-10z" },
        _react2.default.createElement("animateTransform", {
          attributeName: "transform",
          type: "rotate",
          from: "0 67 67",
          to: "-360 67 67",
          dur: "2.5s",
          repeatCount: "indefinite"
        })
      ),
      _react2.default.createElement(
        "path",
        { d: "M28.19 40.31c6.627 0 12-5.374 12-12 0-6.628-5.373-12-12-12-6.628 0-12 5.372-12 12 0 6.626 5.372 12 12 12zm30.72-19.825c4.686 4.687 12.284 4.687 16.97 0 4.686-4.686 4.686-12.284 0-16.97-4.686-4.687-12.284-4.687-16.97 0-4.687 4.686-4.687 12.284 0 16.97zm35.74 7.705c0 6.627 5.37 12 12 12 6.626 0 12-5.373 12-12 0-6.628-5.374-12-12-12-6.63 0-12 5.372-12 12zm19.822 30.72c-4.686 4.686-4.686 12.284 0 16.97 4.687 4.686 12.285 4.686 16.97 0 4.687-4.686 4.687-12.284 0-16.97-4.685-4.687-12.283-4.687-16.97 0zm-7.704 35.74c-6.627 0-12 5.37-12 12 0 6.626 5.373 12 12 12s12-5.374 12-12c0-6.63-5.373-12-12-12zm-30.72 19.822c-4.686-4.686-12.284-4.686-16.97 0-4.686 4.687-4.686 12.285 0 16.97 4.686 4.687 12.284 4.687 16.97 0 4.687-4.685 4.687-12.283 0-16.97zm-35.74-7.704c0-6.627-5.372-12-12-12-6.626 0-12 5.373-12 12s5.374 12 12 12c6.628 0 12-5.373 12-12zm-19.823-30.72c4.687-4.686 4.687-12.284 0-16.97-4.686-4.686-12.284-4.686-16.97 0-4.687 4.686-4.687 12.284 0 16.97 4.686 4.687 12.284 4.687 16.97 0z" },
        _react2.default.createElement("animateTransform", {
          attributeName: "transform",
          type: "rotate",
          from: "0 67 67",
          to: "360 67 67",
          dur: "8s",
          repeatCount: "indefinite"
        })
      )
    );
  };
});

/***/ }),

/***/ "./resources/js/node_modules/react-loader-spinner/dist/loader/CradleLoader.js":
/*!************************************************************************************!*\
  !*** ./resources/js/node_modules/react-loader-spinner/dist/loader/CradleLoader.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! react */ "./resources/js/node_modules/react/index.js"), __webpack_require__(/*! ./css/CradleLoader.css */ "./resources/js/node_modules/react-loader-spinner/dist/loader/css/CradleLoader.css")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (exports, _react) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.CradleLoader = undefined;

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var CradleLoader = exports.CradleLoader = function CradleLoader() {
    return _react2.default.createElement(
      "div",
      { "aria-busy": "true", "aria-label": "Loading", role: "progressbar", className: "container" },
      _react2.default.createElement(
        "div",
        { className: "react-spinner-loader-swing" },
        _react2.default.createElement("div", { className: "react-spinner-loader-swing-l" }),
        _react2.default.createElement("div", null),
        _react2.default.createElement("div", null),
        _react2.default.createElement("div", null),
        _react2.default.createElement("div", null),
        _react2.default.createElement("div", null),
        _react2.default.createElement("div", { className: "react-spinner-loader-swing-r" })
      ),
      _react2.default.createElement(
        "div",
        { className: "react-spinner-loader-shadow" },
        _react2.default.createElement("div", { className: "react-spinner-loader-shadow-l" }),
        _react2.default.createElement("div", null),
        _react2.default.createElement("div", null),
        _react2.default.createElement("div", null),
        _react2.default.createElement("div", null),
        _react2.default.createElement("div", null),
        _react2.default.createElement("div", { className: "react-spinner-loader-shadow-r" })
      )
    );
  };
});

/***/ }),

/***/ "./resources/js/node_modules/react-loader-spinner/dist/loader/Grid.js":
/*!****************************************************************************!*\
  !*** ./resources/js/node_modules/react-loader-spinner/dist/loader/Grid.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! react */ "./resources/js/node_modules/react/index.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (exports, _react) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Grid = undefined;

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var Grid = exports.Grid = function Grid(svg) {
    return _react2.default.createElement(
      "svg",
      { width: svg.width, height: svg.height, viewBox: "0 0 105 105", fill: svg.color },
      _react2.default.createElement(
        "circle",
        { cx: "12.5", cy: "12.5", r: "12.5" },
        _react2.default.createElement("animate", {
          attributeName: "fill-opacity",
          begin: "0s",
          dur: "1s",
          values: "1;.2;1",
          calcMode: "linear",
          repeatCount: "indefinite"
        })
      ),
      _react2.default.createElement(
        "circle",
        { cx: "12.5", cy: "52.5", r: "12.5" },
        _react2.default.createElement("animate", {
          attributeName: "fill-opacity",
          begin: "100ms",
          dur: "1s",
          values: "1;.2;1",
          calcMode: "linear",
          repeatCount: "indefinite"
        })
      ),
      _react2.default.createElement(
        "circle",
        { cx: "52.5", cy: "12.5", r: "12.5" },
        _react2.default.createElement("animate", {
          attributeName: "fill-opacity",
          begin: "300ms",
          dur: "1s",
          values: "1;.2;1",
          calcMode: "linear",
          repeatCount: "indefinite"
        })
      ),
      _react2.default.createElement(
        "circle",
        { cx: "52.5", cy: "52.5", r: "12.5" },
        _react2.default.createElement("animate", {
          attributeName: "fill-opacity",
          begin: "600ms",
          dur: "1s",
          values: "1;.2;1",
          calcMode: "linear",
          repeatCount: "indefinite"
        })
      ),
      _react2.default.createElement(
        "circle",
        { cx: "92.5", cy: "12.5", r: "12.5" },
        _react2.default.createElement("animate", {
          attributeName: "fill-opacity",
          begin: "800ms",
          dur: "1s",
          values: "1;.2;1",
          calcMode: "linear",
          repeatCount: "indefinite"
        })
      ),
      _react2.default.createElement(
        "circle",
        { cx: "92.5", cy: "52.5", r: "12.5" },
        _react2.default.createElement("animate", {
          attributeName: "fill-opacity",
          begin: "400ms",
          dur: "1s",
          values: "1;.2;1",
          calcMode: "linear",
          repeatCount: "indefinite"
        })
      ),
      _react2.default.createElement(
        "circle",
        { cx: "12.5", cy: "92.5", r: "12.5" },
        _react2.default.createElement("animate", {
          attributeName: "fill-opacity",
          begin: "700ms",
          dur: "1s",
          values: "1;.2;1",
          calcMode: "linear",
          repeatCount: "indefinite"
        })
      ),
      _react2.default.createElement(
        "circle",
        { cx: "52.5", cy: "92.5", r: "12.5" },
        _react2.default.createElement("animate", {
          attributeName: "fill-opacity",
          begin: "500ms",
          dur: "1s",
          values: "1;.2;1",
          calcMode: "linear",
          repeatCount: "indefinite"
        })
      ),
      _react2.default.createElement(
        "circle",
        { cx: "92.5", cy: "92.5", r: "12.5" },
        _react2.default.createElement("animate", {
          attributeName: "fill-opacity",
          begin: "200ms",
          dur: "1s",
          values: "1;.2;1",
          calcMode: "linear",
          repeatCount: "indefinite"
        })
      )
    );
  };
});

/***/ }),

/***/ "./resources/js/node_modules/react-loader-spinner/dist/loader/Hearts.js":
/*!******************************************************************************!*\
  !*** ./resources/js/node_modules/react-loader-spinner/dist/loader/Hearts.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! react */ "./resources/js/node_modules/react/index.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (exports, _react) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Hearts = undefined;

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var Hearts = exports.Hearts = function Hearts(svg) {
    return _react2.default.createElement(
      "svg",
      {
        width: svg.width,
        height: svg.height,
        viewBox: "0 0 140 64",
        xmlns: "http://www.w3.org/2000/svg",
        fill: svg.color
      },
      _react2.default.createElement(
        "path",
        {
          d: "M30.262 57.02L7.195 40.723c-5.84-3.976-7.56-12.06-3.842-18.063 3.715-6 11.467-7.65 17.306-3.68l4.52 3.76 2.6-5.274c3.717-6.002 11.47-7.65 17.305-3.68 5.84 3.97 7.56 12.054 3.842 18.062L34.49 56.118c-.897 1.512-2.793 1.915-4.228.9z",
          attributeName: "fill-opacity",
          from: "0",
          to: ".5"
        },
        _react2.default.createElement("animate", {
          attributeName: "fill-opacity",
          begin: "0s",
          dur: "1.4s",
          values: "0.5;1;0.5",
          calcMode: "linear",
          repeatCount: "indefinite"
        })
      ),
      _react2.default.createElement(
        "path",
        {
          d: "M105.512 56.12l-14.44-24.272c-3.716-6.008-1.996-14.093 3.843-18.062 5.835-3.97 13.588-2.322 17.306 3.68l2.6 5.274 4.52-3.76c5.84-3.97 13.592-2.32 17.307 3.68 3.718 6.003 1.998 14.088-3.842 18.064L109.74 57.02c-1.434 1.014-3.33.61-4.228-.9z",
          attributeName: "fill-opacity",
          from: "0",
          to: ".5"
        },
        _react2.default.createElement("animate", {
          attributeName: "fill-opacity",
          begin: "0.7s",
          dur: "1.4s",
          values: "0.5;1;0.5",
          calcMode: "linear",
          repeatCount: "indefinite"
        })
      ),
      _react2.default.createElement("path", { d: "M67.408 57.834l-23.01-24.98c-5.864-6.15-5.864-16.108 0-22.248 5.86-6.14 15.37-6.14 21.234 0L70 16.168l4.368-5.562c5.863-6.14 15.375-6.14 21.235 0 5.863 6.14 5.863 16.098 0 22.247l-23.007 24.98c-1.43 1.556-3.757 1.556-5.188 0z" })
    );
  };
});

/***/ }),

/***/ "./resources/js/node_modules/react-loader-spinner/dist/loader/MutatingDot.js":
/*!***********************************************************************************!*\
  !*** ./resources/js/node_modules/react-loader-spinner/dist/loader/MutatingDot.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! react */ "./resources/js/node_modules/react/index.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (exports, _react) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.MutatingDot = undefined;

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var MutatingDot = exports.MutatingDot = function MutatingDot(svg) {
    return _react2.default.createElement(
      "svg",
      { id: "goo-loader", width: svg.width, height: svg.height },
      _react2.default.createElement(
        "filter",
        { id: "fancy-goo" },
        _react2.default.createElement("feGaussianBlur", { "in": "SourceGraphic", stdDeviation: "6", result: "blur" }),
        _react2.default.createElement("feColorMatrix", {
          "in": "blur",
          mode: "matrix",
          values: "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9",
          result: "goo"
        }),
        _react2.default.createElement("feComposite", { "in": "SourceGraphic", in2: "goo", operator: "atop" })
      ),
      _react2.default.createElement(
        "g",
        { filter: "url(#fancy-goo)" },
        _react2.default.createElement("animateTransform", {
          id: "mainAnim",
          attributeName: "transform",
          attributeType: "XML",
          type: "rotate",
          from: "0 50 50",
          to: "359 50 50",
          dur: "1.2s",
          repeatCount: "indefinite"
        }),
        _react2.default.createElement(
          "circle",
          { cx: "50%", cy: "40", r: "11" },
          _react2.default.createElement("animate", {
            id: "cAnim1",
            attributeType: "XML",
            attributeName: "cy",
            dur: "0.6s",
            begin: "0;cAnim1.end+0.2s",
            calcMode: "spline",
            values: "40;20;40",
            keyTimes: "0;0.3;1",
            keySplines: "0.175, 0.885, 0.320, 1.5; 0.175, 0.885, 0.320, 1.5"
          })
        ),
        _react2.default.createElement(
          "circle",
          { cx: "50%", cy: "60", r: "11" },
          _react2.default.createElement("animate", {
            id: "cAnim2",
            attributeType: "XML",
            attributeName: "cy",
            dur: "0.6s",
            begin: "0.4s;cAnim2.end+0.2s",
            calcMode: "spline",
            values: "60;80;60",
            keyTimes: "0;0.3;1",
            keySplines: "0.175, 0.885, 0.320, 1.5;0.175, 0.885, 0.320, 1.5"
          })
        )
      )
    );
  };
});

/***/ }),

/***/ "./resources/js/node_modules/react-loader-spinner/dist/loader/Oval.js":
/*!****************************************************************************!*\
  !*** ./resources/js/node_modules/react-loader-spinner/dist/loader/Oval.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! react */ "./resources/js/node_modules/react/index.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (exports, _react) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Oval = undefined;

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var Oval = exports.Oval = function Oval(svg) {
    return _react2.default.createElement(
      "svg",
      {
        width: svg.width,
        height: svg.height,
        viewBox: "0 0 38 38",
        xmlns: "http://www.w3.org/2000/svg",
        stroke: svg.color
      },
      _react2.default.createElement(
        "g",
        { fill: "none", fillRule: "evenodd" },
        _react2.default.createElement(
          "g",
          { transform: "translate(1 1)", strokeWidth: "2" },
          _react2.default.createElement("circle", { strokeOpacity: ".5", cx: "18", cy: "18", r: "18" }),
          _react2.default.createElement(
            "path",
            { d: "M36 18c0-9.94-8.06-18-18-18" },
            _react2.default.createElement("animateTransform", {
              attributeName: "transform",
              type: "rotate",
              from: "0 18 18",
              to: "360 18 18",
              dur: "1s",
              repeatCount: "indefinite"
            })
          )
        )
      )
    );
  };
});

/***/ }),

/***/ "./resources/js/node_modules/react-loader-spinner/dist/loader/Plane.js":
/*!*****************************************************************************!*\
  !*** ./resources/js/node_modules/react-loader-spinner/dist/loader/Plane.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! react */ "./resources/js/node_modules/react/index.js"), __webpack_require__(/*! prop-types */ "./resources/js/node_modules/prop-types/index.js"), __webpack_require__(/*! ./css/Plane.css */ "./resources/js/node_modules/react-loader-spinner/dist/loader/css/Plane.css")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (exports, _react, _propTypes) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Plane = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var Plane = exports.Plane = function Plane(props) {
    return _react2.default.createElement(
      "svg",
      { className: "react-spinner-loader-svg-calLoader", xmlns: "http://www.w3.org/2000/svg", width: "230", height: "230" },
      _react2.default.createElement("path", {
        className: "react-spinner-loader-cal-loader__path",
        style: { stroke: props.secondaryColor },
        d: "M86.429 40c63.616-20.04 101.511 25.08 107.265 61.93 6.487 41.54-18.593 76.99-50.6 87.643-59.46 19.791-101.262-23.577-107.142-62.616C29.398 83.441 59.945 48.343 86.43 40z",
        fill: "none",
        stroke: "#0099cc",
        strokeWidth: "4",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeDasharray: "10 10 10 10 10 10 10 432",
        strokeDashoffset: "77"
      }),
      _react2.default.createElement("path", {
        className: "cal-loader__plane",
        style: { fill: props.color },
        d: "M141.493 37.93c-1.087-.927-2.942-2.002-4.32-2.501-2.259-.824-3.252-.955-9.293-1.172-4.017-.146-5.197-.23-5.47-.37-.766-.407-1.526-1.448-7.114-9.773-4.8-7.145-5.344-7.914-6.327-8.976-1.214-1.306-1.396-1.378-3.79-1.473-1.036-.04-2-.043-2.153-.002-.353.1-.87.586-1 .952-.139.399-.076.71.431 2.22.241.72 1.029 3.386 1.742 5.918 1.644 5.844 2.378 8.343 2.863 9.705.206.601.33 1.1.275 1.125-.24.097-10.56 1.066-11.014 1.032a3.532 3.532 0 0 1-1.002-.276l-.487-.246-2.044-2.613c-2.234-2.87-2.228-2.864-3.35-3.309-.717-.287-2.82-.386-3.276-.163-.457.237-.727.644-.737 1.152-.018.39.167.805 1.916 4.373 1.06 2.166 1.964 4.083 1.998 4.27.04.179.004.521-.076.75-.093.228-1.109 2.064-2.269 4.088-1.921 3.34-2.11 3.711-2.123 4.107-.008.25.061.557.168.725.328.512.72.644 1.966.676 1.32.029 2.352-.236 3.05-.762.222-.171 1.275-1.313 2.412-2.611 1.918-2.185 2.048-2.32 2.45-2.505.241-.111.601-.232.82-.271.267-.058 2.213.201 5.912.8 3.036.48 5.525.894 5.518.914 0 .026-.121.306-.27.638-.54 1.198-1.515 3.842-3.35 9.021-1.029 2.913-2.107 5.897-2.4 6.62-.703 1.748-.725 1.833-.594 2.286.137.46.45.833.872 1.012.41.177 3.823.24 4.37.085.852-.25 1.44-.688 2.312-1.724 1.166-1.39 3.169-3.948 6.771-8.661 5.8-7.583 6.561-8.49 7.387-8.702.233-.065 2.828-.056 5.784.011 5.827.138 6.64.09 8.62-.5 2.24-.67 4.035-1.65 5.517-3.016 1.136-1.054 1.135-1.014.207-1.962-.357-.38-.767-.777-.902-.893z",
        fill: "#000033"
      })
    );
  };

  Plane.propTypes = {
    secondaryColor: _propTypes2.default.string,
    color: _propTypes2.default.string
  };

  Plane.defaultProps = {
    secondaryColor: "grey",
    color: "#FFA500"
  };
});

/***/ }),

/***/ "./resources/js/node_modules/react-loader-spinner/dist/loader/Puff.js":
/*!****************************************************************************!*\
  !*** ./resources/js/node_modules/react-loader-spinner/dist/loader/Puff.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! react */ "./resources/js/node_modules/react/index.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (exports, _react) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Puff = undefined;

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var Puff = exports.Puff = function Puff(svg) {
    return _react2.default.createElement(
      "svg",
      {
        width: svg.width,
        height: svg.height,
        viewBox: "0 0 44 44",
        xmlns: "http://www.w3.org/2000/svg",
        stroke: svg.color
      },
      _react2.default.createElement(
        "g",
        { fill: "none", fillRule: "evenodd", strokeWidth: "2" },
        _react2.default.createElement(
          "circle",
          { cx: "22", cy: "22", r: "1" },
          _react2.default.createElement("animate", {
            attributeName: "r",
            begin: "0s",
            dur: "1.8s",
            values: "1; 20",
            calcMode: "spline",
            keyTimes: "0; 1",
            keySplines: "0.165, 0.84, 0.44, 1",
            repeatCount: "indefinite"
          }),
          _react2.default.createElement("animate", {
            attributeName: "strokeOpacity",
            begin: "0s",
            dur: "1.8s",
            values: "1; 0",
            calcMode: "spline",
            keyTimes: "0; 1",
            keySplines: "0.3, 0.61, 0.355, 1",
            repeatCount: "indefinite"
          })
        ),
        _react2.default.createElement(
          "circle",
          { cx: "22", cy: "22", r: "1" },
          _react2.default.createElement("animate", {
            attributeName: "r",
            begin: "-0.9s",
            dur: "1.8s",
            values: "1; 20",
            calcMode: "spline",
            keyTimes: "0; 1",
            keySplines: "0.165, 0.84, 0.44, 1",
            repeatCount: "indefinite"
          }),
          _react2.default.createElement("animate", {
            attributeName: "strokeOpacity",
            begin: "-0.9s",
            dur: "1.8s",
            values: "1; 0",
            calcMode: "spline",
            keyTimes: "0; 1",
            keySplines: "0.3, 0.61, 0.355, 1",
            repeatCount: "indefinite"
          })
        )
      )
    );
  };
});

/***/ }),

/***/ "./resources/js/node_modules/react-loader-spinner/dist/loader/RevolvingDot.js":
/*!************************************************************************************!*\
  !*** ./resources/js/node_modules/react-loader-spinner/dist/loader/RevolvingDot.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! react */ "./resources/js/node_modules/react/index.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (exports, _react) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.RevolvingDot = undefined;

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var RevolvingDot = exports.RevolvingDot = function RevolvingDot(svg) {
    return _react2.default.createElement(
      "svg",
      {
        version: "1.1",
        width: svg.width,
        height: svg.height,
        id: "L3",
        xmlns: "http://www.w3.org/2000/svg",
        x: "0px",
        y: "0px",
        viewBox: "0 0 100 100",
        enableBackground: "new 0 0 0 0",
        xmlSpace: "preserve"
      },
      _react2.default.createElement("circle", {
        fill: "none",
        stroke: svg.color,
        strokeWidth: "4",
        cx: "50",
        cy: "50",
        r: "44",
        style: { opacity: 0.5 }
      }),
      _react2.default.createElement(
        "circle",
        { fill: svg.color, stroke: svg.color, strokeWidth: "3", cx: "8", cy: "54", r: "6" },
        _react2.default.createElement("animateTransform", {
          attributeName: "transform",
          dur: "2s",
          type: "rotate",
          from: "0 50 48",
          to: "360 50 52",
          repeatCount: "indefinite"
        })
      )
    );
  };
});

/***/ }),

/***/ "./resources/js/node_modules/react-loader-spinner/dist/loader/Rings.js":
/*!*****************************************************************************!*\
  !*** ./resources/js/node_modules/react-loader-spinner/dist/loader/Rings.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! react */ "./resources/js/node_modules/react/index.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (exports, _react) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Rings = undefined;

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var Rings = exports.Rings = function Rings(svg) {
    return _react2.default.createElement(
      "svg",
      {
        width: svg.width,
        height: svg.height,
        viewBox: "0 0 45 45",
        xmlns: "http://www.w3.org/2000/svg",
        stroke: svg.color
      },
      _react2.default.createElement(
        "g",
        { fill: "none", fillRule: "evenodd", transform: "translate(1 1)", strokeWidth: "2" },
        _react2.default.createElement(
          "circle",
          { cx: "22", cy: "22", r: "6", strokeOpacity: "0" },
          _react2.default.createElement("animate", {
            attributeName: "r",
            begin: "1.5s",
            dur: "3s",
            values: "6;22",
            calcMode: "linear",
            repeatCount: "indefinite"
          }),
          _react2.default.createElement("animate", {
            attributeName: "stroke-opacity",
            begin: "1.5s",
            dur: "3s",
            values: "1;0",
            calcMode: "linear",
            repeatCount: "indefinite"
          }),
          _react2.default.createElement("animate", {
            attributeName: "stroke-width",
            begin: "1.5s",
            dur: "3s",
            values: "2;0",
            calcMode: "linear",
            repeatCount: "indefinite"
          })
        ),
        _react2.default.createElement(
          "circle",
          { cx: "22", cy: "22", r: "6", strokeOpacity: "0" },
          _react2.default.createElement("animate", {
            attributeName: "r",
            begin: "3s",
            dur: "3s",
            values: "6;22",
            calcMode: "linear",
            repeatCount: "indefinite"
          }),
          _react2.default.createElement("animate", {
            attributeName: "strokeOpacity",
            begin: "3s",
            dur: "3s",
            values: "1;0",
            calcMode: "linear",
            repeatCount: "indefinite"
          }),
          _react2.default.createElement("animate", {
            attributeName: "strokeWidth",
            begin: "3s",
            dur: "3s",
            values: "2;0",
            calcMode: "linear",
            repeatCount: "indefinite"
          })
        ),
        _react2.default.createElement(
          "circle",
          { cx: "22", cy: "22", r: "8" },
          _react2.default.createElement("animate", {
            attributeName: "r",
            begin: "0s",
            dur: "1.5s",
            values: "6;1;2;3;4;5;6",
            calcMode: "linear",
            repeatCount: "indefinite"
          })
        )
      )
    );
  };
});

/***/ }),

/***/ "./resources/js/node_modules/react-loader-spinner/dist/loader/TailSpin.js":
/*!********************************************************************************!*\
  !*** ./resources/js/node_modules/react-loader-spinner/dist/loader/TailSpin.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! react */ "./resources/js/node_modules/react/index.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (exports, _react) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.TailSpin = undefined;

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var TailSpin = exports.TailSpin = function TailSpin(svg) {
    return _react2.default.createElement(
      "svg",
      { width: svg.width, height: svg.height, viewBox: "0 0 38 38", xmlns: "http://www.w3.org/2000/svg" },
      _react2.default.createElement(
        "defs",
        null,
        _react2.default.createElement(
          "linearGradient",
          { x1: "8.042%", y1: "0%", x2: "65.682%", y2: "23.865%", id: "a" },
          _react2.default.createElement("stop", { stopColor: svg.color, stopOpacity: "0", offset: "0%" }),
          _react2.default.createElement("stop", { stopColor: svg.color, stopOpacity: ".631", offset: "63.146%" }),
          _react2.default.createElement("stop", { stopColor: svg.color, offset: "100%" })
        )
      ),
      _react2.default.createElement(
        "g",
        { fill: "none", fillRule: "evenodd" },
        _react2.default.createElement(
          "g",
          { transform: "translate(1 1)" },
          _react2.default.createElement(
            "path",
            { d: "M36 18c0-9.94-8.06-18-18-18", id: "Oval-2", stroke: svg.color, strokeWidth: "2" },
            _react2.default.createElement("animateTransform", {
              attributeName: "transform",
              type: "rotate",
              from: "0 18 18",
              to: "360 18 18",
              dur: "0.9s",
              repeatCount: "indefinite"
            })
          ),
          _react2.default.createElement(
            "circle",
            { fill: "#fff", cx: "36", cy: "18", r: "1" },
            _react2.default.createElement("animateTransform", {
              attributeName: "transform",
              type: "rotate",
              from: "0 18 18",
              to: "360 18 18",
              dur: "0.9s",
              repeatCount: "indefinite"
            })
          )
        )
      )
    );
  };
});

/***/ }),

/***/ "./resources/js/node_modules/react-loader-spinner/dist/loader/ThreeDots.js":
/*!*********************************************************************************!*\
  !*** ./resources/js/node_modules/react-loader-spinner/dist/loader/ThreeDots.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! react */ "./resources/js/node_modules/react/index.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (exports, _react) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ThreeDots = undefined;

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var ThreeDots = exports.ThreeDots = function ThreeDots(svg) {
    return _react2.default.createElement(
      "svg",
      {
        width: svg.width,
        height: svg.height,
        viewBox: "0 0 120 30",
        xmlns: "http://www.w3.org/2000/svg",
        fill: svg.color
      },
      _react2.default.createElement(
        "circle",
        { cx: "15", cy: "15", r: "15" },
        _react2.default.createElement("animate", {
          attributeName: "r",
          from: "15",
          to: "15",
          begin: "0s",
          dur: "0.8s",
          values: "15;9;15",
          calcMode: "linear",
          repeatCount: "indefinite"
        }),
        _react2.default.createElement("animate", {
          attributeName: "fillOpacity",
          from: "1",
          to: "1",
          begin: "0s",
          dur: "0.8s",
          values: "1;.5;1",
          calcMode: "linear",
          repeatCount: "indefinite"
        })
      ),
      _react2.default.createElement(
        "circle",
        { cx: "60", cy: "15", r: "9", attributeName: "fillOpacity", from: "1", to: "0.3" },
        _react2.default.createElement("animate", {
          attributeName: "r",
          from: "9",
          to: "9",
          begin: "0s",
          dur: "0.8s",
          values: "9;15;9",
          calcMode: "linear",
          repeatCount: "indefinite"
        }),
        _react2.default.createElement("animate", {
          attributeName: "fillOpacity",
          from: "0.5",
          to: "0.5",
          begin: "0s",
          dur: "0.8s",
          values: ".5;1;.5",
          calcMode: "linear",
          repeatCount: "indefinite"
        })
      ),
      _react2.default.createElement(
        "circle",
        { cx: "105", cy: "15", r: "15" },
        _react2.default.createElement("animate", {
          attributeName: "r",
          from: "15",
          to: "15",
          begin: "0s",
          dur: "0.8s",
          values: "15;9;15",
          calcMode: "linear",
          repeatCount: "indefinite"
        }),
        _react2.default.createElement("animate", {
          attributeName: "fillOpacity",
          from: "1",
          to: "1",
          begin: "0s",
          dur: "0.8s",
          values: "1;.5;1",
          calcMode: "linear",
          repeatCount: "indefinite"
        })
      )
    );
  };
});

/***/ }),

/***/ "./resources/js/node_modules/react-loader-spinner/dist/loader/Triangle.js":
/*!********************************************************************************!*\
  !*** ./resources/js/node_modules/react-loader-spinner/dist/loader/Triangle.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! react */ "./resources/js/node_modules/react/index.js"), __webpack_require__(/*! ./css/Triangle.css */ "./resources/js/node_modules/react-loader-spinner/dist/loader/css/Triangle.css")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (exports, _react) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Triangle = undefined;

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var Triangle = exports.Triangle = function Triangle(svg) {
    return _react2.default.createElement(
      "div",
      { className: "react-spinner-loader-svg" },
      _react2.default.createElement(
        "svg",
        { id: "triangle", width: svg.height, height: svg.height, viewBox: "-3 -4 39 39" },
        _react2.default.createElement("polygon", { fill: "transparent", stroke: svg.color, strokeWidth: "1", points: "16,0 32,32 0,32" })
      )
    );
  };
});

/***/ }),

/***/ "./resources/js/node_modules/react-loader-spinner/dist/loader/Watch.js":
/*!*****************************************************************************!*\
  !*** ./resources/js/node_modules/react-loader-spinner/dist/loader/Watch.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! react */ "./resources/js/node_modules/react/index.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (exports, _react) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Watch = undefined;

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var Watch = exports.Watch = function Watch(svg) {
    return _react2.default.createElement(
      "svg",
      {
        width: svg.width,
        height: svg.height,
        version: "1.1",
        id: "L2",
        xmlns: "http://www.w3.org/2000/svg",
        x: "0px",
        y: "0px",
        viewBox: "0 0 100 100",
        enableBackground: "new 0 0 100 100",
        xmlSpace: "preserve"
      },
      _react2.default.createElement("circle", {
        fill: "none",
        stroke: svg.color,
        strokeWidth: "4",
        strokeMiterlimit: "10",
        cx: "50",
        cy: "50",
        r: "48"
      }),
      _react2.default.createElement(
        "line",
        {
          fill: "none",
          strokeLinecap: "round",
          stroke: svg.color,
          strokeWidth: "4",
          strokeMiterlimit: "10",
          x1: "50",
          y1: "50",
          x2: "85",
          y2: "50.5"
        },
        _react2.default.createElement("animateTransform", {
          attributeName: "transform",
          dur: "2s",
          type: "rotate",
          from: "0 50 50",
          to: "360 50 50",
          repeatCount: "indefinite"
        })
      ),
      _react2.default.createElement(
        "line",
        {
          fill: "none",
          strokeLinecap: "round",
          stroke: svg.color,
          strokeWidth: "4",
          strokeMiterlimit: "10",
          x1: "50",
          y1: "50",
          x2: "49.5",
          y2: "74"
        },
        _react2.default.createElement("animateTransform", {
          attributeName: "transform",
          dur: "15s",
          type: "rotate",
          from: "0 50 50",
          to: "360 50 50",
          repeatCount: "indefinite"
        })
      )
    );
  };
});

/***/ }),

/***/ "./resources/js/node_modules/react-loader-spinner/dist/loader/css/CradleLoader.css":
/*!*****************************************************************************************!*\
  !*** ./resources/js/node_modules/react-loader-spinner/dist/loader/css/CradleLoader.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader??ref--15-1!../../../../../../../node_modules/postcss-loader/src??ref--15-2!./CradleLoader.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/node_modules/react-loader-spinner/dist/loader/css/CradleLoader.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/node_modules/react-loader-spinner/dist/loader/css/Plane.css":
/*!**********************************************************************************!*\
  !*** ./resources/js/node_modules/react-loader-spinner/dist/loader/css/Plane.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader??ref--15-1!../../../../../../../node_modules/postcss-loader/src??ref--15-2!./Plane.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/node_modules/react-loader-spinner/dist/loader/css/Plane.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/node_modules/react-loader-spinner/dist/loader/css/Triangle.css":
/*!*************************************************************************************!*\
  !*** ./resources/js/node_modules/react-loader-spinner/dist/loader/css/Triangle.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader??ref--15-1!../../../../../../../node_modules/postcss-loader/src??ref--15-2!./Triangle.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/node_modules/react-loader-spinner/dist/loader/css/Triangle.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/node_modules/react-loader-spinner/index.js":
/*!*****************************************************************!*\
  !*** ./resources/js/node_modules/react-loader-spinner/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/index */ "./resources/js/node_modules/react-loader-spinner/dist/index.js");

/***/ })

}]);