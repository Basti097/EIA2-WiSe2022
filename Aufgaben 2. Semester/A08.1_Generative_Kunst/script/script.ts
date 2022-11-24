// *
// Aufgabe: L08.1 Generative Kunst
// Name: Bastian Aberle
// Matrikel: 271166
// Datum: 24.11.2022
// Quellen: EIA2 - Videos, W3Schools
// */

namespace A07 {

    window.addEventListener("load", loadCanvas);
    window.addEventListener("click", refresh);
    document.addEventListener("mousemove", setInfoBox);
    document.addEventListener("keyover", setInfoBox);
    let globalCode: number = 0;
 
    //lädt canvas und gibt ihr die Browser höhe und breite 
    function loadCanvas(): void {
        let canvas: HTMLCanvasElement = document.querySelector("canvas");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        let ctx: CanvasRenderingContext2D = canvas.getContext("2d");
        loadColor(ctx);
    }

    //lädt verschiedene Farben
    function loadColor(ctx: CanvasRenderingContext2D): void {

        if (globalCode == 3) {
            globalCode = 0;
        }

        if (globalCode == 0) {
            let colorCode1: string = "black";
            let colorCode2: string = "blue";
            let colorCode3: string = "purple";
            loadCircles(ctx, colorCode1, colorCode2, colorCode3);
            loadTriangles(ctx, colorCode2);
        }
        if (globalCode == 1) {
            let colorCode1: string = "black";
            let colorCode2: string = "red";
            let colorCode3: string = "orange";
            loadCircles(ctx, colorCode1, colorCode2, colorCode3);
            loadTriangles(ctx, colorCode2);
        }
        if (globalCode == 2) {
            let colorCode1: string = "black";
            let colorCode2: string = "green";
            let colorCode3: string = "turquoise";
            loadCircles(ctx, colorCode1, colorCode2, colorCode3);
            loadTriangles(ctx, colorCode2);
        }
        globalCode++;
    }

    //span element wird erzeugt -> folgt maus und gibt text aus 
    function setInfoBox(_event: MouseEvent): void {
        let x: number = _event.clientX;
        let y: number = _event.clientY;
        let moveSpan: HTMLElement = document.getElementById("span");
        moveSpan.style.position = "absolute";
        moveSpan.style.left = x + 10 + "px";
        moveSpan.style.top = y + 10 + "px";
        let mouseTar: EventTarget = _event.target;
        document.querySelector("span").innerHTML = ("click to randomize");
    }

    //lädt Kreise
    function loadCircles(ctx: CanvasRenderingContext2D, colorCode1: string, colorCode2: string, colorCode3: string): void {

        //farbige Kreise
        for (let index: number = 0; index < 500; index = index + 5) {
            let randomNum: number = Math.random() * (1450 - 1) + 1;
            let randomNum2: number = Math.random() * (1450 - 1) + 1;
            let randomNum3: number = Math.random() * (200 - 100) + 10;
            let randomNum4: number = Math.random();
            let gradient: CanvasGradient = ctx.createLinearGradient(0, 0, 0, 1000);
            ctx.save();
            ctx.translate(randomNum / 2, randomNum2 / 2);
            ctx.shadowBlur = 20;
            ctx.shadowColor = "black";
            ctx.beginPath();
            ctx.arc(randomNum2, randomNum, randomNum3, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fill();
            ctx.restore();
            gradient.addColorStop(0, colorCode1);
            gradient.addColorStop(.05, colorCode2);
            gradient.addColorStop(1, colorCode3);
            ctx.fillStyle = gradient;
        }

        //schwarze Kreise
        for (let index: number = 0; index < 40; index++) {
            let randomNum: number = Math.random() * (1450 - 1) + 1;
            let randomNum2: number = Math.random() * (1450 - 1) + 1;
            let randomNum3: number = Math.random() * (200 - 100) + 10;
            let randomNum4: number = Math.random();
            ctx.save();
            ctx.shadowBlur = 20;
            ctx.shadowColor = "black";
            ctx.fillStyle = "#000";
            ctx.beginPath();
            ctx.arc(randomNum, randomNum2, randomNum3, 0, Math.PI * 2);
            ctx.rotate(0.1);
            ctx.closePath();
            ctx.fill();
            ctx.restore();
        }
    }

    //lädt Dreiecke
    function loadTriangles(ctx: CanvasRenderingContext2D, colorCode2: string): void {
        //blaue dreiecke
        for (let index: number = 0; index < 30; index = index + 5) {
            let randomNum: number = Math.random() * (1450 - 1) + 1;
            let randomNum2: number = Math.random() * (1450 - 1) + 1;
            let randomNum3: number = Math.random() * (2 - 0) + 0;
            let randomNum4: number = Math.random() * (10 - 1) + 1;

            ctx.save();
            ctx.shadowBlur = 5;
            ctx.shadowColor = colorCode2;
            ctx.fillStyle = colorCode2;
            ctx.translate(randomNum / 2, randomNum2 / 2);
            ctx.scale(randomNum3, randomNum3);
            ctx.rotate(randomNum4);
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(0, 50);
            ctx.lineTo(50, 75);
            ctx.closePath();
            ctx.fill();
            ctx.restore();
        }
    }

    //refreshed die seite bei mausklick und gibt ihr Browser Höhe/Breite
    function refresh(): void {
        let canvas: HTMLCanvasElement = document.querySelector("canvas");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        let ctx: CanvasRenderingContext2D = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        loadColor(ctx); 
    }
}

