/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function () {
    console.log("Heart rate ready")
    var canvas = document.getElementById('emulatorCanvas');
    var ctx = canvas.getContext("2d");
    var textarea = document.getElementById("text");
    var fileList = [];
    var x;
    setInterval(draw, 1500);
    function draw() {
        drawHeartRate(ctx, x);
    }

    function drawHeartRate(ctx, x) {
        console.log("drawHeart is working");
        var n;
        fileReader();
        x = heartRateReader(x);
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.font = "20px Georgia";
        ctx.fillText("Heart Rate", 57, 50);
        ctx.font = "50x Georgia";
        ctx.fillText(x.toString(), 85, 100);
        //  setInterval(heartRateGen, 1500);
    }

    function fileReader() {
        var heartFiles;
        $.ajax({
            url: "https://github.com/cosc345/emulator/testfiles/heartfiles.git",
            success: function (txt) {
                heartFiles = txt.split('<A href="');
            }
        });

        $(heartFiles).each(function () {
            if (this.indexOf('.txt') > -1) {
                fileList.push(this);
            }
        });
        for (i = 0; i < fileList.length; i++) {
            fileList[i] = fileList[i].split('">')[0];

        }

        for (i = 0; i < fileList.length; i++) {
            $('#idLoadHere').load(fileList[i]);
        }
    }

    function heartRateReader() {
        var random = Math.floor(Math.random(0 + (fileList.length - 1) + 1));
        var selFile = fileList[random];
        var output = [];
        $.get(selFile, function (data) {
            var output = data.split();
            console.log(output);
        });

        return output;



    }



    function heartRateGen(output) {
        $(textarea).val(output);
        console.log(output);
        for (i = output.length; i === 0; i--) {
            if (heartRateReader() < 40) {
                $(textarea).val(heartRateReader() + " is a dangerous heartbeat, call 111 immediately");
            } else {
                if (heartRateReader === 0) {
                    $(textarea).val(heartRateReader() + " Emergency");
                }
                else {
                    if (heartRateReader > 220) {
                        $(textarea).val(heartRateReader() + " is a dangerous heartbeat, rest immediately");
                    }
                }
            }
        }

        function clear() {
            var canvas = document.getElementById("emulatorCanvas");
            var ctx = canvas.getContext("2d");
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.restore();
        }
    }
    });