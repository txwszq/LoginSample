define([
  'jquery',
  'underscore',
  'backbone',
  'validate',
   'text!templates/login/login.html'
], function ($, _, Backbone, validate, loginTemplate) {

    var LoginView = Backbone.View.extend({
        el: $("#page"),
        events: {
            "click #btn-login": function () {
                //Logic to call api to server for authentication
            }
        },
        render: function () {
            this.$el.html(loginTemplate);
            this.$el.find('#defaultForm').bootstrapValidator({
                message: '',
                feedbackIcons: { valid: 'glyphicon glyphicon-ok', invalid: 'glyphicon glyphicon-remove', validating: 'glyphicon glyphicon-refresh' },
                submitHandler: function (validator, form, submitButton) {
                    form.find('.alert').html('Thanks for signing up. Now you can sign in as ' + validator.getFieldElements('username').val()).show();
                },
                fields: {                   
                    email: {
                        validators: {
                            notEmpty: {

                        },
                        emailAddress: {
                            message: 'Invalid Username'
                        }
                    }
                },
                password: {
                    validators: {
                        notEmpty: {
                            message: 'Password required'
                            }
                        }
                    }
                }
            });
        }   
    });
return LoginView;
});
