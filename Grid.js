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

var Grid = (function (_PureComponent) {
  _inherits(Grid, _PureComponent);

  function Grid() {
    _classCallCheck(this, Grid);

    _get(Object.getPrototypeOf(Grid.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Grid, [{
    key: 'render',
    value: function render() {
      var ComponentClass = this.props.componentClass;

      var classes = (0, _classnames2['default'])({
        'grid': !this.props.fluid,
        'grid--fluid': this.props.fluid
      }, this.props.className);

      return _react2['default'].createElement(
        ComponentClass,
        { className: classes, style: this.props.style },
        this.props.children
      );
    }
  }]);

  return Grid;
})(_PureComponent3['default']);

Grid.propTypes = {
  fluid: _react2['default'].PropTypes.bool,
  className: _react2['default'].PropTypes.string,
  style: _react2['default'].PropTypes.object,
  children: _react2['default'].PropTypes.node,
  componentClass: _reactPropTypes.elementType
};

Grid.defaultProps = {
  componentClass: 'div'
};

exports['default'] = Grid;
module.exports = exports['default'];