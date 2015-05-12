/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function () {
    var x = getRandomInt(60, 99);
    max = 100;
    // this code is from paperjs website
    var canvas = document.getElementById('emulatorCanvas');
    // Create an empty project and a view for the canvas:
    paper.setup(canvas);
    // Create a Paper.js Path to draw a line into it:
    var path = new paper.Path();
    // Give the stroke a color
    path.strokeColor = 'black';
    var start = new paper.Point(100, 100);
    // Move to start and draw a line from there
    path.moveTo(start);
    // Note that the plus operator on Point objects does not work
    // in JavaScript. Instead, we need to call the add() function:
    path.lineTo(start.add([200, -50]));
    // Draw the view now:
    paper.view.draw();


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
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}