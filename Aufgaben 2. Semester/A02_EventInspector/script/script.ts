namespace A02 {

    window.addEventListener("load", handleLoad);

    function handleLoad(): void {
        document.addEventListener("click", logInfo);
        document.querySelector("body").addEventListener("click", logInfo);
        document.querySelector(".div0").addEventListener("click", logInfo);
        document.querySelector(".div1").addEventListener("click", logInfo);
        document.querySelector("body").addEventListener("keyup", logInfo);
        document.querySelector(".div0").addEventListener("keyup", logInfo);
        document.querySelector(".div1").addEventListener("keyup", logInfo);
        document.addEventListener("mousemove", setInfoBox);
        
    }

    function setInfoBox(_event: MouseEvent): void {

        let x: number = _event.clientX;
        let y: number = _event.clientY;

        let moveSpan: HTMLElement = document.getElementById("span");
        moveSpan.style.position = "absolute";
        moveSpan.style.left = x + 10 + "px";
        moveSpan.style.top = y + 10 + "px";
        
        let mouseTar: EventTarget = _event.target;

        document.querySelector("span").innerHTML = (x + ", " + y + ", target: " + mouseTar);

    }

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

}
