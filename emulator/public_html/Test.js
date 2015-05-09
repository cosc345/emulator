/* 
Just testing the emulator
 */


$(document).ready(function () {

    var text = "Starting the test.";
    var textarea = document.getElementById("text");
    $(textarea).val(text);
    console.log(text);


    var cleared = false;// for clearing only
    var layer = new Kinetic.Layer();
    var stage = new Kinetic.Stage({
        container: 'container',
        width: 400,
        height: 400
    });

    var complexText = new Kinetic.Text({
        x: 10,
        y: 60,
        text: 'This is just for testing only',
        fontSize: 20,
        fontFamily: 'Calibri',
        fill: '#555',
        width: 380,
        padding: 20,
        align: 'center'
    });
    var rect = new Kinetic.Rect({
        x: 10,
        y: 60,
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


    imageObj.src = 'http://msktodd.weebly.com/uploads/2/2/3/6/2236149/19608_orig.gif';

});