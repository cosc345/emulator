/* 
Just testing the emulator to see if the image loaded or not
 */


$(document).ready(function () {
   
        var text = "Starting the test.";
        var textarea = document.getElementById("text");
        $(textarea).val(text);
        console.log(text);
        var canvas = document.getElementById("emulatorCanvas");
        var ctx = canvas.getContext("2d");
        var imageObj = new Image();
        imageObj.src = "loading.png";
    

      imageObj.onload = function() {
       ctx.drawImage(imageObj, 0, 0, imageObj.width,    imageObj.height,    // source rectangle
                   0, 0, canvas.width, canvas.height)  // destination rectangle
      };
      
});