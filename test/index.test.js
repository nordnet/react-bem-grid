import { expect } from 'chai';
import { createComponent } from './test-utils';

import { Col } from './../src';

describe('Col', () => {
  let component;

  describe('when rendered', () => {
    beforeEach(() => component = createComponent(Col));

    it('should have div as container element',
      () => expect(component.type).to.equal('div'));

    it('should have empty className',
      () => expect(component.props.className).to.equal(''));
  });

  describe('when has text as child component', () => {
    beforeEach(() => component = createComponent(Col, {}, 'column'));
    it('should have "column" as children',
      () => expect(component.props.children).to.equal('column'));
  });

  describe('when className is set via props', () => {
    beforeEach(() => component = createComponent(Col, { className: 'app' }));
    it('should have expected className',
      () => expect(component.props.className).to.equal('app'));
  });

  describe('when componentClass is set via props', () => {
    beforeEach(() => component = createComponent(Col, { componentClass: 'nav' }));
    it('should have expected elementType',
      () => expect(component.type).to.equal('nav'));
  });
});
