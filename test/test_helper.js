import { expect } from 'chai';
import jquery from 'jquery';
import jsdom from 'jsdom';

const exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

const $ = jquery(global.window);
$.sideNav = function () {};
global.window.$ = $;
global.$ = $;
global.window.ENV_TEST = true;

global.navigator = {
  userAgent: 'node.js'
};

const createStorage = () => {
  let store = {};
  store.getItem = item => store[item];
  store.setItem = (item, value) => store[item] = value;
  store.clean = () => store = {};
  return store;
};

global.window.localStorage = createStorage();
global.document.localStorage = createStorage();

export { expect };
