'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PureComponent2 = require('./PureComponent');

var _PureComponent3 = _interopRequireDefault(_PureComponent2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactPropTypes = require('react-prop-types');

var Col = (function (_PureComponent) {
  _inherits(Col, _PureComponent);

  function Col() {
    _classCallCheck(this, Col);

    _get(Object.getPrototypeOf(Col.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Col, [{
    key: 'render',
    value: function render() {
      var _classNames;

      var ComponentClass = this.props.componentClass;

      var classes = (0, _classnames2['default'])((_classNames = {}, _defineProperty(_classNames, 'grid__col--xs' + (Number.isNaN(parseFloat(this.props.xs)) ? '' : '-' + this.props.xs), this.props.xs >= 0), _defineProperty(_classNames, 'grid__col--sm' + (Number.isNaN(parseFloat(this.props.sm)) ? '' : '-' + this.props.sm), this.props.sm >= 0), _defineProperty(_classNames, 'grid__col--md' + (Number.isNaN(parseFloat(this.props.md)) ? '' : '-' + this.props.md), this.props.md >= 0), _defineProperty(_classNames, 'grid__col--lg' + (Number.isNaN(parseFloat(this.props.lg)) ? '' : '-' + this.props.lg), this.props.lg >= 0), _defineProperty(_classNames, 'grid__col--xs-offset-' + this.props.xsOffset, this.props.xsOffset >= 0), _defineProperty(_classNames, 'grid__col--sm-offset-' + this.props.smOffset, this.props.smOffset >= 0), _defineProperty(_classNames, 'grid__col--md-offset-' + this.props.mdOffset, this.props.mdOffset >= 0), _defineProperty(_classNames, 'grid__col--lg-offset-' + this.props.lgOffset, this.props.lgOffset >= 0), _defineProperty(_classNames, 'grid__col--reverse', this.props.reverse), _defineProperty(_classNames, 'grid__col--xs-first', this.props.xsFirst), _defineProperty(_classNames, 'grid__col--sm-first', this.props.smFirst), _defineProperty(_classNames, 'grid__col--md-first', this.props.mdFirst), _defineProperty(_classNames, 'grid__col--lg-first', this.props.lgFirst), _defineProperty(_classNames, 'grid__col--xs-last', this.props.xsLast), _defineProperty(_classNames, 'grid__col--sm-last', this.props.smLast), _defineProperty(_classNames, 'grid__col--md-last', this.props.mdLast), _defineProperty(_classNames, 'grid__col--lg-last', this.props.lgLast), _classNames), this.props.className);

      return _react2['default'].createElement(
        ComponentClass,
        { className: classes, style: this.props.style },
        this.props.children
      );
    }
  }]);

  return Col;
})(_PureComponent3['default']);

Col.propTypes = {
  className: _react2['default'].PropTypes.string,
  style: _react2['default'].PropTypes.object,
  children: _react2['default'].PropTypes.node,
  componentClass: _reactPropTypes.elementType,

  xs: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.number, _react2['default'].PropTypes.bool]),
  sm: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.number, _react2['default'].PropTypes.bool]),
  md: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.number, _react2['default'].PropTypes.bool]),
  lg: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.number, _react2['default'].PropTypes.bool]),

  xsOffset: _react2['default'].PropTypes.number,
  smOffset: _react2['default'].PropTypes.number,
  mdOffset: _react2['default'].PropTypes.number,
  lgOffset: _react2['default'].PropTypes.number,

  reverse: _react2['default'].PropTypes.bool,

  xsFirst: _react2['default'].PropTypes.bool,
  smFirst: _react2['default'].PropTypes.bool,
  mdFirst: _react2['default'].PropTypes.bool,
  lgFirst: _react2['default'].PropTypes.bool,

  xsLast: _react2['default'].PropTypes.bool,
  smLast: _react2['default'].PropTypes.bool,
  mdLast: _react2['default'].PropTypes.bool,
  lgLast: _react2['default'].PropTypes.bool
};

Col.defaultProps = {
  componentClass: 'div'
};

exports['default'] = Col;
module.exports = exports['default'];