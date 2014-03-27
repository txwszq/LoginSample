// Require.js allows us to configure shortcut alias
require.config({
    paths: {
        jquery: 'libs/jquery/jquery-min',
        underscore: 'libs/underscore/underscore-min',
        backbone: 'libs/backbone/backbone-min',
        bootstrap: 'libs/bootstrap.min',
        validate : 'libs/bootstrapValidator',
        async: 'libs/async/async',
        templates: '../templates'      
    }
});

require([
  'app'
], function (App) {
    // The "app" dependency is passed in as "App"
    App.initialize();
});
