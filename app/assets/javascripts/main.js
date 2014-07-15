console.log("main.js connected");

// $(document).ready(function(){

  exerciseCollection = new ExerciseCollection();
  exerciseCollection.fetch().then(function(){
    var pTHelperRouter = new PTHelperRouter();
    Backbone.history.start();
  });

  var workoutCollection = new WorkoutCollection();
  workoutCollection.fetch().then(function(){
    workoutCollection.each(function(exercise){
      console.log(exercise.get('ex_name'));
    });
  });

  var exerciseListView = new ExerciseListView({ collection: exerciseCollection });
    exerciseListView.$el.appendTo("#exercise-list");

  var formView = new FormView({collection: exerciseCollection});
    formView.$el.appendTo("#new-exercise");
// });





