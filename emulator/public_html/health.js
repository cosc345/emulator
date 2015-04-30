/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function () {
   
        var text = "Starting the Health App.";
        var textarea = document.getElementById("text");
        $(textarea).val(text);
        var canvas = document.getElementById("emulatorCanvas");
        var ctx = canvas.getContext("2d");
        var imageObj = new Image();
        imageObj.src = "http://www.igeeksblog.com/wp-content/uploads/Track-Steps-Walking-Distance-Using-iPhone-Health-App-On-iOS-8.jpg";
    

      imageObj.onload = function() {
       ctx.drawImage(imageObj, 0, 0, imageObj.width,    imageObj.height,    // source rectangle
                   0, 0, canvas.width, canvas.height)  // destination rectangle
      };
      
});