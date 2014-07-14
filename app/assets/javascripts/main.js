console.log("main.js connected");


var exerciseCollection = new ExerciseCollection();
exerciseCollection.fetch().then(function(){
  exerciseCollection.each(function(exercise){
    console.log( exercise.get('ex_name'));
  });
});

var exerciseListView = new ExerciseListView({ collection: exerciseCollection });
  exerciseListView.$el.appendTo("#exercise-list");

var formView = new FormView({collection: exerciseCollection});
  formView.$el.appendTo("#new-exercise");

