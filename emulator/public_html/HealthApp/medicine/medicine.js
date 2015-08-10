/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function () {

    var message = "Loading the medicine notification";
    $('#text').val(message);
    console.log(message);
    
//    output = getJson(output);
//    var users =[
//        {
//            "name":"Levothyroxine",
//            "dosage":"150mg daily",
//            "practice":"Churton Park Medical Centre"
//        },
//        {
//            "name":"Panadol",
//            "dosage":"2 tablets every 4-6 hours as needed",
//            "practice":"Medical Centre"
//        },
//        {
//            "name":"Codral",
//            "dosage":"10ml every 4 hours as needed",
//            "practice":"Countdown"
//        },
//        {
//            "name":"Carbomizole",
//            "dosage":"12 x 10mg tablets daily",
//            "practice":"Johnsonville Medical Centre"
//        
//        }];

 
    var context;
    var d;
    var str;
    function getClock()
    {
        //Get Current Time
        d = new Date();
        str = prefixZero(d.getHours(), d.getMinutes(), d.getSeconds());

        //Get the Context 2D or 3D
        var canvas = document.getElementById("emulatorCanvas");
        var context = canvas.getContext("2d");

        context.clearRect(0, 0, canvas.width, canvas.height);
        context.font = "35px Arial";
        context.fillStyle = "green";
        context.fillText(str, 35, 90);

    }

    //sets the digital format of the clock
    function prefixZero(hour, min, sec)
    {
        var curTime;
        if (hour < 10)
            curTime = "0" + hour.toString();
        else
            curTime = hour.toString();

        if (min < 10)
            curTime += ":0" + min.toString();
        else
            curTime += ":" + min.toString();

        if (sec < 10)
            curTime += ":0" + sec.toString();
        else
            curTime += ":" + sec.toString();
        return curTime;
    }
    
    setInterval(getClock, 1000);
    // $.getJSON('data.json', function (data) {
//   function getJson(output1){
////        var mydata = JSON.parse(data);
////        console.log("reading json")
//        output1 = + users[0].name + "</br>" + users[0].dosage + "</br>" + users[0].practice;
//        
//        return output1;
//        
//    }
     setInterval(function () {
        alert("Take 2 tablets of Codral right now")
    }, 5000);
     

    //});
    
    

    //digital clock from http://www.anthoniraj.com/digital-clock-using-html5-canvas-and-javascript-js/

});

