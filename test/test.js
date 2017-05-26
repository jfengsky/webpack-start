import React from 'react';
// import { findDOMNode } from 'react-dom';
import jsdom from 'jsdom';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import App from '../src/Root';

const { JSDOM } = jsdom

function shallowRender(Component) {
  const renderer = TestUtils.createRenderer();
  renderer.render(<Component />);
  return renderer.getRenderOutput();
}

describe('Shallow Rendering', function () {
  it('Root Component default test', function () {
    const app = shallowRender(App);
    expect(app.props.children[0]).to.equal('webpack first');
    expect(app.type).to.equal('h1');
  });

  it('Root Component event test', function () {

    if (typeof document === 'undefined') {
      global.document = new JSDOM('<!doctype html><html><body></body></html>');
      global.window = document.defaultView;
      // global.navigator = global.window.navigator;
    }

    const app = TestUtils.renderIntoDocument(<App />);
    // const appDOM = findDOMNode(app);
    // const testButton = appDOM.querySelector('button')
    // TestUtils.Simulate.click(testButton)
  });
});