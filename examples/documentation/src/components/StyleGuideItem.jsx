import React from 'react';
import Highlight from 'react-highlight';
import reactToJsx from 'react-to-jsx';
import './hljs.css';

class StyleGuideItem extends React.Component {
  renderTitle() {
    if (this.props.title) {
      return (
        <h2 className="style-guide-item__title">{ this.props.title }</h2>
      );
    }

    if (this.props.subTitle) {
      return (
        <h3 className="style-guide-item__sub-title">{ this.props.subTitle }</h3>
      );
    }
  }

  renderDescription() {
    if (this.props.description) {
      return (
        <p className="style-guide-item__description">{ this.props.description }</p>
      );
    }
  }

  render() {
    const jsxStringOptions = {
      indent: '  ',
    };
    const jsxString = reactToJsx(this.props.simplifiedMarkup, jsxStringOptions) || reactToJsx(this.props.children, jsxStringOptions);

    return (
      <div className="style-guide-item">
        { this.renderTitle() }
        { this.renderDescription() }
        { this.props.children }
        <Highlight className='style-guide-item__code'>
          { jsxString }
        </Highlight>
      </div>
    );
  }
}

export default StyleGuideItem;
