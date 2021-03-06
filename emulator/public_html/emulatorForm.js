/* 
 This page is use to load processed information from index.html
 It select the right file and load that file on to the canvas in html
 */


var currentApp; //current app that is running
var lastApp; //the last app that was runhing lastApp = current app 

$('#load').on('click', function () {
    //if the "load" button is click then display app's text and load the app on 
    //to the canvas

    var appSelected = $('#AppSelection :selected');
    var appText = appSelected.text();
    var file = appSelected.attr("value");

    var message = "Loading " + appText + " on to the emulator";
    $('#text').val(message);
    console.log(message);
    console.log(file);
    RunningTheApp(file);

});
//This function use to clear canvas for the next application 
function clear() {
    var canvas = document.getElementById("emulatorCanvas");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.restore();
}
//Use this to load file to the emulator
function RunningTheApp(file) {
    
    if (lastApp != null) {
        console.log("Stopping " + currentApp);
        lastApp.stopApp();
        clear();
        lastApp = null;
        currentApp = null;
    }
    currentApp = $.getScript(file, function () {
        console.log("starting " + file);
        lastApp = new AppOb();
        lastApp.runningApp();
    });
    console.log("fetched program");
}
//This is the AppOb containing application object
function AppOb() {


    this.runningApp = function runningApp() {
        console.log("The app will start shortly");
        var canvas = document.getElementById("emulatorCanvas");
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = "white";
        setInterval(console.log("The App is starting"), 100000);
    };
    this.stopApp = function stopApp() {
        console.log("Stopping the App");
        this.init = function () {
            console.log("The App is stopped");
        };
    };
};
