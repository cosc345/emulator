/* 
 *For testing the emulator only
 */

$(document).ready(function (){
    var text = "Starting the Health test.";
    var textarea = document.getElementById("text");
    $(textarea).val(text);
    console.log(text);
    var canvas = document.getElementById("emulatorCanvas");
    var ctx = canvas.getContext("2d");
    var imageObj = new Image();
    $(textarea).val("Loading the test image");
    imageObj.src = "HealthApp/smartwatch.jpg";
   




    imageObj.onload = function () {
        ctx.drawImage(imageObj, 0, 0, imageObj.width, imageObj.height, // source rectangle
                0, 0, canvas.width, canvas.height)  // destination rectangle
    };
    function clear() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }


});
