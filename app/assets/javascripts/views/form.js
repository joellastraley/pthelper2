// console.log('form view connected');

// var FormView = Backbone.View.extend({
//   el: '#new-exercise',
//   //template: _.template($('#new-exercise-template').html()),

//   initialize: function() {
//     console.log('form viewinitialize');
//     this.render();
//   },

//   // render: function(){
//   //   console.log('formview rendering');
//   //   var rendered = this.template(this.model.toJSON());
//   //   return this.$el.html(rendered);
//   // },

//   events: {
//     "submit": "addExercise"
//   },

//     addExercise: function(evt) {
//     evt.preventDefault();
//     var data = this.$('input').serializeObject();
//     this.model.save(data);
//     this.done();
//   }

// });
