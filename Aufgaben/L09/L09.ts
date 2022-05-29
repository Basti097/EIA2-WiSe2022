//Array für die Sounds
var sound: HTMLAudioElement[] = [new Audio("./DrumPad/A.mp3"),
new Audio("./DrumPad/C.mp3"),
new Audio("./DrumPad/F.mp3"),
new Audio("./DrumPad/G.mp3"),
new Audio("./DrumPad/hihat.mp3"),
new Audio("./DrumPad/kick.mp3"),
new Audio("./DrumPad/snare.mp3"),
new Audio("./DrumPad/laugh-1.mp3"),
new Audio("./DrumPad/laugh-2.mp3"),
new Audio("")];

//globale Variablen 
var interval: number;
var index: number = 0;
var playIndex: boolean = false;
var state: number = 0;
var stateMix: number = 0;
var clickCounter: number = 0;
var clickCounterMix: number = 0;
var randomIndex: boolean = false;

//Event Listener
window.addEventListener("load", function (): void {
  document.querySelector(".but0").addEventListener("click", getButtonId);
  document.querySelector(".but1").addEventListener("click", getButtonId);
  document.querySelector(".but2").addEventListener("click", getButtonId);
  document.querySelector(".but3").addEventListener("click", getButtonId);
  document.querySelector(".but4").addEventListener("click", getButtonId);
  document.querySelector(".but5").addEventListener("click", getButtonId);
  document.querySelector(".but6").addEventListener("click", getButtonId);
  document.querySelector(".but7").addEventListener("click", getButtonId);
  document.querySelector(".but8").addEventListener("click", getButtonId);
  document.querySelector("#play").addEventListener("click", player);
  document.querySelector("#mix").addEventListener("click", randomMix);
});


//Zentralfunktion Sound abspielen
function mainfunction(): void {

  console.log(index);
  sound[index].play();

  if (randomIndex == true) {
    index = Math.floor(Math.random() * 8);
  }

  if (playIndex == true) {
    index++;
  }

  if (index == 9) {
    index = 0;
  }

  if (clickCounter == 2) {
    sound[index].pause();
    clickCounter = 0;
    index = 0;
  }

  if (clickCounterMix == 2) {
    sound[index].pause();
    clickCounterMix = 0;
  }
}



//Welcher Button wird gedrückt
function getButtonId(): void {
  index = parseFloat(document.querySelector("button:hover").getAttribute("id"));
  mainfunction();
}

//Ändert das Play Icon je nach Klick + aktiviert die Mainfunktion mit dem Zähler
function player(): void {
  clickCounter++;
  playIndex = true;

  if (state == 0) {
    document.getElementById("play").classList.remove("fa-play");
    document.getElementById("play").classList.add("fa-stop");
    state = 1;
    interval = setInterval(mainfunction, 500);
  }

  else {
    document.getElementById("play").classList.remove("fa-stop");
    document.getElementById("play").classList.add("fa-play");
    state = 0;
    clearInterval(interval);
  }
}

// Funktion Random Mix -> ruft Hauptfunktion auf und gibt Zustand weiter
function randomMix(): void {
  clickCounterMix++;
  randomIndex = true;

  if (stateMix == 0) {
    document.getElementById("mix").classList.remove("fa-shuffle");
    document.getElementById("mix").classList.add("fa-stop");
    stateMix = 1;
    interval = setInterval(mainfunction, 500);
  }

  else {
    document.getElementById("mix").classList.remove("fa-stop");
    document.getElementById("mix").classList.add("fa-shuffle");
    stateMix = 0;
    clearInterval(interval);
    index = 0;
    randomIndex = false;
  }



}


















