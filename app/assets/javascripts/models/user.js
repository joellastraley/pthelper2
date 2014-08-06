var User = Backbone.Model.extend({
  defaults: {
    name: '',
    email: ''
  }
});

var UserCollection = Backbone.Collection.extend({
  url: window.location.pathname,
  model: User
});
