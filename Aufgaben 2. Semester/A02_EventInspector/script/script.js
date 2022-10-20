var A02;
(function (A02) {
    window.addEventListener("load", handleLoad);
    //Event Listener für click, keyup und mousemove
    function handleLoad() {
        document.addEventListener("click", logInfo);
        document.querySelector(".but0").addEventListener("click", clickedBut);
        document.querySelector("body").addEventListener("click", logInfo);
        document.querySelector(".div0").addEventListener("click", logInfo);
        document.querySelector(".div1").addEventListener("click", logInfo);
        document.querySelector("body").addEventListener("keyup", logInfo);
        document.querySelector(".div0").addEventListener("keyup", logInfo);
        document.querySelector(".div1").addEventListener("keyup", logInfo);
        document.addEventListener("mousemove", setInfoBox);
    }
    //bestimmung der x,y Koordinate der Maus, manipulation des Span Elements, bestimmung des targets 
    function setInfoBox(_event) {
        let x = _event.clientX;
        let y = _event.clientY;
        let moveSpan = document.getElementById("span");
        moveSpan.style.position = "absolute";
        moveSpan.style.left = x + 10 + "px";
        moveSpan.style.top = y + 10 + "px";
        let mouseTar = _event.target;
        // x, y + Target wird in den Span eingefügt
        document.querySelector("span").innerHTML = ("x: " + x + " y: " + y + " target: " + mouseTar);
    }
    //event type, target, current target, event wird bestimmt und in der Konsole bei Klick ausgegeben
    function logInfo(_event) {
        let eventType = _event.type;
        let event = _event;
        let mouseTar = _event.target;
        let currentTar = _event.currentTarget;
        console.log("Target: " + mouseTar);
        console.log("Current Target: " + currentTar);
        console.log("Event: " + event);
        console.log("Event Type: " + eventType);
    }
    //fängt DOM-Event ab und gibt es in der Konsole aus
    function clickedBut(_event) {
        let ePath = _event.composedPath();
        if (ePath[5] == document) {
            console.log("abgefangenes DOM-Event: " + _event);
        }
    }
})(A02 || (A02 = {}));
//# sourceMappingURL=script.js.map