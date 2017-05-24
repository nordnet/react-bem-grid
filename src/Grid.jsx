import React from 'react';
import PropTypes from 'prop-types';
import PureComponent from 'react-pure-render/component';
import classNames from 'classnames';

import { elementType } from 'react-prop-types';

class Grid extends PureComponent {
  render() {
    const ComponentClass = this.props.componentClass;

    const classes = classNames({
      'grid': !this.props.fluid,
      'grid--fluid': this.props.fluid,
    }, this.props.className);

    return (
      <ComponentClass className={ classes } style={ this.props.style }>
        { this.props.children }
      </ComponentClass>
    );
  }
}

Grid.propTypes = {
  fluid: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node,
  componentClass: elementType,
};

Grid.defaultProps = {
  componentClass: 'div',
};

export default Grid;
