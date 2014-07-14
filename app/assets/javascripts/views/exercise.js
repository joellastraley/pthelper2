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
  }
});


var FormView = Backbone.View.extend({
  el: '#new-exercise',
  template: _.template($('#new-exercise-template').html()),

  initialize: function() {
    console.log('form view initialize');
    this.render();
  },

  render: function(){
    console.log('render' + this.model);
    var rendered = this.template(this.model);
    return this.$el.html(rendered);
  },

  events: {
    "submit": "addExercise"
  },

  addExercise: function(evt){
    evt.preventDefault();
    var ex_name = this.$('[name="ex_name"]').val();
    this.el.reset();

    this.collection.create({

    })
  }


});



