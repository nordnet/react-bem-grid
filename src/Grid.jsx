import React from 'react';
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
  fluid: React.PropTypes.bool,
  className: React.PropTypes.string,
  style: React.PropTypes.object,
  children: React.PropTypes.node,
  componentClass: elementType,
};

Grid.defaultProps = {
  componentClass: 'div',
};

export default Grid;
