/* 
Just testing the emulator
 */


$(document).ready(function () {
   
        var text = "Starting the test.";
        var textarea = document.getElementById("text");
        $(textarea).val(text);
        console.log(text);
        var canvas = document.getElementById("emulatorCanvas");
        var ctx = canvas.getContext("2d");
        var imageObj = new Image();
        imageObj.src = "http://msktodd.weebly.com/uploads/2/2/3/6/2236149/19608_orig.gif";
    

      imageObj.onload = function() {
       ctx.drawImage(imageObj, 0, 0, imageObj.width,    imageObj.height,    // source rectangle
                   0, 0, canvas.width, canvas.height)  // destination rectangle
      };
      
});