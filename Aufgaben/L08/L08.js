//Array für die Sounds
var sounds = [new Audio("./DrumPad/A.mp3"),
    new Audio("./DrumPad/C.mp3"),
    new Audio("./DrumPad/F.mp3"),
    new Audio("./DrumPad/G.mp3"),
    new Audio("./DrumPad/hihat.mp3"),
    new Audio("./DrumPad/kick.mp3"),
    new Audio("./DrumPad/snare.mp3"),
    new Audio("./DrumPad/laugh-1.mp3"),
    new Audio("./DrumPad/laugh-2.mp3")];
//Array für die Playlist
var playAr = [new Audio("./DrumPad/kick.mp3"),
    new Audio("./DrumPad/snare.mp3"),
    new Audio("./DrumPad/hihat.mp3"),
    new Audio("./DrumPad/kick.mp3"),
    new Audio("./DrumPad/snare.mp3"),
    new Audio("./DrumPad/kick.mp3"),
    new Audio("./DrumPad/kick.mp3"),
    new Audio("./DrumPad/snare.mp3"),
    new Audio("./DrumPad/hihat.mp3"),
    new Audio("./DrumPad/kick.mp3"),
    new Audio("./DrumPad/snare.mp3"),
    new Audio("./DrumPad/snare.mp3"),
    new Audio("./DrumPad/laugh-1.mp3")];
//globale Variablen 
var interval;
var Counter;
var CounterPlay = 0;
var keypressed;
//Event Listener
window.addEventListener('load', function () {
    document.querySelector(".but0").addEventListener('click', playsample);
    document.querySelector(".but1").addEventListener('click', playsample);
    document.querySelector(".but2").addEventListener('click', playsample);
    document.querySelector(".but3").addEventListener('click', playsample);
    document.querySelector(".but4").addEventListener('click', playsample);
    document.querySelector(".but5").addEventListener('click', playsample);
    document.querySelector(".but6").addEventListener('click', playsample);
    document.querySelector(".but7").addEventListener('click', playsample);
    document.querySelector(".but8").addEventListener('click', playsample);
    document.querySelector(".play").addEventListener('click', playplaylist);
    document.addEventListener('keydown', whichkey);
});
//Spielt den Ton bei Klick auf den jeweiligen Button 
function playsample() {
    Counter = document.querySelector("button:hover").getAttribute("id");
    sounds[Counter].play();
}
//Endlos Intervall für das Array der Playlist 
function playplaylist() {
    interval = setInterval(playplaylist2, 500);
}
//Spielt die Playlist (Array) ab 
function playplaylist2() {
    playAr[CounterPlay].play();
    CounterPlay++;
    console.log(CounterPlay);
    if (CounterPlay == playAr.length) {
        clearInterval(interval);
    }
}
//Welche Taste wird gedrückt
function whichkey(e) {
    if (window.event) {
        keypressed = e.keyCode;
        playsamplekey();
    }
    //Wenn x Taste gedrückt wird -> spiele sound y ...
    function playsamplekey() {
        if (keypressed == 49) {
            sounds[0].play();
        }
        else if (keypressed == 50) {
            sounds[1].play();
        }
        else if (keypressed == 51) {
            sounds[2].play();
        }
        else if (keypressed == 52) {
            sounds[3].play();
        }
        else if (keypressed == 53) {
            sounds[4].play();
        }
        else if (keypressed == 54) {
            sounds[5].play();
        }
        else if (keypressed == 55) {
            sounds[6].play();
        }
        else if (keypressed == 56) {
            sounds[7].play();
        }
        else if (keypressed == 57) {
            sounds[8].play();
        }
    }
}
//# sourceMappingURL=L08.js.map