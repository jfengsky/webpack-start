import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import App from '../src/Root';

function shallowRender(Component) {
  const renderer = TestUtils.createRenderer();
  renderer.render(<Component/>);
  return renderer.getRenderOutput();
}

describe('Shallow Rendering', function () {
  it('Root Component test', function () {
    const app = shallowRender(App);
    expect(app.props.children).to.equal('webpack first');
    expect(app.type).to.equal('h1');
  });
});