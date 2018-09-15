module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=2)}([function(e,t,r){"use strict";e.exports=r(8)},function(e,t){e.exports=require("react")},function(module,exports,__webpack_require__){"use strict";(function(module){exports.__esModule=!0;var _react=__webpack_require__(1),_react2=_interopRequireDefault(_react),_reactDom=__webpack_require__(4),_reactDom2=_interopRequireDefault(_reactDom),_propTypes=__webpack_require__(5),_propTypes2=_interopRequireDefault(_propTypes);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}__webpack_require__(6),function(){var e=__webpack_require__(0).enterModule;e&&e(module)}();var urlHost="http://hrcloud.yyuap.com",propTypes={className:_propTypes2.default.string,parent:function(e,t){var r=e[t];r.orgId||(r.orgId=""),r.includeSuborg||(r.includeSuborg=!1),r.urlHost||(r.urlHost=urlHost),r.wb_at||(r.wb_at="")},btns:_propTypes2.default.array},defaultProps={className:"",parent:{orgId:"",includeSuborg:!1,urlHost:"http://hrcloud.yyuap.com",wb_at:""},btns:[]},AcOrgcenterForm=function(_Component){function AcOrgcenterForm(e){_classCallCheck(this,AcOrgcenterForm);var t=_possibleConstructorReturn(this,_Component.call(this,e));return t.state={currentDate:t.getCurrTime(),tableData:[]},t.handleChange=t.handleChange.bind(t),t.next=t.next.bind(t),t.last=t.last.bind(t),t}return _inherits(AcOrgcenterForm,_Component),AcOrgcenterForm.prototype.getCurrTime=function(){var e=new Date;function t(e){var t="";return Number(e)<10&&(t="0"),t+e}return e.getFullYear()+"-"+t(e.getMonth()+1)+"-"+t(e.getDate())},AcOrgcenterForm.prototype.getDataList=function(){var e="";this.props.parent.wb_at&&this.props.parent.wb_at.length>0&&(e="&wb_at="+this.props.parent.wb_at);var t=this.props.parent.urlHost+"/corehr-org/corehr/orgchange/position/view?orgId="+this.props.parent.orgId+"&includeSuborg="+this.props.parent.includeSuborg+e,r=new XMLHttpRequest;r.open("GET",t),r.withCredentials=!0,r.send();var n=this;r.onreadystatechange=function(){if(4==r.readyState&&(r.status>=200&&r.status<300||304==r.status)){var e=JSON.parse(r.responseText);n.setState({tableData:e.data})}}},AcOrgcenterForm.prototype.componentWillReceiveProps=function(){console.log("this.props.parent = ",this.props.parent),console.log("nextProps.parent = ",this.nextProps.parent)},AcOrgcenterForm.prototype.componentDidMount=function(){this.getDataList()},AcOrgcenterForm.prototype.handleChange=function(e,t,r){var n=r.target.value,o=this.state.tableData;o.forEach(function(r){r.id===e.id&&(r[t]=n)}),this.setState({tableData:o})},AcOrgcenterForm.prototype.next=function(e){e(this.state.tableData)},AcOrgcenterForm.prototype.last=function(e){e(this.state.tableData)},AcOrgcenterForm.prototype.render=function(){var e=this,t=this.props.btns,r=this.state.tableData;return _react2.default.createElement("div",{className:this.props.className,id:"ac-orgcenter-form"},_react2.default.createElement("div",{className:"table-box"},_react2.default.createElement("table",null,_react2.default.createElement("thead",null,_react2.default.createElement("tr",null,_react2.default.createElement("th",null,"原职位编码"),_react2.default.createElement("th",null,"原职位名称"),_react2.default.createElement("th",null,"新职位编码"),_react2.default.createElement("th",null,"新职位名称"),_react2.default.createElement("th",null,"所属部门"),_react2.default.createElement("th",null,"创建日期"))),_react2.default.createElement("tbody",null,r.map(function(t,r){return _react2.default.createElement("tr",{key:r},_react2.default.createElement("td",{className:"staff-code"},t.old_postcode),_react2.default.createElement("td",null,t.old_postname),_react2.default.createElement("td",null,_react2.default.createElement("input",{type:"text",value:t.new_postcode,onChange:function(r){return e.handleChange(t,"new_postcode",r)}})),_react2.default.createElement("td",null,_react2.default.createElement("input",{type:"text",value:t.new_postname,onChange:function(r){return e.handleChange(t,"new_postname",r)}})),_react2.default.createElement("td",null,t.deptid_showname),_react2.default.createElement("td",null,e.state.currentDate))})))),_react2.default.createElement("footer",{className:"footer"},t.map(function(t,r){return _react2.default.createElement("button",{key:r,className:t.type,onClick:function(){return e[t.type](t.func)}},t.label)})))},AcOrgcenterForm.prototype.__reactstandin__regenerateByEval=function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)},AcOrgcenterForm}(_react.Component);AcOrgcenterForm.propTypes=propTypes,AcOrgcenterForm.defaultProps=defaultProps;var _default=AcOrgcenterForm;exports.default=_default,function(){var e=__webpack_require__(0).default,t=__webpack_require__(0).leaveModule;e&&(e.register(urlHost,"urlHost","/Users/chenpan/Desktop/new-package/ac-orgcenter-form/src/index.js"),e.register(propTypes,"propTypes","/Users/chenpan/Desktop/new-package/ac-orgcenter-form/src/index.js"),e.register(defaultProps,"defaultProps","/Users/chenpan/Desktop/new-package/ac-orgcenter-form/src/index.js"),e.register(AcOrgcenterForm,"AcOrgcenterForm","/Users/chenpan/Desktop/new-package/ac-orgcenter-form/src/index.js"),e.register(_default,"default","/Users/chenpan/Desktop/new-package/ac-orgcenter-form/src/index.js"),t(module))}()}).call(this,__webpack_require__(3)(module))},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t){e.exports=require("react-dom")},function(e,t){e.exports=require("prop-types")},function(e,t,r){e.exports={"ac-orgcenter-form":"_35YcTW_m5cDGoNJUssK0Ou","table-box":"_36Wfs03G-0XwOkDj9bX3wj","staff-code":"_3L6nJtwOSCHwz2poIdvP4o",footer:"_3qlZVYvwzO2cqy9OLgJRCb",next:"_2zhRJgdu2fC7tBSVuQHSF_",last:"_3vxC3koFCeKE1VAdtPFg-a"}},,function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e&&"object"==typeof e&&"default"in e?e.default:e}(r(1)),o=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},c=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){return n.Children.only(this.props.children)},t}(n.Component);t.AppContainer=c,t.hot=function(){return function(e){return e}},t.areComponentsEqual=function(e,t){return e===t},t.setConfig=function(){},t.cold=function(e){return e}}]);