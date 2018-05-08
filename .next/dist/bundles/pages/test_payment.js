module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/test_payment.js":
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: SyntaxError: /Users/steven/Desktop/next-and-netlify/pages/test_payment.js: Unexpected token (110:4)\n\n  108 |     }).then(response => response.json())\n  109 |     .then(res => console.log(res))\n> 110 |     )\n      |     ^\n  111 |   }\n  112 | \n  113 |   handleValueChange = e => {\n    at _class.raise (/Users/steven/Desktop/next-and-netlify/node_modules/babylon/lib/index.js:778:15)\n    at _class.unexpected (/Users/steven/Desktop/next-and-netlify/node_modules/babylon/lib/index.js:2063:16)\n    at _class.parseExprAtom (/Users/steven/Desktop/next-and-netlify/node_modules/babylon/lib/index.js:3125:20)\n    at _class.parseExprAtom (/Users/steven/Desktop/next-and-netlify/node_modules/babylon/lib/index.js:8086:52)\n    at _class.parseExprAtom (/Users/steven/Desktop/next-and-netlify/node_modules/babylon/lib/index.js:8086:52)\n    at _class.parseExprAtom (/Users/steven/Desktop/next-and-netlify/node_modules/babylon/lib/index.js:8086:52)\n    at _class.parseExprSubscripts (/Users/steven/Desktop/next-and-netlify/node_modules/babylon/lib/index.js:2725:21)\n    at _class.parseMaybeUnary (/Users/steven/Desktop/next-and-netlify/node_modules/babylon/lib/index.js:2704:21)\n    at _class.parseExprOps (/Users/steven/Desktop/next-and-netlify/node_modules/babylon/lib/index.js:2616:21)\n    at _class.parseMaybeConditional (/Users/steven/Desktop/next-and-netlify/node_modules/babylon/lib/index.js:2588:21)\n    at _class.parseMaybeAssign (/Users/steven/Desktop/next-and-netlify/node_modules/babylon/lib/index.js:2546:21)\n    at _class.parseExpression (/Users/steven/Desktop/next-and-netlify/node_modules/babylon/lib/index.js:2499:21)\n    at _class.parseStatementContent (/Users/steven/Desktop/next-and-netlify/node_modules/babylon/lib/index.js:4040:21)\n    at _class.parseStatement (/Users/steven/Desktop/next-and-netlify/node_modules/babylon/lib/index.js:3926:17)\n    at _class.parseBlockOrModuleBlockBody (/Users/steven/Desktop/next-and-netlify/node_modules/babylon/lib/index.js:4470:23)\n    at _class.parseBlockBody (/Users/steven/Desktop/next-and-netlify/node_modules/babylon/lib/index.js:4457:10)");

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/test_payment.js");


/***/ })

/******/ });
//# sourceMappingURL=test_payment.js.map