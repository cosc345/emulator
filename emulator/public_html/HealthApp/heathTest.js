
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
    x = heartRateGen();
    $(textarea).val(x);
    console.log(x);
    ctx.font = "20px Georgia";
    ctx.fillText("Heart Rate", 57, 50);
    ctx.font = "50x Georgia";
    ctx.fillText(x.toString(), 85, 100);
    if (x < 50) {
        
            ctx.font = "50x Georgia";
            ctx.fillText("Emergency", 60, 125);
            ctx.fillText("Call 111 immediately", 17, 150);
       


    }
    if (x > 120) {
             ctx.font = "50x Georgia";
            ctx.fillText("Emergency", 60, 125);
             ctx.fillText("Call 111 immediately", 17, 150);
       


    }

    setTimeout(function () {
        RunningTheApp("HealthApp/heathTest.js")
    }, 1500);


});
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function chance() {
    xchance = (Math.random() < 0.90 ? 0 : 1);
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
        
        if (chance() === 0) { 
            console.log("Heartrate is between 50 to 100");
            return x = getRandomInt(50, 120);
           
            
           
        } else {
            console.log("Heartrate is beyone 50 or 100");
            x = getRandomInt(1, 200);

            if (x < 85) {
               return x = getRandomInt(1, 50);
                

            } else {
                if (x > 85) {
                    return x = getRandomInt(120, 200);
                    

                }
            }
        }
        return  85;
        
    }
//    function fileReader() {
//        var heartFiles;
//        $.ajax({
//            url: "https://github.com/cosc345/emulator/testfiles/heartfiles.git",
//            success: function (txt) {
//                heartFiles = txt.split('<A href="');
//            }
//        });
//
//        $(heartFiles).each(function () {
//            if (this.indexOf('.txt') > -1) {
//                fileList.push(this);
//            }
//        });
//        for (i = 0; i < fileList.length; i++) {
//            fileList[i] = fileList[i].split('">')[0];
//
//        }
//
//        for (i = 0; i < fileList.length; i++) {
//            $('#idLoadHere').load(fileList[i]);
//        }
//    }
//
//    function heartRateReader() {
//        var random = Math.floor(Math.random(0 + (fileList.length - 1) + 1));
//        var SelFile = fileList[random];
//        var output = [];
//        $.get(selFile, function (data) {
//            var output = data.split();
//            console.log(output);
//        });
//
//        return output;
//
//
//
//    }
//
//
//
//    function heartRateGen(output) {
//        $(textarea).val(output);
//        console.log(output);
//        for (i = output.length; i === 0; i--) {
//            if (heartRateReader() < 40) {
//                $(textarea).val(heartRateReader() + " is a dangerous heartbeat, call 111 immediately");
//            } else {
//                if (heartRateReader === 0) {
//                    $(textarea).val(heartRateReader() + " Emergency");
//                }
//                else {
//                    if (heartRateReader > 220) {
//                        $(textarea).val(heartRateReader() + " is a dangerous heartbeat, rest immediately");
//                    }
//                }
//            }
//        }
//
//        function clear() {
//            var canvas = document.getElementById("emulatorCanvas");
//            var ctx = canvas.getContext("2d");
//            ctx.clearRect(0, 0, canvas.width, canvas.height);
//            ctx.restore();
//        }
//    }
// 
