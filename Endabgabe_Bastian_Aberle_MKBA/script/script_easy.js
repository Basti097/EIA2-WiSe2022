//Globale Variablen
var difficulty;
var randomindex2;
var easy;
var medium;
var hard;
var blabla;
var pointCount = 0;
var clickCounter = 0;
var translateCounter = 0;
var intervalIndex;
var usedsentence1;
var randomindex;
var chartCount = 0;
var gesamt;
var randomindexold;
//Array für die Sound Files
var effects = [
    new Audio("./sounds/A.mp3"),
    new Audio("./sounds/applause.mp3"),
    new Audio("./sounds/click.mp3"),
    new Audio("./sounds/negative.mp3")
];
//Interval - Funktion zur ständigen überprüfung der Game-Finish - Bedingung 
function intervalCheck() {
    intervalIndex = setInterval(checkFinish, 500);
}
//Objekt -> german = ganzer deutscher Satz, spanisch = ganzer spanischer Satz, single = Einzelne Satzbausteine als Array
var satz = [
    { german: "Hallo, Ich heiße Basti", spanisch: "Hola, me llamo Basti", single: ["Hola,", "me", "llamo", "Basti"] },
    { german: "Ich bin 25 Jahre alt", spanisch: "Tengo 25 años", single: ["Tengo", "25", "años"] },
    { german: "Ich wohne in Furtwangen", spanisch: "Yo vivo en furtwangen", single: ["Yo", "vivo", "en Furtwangen"] },
    { german: "Ich mag Äpfel", spanisch: "Me gustan las manzanas", single: ["Me", "gustan", "las manzanas"] },
    { german: "Ich studiere an der HFU", spanisch: "Yo estudio en la HFU", single: ["Yo", "estudio", "en la", "HFU"] },
    { german: "Ich studiere Medienkonzeption", spanisch: "Estudio la concepción de los medios", single: ["Estudio", "la concepción", "de los", "medios"] },
    { german: "Ich mag Informatik", spanisch: "Me gusta la informatica", single: ["Me", "gusta", "la", "informatica"] },
    { german: "Ich esse in der Mensa.", spanisch: "Voy a comer en la cantina mañana", single: ["Voy", "a comer", "en la", "cantina."] },
    { german: "Bald schreibe ich Prüfungen", spanisch: "Estaré escribiendo exámenes pronto", single: ["Estaré", "escribiendo", "exámenes", "pronto"] },
    { german: "Morgen ist das Sommerfest", spanisch: "El festival de verano es mañana", single: ["El festival", "de verano", "es", "mañana"] },
    { german: "Bald habe ich die Aufgabe fertig", spanisch: "Voy a terminar la tarea pronto", single: ["Voy a", "terminar", "la tarea", "pronto"] },
    { german: "Gestern war schönes wetter", spanisch: "Ayer hizo buen tiempo", single: ["Ayer", "hizo", "buen", "tiempo"] },
    { german: "Ich liebe Apple Produkte", spanisch: "Me encantan los productos de apple", single: ["Me encantan", "los", "productos", "de apple"] },
    { german: "Herr Rausch ist unser EIA Professor", spanisch: "El Sr. Rausch es nuestro profesor de EIA", single: ["El Sr. Rausch", "es", "nuestro", "profesor de EIA"] },
    { german: "Das ist der letzte Satz", spanisch: "Esa es la ultima frase", single: ["Esa", "es", "la ultima", "frase"] }
];
//Funktion zur Erstellung des div's für die Gesamtpunktzahl die am Ende angezeigt wird
function gesamtPunktzahl() {
    let newelement = document.createElement("div");
    newelement.classList.add("gesamtPunktzahl");
    newelement.innerHTML = "Gesamtpunktzahl: " + pointCount + " Punkt(e)";
    var getelement = document.querySelector("#container_diffs");
    getelement.appendChild(newelement);
    document.querySelector("#points").innerHTML = "Sprachlern App";
}
//Funktion zur überprüfung der "finish" - Bedingung 
function checkFinish() {
    //wenn 5 aufgaben richtig abgeschlossen wurden und der Schwierigkeitstufenwert auf 1 (einfach) ist 
    if (translateCounter == 5 && difficulty == 1) {
        //löschen der Aufgaben divs
        const myNode = document.getElementById("container_buttons");
        myNode.innerHTML = "";
        //ändert den Text von zwei Elementen in Glückwunsch + du hast gewonnen
        document.querySelector("#deutsch").innerHTML = "Glückwunsch,";
        document.querySelector("#uebersetzt").innerHTML = "du hast gewonnen!";
        document.querySelector("#chartText").innerHTML = "";
        gesamtPunktzahl();
        //stopt Interval zur generierung von div Gesamtpunktzahl und Prüfung der win-condition
        clearInterval(intervalIndex);
        //sound aufruf für gewonnen
        effects[1].play();
    }
    //wenn 10 Augaben richtig abgeschlossen wurden und der Schwierigkeitsstufen wert auf 2 (mittel) ist
    if (translateCounter == 10 && difficulty == 2) {
        //löschen der Aufgaben divs
        const myNode = document.getElementById("container_buttons");
        myNode.innerHTML = "";
        //ändert den Text von zwei Elementen in Glückwunsch + du hast gewonnen
        document.querySelector("#deutsch").innerHTML = "Glückwunsch,";
        document.querySelector("#uebersetzt").innerHTML = "du hast gewonnen!";
        document.querySelector("#chartText").innerHTML = "";
        //stopt Interval zur generierung von div Gesamtpunktzahl und Prüfung der win-condition
        clearInterval(intervalIndex);
        gesamtPunktzahl();
        //sound aufruf für gewonnen
        effects[1].play();
    }
    //wenn 15 Aufgabe richtig abgeschlossen wurden und der Schwierigkeitsstufen wert auf 3 (schwierig) ist
    if (translateCounter == 15 && difficulty == 3) {
        //löschen der Aufgaben divs
        const myNode = document.getElementById("container_buttons");
        myNode.innerHTML = "";
        //ändert den Text von zwei Elementen in Glückwunsch + du hast gewonnen
        document.querySelector("#deutsch").innerHTML = "Glückwunsch,";
        document.querySelector("#uebersetzt").innerHTML = "du hast gewonnen!";
        document.querySelector("#chartText").innerHTML = "";
        //stopt Interval zur generierung von div Gesamtpunktzahl und Prüfung der win-condition
        clearInterval(intervalIndex);
        gesamtPunktzahl();
        //sound aufruf für gewonnen
        effects[1].play();
    }
}
//Funktion zur Erstellung der Schwierigkeits - divs (in einer Schleife)
function loadDifficulty() {
    for (let index = 0; index < 3; index++) {
        let newelement = document.createElement("div");
        //gibt div eine klasse
        newelement.classList.add("diffs");
        //gibt divs unterschiedliche ids
        newelement.setAttribute("id", "dif" + index);
        //hängt divs an den container_diffs + erzeugt diese
        var getelement = document.querySelector("#container_diffs");
        getelement.appendChild(newelement);
    }
    //Fügt den divs ihren Text hinzu
    document.querySelector("#dif0").innerHTML = "Einfach";
    document.querySelector("#dif1").innerHTML = "Mittel";
    document.querySelector("#dif2").innerHTML = "Schwer";
}
//Funktionen die starten, wenn die Seite geöffnet wird
window.onload = function () {
    loadDifficulty();
    intervalCheck();
};
//Funktion zur erstellung der Random Wörter - divs
function randomSingle() {
    //generiert eine Zufallszahl mit der Länge des Arrays im Objekt + gibt ihn in sichtbaren HTML Element aus
    randomindex = Math.floor(Math.random() * satz.length);
    document.querySelector("#deutsch").innerHTML = satz[randomindex].german;
    //if bedingung -> für jeweilige Schwierigkeitsstufe wird der Text im element chartText gefüllt
    if (difficulty == 1 && chartCount < 1) {
        document.querySelector("#chartText").innerHTML = "Frage 0 von 5";
    }
    if (difficulty == 2 && chartCount < 1) {
        document.querySelector("#chartText").innerHTML = "Frage 0 von 10";
    }
    if (difficulty == 3 && chartCount < 1) {
        document.querySelector("#chartText").innerHTML = "Frage 0 von 15";
    }
    //for schleife zum erstellen der einzelnen divs
    for (let index = 0; index < satz[randomindex].single.length; index++) {
        var newelement = document.createElement("div");
        newelement.innerHTML = satz[randomindex].single[index];
        //fügt eine Klasse und verschiedene ID's dem Element hinzu
        newelement.classList.add("woerter");
        newelement.setAttribute("id", "div" + index);
        //Wo kommen die divs hin und das erstellen der divs
        var getelement = document.querySelector("#container_buttons");
        getelement.appendChild(newelement);
        for (let index = getelement.children.length; index >= 0; index--) {
            getelement.appendChild(getelement.children[Math.random() * index | 0]);
        }
    }
}
//addiert einen punkt und füllt die Punktezahl um 1
function addPoint() {
    pointCount++;
    document.querySelector("#points").innerHTML = pointCount.toString() + " Punkt(e)";
}
//subtrahiert einen punkt
function subPoint() {
    //zieht der pointCount Variable einen Punkt ab
    pointCount--;
    //aktualisiert den Punktestand
    document.querySelector("#points").innerHTML = pointCount.toString() + " Punkt(e)";
    if (pointCount == -1) {
        pointCount = 0;
        document.querySelector("#points").innerHTML = pointCount.toString() + " Punkt(e)";
    }
}
//Event Listener für click -> auf <div> erzeugte Elemente + container_buttons
window.addEventListener("load", function () {
    document.querySelector("#container_buttons").addEventListener("click", clicker);
    document.querySelector("#dif0").addEventListener("click", deleteDif);
    document.querySelector("#dif1").addEventListener("click", deleteDif);
    document.querySelector("#dif2").addEventListener("click", deleteDif);
});
//löscht die verschiedenen erzeugten divs
function deleteDif() {
    //nimmt den geklickten text content von dem random Wort und fügt ihn in eine Variable ein
    let stringClicked1 = document.querySelector(".diffs:hover").textContent;
    // fügt der Variable difficulty ihren "Schwierigkeitswert" zu (einfach)
    if (stringClicked1 == "Einfach") {
        difficulty = 1;
        const myNode = document.getElementById("container_diffs");
        myNode.innerHTML = "";
        randomSingle();
    }
    // fügt der Variable difficulty ihren "Schwierigkeitswert" zu (mittel)
    if (stringClicked1 == "Mittel") {
        difficulty = 2;
        const myNode = document.getElementById("container_diffs");
        myNode.innerHTML = "";
        randomSingle();
    }
    // fügt der Variable difficulty ihren "Schwierigkeitswert" zu (schwer)
    if (stringClicked1 == "Schwer") {
        difficulty = 3;
        const myNode = document.getElementById("container_diffs");
        myNode.innerHTML = "";
        randomSingle();
    }
}
//Funktion für das zählen der Clicks -> jeweiliger Aufruf der richtigen checkOrder Funktion
function clicker() {
    clickCounter++;
    //wenn zum 1. mal geklickt wird -> öffne funktion checkOrder1
    if (clickCounter == 1) {
        randomindexold = randomindex;
        checkOrder1();
    }
    //wenn zum 2. mal geklickt wird -> öffne funktion checkOrder2
    if (clickCounter == 2) {
        randomindexold = randomindex;
        checkOrder2();
    }
    //wenn zum 3. mal geklickt wird -> öffne funktion checkOrder3 
    if (clickCounter == 3) {
        checkOrder3();
        //wenn die länge des Arrays von einzelnen Worten gleich 3 ist
        if (satz[randomindex].single.length == 3) {
            // +1 auf den Counter der die abgeschlossenen Aufgaben zählt
            translateCounter++;
            changeChart();
            // spielt completet sound ab
            effects[0].play();
            //setzt den Click Counter zurück auf 0
            clickCounter = 0;
            //entfernt die erzeugten div elemente
            const myNode = document.getElementById("container_buttons");
            myNode.innerHTML = "";
            randomindexold = randomindex;
            removeSingleElement();
            randomSingle();
        }
    }
    //wenn zum 4. mal geklickt wird -> öffne funktion checkOrder4 
    if (clickCounter == 4) {
        checkOrder4();
        //wenn die länge des Arrays von einzelnen Worten gleich 4 ist
        if (satz[randomindex].single.length == 4) {
            // +1 auf den Counter der die abgeschlossenen Aufgaben zählt
            translateCounter++;
            //setzt den Click Counter zurück auf 0
            clickCounter = 0;
            //entfernt die erzeugten div elemente
            const myNode = document.getElementById("container_buttons");
            myNode.innerHTML = "";
            // spielt completet sound ab
            effects[0].play();
            //ruft die funktion erneut auf um neue Übersetzungsaufgabe anzuzeigen
            randomindexold = randomindex;
            removeSingleElement();
            randomSingle();
            changeChart();
        }
    }
    //Prüft die Ordnung des ersten geklickten Worts
    function checkOrder1() {
        //speichert den gehoverten (geklickten) Text Inhalt in einer Variable ab
        let stringClicked1 = document.querySelector(".woerter:hover").textContent;
        //speichert die erste Stelle der richtigen Reihenfolge aus dem Array in einer Variable ab
        let stringArray1 = satz[randomindex].single[0];
        //wenn der geklickte Text dem Text aus dem Array an der 1. Stelle entspricht
        if (stringClicked1 == stringArray1) {
            //speichert ID in x und löscht dieses DIV Element dann beim richtigen klick
            let x = document.querySelector(".woerter:hover").getAttribute("id");
            const myNode = document.getElementById(x);
            myNode.innerHTML = "";
            //spielt click sound ab
            effects[2].play();
            displayWord1();
            addPoint();
        }
        else {
            //spiele wrong sound
            effects[3].play();
            clickCounter--;
            alert("Falsche Antwort!");
            subPoint();
        }
    }
    //Prüft die Ordnung des zweiten geklickten Worts
    function checkOrder2() {
        //speichert den gehoverten (geklickten) Text Inhalt in einer Variable ab
        let stringClicked2 = document.querySelector(".woerter:hover").textContent;
        //speichert die zweite Stelle der richtigen Reihenfolge aus dem Array in einer Variable ab
        let stringArray2 = satz[randomindex].single[1];
        //wenn der geklickte Text dem Text aus dem Array an der 2. Stelle entspricht
        if (stringClicked2 == stringArray2) {
            //speichert ID in x und löscht dieses DIV Element dann beim richtigen klick
            let x = document.querySelector(".woerter:hover").getAttribute("id");
            const myNode = document.getElementById(x);
            //spielt click sound ab
            effects[2].play();
            myNode.innerHTML = "";
            displayWord2();
            addPoint();
        }
        else {
            //spiele wrong sound
            effects[3].play();
            clickCounter--;
            alert("Falsche Antwort!");
            subPoint();
        }
    }
    //Prüft die Ordnung des dritten geklickten Worts
    function checkOrder3() {
        //speichert den gehoverten (geklickten) Text Inhalt in einer Variable ab
        let stringClicked3 = document.querySelector(".woerter:hover").textContent;
        //speichert die zweite Stelle der richtigen Reihenfolge aus dem Array in einer Variable ab
        let stringArray3 = satz[randomindex].single[2];
        //wenn der geklickte Text dem Text aus dem Array an der 2. Stelle entspricht
        if (stringClicked3 == stringArray3) {
            //speichert ID in x und löscht dieses DIV Element dann beim richtigen klick
            let x = document.querySelector(".woerter:hover").getAttribute("id");
            const myNode = document.getElementById(x);
            myNode.innerHTML = "";
            //spielt click sound ab
            effects[2].play();
            displayWord3();
            addPoint();
        }
        else {
            //spiele wrong sound
            effects[3].play();
            alert("Falsche Antwort!");
            clickCounter--;
            subPoint();
        }
    }
    //Prüft die Ordnung des vierten geklickten Worts
    function checkOrder4() {
        //speichert den gehoverten (geklickten) Text Inhalt in einer Variable ab
        let stringClicked4 = document.querySelector(".woerter:hover").textContent;
        //speichert die zweite Stelle der richtigen Reihenfolge aus dem Array in einer Variable ab
        let stringArray4 = satz[randomindex].single[3];
        //wenn der geklickte Text dem Text aus dem Array an der 2. Stelle entspricht
        if (stringClicked4 == stringArray4) {
            //speichert ID in x und löscht dieses DIV Element dann beim richtigen klick
            let x = document.querySelector(".woerter:hover").getAttribute("id");
            const myNode = document.getElementById(x);
            myNode.innerHTML = "";
            //spielt click sound ab
            effects[2].play();
            displayWord4();
            addPoint();
        }
        else {
            //spiele wrong sound
            effects[3].play();
            clickCounter--;
            alert("Falsche Antwort!");
            subPoint();
        }
    }
    // Funktion zur Entfernung der Wörter im Übersetzten Bereich
    function removeWord() {
        document.querySelector("#uebersetzt").innerHTML = "";
    }
    //Funkionen für das anzeigen der geklickten Reihenfolge
    function displayWord1() {
        document.querySelector("#uebersetzt").innerHTML = satz[randomindex].single[0];
    }
    function displayWord2() {
        document.querySelector("#uebersetzt").innerHTML = satz[randomindex].single[0] + " " + satz[randomindex].single[1];
    }
    function displayWord3() {
        document.querySelector("#uebersetzt").innerHTML = satz[randomindex].single[0] + " " + satz[randomindex].single[1] + " " + satz[randomindex].single[2];
    }
    function displayWord4() {
        document.querySelector("#uebersetzt").innerHTML = satz[randomindex].single[0] + " " + satz[randomindex].single[1] + " " + satz[randomindex].single[2] + " " + satz[randomindex].single[3];
    }
}
//Entfernt vervollständigten Satz aus dem Objekt um dopplungen zu vermeiden 
function removeSingleElement() {
    var removed = satz.splice(randomindexold, 1);
    console.log(satz);
}
//Ändert das Flow Chart je nach Schwierigkeit und abgeschlossener Aufgabe und ermittelt den max. Wert für die Text anzeige
function changeChart() {
    chartCount++;
    //fügt dem wert gesamt die Maximalanzahl der jeweiligen Schwierigkeit hinzu
    if (difficulty == 1) {
        gesamt = 5;
    }
    if (difficulty == 2) {
        gesamt = 10;
    }
    if (difficulty == 3) {
        gesamt = 15;
    }
    //Ändert das Chart für die Schwierigkeitsstufe einfach und den einzelnen abgeschlossen Aufgabenschritten
    if (difficulty == 1 && chartCount == 1) {
        document.querySelector("#chartText").innerHTML = "Frage " + chartCount + " von " + gesamt;
        document.querySelector(".chart").setAttribute("style", "width:20%");
    }
    if (difficulty == 1 && chartCount == 2) {
        document.querySelector("#chartText").innerHTML = "Frage " + chartCount + " von " + gesamt;
        document.querySelector(".chart").setAttribute("style", "width:40%");
    }
    if (difficulty == 1 && chartCount == 3) {
        document.querySelector("#chartText").innerHTML = "Frage " + chartCount + " von " + gesamt;
        document.querySelector(".chart").setAttribute("style", "width:60%");
    }
    if (difficulty == 1 && chartCount == 4) {
        document.querySelector("#chartText").innerHTML = "Frage " + chartCount + " von " + gesamt;
        document.querySelector(".chart").setAttribute("style", "width:80%");
    }
    if (difficulty == 1 && chartCount == 5) {
        document.querySelector("#chartText").innerHTML = "Frage " + chartCount + " von " + gesamt;
        document.querySelector(".chart").setAttribute("style", "width:100%");
    }
    //Ändert das Chart für die Schwierigkeitsstufe Mittel und den einzelnen abgeschlossen Aufgabenschritten
    if (difficulty == 2 && chartCount == 1) {
        document.querySelector("#chartText").innerHTML = "Frage " + chartCount + " von " + gesamt;
        document.querySelector(".chart").setAttribute("style", "width:10%");
    }
    if (difficulty == 2 && chartCount == 2) {
        document.querySelector("#chartText").innerHTML = "Frage " + chartCount + " von " + gesamt;
        document.querySelector(".chart").setAttribute("style", "width:20%");
    }
    if (difficulty == 2 && chartCount == 3) {
        document.querySelector("#chartText").innerHTML = "Frage " + chartCount + " von " + gesamt;
        document.querySelector(".chart").setAttribute("style", "width:30%");
    }
    if (difficulty == 2 && chartCount == 4) {
        document.querySelector("#chartText").innerHTML = "Frage " + chartCount + " von " + gesamt;
        document.querySelector(".chart").setAttribute("style", "width:40%");
    }
    if (difficulty == 2 && chartCount == 5) {
        document.querySelector("#chartText").innerHTML = "Frage " + chartCount + " von " + gesamt;
        document.querySelector(".chart").setAttribute("style", "width:50%");
    }
    if (difficulty == 2 && chartCount == 6) {
        document.querySelector("#chartText").innerHTML = "Frage " + chartCount + " von " + gesamt;
        document.querySelector(".chart").setAttribute("style", "width:60%");
    }
    if (difficulty == 2 && chartCount == 7) {
        document.querySelector("#chartText").innerHTML = "Frage " + chartCount + " von " + gesamt;
        document.querySelector(".chart").setAttribute("style", "width:70%");
    }
    if (difficulty == 2 && chartCount == 8) {
        document.querySelector("#chartText").innerHTML = "Frage " + chartCount + " von " + gesamt;
        document.querySelector(".chart").setAttribute("style", "width:80%");
    }
    if (difficulty == 2 && chartCount == 9) {
        document.querySelector("#chartText").innerHTML = "Frage " + chartCount + " von " + gesamt;
        document.querySelector(".chart").setAttribute("style", "width:90%");
    }
    if (difficulty == 2 && chartCount == 10) {
        document.querySelector("#chartText").innerHTML = "Frage " + chartCount + " von " + gesamt;
        document.querySelector(".chart").setAttribute("style", "width:100%");
    }
    //Ändert das Chart für die Schwierigkeitsstufe Schwer und den einzelnen abgeschlossen Aufgabenschritten
    if (difficulty == 3 && chartCount == 1) {
        document.querySelector("#chartText").innerHTML = "Frage " + chartCount + " von " + gesamt;
        document.querySelector(".chart").setAttribute("style", "width:6.6%");
    }
    if (difficulty == 3 && chartCount == 2) {
        document.querySelector("#chartText").innerHTML = "Frage " + chartCount + " von " + gesamt;
        document.querySelector(".chart").setAttribute("style", "width:13.2%");
    }
    if (difficulty == 3 && chartCount == 3) {
        document.querySelector("#chartText").innerHTML = "Frage " + chartCount + " von " + gesamt;
        document.querySelector(".chart").setAttribute("style", "width:19.8%");
    }
    if (difficulty == 3 && chartCount == 4) {
        document.querySelector("#chartText").innerHTML = "Frage " + chartCount + " von " + gesamt;
        document.querySelector(".chart").setAttribute("style", "width:26.4%");
    }
    if (difficulty == 3 && chartCount == 5) {
        document.querySelector("#chartText").innerHTML = "Frage " + chartCount + " von " + gesamt;
        document.querySelector(".chart").setAttribute("style", "width:39.6%");
    }
    if (difficulty == 3 && chartCount == 6) {
        document.querySelector("#chartText").innerHTML = "Frage " + chartCount + " von " + gesamt;
        document.querySelector(".chart").setAttribute("style", "width:46.2%");
    }
    if (difficulty == 3 && chartCount == 7) {
        document.querySelector("#chartText").innerHTML = "Frage " + chartCount + " von " + gesamt;
        document.querySelector(".chart").setAttribute("style", "width:52.8%");
    }
    if (difficulty == 3 && chartCount == 8) {
        document.querySelector("#chartText").innerHTML = "Frage " + chartCount + " von " + gesamt;
        document.querySelector(".chart").setAttribute("style", "width:59.4%");
    }
    if (difficulty == 3 && chartCount == 9) {
        document.querySelector("#chartText").innerHTML = "Frage " + chartCount + " von " + gesamt;
        document.querySelector(".chart").setAttribute("style", "width:66%");
    }
    if (difficulty == 3 && chartCount == 10) {
        document.querySelector("#chartText").innerHTML = "Frage " + chartCount + " von " + gesamt;
        document.querySelector(".chart").setAttribute("style", "width:72.6%");
    }
    if (difficulty == 3 && chartCount == 11) {
        document.querySelector("#chartText").innerHTML = "Frage " + chartCount + " von " + gesamt;
        document.querySelector(".chart").setAttribute("style", "width:79.2%");
    }
    if (difficulty == 3 && chartCount == 12) {
        document.querySelector("#chartText").innerHTML = "Frage " + chartCount + " von " + gesamt;
        document.querySelector(".chart").setAttribute("style", "width:85%");
    }
    if (difficulty == 3 && chartCount == 13) {
        document.querySelector("#chartText").innerHTML = "Frage " + chartCount + " von " + gesamt;
        document.querySelector(".chart").setAttribute("style", "width:92.4%");
    }
    if (difficulty == 3 && chartCount == 14) {
        document.querySelector("#chartText").innerHTML = "Frage " + chartCount + " von " + gesamt;
        document.querySelector(".chart").setAttribute("style", "width:96.2%");
    }
    if (difficulty == 3 && chartCount == 15) {
        document.querySelector("#chartText").innerHTML = "Frage " + chartCount + " von " + gesamt;
        document.querySelector(".chart").setAttribute("style", "width:100%");
    }
}
//# sourceMappingURL=script_easy.js.map