import React from 'react';

class Box extends React.Component {
  render() {
    const boxStyle = {
      position: 'relative',
      boxSizing: 'border-box',
      minHeight: '2rem',
      lineHeight: '2rem',
      marginBottom: '1rem',
      background: '#00A8EF',
      borderRadius: '2px',
      overflow: 'hidden',
      textAlign: 'center',
      color: '#fff',
    };

    return (
      <div style={ boxStyle }>
        { this.props.children }
      </div>
    );
  }
}

export default Box;
