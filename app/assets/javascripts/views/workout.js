var WorkoutTimerView = Backbone.View.extend({
  el: '#workout-timer',

  template: _.template($('#workout-timer-template').html()),

  initialize: function(){
    this.listenTo(this.collection, 'sync add remove', this.render);
    this.render();
  },

  render: function(){
    var rendered = this.template(this.model);
    this.$el.html(rendered);
  }
});
