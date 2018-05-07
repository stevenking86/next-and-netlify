module.exports =

        __NEXT_REGISTER_PAGE('/test_payment', function() {
          var comp = 
      webpackJsonp([5],{

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if(!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true,
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./pages/test_payment.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/steven/Desktop/next-and-netlify/pages/test_payment.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }



var _default =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default() {
    var _this;

    _classCallCheck(this, _default);

    _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));
    Object.defineProperty(_assertThisInitialized(_this), "sendPaymentDataToAnet", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        var authData = {
          clientKey: AUTHORIZE_PUBLIC_CLIENT_KEY,
          apiLoginID: AUTHORIZE_API_LOGIN_ID
        };
        var _this$state = _this.state,
            cardNumber = _this$state.cardNumber,
            cardCode = _this$state.cardCode,
            expMonth = _this$state.expMonth,
            expYear = _this$state.expYear;
        var cardData = {
          cardNumber: cardNumber,
          month: expMonth,
          year: expYear,
          cardCode: cardCode
        };
        var secureData = {
          authData: authData,
          cardData: cardData
        };
        console.log("About to dispatch data to authorize:", secureData);
        Accept.dispatchData(secureData, responseHandler);
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "responseHandler", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(response) {
        console.log("responseHandler response:", response);

        if (response.messages.resultCode === "Error") {
          var i = 0;

          while (i < response.messages.message.length) {
            console.log(response.messages.message[i].code + ": " + response.messages.message[i].text);
            i = i + 1;
          }
        } else {
          paymentFormUpdate(response.opaqueData);
        }
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "paymentFormUpdate", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(opaqueData) {
        var dataDescriptor = opaqueData.dataDescriptor;
        var dataValue = opaqueData.dataValue;
        console.log("SUCCESS:", dataDescriptor, dataValue); // document.getElementById("dataDescriptor").value = opaqueData.dataDescriptor;
        // document.getElementById("dataValue").value = opaqueData.dataValue;
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "handleValueChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        debugger;
        var update = {};
        var value = e.target.value;
        var field = e.target.id;
        update[field] = value;
        debugger;

        if (value !== "") {
          _this.setState(update);
        }
      }
    });
    _this.state = {
      cardNumber: '',
      expMonth: '',
      expYear: '',
      cardCode: ''
    };
    return _this;
  }

  _createClass(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var script = document.createElement("script");
      script.src = "https://jstest.authorize.net/v1/Accept.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, "Test Payment Form"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "testForm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        type: "text",
        name: "cardNumber",
        id: "cardNumber",
        onChange: this.handleValueChange,
        placeholder: "cardNumber",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        type: "text",
        name: "expMonth",
        id: "expMonth",
        onChange: this.handleValueChange,
        placeholder: "expMonth",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        type: "text",
        name: "expYear",
        id: "expYear",
        onChange: this.handleValueChange,
        placeholder: "expYear",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        type: "text",
        name: "cardCode",
        id: "cardCode",
        onChange: this.handleValueChange,
        placeholder: "cardCode",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        type: "hidden",
        name: "dataValue",
        id: "dataValue",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        type: "hidden",
        name: "dataDescriptor",
        id: "dataDescriptor",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        type: "submit",
        onClick: this.sendPaymentDataToAnet.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, "Pay")));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/Users/steven/Desktop/next-and-netlify/pages/test_payment.js");
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/test_payment")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/test_payment.js");


/***/ })

},[4])
          return { page: comp.default }
        })
      ;
//# sourceMappingURL=test_payment.js.map