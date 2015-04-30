/* 
This page is use to load processed information from index.html
It select the right file and load that file on to the canvas in html
 */

$('#load').on('click', function(){
    //if the "load" button is click then display app's text and load the app on 
    //to the canvas
        var appSelected = $('#AppSelection :selected');
	var appText = appSelected.text();
        var file = appSelected.attr("value");
        var message = "Loading " + appText + " on to the emulator";
	$('#text').val(message);
        console.log(message);
        $.getScript(file);
        

        
 });


