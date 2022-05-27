// //Array für die Sounds
// var sound: HTMLAudioElement[] = [new Audio("./DrumPad/A.mp3"),
// new Audio("./DrumPad/C.mp3"),
// new Audio("./DrumPad/F.mp3"),
// new Audio("./DrumPad/G.mp3"),
// new Audio("./DrumPad/hihat.mp3"),
// new Audio("./DrumPad/kick.mp3"),
// new Audio("./DrumPad/snare.mp3"),
// new Audio("./DrumPad/laugh-1.mp3"),
// new Audio("./DrumPad/laugh-2.mp3"),
// new Audio("")];
// //globale Variablen 
// var interval: any;
// var y: number = 0;
// var index: number = 0;
// var playIndex: boolean = false;
// var state: number = 0;
// var stateMix: number = 0;
// var index2: number;
// var index3: number;
// var clickCounter: number = 0;
// var clickCounterMix: number = 0;
// var randomIndex: boolean = false;
// //Event Listener
// window.addEventListener("load", function () {
//   document.querySelector(".but0").addEventListener("click", function (): void {
//     mainfunction(0);
//   });
//   document.querySelector(".but1").addEventListener("click", function (): void {
//     mainfunction(1);
//   });
//   document.querySelector(".but2").addEventListener("click", function (): void {
//     mainfunction(2);
//   });
//   document.querySelector(".but3").addEventListener("click", function (): void {
//     mainfunction(3);
//   });
//   document.querySelector(".but4").addEventListener("click", function (): void {
//     mainfunction(4);
//   });
//   document.querySelector(".but5").addEventListener("click", function (): void {
//     mainfunction(5);
//   });
//   document.querySelector(".but6").addEventListener("click", function (): void {
//     mainfunction(6);
//   });
//   document.querySelector(".but7").addEventListener("click", function (): void {
//     mainfunction(7);
//   });
//   document.querySelector(".but8").addEventListener("click", function (): void {
//     mainfunction(8);
//   });
//   document.querySelector("#mix").addEventListener("click", function (): void {
//     randomMix();
//   });
//   document.querySelector("#play").addEventListener("click", player);
// });
// //Zentralfunktion Sound abspielen
// function mainfunction(x: number): void {
//   // sound[x].play();
//   if (randomIndex == true) {
//     x = Math.floor(Math.random() * 8);
//     console.log(x);
//   }
//   if (playIndex) {
//     x++;
//     console.log(x);
//     interval = setInterval(mainfunction, 500);
//   }
//   if (index == 9) {
//     x = 0;
//   }
//   if (clickCounter == 2) {
//     sound[x].pause();
//     clickCounter = 0;
//     x = 0;
//   }
//   if (clickCounterMix == 2) {
//     sound[x].pause();
//     clickCounterMix = 0;
//   }
// }
// //Ändert das Play Icon je nach Klick + aktiviert die Mainfunktion mit dem Zähler
// function player(): void {
//   clickCounter++;
//   playIndex = true;
//   var x: number = 0;
//   console.log("player");
//   if (state == 0) {
//     document.getElementById("play").classList.remove("fa-play");
//     document.getElementById("play").classList.add("fa-stop");
//     state = 1;
//     // interval = setInterval(function(): void {mainfunction(0); }, 500);
//     mainfunction(0);
//   }
//   else {
//     document.getElementById("play").classList.remove("fa-stop");
//     document.getElementById("play").classList.add("fa-play");
//     state = 0;
//     clearInterval(interval);
//   }
// }
// // Funktion Random Mix -> ruft Hauptfunktion auf und gibt Zustand weiter
// function randomMix(): void {
//   clickCounterMix++;
//   randomIndex = true;
//   if (stateMix == 0) {
//     document.getElementById("mix").classList.remove("fa-shuffle");
//     document.getElementById("mix").classList.add("fa-stop");
//     stateMix = 1;
//     console.log("mix");
//     interval = setInterval(mainfunction, 500);
//   }
//   else {
//     document.getElementById("mix").classList.remove("fa-stop");
//     document.getElementById("mix").classList.add("fa-shuffle");
//     stateMix = 0;
//     clearInterval(interval);
//     index = 0;
//     randomIndex = false;
//   }
// }
//# sourceMappingURL=test.js.map