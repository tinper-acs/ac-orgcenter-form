(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(module,exports,__webpack_require__){"use strict";(function(module){exports.__esModule=!0;var _react=__webpack_require__(0),_react2=_interopRequireDefault(_react),_index=__webpack_require__(27),_index2=_interopRequireDefault(_index);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}!function(){var e=__webpack_require__(2).enterModule;e&&e(module)}();var Demo2=function(_Component){function Demo2(e){_classCallCheck(this,Demo2);var t=_possibleConstructorReturn(this,_Component.call(this,e));return t.onSave=function(e,n){var o;t.setState(((o={})[e]=n,o))},t.state={locale:[{locale:"zh-cn",label:"中文",value:""},{locale:"zh-en",label:"英文",value:"aaa"},{locale:"zh-tw",label:"台湾",value:""}],locale2:[{locale:"zh-cn",label:"中文",value:""},{locale:"zh-en",label:"英文",value:"123"},{locale:"zh-tw",label:"台湾",value:"456"}]},t}return _inherits(Demo2,_Component),Demo2.prototype.render=function(){var e=this,t=this.state,n=t.locale,o=t.locale2;return _react2.default.createElement("div",{className:"demoPadding"},_react2.default.createElement(_index2.default,{className:"input1",locale:"zh-en",localeList:n,onSave:function(t){e.onSave("locale",t)}}),_react2.default.createElement(_index2.default,{className:"input2",locale:"zh-tw",localeList:o,onSave:function(t){e.onSave("locale1",t)}}))},Demo2.prototype.__reactstandin__regenerateByEval=function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)},Demo2}(_react.Component),_default=Demo2;exports.default=_default,function(){var e=__webpack_require__(2).default,t=__webpack_require__(2).leaveModule;e&&(e.register(Demo2,"Demo2","/Users/chenpan/Desktop/yonyou-ac-tools/ac-orgcenter-form/demo/demolist/Demo2.js"),e.register(_default,"default","/Users/chenpan/Desktop/yonyou-ac-tools/ac-orgcenter-form/demo/demolist/Demo2.js"),t(module))}()}).call(this,__webpack_require__(5)(module))},25:function(e,t,n){e.exports=n.p+"iconfont.2b12aa52.eot"},27:function(module,exports,__webpack_require__){"use strict";(function(module){exports.__esModule=!0;var _react=__webpack_require__(0),_react2=_interopRequireDefault(_react),_reactDom=__webpack_require__(3),_reactDom2=_interopRequireDefault(_reactDom),_propTypes=__webpack_require__(1),_propTypes2=_interopRequireDefault(_propTypes);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}__webpack_require__(98),function(){var e=__webpack_require__(2).enterModule;e&&e(module)}();var urlHost="http://hrcloud.yyuap.com",propTypes={className:_propTypes2.default.string,parent:function(e,t){var n=e[t];n.orgId||(n.orgId=""),n.includeSuborg||(n.includeSuborg=!1),n.urlHost||(n.urlHost=urlHost),n.wb_at||(n.wb_at="")},btns:_propTypes2.default.array},defaultProps={className:"",parent:{orgId:"",includeSuborg:!1,urlHost:"http://hrcloud.yyuap.com",wb_at:""},btns:[]},AcOrgcenterForm=function(_Component){function AcOrgcenterForm(e){_classCallCheck(this,AcOrgcenterForm);var t=_possibleConstructorReturn(this,_Component.call(this,e));return t.state={currentDate:t.getCurrTime(),tableData:[]},t.handleChange=t.handleChange.bind(t),t.next=t.next.bind(t),t.last=t.last.bind(t),t}return _inherits(AcOrgcenterForm,_Component),AcOrgcenterForm.prototype.getCurrTime=function(){var e=new Date;function t(e){var t="";return Number(e)<10&&(t="0"),t+e}return e.getFullYear()+"-"+t(e.getMonth()+1)+"-"+t(e.getDate())},AcOrgcenterForm.prototype.getDataList=function(){var e="";this.props.parent.wb_at&&this.props.parent.wb_at.length>0&&(e="&wb_at="+this.props.parent.wb_at);var t=this.props.parent.urlHost+"/corehr-org/corehr/orgchange/position/view?orgId="+this.props.parent.orgId+"&includeSuborg="+this.props.parent.includeSuborg+e,n=new XMLHttpRequest;n.open("GET",t),n.withCredentials=!0,n.send();var o=this;n.onreadystatechange=function(){if(4==n.readyState&&(n.status>=200&&n.status<300||304==n.status)){var e=JSON.parse(n.responseText);o.setState({tableData:e.data})}}},AcOrgcenterForm.prototype.componentWillReceiveProps=function(){console.log("this.props.parent = ",this.props.parent),console.log("nextProps.parent = ",this.nextProps.parent)},AcOrgcenterForm.prototype.componentDidMount=function(){this.getDataList()},AcOrgcenterForm.prototype.handleChange=function(e,t,n){var o=n.target.value,r=this.state.tableData;r.forEach(function(n){n.id===e.id&&(n[t]=o)}),this.setState({tableData:r})},AcOrgcenterForm.prototype.next=function(e){e(this.state.tableData)},AcOrgcenterForm.prototype.last=function(e){e(this.state.tableData)},AcOrgcenterForm.prototype.render=function(){var e=this,t=this.props.btns,n=this.state.tableData;return _react2.default.createElement("div",{className:this.props.className,id:"ac-orgcenter-form"},_react2.default.createElement("div",{className:"table-box"},_react2.default.createElement("table",null,_react2.default.createElement("thead",null,_react2.default.createElement("tr",null,_react2.default.createElement("th",null,"原职位编码"),_react2.default.createElement("th",null,"原职位名称"),_react2.default.createElement("th",null,"新职位编码"),_react2.default.createElement("th",null,"新职位名称"),_react2.default.createElement("th",null,"所属部门"),_react2.default.createElement("th",null,"创建日期"))),_react2.default.createElement("tbody",null,n.map(function(t,n){return _react2.default.createElement("tr",{key:n},_react2.default.createElement("td",{className:"staff-code"},t.old_postcode),_react2.default.createElement("td",null,t.old_postname),_react2.default.createElement("td",null,_react2.default.createElement("input",{type:"text",value:t.new_postcode,onChange:function(n){return e.handleChange(t,"new_postcode",n)}})),_react2.default.createElement("td",null,_react2.default.createElement("input",{type:"text",value:t.new_postname,onChange:function(n){return e.handleChange(t,"new_postname",n)}})),_react2.default.createElement("td",null,t.deptid_showname),_react2.default.createElement("td",null,e.state.currentDate))})))),_react2.default.createElement("footer",{className:"footer"},t.map(function(t,n){return _react2.default.createElement("button",{key:n,className:t.type,onClick:function(){return e[t.type](t.func)}},t.label)})))},AcOrgcenterForm.prototype.__reactstandin__regenerateByEval=function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)},AcOrgcenterForm}(_react.Component);AcOrgcenterForm.propTypes=propTypes,AcOrgcenterForm.defaultProps=defaultProps;var _default=AcOrgcenterForm;exports.default=_default,function(){var e=__webpack_require__(2).default,t=__webpack_require__(2).leaveModule;e&&(e.register(urlHost,"urlHost","/Users/chenpan/Desktop/yonyou-ac-tools/ac-orgcenter-form/src/index.js"),e.register(propTypes,"propTypes","/Users/chenpan/Desktop/yonyou-ac-tools/ac-orgcenter-form/src/index.js"),e.register(defaultProps,"defaultProps","/Users/chenpan/Desktop/yonyou-ac-tools/ac-orgcenter-form/src/index.js"),e.register(AcOrgcenterForm,"AcOrgcenterForm","/Users/chenpan/Desktop/yonyou-ac-tools/ac-orgcenter-form/src/index.js"),e.register(_default,"default","/Users/chenpan/Desktop/yonyou-ac-tools/ac-orgcenter-form/src/index.js"),t(module))}()}).call(this,__webpack_require__(5)(module))},29:function(module,exports,__webpack_require__){"use strict";(function(module){var _beeLayout=__webpack_require__(30),_beePanel=__webpack_require__(37),_react=__webpack_require__(0),_react2=_interopRequireDefault(_react),_reactDom=__webpack_require__(3),_reactDom2=_interopRequireDefault(_reactDom),_beeButton=__webpack_require__(23),_beeButton2=_interopRequireDefault(_beeButton);__webpack_require__(90);var _Demo=__webpack_require__(97),_Demo2=_interopRequireDefault(_Demo),_Demo3=__webpack_require__(101),_Demo4=_interopRequireDefault(_Demo3);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}!function(){var e=__webpack_require__(2).enterModule;e&&e(module)}();var CARET=_react2.default.createElement("i",{className:"uf uf-arrow-down"}),CARETUP=_react2.default.createElement("i",{className:"uf uf-arrow-up"}),DemoArray=[{example:_react2.default.createElement(_Demo2.default,null),title:" 多语言 Input 组件",code:'/**\n *\n * @title 多语言 Input 组件\n * @description 多语言 Input 组件 简单应用\n *\n */\n\nimport React, { Component } from \'react\';\nimport AcInputLocale from \'../../src/index\';\nimport Button from \'bee-button\';\n\n class Demo1 extends Component {\n\n    constructor(props){\n        super(props)\n        this.state={\n            sysLocale:"zh-en",\n            locale:[\n                    {\n                        locale:"zh-cn",label:"中文",value:""\n                    },\n                    {\n                        locale:"zh-en",label:"英文",value:"english"\n                    },\n                    {\n                        locale:"zh-tw",label:"台湾",value:""\n                    }\n                ]\n        }\n    }\n \n    onSave=(localeList)=>{\n        this.setState({\n            localeList\n        })\n    }\n\n    onClick = (key)=>{\n        this.setState({\n            sysLocale:key\n        })\n    }\n\n    render () {\n        let {locale,sysLocale} = this.state;\n        return (\n            <div className="demoPadding">\n                <div className="btn">\n                    <Button onClick={()=>{this.onClick("zh-tw")}}>[台湾]</Button>\n                    <Button onClick={()=>{this.onClick("zh-en")}}>[英语]</Button>\n                    <Button onClick={()=>{this.onClick("zh-cn")}}>[中文]</Button>\n                </div>\n                <AcInputLocale colors="brand" locale={sysLocale}  localeList={locale}  onSave={this.onSave}></AcInputLocale> \n            </div>\n        )\n    }\n}\n\n\n',desc:" 多语言 Input 组件 简单应用"},{example:_react2.default.createElement(_Demo4.default,null),title:" 多语言 Input 组件",code:'/**\n *\n * @title 多语言 Input 组件\n * @description 多语言 Input 组件 一个页面多个input\n *\n */\n\nimport React, { Component } from \'react\';\nimport AcInputLocale from \'../../src/index\';\n\n class Demo2 extends Component {\n\n    constructor(props){\n        super(props)\n        this.state={\n            locale:[\n                    {\n                        locale:"zh-cn",label:"中文",value:""\n                    },\n                    {\n                        locale:"zh-en",label:"英文",value:"aaa"\n                    },\n                    {\n                        locale:"zh-tw",label:"台湾",value:""\n                    }\n                ],\n                locale2:[\n                    {\n                        locale:"zh-cn",label:"中文",value:""\n                    },\n                    {\n                        locale:"zh-en",label:"英文",value:"123"\n                    },\n                    {\n                        locale:"zh-tw",label:"台湾",value:"456"\n                    }\n                ]\n        }\n    }\n \n    onSave=(key,localeList)=>{\n        this.setState({\n            [key]:localeList\n        })\n    }\n\n    render () {\n        let {locale,locale2} = this.state;\n        return (\n            <div className="demoPadding">\n                <AcInputLocale className="input1" locale="zh-en"  localeList={locale}  onSave={(data)=>{this.onSave("locale",data)}}></AcInputLocale> \n\n                <AcInputLocale className="input2" locale="zh-tw"  localeList={locale2}  onSave={(data)=>{this.onSave("locale1",data)}} ></AcInputLocale> \n            </div>\n        )\n    }\n}\n\n\n',desc:" 多语言 Input 组件 一个页面多个input"}],Demo=function(_Component){function Demo(e){_classCallCheck(this,Demo);var t=_possibleConstructorReturn(this,_Component.call(this,e));return t.state={open:!1},t.handleClick=t.handleClick.bind(t),t}return _inherits(Demo,_Component),Demo.prototype.handleClick=function(){this.setState({open:!this.state.open})},Demo.prototype.render=function(){var e=this.props,t=e.title,n=e.example,o=e.code,r=e.desc,a=this.state.open?CARETUP:CARET,l=this.state.open?"隐藏代码":"查看代码",c=_react2.default.createElement(_beeButton2.default,{shape:"block",onClick:this.handleClick},a,l);return _react2.default.createElement(_beeLayout.Col,{md:12},_react2.default.createElement("h3",null,t),_react2.default.createElement("p",null,r),_react2.default.createElement(_beePanel.Panel,{collapsible:!0,expanded:this.state.open,colors:"bordered",header:n,footer:c,footerStyle:{padding:0}},_react2.default.createElement("pre",null,_react2.default.createElement("code",{className:"hljs javascript"},o))))},Demo.prototype.__reactstandin__regenerateByEval=function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)},Demo}(_react.Component),DemoGroup=function(_Component2){function DemoGroup(e){return _classCallCheck(this,DemoGroup),_possibleConstructorReturn(this,_Component2.call(this,e))}return _inherits(DemoGroup,_Component2),DemoGroup.prototype.render=function(){return _react2.default.createElement(_beeLayout.Row,null,DemoArray.map(function(e,t){return _react2.default.createElement(Demo,{example:e.example,title:e.title,code:e.code,desc:e.desc,key:t})}))},DemoGroup.prototype.__reactstandin__regenerateByEval=function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)},DemoGroup}(_react.Component);_reactDom2.default.render(_react2.default.createElement(DemoGroup,null),document.getElementById("root")),function(){var e=__webpack_require__(2).default,t=__webpack_require__(2).leaveModule;e&&(e.register(CARET,"CARET","/Users/chenpan/Desktop/yonyou-ac-tools/ac-orgcenter-form/demo/index.js"),e.register(CARETUP,"CARETUP","/Users/chenpan/Desktop/yonyou-ac-tools/ac-orgcenter-form/demo/index.js"),e.register(DemoArray,"DemoArray","/Users/chenpan/Desktop/yonyou-ac-tools/ac-orgcenter-form/demo/index.js"),e.register(Demo,"Demo","/Users/chenpan/Desktop/yonyou-ac-tools/ac-orgcenter-form/demo/index.js"),e.register(DemoGroup,"DemoGroup","/Users/chenpan/Desktop/yonyou-ac-tools/ac-orgcenter-form/demo/index.js"),t(module))}()}).call(this,__webpack_require__(5)(module))},93:function(e,t,n){e.exports=n.p+"iconfont.ee989690.woff"},94:function(e,t,n){e.exports=n.p+"iconfont.bed8b35e.ttf"},95:function(e,t,n){e.exports=n.p+"iconfont.454e95d8.svg"},97:function(module,exports,__webpack_require__){"use strict";(function(module){exports.__esModule=!0;var _react=__webpack_require__(0),_react2=_interopRequireDefault(_react),_index=__webpack_require__(27),_index2=_interopRequireDefault(_index),_beeButton=__webpack_require__(23),_beeButton2=_interopRequireDefault(_beeButton);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}!function(){var e=__webpack_require__(2).enterModule;e&&e(module)}();var Demo1=function(_Component){function Demo1(e){_classCallCheck(this,Demo1);var t=_possibleConstructorReturn(this,_Component.call(this,e));return t.onSave=function(e){t.setState({localeList:e})},t.onClick=function(e){t.setState({sysLocale:e})},t.state={sysLocale:"zh-en",locale:[{locale:"zh-cn",label:"中文",value:""},{locale:"zh-en",label:"英文",value:"english"},{locale:"zh-tw",label:"台湾",value:""}]},t}return _inherits(Demo1,_Component),Demo1.prototype.render=function(){var e=this,t=this.state,n=t.locale,o=t.sysLocale;return _react2.default.createElement("div",{className:"demoPadding"},_react2.default.createElement("div",{className:"btn"},_react2.default.createElement(_beeButton2.default,{onClick:function(){e.onClick("zh-tw")}},"[台湾]"),_react2.default.createElement(_beeButton2.default,{onClick:function(){e.onClick("zh-en")}},"[英语]"),_react2.default.createElement(_beeButton2.default,{onClick:function(){e.onClick("zh-cn")}},"[中文]")),_react2.default.createElement(_index2.default,{colors:"brand",locale:o,localeList:n,onSave:this.onSave}))},Demo1.prototype.__reactstandin__regenerateByEval=function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)},Demo1}(_react.Component),_default=Demo1;exports.default=_default,function(){var e=__webpack_require__(2).default,t=__webpack_require__(2).leaveModule;e&&(e.register(Demo1,"Demo1","/Users/chenpan/Desktop/yonyou-ac-tools/ac-orgcenter-form/demo/demolist/Demo1.js"),e.register(_default,"default","/Users/chenpan/Desktop/yonyou-ac-tools/ac-orgcenter-form/demo/demolist/Demo1.js"),t(module))}()}).call(this,__webpack_require__(5)(module))},98:function(e,t,n){var o=n(99);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(26)(o,r);o.locals&&(e.exports=o.locals)},99:function(e,t,n){(e.exports=n(24)(!1)).push([e.i,"#ac-orgcenter-form {\n  width: 100%;\n}\n#ac-orgcenter-form .table-box {\n  width: 100%;\n}\n#ac-orgcenter-form .table-box table {\n  border-spacing: 0;\n  width: 100%;\n  background: #ffffff;\n}\n#ac-orgcenter-form .table-box table tr > th:nth-of-type(1),\n#ac-orgcenter-form .table-box table tr > td:nth-of-type(1) {\n  padding-left: 16px;\n}\n#ac-orgcenter-form .table-box table tr > th:nth-last-of-type(1),\n#ac-orgcenter-form .table-box table tr > td:nth-last-of-type(1) {\n  padding-right: 16px;\n}\n#ac-orgcenter-form .table-box table th,\n#ac-orgcenter-form .table-box table td {\n  height: 40px;\n}\n#ac-orgcenter-form .table-box table th {\n  text-align: left;\n  font-size: 16px;\n  color: #000;\n  background: #eceff1;\n}\n#ac-orgcenter-form .table-box table td.staff-code {\n  color: #000;\n}\n#ac-orgcenter-form .table-box table td {\n  border-bottom: 1px solid #eceff1;\n  font-size: 14px;\n  color: #787d84;\n}\n#ac-orgcenter-form .table-box table td input {\n  margin: 0;\n  height: 26px;\n  width: 180px;\n}\n#ac-orgcenter-form .footer {\n  padding-top: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n#ac-orgcenter-form .footer > button:nth-of-type(1) {\n  margin-left: 0;\n}\n#ac-orgcenter-form .footer button {\n  margin-left: 10px;\n  width: 110px;\n  height: 36px;\n  border: 0;\n  -webkit-border-radius: 3px;\n  -moz-border-radius: 3px;\n  border-radius: 3px;\n  font-size: 16px;\n  background: #ffffff;\n}\n#ac-orgcenter-form .footer button.next {\n  background: #df3528;\n  color: #ffffff;\n}\n#ac-orgcenter-form .footer button.last {\n  border: 1px solid #df3528;\n  color: #df3528;\n}\n",""])}},[[29,3,1,2]]]);