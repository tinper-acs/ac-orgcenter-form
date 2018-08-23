'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

require('./demo.less');

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

require('../index.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var btns = [{
    'label': '上一步',
    'type': "last",
    'func': function func(data) {
        console.log('----------', data);
    }
}, {
    'label': '下一步',
    'type': "next",
    'func': function func(data) {
        console.log('----------', data);
    }
}];

var getQuery = function getQuery(url) {
    if (typeof url !== 'string') return;
    var queryObj = {};
    var reg1 = /([^?&=#]+)=([^?&=#]*)/g;
    url.replace(reg1, function () {
        for (var _len = arguments.length, arg = Array(_len), _key = 0; _key < _len; _key++) {
            arg[_key] = arguments[_key];
        }

        queryObj[arg[1]] = arg[2];
    });
    return queryObj;
};

var setCookie = function setCookie(name, value, expiredays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + expiredays);
    document.cookie = name + '=' + escape(value) + (expiredays == null ? '' : ';expires=' + exdate.toGMTString());
};

var Demo = function (_Component) {
    _inherits(Demo, _Component);

    function Demo(props) {
        _classCallCheck(this, Demo);

        var _this = _possibleConstructorReturn(this, (Demo.__proto__ || Object.getPrototypeOf(Demo)).call(this, props));

        _this.state = {
            open: false
        };

        return _this;
    }

    _createClass(Demo, [{
        key: 'render',
        value: function render() {
            var parent = {
                tableData: [{
                    "old_postname": "研发总部总经理",
                    "new_postcode": "",
                    "deptid_showname": "研发总部",
                    "old_postcode": "0101",
                    "deptid": "212a6212cdbd42e9a51a8d71cfa9cc72",
                    "new_postname": "研发总部总经理",
                    "id": "2eb59a6205834713b2aa95b08975a64e"
                }]
            };
            var className = 'clcclclclclcl';
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_index2.default, { btns: btns, parent: parent, className: className })
            );
        }
    }]);

    return Demo;
}(_react.Component);

_reactDom2.default.render(_react2.default.createElement(Demo, null), document.getElementById('root'));