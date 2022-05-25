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
var interval;
var index: number = 0;
var playIndex: boolean = false;
var state: number = 0;
var index2;
var clickCounter: number = 0;
var randomIndex: boolean = false;

//Event Listener
window.addEventListener('load', function () {
  document.querySelector(".but0").addEventListener('click', getButtonId);
  document.querySelector(".but1").addEventListener('click', getButtonId);
  document.querySelector(".but2").addEventListener('click', getButtonId);
  document.querySelector(".but3").addEventListener('click', getButtonId);
  document.querySelector(".but4").addEventListener('click', getButtonId);
  document.querySelector(".but5").addEventListener('click', getButtonId);
  document.querySelector(".but6").addEventListener('click', getButtonId);
  document.querySelector(".but7").addEventListener('click', getButtonId);
  document.querySelector(".but8").addEventListener('click', getButtonId);
  document.querySelector("#play").addEventListener('click', player);
  document.querySelector("#mix").addEventListener('click', randomMix);
})

//Zentralfunktion Sound abspielen
function mainfunction() {
  
  console.log(index);
  sound[index].play();
  

  if (randomIndex == true) {
    index = Math.floor(Math.random() * 8);
    
  }

  if (playIndex == true) {
    index++;

  }

  if (index == sound.length) {
    index = 0;
  }

  if (clickCounter == 2) {
    sound[index].pause();
    clickCounter = 0
    clearInterval(interval)
    index = 0;
  }
}

//Welcher Button wird gedrückt
function getButtonId() {
  index2 = document.querySelector("button:hover").getAttribute("id");
  index = index2;
  mainfunction();
}

//Ändert das Play Icon je nach Klick + aktiviert die Mainfunktion mit dem Zähler
function player() {
  clickCounter++
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
  }
}

// Funktion Random Mix -> ruft Hauptfunktion auf und gibt Zustand weiter
function randomMix() {
  clickCounter++
  document.getElementById("play").classList.remove("fa-play");
  document.getElementById("play").classList.add("fa-stop");
  interval = setInterval(mainfunction, 500);
  randomIndex = true;
  if(clickCounter == 2){
    sound[index].pause();
    clearInterval(interval);
  }
  mainfunction();

}













