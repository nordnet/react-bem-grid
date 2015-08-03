import React from 'react/addons';
import { expect } from 'chai';
import { Col } from './../src';

const TestUtils = React.addons.TestUtils;

describe('Col', () => {
  let component;
  
  describe('when has text as child component', () => {
    beforeEach(() => {
      component = createComponent(Col, {}, 'column');
    })

    it('should have div as container element', () => expect(component.type).to.equal('div'));
    it('should have "column" as children', () => expect(component.props.children).to.equal('column'));
    it('should have empty className', () => expect(component.props.className).to.equal(''));
  });
});

function createComponent(component, props, ...children) {
  const shallowRenderer = TestUtils.createRenderer();
  shallowRenderer.render(React.createElement(component, props, children.length > 1 ? children : children[0]));
  return shallowRenderer.getRenderOutput();
}
