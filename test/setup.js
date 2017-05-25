import jsdom from 'jsdom'

const { JSDOM } = jsdom

if (typeof document === 'undefined') {
  global.document = new JSDOM('<!doctype html><html><body></body></html>');
  global.window = document.defaultView;
  // global.navigator = global.window.navigator;
}