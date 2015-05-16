$(document).ready(function () {
    var canvas = document.getElementById('emulatorCanvas');
    var ctx = canvas.getContext("2d");
   var textarea = document.getElementById("text");
     
    var x;
    setInterval(draw, 1500);
    function draw(){
        drawHeartRate(ctx, x);
    }
    
//draw heart rate onto the screen 
//if the generator show somethind greater than 120 or less than 50. It will warned you to call 111
    function drawHeartRate(ctx, x) {
        console.log("drawHeart is working");
        x = heartRateGen(x);
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.font = "20px Georgia";
        ctx.fillText("Heart Rate", 57, 50);
        ctx.font = "50x Georgia";
        ctx.fillText(x.toString(), 85, 100);
        //  setInterval(heartRateGen, 1500);

    }
    //Generate heart rate at random using the chance() 
//if the generator show somethind greater than 120 or less than 50. It will warned you to call 111
    function heartRateGen(x) {
        //ctx.fillText(x+"", 10, 50);
        //ctx.font = "20px Georgia";
        //ctx.fillText(x.toString(), 10, 50);
        $(textarea).val(x);
        console.log(x);
        if (chance() === 0) {
            console.log("Heartrate is between 50 to 100");
            x = getRandomInt(50, 120);
            return x;
            
            // setTimeout(incrementCounter, 1500);
        } else {
            console.log("Heartrate is beyone 50 or 100");
            x = getRandomInt(1, 200);
            //ctx.fillText(x+"", 10, 50);

            if (x < 50) { 
                $(textarea).val(x + " is a dangerous heartbeat, call 111 immediately");
                x = getRandomInt(1, 50);
                return x; 
                //ctx.fillText(x+"", 10, 50);
                //setInterval(function () {
               
                // }, 1500);

            } else {
                if (x > 100) {
                    $(textarea).val(x + " is a dangerous heartbeat, call 111 immediately");
                    x = getRandomInt(120, 200);
                   return x;
                    //ctx.fillText(x+"", 10, 50);
                    //setInterval(function () {
                    
                    // 1500);

                }
            }
        }

    }
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    function onResize(event) {
        // Whenever the window is resized, recenter the path:
        path.position = view.center;
    }
    ;
    function chance() {
        xchance = (Math.random() < 0.80 ? 0 : 1);
        console.log("chance is " + xchance);
        return xchance;
    }

    function clear() {
        var canvas = document.getElementById("emulatorCanvas");
        var ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.restore();
    }

    

});


