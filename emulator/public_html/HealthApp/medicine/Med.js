$(document).ready(function () {
    var canvas = document.getElementById('emulatorCanvas');
    var ctx = canvas.getContext("2d");
   var textarea = document.getElementById("text");
     
    var x;
    setInterval(draw, 1500);
    function draw(){
        drawHeartRate(ctx, x);
    }
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
var Medicine = [{
    "name":"Levothyroxine",
    "dosage":"150mg daily",
    "practice":"Churton Park Medical Centre"
},
{
    "name":"Carbomizole",
    "dosage":"12 x 100mg tablets daily",
    "practice":"Johnsonville Medical Centre"
},
{
    "name":"Codral",
    "dosage":"10ml every 4 hours as needed",
    "practice":"Countdown"
}];
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


