/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function () {

    var message = "Loading the medicine notification";
    $('#text').val(message);
    console.log(message);

    //digital clock from http://www.anthoniraj.com/digital-clock-using-html5-canvas-and-javascript-js/
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

});

$.getJSON('data.json', function(data){
    var output="<ul>";
    for (var i in data.users){
        output+="<li>" + data.users[i].name + "</br>" + data.users[i].dosage + "</br>" + data.users[i].practice+"</li>";
    }
    output+="</ul>";
    
    setInterval(function(){alert(data)},5000);
});
