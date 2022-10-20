namespace A02 {

    window.addEventListener("load", handleLoad);

    //Event Listener für click, keyup und mousemove
    function handleLoad(): void {
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
    function setInfoBox(_event: MouseEvent): void {

        let x: number = _event.clientX;
        let y: number = _event.clientY;
        let moveSpan: HTMLElement = document.getElementById("span");
        moveSpan.style.position = "absolute";
        moveSpan.style.left = x + 10 + "px";
        moveSpan.style.top = y + 10 + "px";
        let mouseTar: EventTarget = _event.target;
        

        // x, y + Target wird in den Span eingefügt
        document.querySelector("span").innerHTML = ("x: " + x + " y: " + y + " target: " + mouseTar);
    }

    //event type, target, current target, event wird bestimmt und in der Konsole bei Klick ausgegeben
    function logInfo(_event: Event): void {
    let eventType: string = _event.type;
    let event: Event = _event;
    let mouseTar: EventTarget = _event.target;
    let currentTar: EventTarget = _event.currentTarget;
    console.log("Target: " + mouseTar);
    console.log("Current Target: " + currentTar);
    console.log("Event: " + event);
    console.log("Event Type: " + eventType);
    }

    //fängt DOM-Event ab und gibt es in der Konsole aus
    function clickedBut(_event: CustomEvent): void {
        let ePath: EventTarget[] = _event.composedPath();

        if (ePath[5] == document) {
            console.log("abgefangenes DOM-Event: " + _event);
        }

}}
