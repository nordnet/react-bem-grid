import sinon from 'sinon';
import { expect } from 'chai';
import reactBemGrid from './../src/index';

describe('reactBemGrid', () => {
  let sandbox;

  beforeEach(() => sandbox = sinon.sandbox.create());
  afterEach(() => sandbox.restore());

  it('should reactBemGrid', () => expect(reactBemGrid('unicorns')).to.equal('unicorns'));
});
