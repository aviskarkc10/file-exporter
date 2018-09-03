let jsdom = require('jsdom');

global.document = new jsdom.JSDOM('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
