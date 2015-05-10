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
        imageObj.src = "LCC.png";
    

      imageObj.onload = function() {
       ctx.drawImage(imageObj, 0, 0, imageObj.width,    imageObj.height,    // source rectangle
                   0, 0, canvas.width, canvas.height)  // destination rectangle
      };
      
});