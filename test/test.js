import React from 'react';
import { findDOMNode } from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import App from '../src/Root';

// 具体可参考 https://yq.aliyun.com/articles/54265

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

    const app = TestUtils.renderIntoDocument(<App />);
    const appDOM = findDOMNode(app);
    const testButton = appDOM.querySelector('input')
    // 模拟点击
    TestUtils.Simulate.click(testButton)
    expect(app.state.title).to.equal('webpack clicked')
  });
});