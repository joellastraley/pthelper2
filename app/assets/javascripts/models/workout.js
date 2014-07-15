console.log("models/workout.js connected");

var Workout = Backbone.Model.extend({
  defaults: {
    ex_name: '',
    two_sides: false,
    reps: 0,
    img_url: '',
    holdtime: 0,
    user_id: ''
  }
});

var WorkoutCollection = Backbone.Collection.extend({
  url: window.location.pathname + '/workouts',
  model: Workout
});
