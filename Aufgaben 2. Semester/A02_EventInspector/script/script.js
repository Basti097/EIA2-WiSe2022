var A02;
(function (A02) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        document.addEventListener("click", logInfo);
        document.querySelector("body").addEventListener("click", logInfo);
        document.querySelector(".div0").addEventListener("click", logInfo);
        document.querySelector(".div1").addEventListener("click", logInfo);
        document.querySelector("body").addEventListener("keyup", logInfo);
        document.querySelector(".div0").addEventListener("keyup", logInfo);
        document.querySelector(".div1").addEventListener("keyup", logInfo);
        document.addEventListener("mousemove", setInfoBox);
    }
    function setInfoBox(_event) {
        let x = _event.clientX;
        let y = _event.clientY;
        let moveSpan = document.getElementById("span");
        moveSpan.style.position = "absolute";
        moveSpan.style.left = x + 10 + "px";
        moveSpan.style.top = y + 10 + "px";
        let mouseTar = _event.target;
        document.querySelector("span").innerHTML = (x + ", " + y + ", target: " + mouseTar);
    }
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
})(A02 || (A02 = {}));
//# sourceMappingURL=script.js.map