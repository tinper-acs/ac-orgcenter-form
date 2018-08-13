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

var propTypes = {
    className: _propTypes2.default.string,
    parent: _propTypes2.default.object,
    btns: _propTypes2.default.array
};

var AcTable = function (_Component) {
    _inherits(AcTable, _Component);

    function AcTable(props) {
        _classCallCheck(this, AcTable);

        var _this = _possibleConstructorReturn(this, (AcTable.__proto__ || Object.getPrototypeOf(AcTable)).call(this, props));

        _this.state = { value: '' };

        _this.handleChange = _this.handleChange.bind(_this);
        _this.next = _this.next.bind(_this);
        _this.last = _this.last.bind(_this);
        return _this;
    }

    _createClass(AcTable, [{
        key: 'handleChange',
        value: function handleChange(event) {
            this.setState({ value: event.target.value });
        }
    }, {
        key: 'next',
        value: function next(call) {
            var data = {
                value: this.state.value
            };
            console.log('点击下一步');
            call(data);
        }
    }, {
        key: 'last',
        value: function last(call) {
            var data = {
                value: this.state.value
            };
            console.log('点击上一步');
            call(data);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            console.log("parent = ", this.props.parent);
            var listItems = this.props.btns;
            return _react2.default.createElement(
                'div',
                { className: this.props.className },
                _react2.default.createElement(
                    'div',
                    null,
                    '\u59D3\u540D\uFF1A',
                    _react2.default.createElement('input', { type: 'text', value: this.state.value, onChange: this.handleChange })
                ),
                listItems.map(function (item, i) {
                    return _react2.default.createElement(
                        'button',
                        { key: i, onClick: function onClick() {
                                return _this2[item.type](item.func);
                            } },
                        item.label
                    );
                })
            );
        }
    }]);

    return AcTable;
}(_react.Component);

AcTable.defaultProps = {
    className: '',
    parent: {},
    btns: []
};


AcTable.propTypes = propTypes;

exports.default = AcTable;