(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("PropTypes"), require("React"), require("ReactDOM"));
	else if(typeof define === 'function' && define.amd)
		define(["PropTypes", "React", "ReactDOM"], factory);
	else if(typeof exports === 'object')
		exports["ac-orgcenter-form"] = factory(require("PropTypes"), require("React"), require("ReactDOM"));
	else
		root["ac-orgcenter-form"] = factory(root["PropTypes"], root["React"], root["ReactDOM"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_prop_types__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_dom__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ \"react-dom\");\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar propTypes = {\n    className: _propTypes2.default.string,\n    parent: _propTypes2.default.object, //\n    btns: _propTypes2.default.array\n};\n\nvar AcOrgcenterForm = function (_Component) {\n    _inherits(AcOrgcenterForm, _Component);\n\n    function AcOrgcenterForm(props) {\n        _classCallCheck(this, AcOrgcenterForm);\n\n        var _this = _possibleConstructorReturn(this, (AcOrgcenterForm.__proto__ || Object.getPrototypeOf(AcOrgcenterForm)).call(this, props));\n\n        _this.state = {\n            currentDate: _this.getCurrTime()\n        };\n\n        _this.handleChange = _this.handleChange.bind(_this);\n        _this.next = _this.next.bind(_this);\n        _this.last = _this.last.bind(_this);\n        return _this;\n    }\n\n    _createClass(AcOrgcenterForm, [{\n        key: 'getCurrTime',\n        value: function getCurrTime() {\n            var curTime = new Date();\n            var curDate = curTime.getFullYear() + '-' + format(curTime.getMonth() + 1) + '-' + format(curTime.getDate());\n\n            function format(num) {\n                var str = '';\n                if (Number(num) < 10) {\n                    str = '0';\n                }\n\n                return str + num;\n            }\n\n            return curDate;\n            // this.setState({\n            //     currentDate: curDate\n            // })\n        }\n    }, {\n        key: 'componentDidMount',\n        value: function componentDidMount() {\n            // this.getDataList();\n        }\n    }, {\n        key: 'handleChange',\n        value: function handleChange(newItem, propName, e) {\n            var val = e.target.value;\n            var tableData = this.props.parent.tableData;\n            tableData.forEach(function (item) {\n                if (item.id === newItem.id) {\n                    item[propName] = val;\n                }\n            });\n        }\n    }, {\n        key: 'next',\n        value: function next(call) {\n            var data = this.props.parent.tableData;\n            call(data);\n        }\n    }, {\n        key: 'last',\n        value: function last(call) {\n            var data = this.props.parent.tableData;\n            call(data);\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var _this2 = this;\n\n            var listItems = this.props.btns;\n            var tableData = this.props.parent.tableData;\n            return _react2.default.createElement(\n                'div',\n                { className: this.props.className, id: 'ac-orgcenter-form' },\n                _react2.default.createElement(\n                    'div',\n                    { className: 'table-box' },\n                    _react2.default.createElement(\n                        'table',\n                        null,\n                        _react2.default.createElement(\n                            'thead',\n                            null,\n                            _react2.default.createElement(\n                                'tr',\n                                null,\n                                _react2.default.createElement(\n                                    'th',\n                                    null,\n                                    '\\u539F\\u804C\\u4F4D\\u7F16\\u7801'\n                                ),\n                                _react2.default.createElement(\n                                    'th',\n                                    null,\n                                    '\\u539F\\u804C\\u4F4D\\u540D\\u79F0'\n                                ),\n                                _react2.default.createElement(\n                                    'th',\n                                    null,\n                                    '\\u65B0\\u804C\\u4F4D\\u7F16\\u7801'\n                                ),\n                                _react2.default.createElement(\n                                    'th',\n                                    null,\n                                    '\\u65B0\\u804C\\u4F4D\\u540D\\u79F0'\n                                ),\n                                _react2.default.createElement(\n                                    'th',\n                                    null,\n                                    '\\u6240\\u5C5E\\u90E8\\u95E8'\n                                ),\n                                _react2.default.createElement(\n                                    'th',\n                                    null,\n                                    '\\u521B\\u5EFA\\u65E5\\u671F'\n                                )\n                            )\n                        ),\n                        _react2.default.createElement(\n                            'tbody',\n                            null,\n                            tableData.map(function (item, i) {\n                                return _react2.default.createElement(\n                                    'tr',\n                                    { key: i },\n                                    _react2.default.createElement(\n                                        'td',\n                                        { className: 'staff-code' },\n                                        item.old_postcode\n                                    ),\n                                    _react2.default.createElement(\n                                        'td',\n                                        null,\n                                        item.old_postname\n                                    ),\n                                    _react2.default.createElement(\n                                        'td',\n                                        null,\n                                        _react2.default.createElement('input', { type: 'text', value: item.new_postcode, onChange: function onChange(e) {\n                                                return _this2.handleChange(item, 'new_postcode', e);\n                                            } })\n                                    ),\n                                    _react2.default.createElement(\n                                        'td',\n                                        null,\n                                        _react2.default.createElement('input', { type: 'text', value: item.new_postname, onChange: function onChange(e) {\n                                                return _this2.handleChange(item, 'new_postname', e);\n                                            } })\n                                    ),\n                                    _react2.default.createElement(\n                                        'td',\n                                        null,\n                                        item.deptid_showname\n                                    ),\n                                    _react2.default.createElement(\n                                        'td',\n                                        null,\n                                        _this2.state.currentDate\n                                    )\n                                );\n                            })\n                        )\n                    )\n                ),\n                _react2.default.createElement(\n                    'footer',\n                    { className: 'footer' },\n                    listItems.map(function (item, i) {\n                        return _react2.default.createElement(\n                            'button',\n                            { key: i, className: item.type, onClick: function onClick() {\n                                    return _this2[item.type](item.func);\n                                } },\n                            item.label\n                        );\n                    })\n                )\n            );\n        }\n    }]);\n\n    return AcOrgcenterForm;\n}(_react.Component);\n\nAcOrgcenterForm.defaultProps = {\n    className: '',\n    parent: {\n        tableData: []\n    },\n    btns: []\n};\n\n\nAcOrgcenterForm.propTypes = propTypes;\n\nexports.default = AcOrgcenterForm;\n\n//# sourceURL=webpack://ac-orgcenter-form/./src/index.js?");

/***/ }),

/***/ "./src/index.less":
/*!************************!*\
  !*** ./src/index.less ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://ac-orgcenter-form/./src/index.less?");

/***/ }),

/***/ 0:
/*!*********************************************!*\
  !*** multi ./src/index.js ./src/index.less ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/index.js */\"./src/index.js\");\nmodule.exports = __webpack_require__(/*! ./src/index.less */\"./src/index.less\");\n\n\n//# sourceURL=webpack://ac-orgcenter-form/multi_./src/index.js_./src/index.less?");

/***/ }),

/***/ "prop-types":
/*!****************************!*\
  !*** external "PropTypes" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_prop_types__;\n\n//# sourceURL=webpack://ac-orgcenter-form/external_%22PropTypes%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react__;\n\n//# sourceURL=webpack://ac-orgcenter-form/external_%22React%22?");

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom__;\n\n//# sourceURL=webpack://ac-orgcenter-form/external_%22ReactDOM%22?");

/***/ })

/******/ });
});