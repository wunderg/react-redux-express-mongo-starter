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
global.window.$ = $;
global.$ = $;

global.navigator = {
  userAgent: 'node.js'
};

export { expect };
