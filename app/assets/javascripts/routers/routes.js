var PTHelperRouter = Backbone.Router.extend({

  routes: {
    'exercise-list': 'update',
    'workout-picklist': 'update',
    'new-exercise': 'update',
    '': 'update',
    '*default': 'update'
  },

  update: function(){
    var id = Backbone.history.fragment || 'exercise-list';
    $('.view').hide().filter('#'+id).show();
    this.navigate(id);
  }
});



var pTHelperRouter = new PTHelperRouter();

Backbone.history.start();
