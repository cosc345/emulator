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
    //modified version of hhttp://www.html5canvastutorials.com/kineticjs/html5-canvas-kineticjs-text-tutorial//
    var cleared = false;// for clearing only
    var layer = new Kinetic.Layer();
    var stage = new Kinetic.Stage({
        container: 'container',
        width: 400,
        height: 400
    });

    var complexText = new Kinetic.Text({
        x: 10,
        y: 10,
        text: 'Health Application',
        fontSize: 20,
        fontFamily: 'Calibri',
        fill: '#555',
        width: 380,
        padding: 20,
        align: 'center'
    });
    var rect = new Kinetic.Rect({
        x: 10,
        y: 10,
        stroke: '#555',
        strokeWidth: 5,
        fill: '#ddd',
        width: 380,
        height: complexText.height(),
        shadowColor: 'black',
        shadowBlur: 10,
        shadowOffset: {x: 10, y: 10},
        shadowOpacity: 0.2,
        cornerRadius: 10
    });
    //if the kinetic layer isn't cleared
    rect.on("mousedown", function () {
        if (!cleared)
        {
            layer.clear();
            cleared = true;
        }
        else
        {
            layer.draw();
            cleared = false;
        }

    })
    layer.add(rect);
    layer.add(complexText);


    stage.add(layer);

});