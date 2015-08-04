'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PureComponent2 = require('./PureComponent');

var _PureComponent3 = _interopRequireDefault(_PureComponent2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactPropTypes = require('react-prop-types');

var Row = (function (_PureComponent) {
  _inherits(Row, _PureComponent);

  function Row() {
    _classCallCheck(this, Row);

    _get(Object.getPrototypeOf(Row.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Row, [{
    key: 'render',
    value: function render() {
      var ComponentClass = this.props.componentClass;

      var classes = (0, _classnames2['default'])({
        'grid__row': true,
        'grid__row--reverse': this.props.reverse,

        'grid__row--xs-start': this.props.xsStart,
        'grid__row--sm-start': this.props.smStart,
        'grid__row--md-start': this.props.mdStart,
        'grid__row--lg-start': this.props.lgStart,

        'grid__row--xs-center': this.props.xsCenter,
        'grid__row--sm-center': this.props.smCenter,
        'grid__row--md-center': this.props.mdCenter,
        'grid__row--lg-center': this.props.lgCenter,

        'grid__row--xs-end': this.props.xsEnd,
        'grid__row--sm-end': this.props.smEnd,
        'grid__row--md-end': this.props.mdEnd,
        'grid__row--lg-end': this.props.lgEnd,

        'grid__row--xs-top': this.props.xsTop,
        'grid__row--sm-top': this.props.smTop,
        'grid__row--md-top': this.props.mdTop,
        'grid__row--lg-top': this.props.lgTop,

        'grid__row--xs-middle': this.props.xsMiddle,
        'grid__row--sm-middle': this.props.smMiddle,
        'grid__row--md-middle': this.props.mdMiddle,
        'grid__row--lg-middle': this.props.lgMiddle,

        'grid__row--xs-bottom': this.props.xsBottom,
        'grid__row--sm-bottom': this.props.smBottom,
        'grid__row--md-bottom': this.props.mdBottom,
        'grid__row--lg-bottom': this.props.lgBottom,

        'grid__row--xs-around': this.props.xsAround,
        'grid__row--sm-around': this.props.smAround,
        'grid__row--md-around': this.props.mdAround,
        'grid__row--lg-around': this.props.lgAround,

        'grid__row--xs-between': this.props.xsBetween,
        'grid__row--sm-between': this.props.smBetween,
        'grid__row--md-between': this.props.mdBetween,
        'grid__row--lg-between': this.props.lgBetween
      }, this.props.className);

      return _react2['default'].createElement(
        ComponentClass,
        { className: classes, style: this.props.style },
        this.props.children
      );
    }
  }]);

  return Row;
})(_PureComponent3['default']);

Row.propTypes = {
  reverse: _react2['default'].PropTypes.bool,
  className: _react2['default'].PropTypes.string,
  style: _react2['default'].PropTypes.object,
  children: _react2['default'].PropTypes.node,
  componentClass: _reactPropTypes.elementType,

  xsStart: _react2['default'].PropTypes.bool,
  smStart: _react2['default'].PropTypes.bool,
  mdStart: _react2['default'].PropTypes.bool,
  lgStart: _react2['default'].PropTypes.bool,

  xsCenter: _react2['default'].PropTypes.bool,
  smCenter: _react2['default'].PropTypes.bool,
  mdCenter: _react2['default'].PropTypes.bool,
  lgCenter: _react2['default'].PropTypes.bool,

  xsEnd: _react2['default'].PropTypes.bool,
  smEnd: _react2['default'].PropTypes.bool,
  mdEnd: _react2['default'].PropTypes.bool,
  lgEnd: _react2['default'].PropTypes.bool,

  xsTop: _react2['default'].PropTypes.bool,
  smTop: _react2['default'].PropTypes.bool,
  mdTop: _react2['default'].PropTypes.bool,
  lgTop: _react2['default'].PropTypes.bool,

  xsMiddle: _react2['default'].PropTypes.bool,
  smMiddle: _react2['default'].PropTypes.bool,
  mdMiddle: _react2['default'].PropTypes.bool,
  lgMiddle: _react2['default'].PropTypes.bool,

  xsBottom: _react2['default'].PropTypes.bool,
  smBottom: _react2['default'].PropTypes.bool,
  mdBottom: _react2['default'].PropTypes.bool,
  lgBottom: _react2['default'].PropTypes.bool,

  xsAround: _react2['default'].PropTypes.bool,
  smAround: _react2['default'].PropTypes.bool,
  mdAround: _react2['default'].PropTypes.bool,
  lgAround: _react2['default'].PropTypes.bool,

  xsBetween: _react2['default'].PropTypes.bool,
  smBetween: _react2['default'].PropTypes.bool,
  mdBetween: _react2['default'].PropTypes.bool,
  lgBetween: _react2['default'].PropTypes.bool
};

Row.defaultProps = {
  componentClass: 'div'
};

exports['default'] = Row;
module.exports = exports['default'];