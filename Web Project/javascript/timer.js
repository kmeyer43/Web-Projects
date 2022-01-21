// Create a count down timer that recieves input from the user and outputs the time in seconds
// Test code:
/* $(document).ready(function(){
 
    $('#startButton').click(function(){
     alert("button clicked");
    });
   });
 */


var timer2 = $('#timerInput').val();
var interval = setInterval(function startTimer() {


  var timer = timer2.split(':');

  //by parsing integer, I avoid all extra string processing
  var minutes = parseInt(timer[0], 10);
  var seconds = parseInt(timer[1], 10);
  --seconds;
  minutes = (seconds < 0) ? --minutes : minutes;
  if (minutes < 0) clearInterval(interval);
  seconds = (seconds < 0) ? 59 : seconds;
  seconds = (seconds < 10) ? '0' + seconds : seconds;

  //minutes = (minutes < 10) ?  minutes : minutes;
  $('.countdown').html(minutes + ':' + seconds);
  timer2 = minutes + ':' + seconds;
}, 1000);

