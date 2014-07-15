var PTHelperRouter = Backbone.Router.extend({

  routes: {
    'exercise-list': 'update',
    'workout-picklist': 'update',
    'new-exercise': 'update',
    'exercises/:id': 'timer',
    '*default': 'update'
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
    $('#exercise-list').hide();
    $('#workout-timer').show();
    this.view.render().appendTo('#workout-timer');
  }
});




