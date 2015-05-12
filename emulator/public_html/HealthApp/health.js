/* 
 Testing Health app. At the moment it can only load an image onto the canvas
 */

$(document).ready(function () {

    var text = "Starting the Health App.";
    var textarea = document.getElementById("text");
    $(textarea).val(text);
    console.log(text);
    var canvas = document.getElementById("emulatorCanvas");
    var ctx = canvas.getContext("2d");
    var imageObj = new Image();
    imageObj.src = "HealthApp/create_thumb.png";
    var myTimer = setInterval(function () {
        clear()
    }, 2000);



    imageObj.onload = function () {
        ctx.drawImage(imageObj, 0, 0, imageObj.width, imageObj.height, // source rectangle
                0, 0, canvas.width, canvas.height)  // destination rectangle
    };
    function clear() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }


});

function heartRateSim() {
    var x = getRandomInt(60, 99);
    max = 100;
    function incrementCounter() {
        ctr.innerHTML = x;
        x = getRandomInt(60, 99);
        if (x < max)
            setTimeout(incrementCounter, 1500);

    }

    incrementCounter();
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}