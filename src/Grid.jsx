import React from 'react';
import PureComponent from './PureComponent';
import classNames from 'classnames';

class Grid extends PureComponent {
  render() {
    let classes = classNames({
      'grid': !this.props.fluid,
      'grid--fluid': this.props.fluid,
    }, this.props.className);

    return (
      <div className={ classes }>
        { this.props.children }
      </div>
    );
  }
}

Grid.propTypes = {
  fluid: React.PropTypes.bool,
};

Grid.defaultProps = { };

export default Grid;
