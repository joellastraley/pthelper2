var Workout = Backbone.Model.extend({
  defaults: {
    user_id: '',
    exercise_id: '',
    completed: false
  }
});

var WorkoutCollection = Backbone.Collection.extend({
  url: window.location.pathname + '/workouts',
  model: Workout
});


