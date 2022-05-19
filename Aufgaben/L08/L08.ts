var sounds: HTMLAudioElement[] = [new Audio("./DrumPad/A.mp3"), 
                                  new Audio("./DrumPad/C.mp3"),
                                  new Audio("./DrumPad/F.mp3"),
                                  new Audio("./DrumPad/G.mp3"),
                                  new Audio("./DrumPad/hihat.mp3"),
                                  new Audio("./DrumPad/kick.mp3"),
                                  new Audio("./DrumPad/laugh-1.mp3"),
                                  new Audio("./DrumPad/laugh-2.mp3"),
                                  new Audio("./DrumPad/snare.mp3")];

var playAr: HTMLAudioElement[] = [new Audio("./DrumPad/kick.mp3"),
                                  new Audio("./DrumPad/snare.mp3"),
                                  new Audio("./DrumPad/hihat.mp3"),
                                  new Audio("./DrumPad/kick.mp3"),
                                  new Audio("./DrumPad/snare.mp3"),
                                  new Audio("./DrumPad/hithat.mp3"),
                                  new Audio("./DrumPad/kick.mp3"),
                                  new Audio("./DrumPad/snare.mp3"),
                                  new Audio("./DrumPad/snare.mp3"),
                                  new Audio("./DrumPad/kick.mp3"),
                                  new Audio("./DrumPad/snare.mp3"),
                                  new Audio("./DrumPad/snare.mp3"),
                                  new Audio("./DrumPad/laugh-1.mp3")];
var Counter;
var CounterPlay: number = 0;

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

});

function playsample(){
  Counter= document.querySelector("button:hover").getAttribute("id");
  sounds[Counter].play();
}

function playplaylist() {
  setInterval(playplaylist2,1000);
}

function playplaylist2() {
  playAr[CounterPlay].play();
  CounterPlay++
}














