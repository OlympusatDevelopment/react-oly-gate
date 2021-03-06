'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Message = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Message = exports.Message = function (_Component) {
	_inherits(Message, _Component);

	function Message(props) {
		_classCallCheck(this, Message);

		var _this = _possibleConstructorReturn(this, (Message.__proto__ || Object.getPrototypeOf(Message)).call(this, props));

		_this.state = {
			message: '',
			subMessage: ''
		};
		return _this;
	}

	_createClass(Message, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps() {
			this.setState({
				message: this.props.message,
				subMessage: this.props.subMessage
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var self = this,
			    parentStyles = this.props.parentStyles;

			return _react2.default.createElement(
				'div',
				{ className: 'olyauth__message', style: _styles2.default.message },
				_react2.default.createElement(
					'h1',
					{ style: parentStyles.h1 },
					this.state.message
				),
				_react2.default.createElement(
					'h3',
					{ style: parentStyles.h3 },
					this.state.subMessage
				)
			);
		}
	}]);

	return Message;
}(_react.Component);