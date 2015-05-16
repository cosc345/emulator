
/* 
 *This simulate the heartrate and detect whether the heart rate is normal or not
 *If not the app is suppose to send the current location of the user to the emergency deparment
 */
var canvas = document.getElementById('emulatorCanvas');
var ctx = canvas.getContext("2d");
var textarea = document.getElementById("text");
var x;

$(document).ready(function () {
    
    paper.setup(canvas);
    x = getRandomInt(50, 120);
    ctx.font = "20px Georgia";
    ctx.fillText("Heart Rate", 57, 50);
    ctx.font = "50x Georgia";
    ctx.fillText(x.toString(), 85, 100);
    heartRateGen();
    setTimeout(function(){  RunningTheApp("HealthApp/heathTest.js") }, 1500);


});
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function onResize(event) {
    // Whenever the window is resized, recenter the path:
    path.position = view.center;
};
function chance() {
    xchance = (Math.random() < 0.99 ? 0 : 1);
    console.log("chance is " + xchance);
    return xchance;
}

function clear() {
    var canvas = document.getElementById("emulatorCanvas");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.restore();
}
//draw heart rate onto the screen 
//if the generator show somethind greater than 120 or less than 50. It will warned you to call 111
function drawHeartRate(){
    
    heartRateGen();
    
}
//Generate heart rate at random using the chance() 
//if the generator show somethind greater than 120 or less than 50. It will warned you to call 111
  function heartRateGen() {
        $(textarea).val(x);
        console.log(x);
        if (chance() === 0) {
            x = getRandomInt(50, 120);
            console.log("Heartrate is between 50 to 100");
            
           // setTimeout(incrementCounter, 1500);
        } else {
            console.log("Heartrate is beyone 50 or 100");
            x = getRandomInt(1, 200);
            //ctx.fillText(x+"", 10, 50);

            if (x < 50) {
                x = getRandomInt(1, 50);
                //ctx.fillText(x+"", 10, 50);
                //setInterval(function () {
                  $(textarea).val(x + " is a dangerous heartbeat, call 111 immediately");
               // }, 1500);

            } else {
                if (x > 100) {
                    x = getRandomInt(120, 200);
                    //ctx.fillText(x+"", 10, 50);
                    //setInterval(function () {
                      $(textarea).val(x + " is a dangerous heartbeat, call 111 immediately");
                   // 1500);

                }
            }
        }
        
    }
 
