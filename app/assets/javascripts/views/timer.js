// function animatedTimer(){
//   console.log('tryna draw timers');
// };

// var timer;
// var timerCurrent;
// var timerFinish;
// var timerSeconds;

// function drawTimer(percent, timeNow){
//     $('div.timer').html('<div class="percent"></div><div id="slice"'+(percent > 50?' class="gt50"':'')+'><div class="pie"></div>'+(percent > 50?'<div class="pie fill"></div>':'')+'</div>');

//     var deg = 360/100*percent;
//     $('#slice .pie').css({
//     '-moz-transform':'rotate('+deg+'deg)',
//     '-webkit-transform':'rotate('+deg+'deg)',
//     '-o-transform':'rotate('+deg+'deg)',
//     'transform':'rotate('+deg+'deg)'
//     });

//     $('.percent').html(Math.round(seconds));
// }

// function stopWatch(){
//     var seconds = (timerFinish-(new Date().getTime()))/1000;
//       if(seconds <= 0){
//           drawTimer(100);
//           clearInterval(timer);
//           $('.percent').html('');
//           $('input[type=button]#watch').val('Start');
//       }else{
//           var percent = 100-((seconds/timerSeconds)*100);
//           drawTimer(percent, seconds);
//       }
//   }

// // $(document).ready(function(){
// //   $('input[type=button]#percent').click(function(e){
// //       e.preventDefault();
// //       drawTimer(100);
// //   });

// $('input[type=button]#watch').click(function(e){
//     e.preventDefault();
//     if($('input[type=button]#watch').val() == 'Start'){
//         $('input[type=button]#watch').val('Stop');
//         timerSeconds = this.model.get('holdtime');
//         timerCurrent = 0;
//         timerFinish = new Date().getTime()+(timerSeconds*1000);
//         timer = setInterval('stopWatch()',50);
//     }else{
//         $('input[type=button]#watch').val('Start');
//         clearInterval(timer);
//     }
// });
// $('input[type=button]#watch').click();

// });
