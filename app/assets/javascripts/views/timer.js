// function exTimer(evt){
//   var sec = evt.this.model.get('holdtime');
//   var reps = evt.this.model.get('reps');
//   var $side = $('.side');
//   var $hold = $('.hold');
//   var $reps = $('.reps');
//     function countdown(){
//       $hold.text(sec);
//         if (sec > 0){
//           sec--;
//           setTimeout(countdown, 1000);
//         } else {
//           reps -= 1;
//           $reps.text(reps)
//             if (reps > 0){
//               //need to reset the value ot the original, but this.model.get doesn't work here
//               sec = 2;
//               countdown();
//             } else {
//               $side.text('Right');
//               sec = 2;
//               reps = 2;
//               countdown();
//             }
//         }
//       }
//      countdown();
// };
