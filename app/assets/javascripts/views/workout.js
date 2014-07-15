console.log("view version: workout.js firing");


var WorkoutTimerView = Backbone.View.extend({
  el: '#workout-timer',

  template: _.template($('#workout-timer-template').html()),

  initialize: function(){
    this.listenTo(this.model, 'change', this.render);
    this.render();
  },

  render: function(){
    var rendered = this.template({model: this.model});
    return this.$el.html(rendered);
  }

});

console.log("bottom")
