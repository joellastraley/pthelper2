var PTHelperRouter = Backbone.Router.extend({

  routes: {
    'exercise-list': 'update',
    'workout-picklist': 'update',
    'new-exercise': 'update',
    'exercises/:id': 'timer',
    'account-info': 'update',
    'workout-history': 'update',
    '*default': 'update'
  },

  clearView: function() {
    if (this.view) this.view.remove();
    this.view = null;
  },

  update: function(){
    console.log("update firing!");
    var id = Backbone.history.fragment || 'exercise-list';
    $('.view').hide().filter('#'+id).show();
    this.navigate(id);
  },

  timer: function(id){
    console.log("timer route firing!");
    id = parseInt(id);
    var exercise = exerciseCollection.get(id);
    this.view = new WorkoutTimerView({ model: exercise});
    $('#new-exercise').hide();
    $('#exercise-list').hide();
    $('#account-info').hide();
    $('#workout-history').hide();
    $('#workout-timer').show();
    this.view.render().appendTo('#workout-timer');
  }
});



