var Exercise = Backbone.Model.extend({
  defaults: {
    ex_name: '',
    two_sides: false,
    reps: 0,
    img_url: '',
    holdtime:0,
    user_id: ''
  }
});

var ExerciseCollection = Backbone.Collection.extend({
  url: window.location.pathname + '/exercises',
  model: Exercise
});




