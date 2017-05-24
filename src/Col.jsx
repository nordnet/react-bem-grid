import React from 'react';
import PropTypes from 'prop-types';
import PureComponent from 'react-pure-render/component';
import classNames from 'classnames';
import { elementType } from 'react-prop-types';
import isNumber from 'lodash.isnumber';

class Col extends PureComponent {
  render() {
    const ComponentClass = this.props.componentClass;

    const classes = classNames({
      ['grid__col--xs' + (isNumber(this.props.xs) ? '-' + this.props.xs : '')]: this.props.xs >= 0,
      ['grid__col--sm' + (isNumber(this.props.sm) ? '-' + this.props.sm : '')]: this.props.sm >= 0,
      ['grid__col--md' + (isNumber(this.props.md) ? '-' + this.props.md : '')]: this.props.md >= 0,
      ['grid__col--lg' + (isNumber(this.props.lg) ? '-' + this.props.lg : '')]: this.props.lg >= 0,

      ['grid__col--xs-offset-' + this.props.xsOffset]: this.props.xsOffset >= 0,
      ['grid__col--sm-offset-' + this.props.smOffset]: this.props.smOffset >= 0,
      ['grid__col--md-offset-' + this.props.mdOffset]: this.props.mdOffset >= 0,
      ['grid__col--lg-offset-' + this.props.lgOffset]: this.props.lgOffset >= 0,

      'grid__col--reverse': this.props.reverse,

      'grid__col--xs-first': this.props.xsFirst,
      'grid__col--sm-first': this.props.smFirst,
      'grid__col--md-first': this.props.mdFirst,
      'grid__col--lg-first': this.props.lgFirst,

      'grid__col--xs-last': this.props.xsLast,
      'grid__col--sm-last': this.props.smLast,
      'grid__col--md-last': this.props.mdLast,
      'grid__col--lg-last': this.props.lgLast,
    }, this.props.className);

    return (
      <ComponentClass className={ classes } style={ this.props.style }>
        { this.props.children }
      </ComponentClass>
    );
  }
}

Col.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node,
  componentClass: elementType,

  xs: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.bool,
  ]),
  sm: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.bool,
  ]),
  md: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.bool,
  ]),
  lg: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.bool,
  ]),

  xsOffset: PropTypes.number,
  smOffset: PropTypes.number,
  mdOffset: PropTypes.number,
  lgOffset: PropTypes.number,

  reverse: PropTypes.bool,

  xsFirst: PropTypes.bool,
  smFirst: PropTypes.bool,
  mdFirst: PropTypes.bool,
  lgFirst: PropTypes.bool,

  xsLast: PropTypes.bool,
  smLast: PropTypes.bool,
  mdLast: PropTypes.bool,
  lgLast: PropTypes.bool,
};

Col.defaultProps = {
  componentClass: 'div',
};

export default Col;
