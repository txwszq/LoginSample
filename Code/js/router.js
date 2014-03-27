// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',   
  'views/login/Login'
 
], function($, _, Backbone,   LoginView) {
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      '*actions': 'defaultAction'
    }
  });

  var initialize = function(){
    var app_router = new AppRouter;
    app_router.on('route:defaultAction', function (actions) {
        var loginView = new LoginView();
        loginView.render();
    });
    Backbone.history.start();
  };

  return { 
    initialize: initialize
  };

});
