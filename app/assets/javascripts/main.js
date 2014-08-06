var exerciseCollection = new ExerciseCollection();
  exerciseCollection.fetch().then(function(){
    var pTHelperRouter = new PTHelperRouter();
    Backbone.history.start();
  });

var workoutCollection = new WorkoutCollection();
  workoutCollection.fetch().then(function(){
    workoutCollection.each(function(workout){
      console.log(workout.get('ex_name'));
    });
  });

var userCollection = new UserCollection();
  userCollection.fetch().then(function(){
    userCollection.each(function(user){
      console.log(user.get('name'));
    });
  });

var exerciseListView = new ExerciseListView({ collection: exerciseCollection });
  exerciseListView.$el.appendTo("#exercise-list");

var formView = new FormView({collection: exerciseCollection});
  formView.$el.appendTo("#new-exercise");

// var workoutTimerView = new WorkoutTimerView({collection: workoutCollection});
//   workoutTimerView.$el.appendTo("#workout-timer");

var accountView = new AccountView({model: this.model});
  accountView.$el.appendTo("#account-info");

var workoutHistoryListView = new WorkoutHistoryListView({ collection: workoutCollection });
  workoutHistoryListView.$el.appendTo("#workout-history");





