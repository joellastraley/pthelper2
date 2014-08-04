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
  },

  events: {
    'click .start': 'startTimer'
  },

  startTimer: function(){
   var sec = this.model.get('holdtime');
   var reps = this.model.get('reps');
   var total = reps * 2;
   var $side = $('.side');
   var $hold = $('.hold');
   var $reps = $('.reps');
     function countdown(model){
      $hold.text(sec);
        if (sec >= 0){
        sec--;
        setTimeout(countdown, 1000);
        } else {
          reps -= 1;
          total -= 1;
          $reps.text(reps);
            if (reps > 0){
            sec = this.model.get('holdtime');
            countdown();
            } else {
              $side.text('Right');
              reps = this.model.get('reps');
              $reps.text(reps);
              sec = this.model.get('holdtime');
                if (total == 0){
                $reps.text(0);
                $hold.text(0);
                alert("You've finished");
                } else {
                  countdown(model = this.model);
                  console.log("im in the else");
                  }
          }
        }
    }
  countdown(model = this.model);
}

});

