/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
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
	"name" : "insulin",
	"dosage" : "1",
        "total_dosage" : "20",
        "time": "",
	"Direction" : "1 injection after meal."
},
{
        "name" : "Metformin",
	"dosage" : "2",
        "total_dosage" : "20",
        "time": "",
	"direction" : "2 tablets after meal, 3 times a day."
    }];
//var Medicine = {
//    drugs: []
//};

//for (var i in someData) {
//
//    var item = someData[i];
//
//    Medicine.drugs.push({
//        "name": item.name,
//        "dosage": item.dosage,
//        "total_dosage": item.total_dosage,
//        "time": item.time,
//        "direction": item.direction
//    });
//}