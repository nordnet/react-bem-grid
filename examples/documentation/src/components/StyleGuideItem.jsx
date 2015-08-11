import React from 'react';
import Highlight from 'react-highlight';
import './hljs.css';
import './style-guide-item.scss';

class StyleGuideItem extends React.Component {
  renderTitle() {
    if (this.props.title) {
      const id = this.props.id || this.props.title.toLowerCase().replace(' ', '-');

      return (
        <a href={ '#' + id } className="style-guide-item__link">
          <h2 id={ id } className="style-guide-item__title">{ this.props.title }</h2>
        </a>
      );
    }

    if (this.props.subTitle) {
      const id = this.props.id || this.props.subTitle.toLowerCase().replace(' ', '-');

      return (
        <a href={ '#' + id } className="style-guide-item__link">
          <h3 id={ id } className="style-guide-item__sub-title">{ this.props.subTitle }</h3>
        </a>
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

  renderCode() {
    if (this.props.simplifiedMarkup) {
      return (
        <Highlight className='style-guide-item__code'>
          { this.props.simplifiedMarkup }
        </Highlight>
      );
    }
  }

  render() {


    return (
      <div className="style-guide-item">
        { this.renderTitle() }
        { this.renderDescription() }
        { this.props.children }
        { this.renderCode() }
      </div>
    );
  }
}

export default StyleGuideItem;
