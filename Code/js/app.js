// Filename: app.js
define([
  'jquery', 
  'underscore',
  'backbone',
  'bootstrap', 
  'validate',
  'router'
], function ($, _, Backbone, bootstrap, validate, Router) {
  var initialize = function(){
    Router.initialize();
  };

  return { 
    initialize: initialize
  };
});
