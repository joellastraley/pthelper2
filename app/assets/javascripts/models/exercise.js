console.log("models/exercise.js connected");

var Exercise = Backbone.Model.extend({
  defaults: {
    id: 0,
    ex_name: '',
    two_sides: false,
    reps: 0,
    img_url: '',
    holdtime: 0,
    user_id: ''
  }
});

var ExerciseCollection = Backbone.Collection.extend({
  url: 'users/:id/exercises',
  model: Exercise
});


