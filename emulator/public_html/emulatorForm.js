/* 
This page is use to load processed information from index.html
It select the right file and load that file on to the canvas in html
 */

$('#load').on('click', function(){
    
        var appSelected = $('#AppSelection :selected');
	var appText = appSelected.text();
	$('#text').val("Loading " + appText);
	
        
 });


