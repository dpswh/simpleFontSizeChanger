
//* Object Declarations
const affectElem = $(".affectElem");
let affectElemFS = parseInt($(".affectElem").css("font-size"));
const decreaseBttn = $("#decreaseFontSize");
const increaseBttn = $("#increaseFontSize");
const pixelTrack = $(".pixelTracker");
const limitMsg = $(".limitMessage");
const buttonContainer = $(".button-container");
var audio = new Audio("sounds/moanCut.mp3");

//* Functions
function sizeLimit() {
    if (affectElemFS === 128){
        affectElem.text("Uh oh!");
        affectElemFS -= 8;
        limitMsg.text("Max font size reached.");
        buttonContainer.css("background-color", "red");
        $("h3").css("color", "white");

        audio.play();
        audio.currentTime = 0;
    } else if (affectElemFS === 8){
        affectElem.text("Uh oh!");
        affectElemFS += 8;
        limitMsg.text("Max font size reached.");
        buttonContainer.css("background-color", "red");
        $("h3").css("color", "white");

        audio.play();
        audio.currentTime = 0;
    } else {
        affectElem.text("Hello.");
        limitMsg.text("");
        audio.pause();
        buttonContainer.css("background-color", "#e0e0e0");
        $("h3").css("color", "black");
    }
}

decreaseBttn.click(function() {
    affectElemFS -= 8;
    affectElem.css("font-size", affectElemFS + "px");

    pixelTrack.text = affectElemFS;
    pixelTrack.html(affectElemFS + "px");

    sizeLimit();
})

increaseBttn.click(function() {
    affectElemFS += 8;
    affectElem.css("font-size", affectElemFS + "px");
    
    pixelTrack.text = affectElemFS;
    pixelTrack.html(affectElemFS + "px");

    sizeLimit();
})

pixelTrack.text = affectElemFS;
pixelTrack.html(affectElemFS + "px");