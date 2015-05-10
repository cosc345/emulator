/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function (){
    var x = getRandomInt(60, 99);
    max = 100;
    var canvas = document.getElementById("emulatorCanvas");
    var ctx = canvas.getContext("2d");


    function incrementCounter() {
        ctr.innerHTML = x;
        x = getRandomInt(60, 99);
        if (x < max)
            setTimeout(incrementCounter, 1500);

    }

    incrementCounter();
});
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}