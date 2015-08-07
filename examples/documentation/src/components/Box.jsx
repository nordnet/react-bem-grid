import React from 'react';
import merge from 'lodash.merge';

class Box extends React.Component {
  render() {
    const boxStyle = {
      position: 'relative',
      boxSizing: 'border-box',
      minHeight: !this.props.nested || !this.props.container ? '2rem' : null,
      lineHeight: !this.props.nested || !this.props.container ? '2rem' : null,
      marginBottom: !this.props.nested ? '1rem' : null,
      padding: this.props.nested || this.props.container ? '1rem' : null,
      background: !this.props.nested ? '#00A8EF' : 'rgba(0, 0, 0, .2)',
      borderRadius: '2px',
      overflow: 'hidden',
      textAlign: 'center',
      color: '#fff',
    };

    return (
      <div style={ merge({}, boxStyle, this.props.style) }>
        { this.props.children }
      </div>
    );
  }
}

export default Box;
