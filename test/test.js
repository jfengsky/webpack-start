import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import App from '../src/index';

function shallowRender(Component) {
  const renderer = TestUtils.createRenderer();
  renderer.render(<Component/>);
  return renderer.getRenderOutput();
}

describe('Shallow Rendering', function () {
  it('App\'s title should be Todos', function () {
    const app = shallowRender(App);
    // component's shallow rendering has props.children
    expect(app.props.children[0].type).to.equal('h1');
    expect(app.props.children[0].text).to.equal('webpack first');
  });
});