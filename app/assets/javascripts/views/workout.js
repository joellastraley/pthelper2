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
    'click .start': 'startTimer',
    'click .pause': 'pauseTimer',
    'submit': 'saveEx',
    'click .destroy': 'onRemove'
  },

  saveEx: function(evt){
    evt.preventDefault();
    var saving_user_id = this.$('[name="user_id"]').val();
    var saving_exercise_id = this.$('[name="exercise_id"]').val();
    var saving_completed = this.$('[name="completed?"]').val();
    console.log(saving_user_id);

    workoutCollection.create({
      user_id: saving_user_id,
      exercise_id: saving_exercise_id,
      completed: saving_completed
    });
  },

  onRemove: function(){
    console.log('tryna destroy');
    this.model.destroy();
  },

  startTimer: function(){
   var sec = this.model.get('holdtime');
   var reps = this.model.get('reps');
   var total = reps * 2;
   var $side = $('.side');
   var $hold = $('.hold');
   var $reps = $('.reps');
   var $exComplete = $('.exComplete');
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
                $exComplete.css('visibility', 'visible');
                } else {
                  countdown(model = this.model);
                  }
          }
        }
    }
  countdown(model = this.model);
  },

  pauseTimer: function(){
    console.log("pause");
  }

});


WorkoutHistoryListView = Backbone.View.extend({
  el: '#workout-history',

  template: _.template($('#workout-history-template').html()),

   initialize: function(){
    this.listenTo(this.collection, 'sync add remove', this.render);
    this.render();
  },

  render: function(){
    var rendered = this.template({ workoutCollection: this.collection });
    this.$el.html(rendered);
  }

});
