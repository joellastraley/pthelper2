console.log("views/exercise.js connected");

var ExerciseListView = Backbone.View.extend({
  el: '#exercise-list',

  template: _.template($('#exercise-list-template').html()),

  initialize: function(){
    this.listenTo(this.collection, 'sync add remove', this.render);
    this.render();
  },

  render: function(){
    var rendered = this.template({ exerciseCollection: this.collection });
    this.$el.html('Here are your assigned exercises:' + rendered);
  },

  events: {
    'click .destroy': 'onRemove'
  },

  onRemove: function(){
    console.log('at delete function');
    exerciseCollection.this.model.destroy();
  }

});

var FormView = Backbone.View.extend({
  el: '#new-exercise',
  template: _.template($('#new-exercise-template').html()),

  initialize: function(){
    this.render();
  },

  render: function(){
    var rendered = this.template(this.model);
    return this.$el.html(rendered);
  },

  events: {
    "submit": "addExercise"
  },

  addExercise: function(evt){
    evt.preventDefault();
    var two_sides = $('[name="two_sides"]').is(":checked");
    var ex_name = this.$('[name="ex_name"]').val();
    var reps = this.$('[name="reps"]').val();
    var img_url = this.$('[name="img_url"]').val();
    var holdtime = this.$('[name="holdtime"]').val();
    var user_id = this.$('[name="user_id"]').val();
    this.el.reset();

    this.collection.create({
      ex_name: ex_name,
      two_sides: two_sides,
      reps: reps,
      img_url: img_url,
      holdtime: holdtime,
      user_id: user_id
    });
  }

});



