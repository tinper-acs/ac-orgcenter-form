'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var urlHost = 'http://hrcloud.yyuap.com';
var propTypes = {
    className: _propTypes2.default.string,
    parent: function parent(props, propName) {
        var _parent = props[propName];
        if (!_parent.orgId) {
            _parent.orgId = '';
        }
        if (!_parent.includeSuborg) {
            _parent.includeSuborg = false;
        }
        if (!_parent.urlHost) {
            _parent.urlHost = urlHost;
        }
        if (!_parent.wb_at) {
            _parent.wb_at = '';
        }
    },
    btns: _propTypes2.default.array
};
var defaultProps = {
    className: '',
    parent: {
        orgId: '',
        includeSuborg: false,
        urlHost: 'http://hrcloud.yyuap.com',
        wb_at: ''
    },
    btns: []
};

var AcOrgcenterForm = function (_Component) {
    _inherits(AcOrgcenterForm, _Component);

    function AcOrgcenterForm(props) {
        _classCallCheck(this, AcOrgcenterForm);

        var _this2 = _possibleConstructorReturn(this, (AcOrgcenterForm.__proto__ || Object.getPrototypeOf(AcOrgcenterForm)).call(this, props));

        _this2.state = {
            currentDate: _this2.getCurrTime(),
            tableData: []
        };

        _this2.handleChange = _this2.handleChange.bind(_this2);
        _this2.next = _this2.next.bind(_this2);
        _this2.last = _this2.last.bind(_this2);
        return _this2;
    }

    _createClass(AcOrgcenterForm, [{
        key: 'getCurrTime',
        value: function getCurrTime() {
            var curTime = new Date();
            var curDate = curTime.getFullYear() + '-' + format(curTime.getMonth() + 1) + '-' + format(curTime.getDate());

            function format(num) {
                var str = '';
                if (Number(num) < 10) {
                    str = '0';
                }

                return str + num;
            }

            return curDate;
        }
    }, {
        key: 'getDataList',
        value: function getDataList() {
            var wb_at = '';
            if (this.props.parent.wb_at && this.props.parent.wb_at.length > 0) {
                wb_at = '&wb_at=' + this.props.parent.wb_at;
            }
            var url = this.props.parent.urlHost + '/corehr-org/corehr/orgchange/position/view?orgId=' + this.props.parent.orgId + '&includeSuborg=' + this.props.parent.includeSuborg + wb_at;

            var xhr = new XMLHttpRequest();
            xhr.open('GET', url);
            xhr.withCredentials = true;
            xhr.send();
            var _this = this;
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
                        var res = JSON.parse(xhr.responseText);
                        _this.setState({
                            tableData: res["data"]
                        });
                    } else {}
                }
            };
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps() {
            console.log('this.props.parent = ', this.props.parent);
            console.log('nextProps.parent = ', this.nextProps.parent);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.getDataList();
        }
    }, {
        key: 'handleChange',
        value: function handleChange(newItem, propName, e) {
            var val = e.target.value;
            var tableData = this.state.tableData;
            tableData.forEach(function (item) {
                if (item.id === newItem.id) {
                    item[propName] = val;
                }
            });

            this.setState({ tableData: tableData });
        }
    }, {
        key: 'next',
        value: function next(call) {
            var data = this.state.tableData;
            call(data);
        }
    }, {
        key: 'last',
        value: function last(call) {
            var data = this.state.tableData;
            call(data);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var listItems = this.props.btns;
            var tableData = this.state.tableData;
            return _react2.default.createElement(
                'div',
                { className: this.props.className, id: 'ac-orgcenter-form' },
                _react2.default.createElement(
                    'div',
                    { className: 'table-box' },
                    _react2.default.createElement(
                        'table',
                        null,
                        _react2.default.createElement(
                            'thead',
                            null,
                            _react2.default.createElement(
                                'tr',
                                null,
                                _react2.default.createElement(
                                    'th',
                                    null,
                                    '\u539F\u804C\u4F4D\u7F16\u7801'
                                ),
                                _react2.default.createElement(
                                    'th',
                                    null,
                                    '\u539F\u804C\u4F4D\u540D\u79F0'
                                ),
                                _react2.default.createElement(
                                    'th',
                                    null,
                                    '\u65B0\u804C\u4F4D\u7F16\u7801'
                                ),
                                _react2.default.createElement(
                                    'th',
                                    null,
                                    '\u65B0\u804C\u4F4D\u540D\u79F0'
                                ),
                                _react2.default.createElement(
                                    'th',
                                    null,
                                    '\u6240\u5C5E\u90E8\u95E8'
                                ),
                                _react2.default.createElement(
                                    'th',
                                    null,
                                    '\u521B\u5EFA\u65E5\u671F'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'tbody',
                            null,
                            tableData.map(function (item, i) {
                                return _react2.default.createElement(
                                    'tr',
                                    { key: i },
                                    _react2.default.createElement(
                                        'td',
                                        { className: 'staff-code' },
                                        item.old_postcode
                                    ),
                                    _react2.default.createElement(
                                        'td',
                                        null,
                                        item.old_postname
                                    ),
                                    _react2.default.createElement(
                                        'td',
                                        null,
                                        _react2.default.createElement('input', { type: 'text', value: item.new_postcode, onChange: function onChange(e) {
                                                return _this3.handleChange(item, 'new_postcode', e);
                                            } })
                                    ),
                                    _react2.default.createElement(
                                        'td',
                                        null,
                                        _react2.default.createElement('input', { type: 'text', value: item.new_postname, onChange: function onChange(e) {
                                                return _this3.handleChange(item, 'new_postname', e);
                                            } })
                                    ),
                                    _react2.default.createElement(
                                        'td',
                                        null,
                                        item.deptid_showname
                                    ),
                                    _react2.default.createElement(
                                        'td',
                                        null,
                                        _this3.state.currentDate
                                    )
                                );
                            })
                        )
                    )
                ),
                _react2.default.createElement(
                    'footer',
                    { className: 'footer' },
                    listItems.map(function (item, i) {
                        return _react2.default.createElement(
                            'button',
                            { key: i, className: item.type, onClick: function onClick() {
                                    return _this3[item.type](item.func);
                                } },
                            item.label
                        );
                    })
                )
            );
        }
    }]);

    return AcOrgcenterForm;
}(_react.Component);

AcOrgcenterForm.propTypes = propTypes;
AcOrgcenterForm.defaultProps = defaultProps;

exports.default = AcOrgcenterForm;