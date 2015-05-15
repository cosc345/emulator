/* 
 *This simulate the heartrate
 */
var canvas = document.getElementById('emulatorCanvas');
var textarea = document.getElementById("text");
var x;

$(document).ready(function () {
    paper.setup(canvas);

    // Create a Paper.js Path to draw a line into it:
    var text = "Displaying heartrate.";
    $(textarea).val(text);
    console.log(text);
    x = getRandomInt(50, 99);
    function incrementCounter() {
        $(textarea).val(x);
        if (chance() === 0) {
            x = getRandomInt(50, 99);
            console.log("Heartrate is between 50 to 100");
            setTimeout(incrementCounter, 1500);
        } else {
            console.log("Heartrate is beyone 50 or 100");
            x = getRandomInt(1, 200);


            if (x < 50) {
                x = getRandomInt(1, 50);
                setInterval(function () {
                    $(textarea).val(x + " is a dangerous heartbeat, call 111 immediately");
                }, 1500);

            } else {
                if (x > 100) {
                    x = getRandomInt(100, 200);
                    setInterval(function () {
                        $(textarea).val(x + " is a dangerous heartbeat, call 111 immediately");
                    }, 1500);

                }
            }
        }
    }

    
    incrementCounter();
    function chance() {
    xchance = (Math.random() < 0.99 ? 0 : 1);
    console.log("chance is " + xchance);
    return xchance;
}


});
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function onResize(event) {
    // Whenever the window is resized, recenter the path:
    path.position = view.center;
};

