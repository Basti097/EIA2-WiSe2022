// *
// Aufgabe: L08.2 Landscape
// Name: Bastian Aberle
// Matrikel: 271166
// Datum: 03.12.2022
// Quellen: EIA2 - Videos, W3Schools, Lisa Blindenhöfer, Arthur Aguiar
// */

namespace A082 {
    interface Vector {
        x: number;
        y: number;
    }

    window.addEventListener("load", handleLoad);
    let canvas: HTMLCanvasElement;
    let crc2: CanvasRenderingContext2D;
    let golden: number = 0.62;

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        let horizon: number = crc2.canvas.height * golden;
        let posMountains: Vector = { x: 0, y: horizon };
        let posSnowmanBot: Vector = { x: 200, y: 590 };
        let posSnowmanMid: Vector = { x: 200, y: 525 };
        let posSnowmanTop: Vector = { x: 200, y: 470 };
        let posCage: Vector = { x: 500, y: 500 };
        drawBackground();
        drawSun({ x: 100, y: 75 });
        drawCloud({ x: 500, y: 125 }, { x: 250, y: 75 });
        drawMountains(posMountains, 75, 200, "grey", "white");
        drawMountains(posMountains, 50, 150, "grey", "lightgrey");
        drawTrees({ x: 500, y: 600 });
        drawSnowman(posSnowmanBot, posSnowmanMid, posSnowmanTop);
        drawBirdCage(posCage);
        drawBird();
        drawSnow();
        drawBirds();
    }

    function drawBirds(): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        for (let index: number = 0; index < 19; index++) {
            let randomX: number = Math.random() * (canvas.width - 1) + 1;
            let randomY: number = Math.random() * ((300) - 1) + 1;
            let randomLength: number = Math.random() * ((50) - 20) + 20;
            crc2.save();
            crc2.translate(randomX, randomY);
            crc2.beginPath();
            crc2.bezierCurveTo(randomLength, -10, 0, -20, 0, 0);
            crc2.fillStyle = "black";
            crc2.stroke();
            crc2.closePath();
            crc2.restore();

            crc2.save();
            crc2.translate(randomX, randomY);
            crc2.beginPath();
            crc2.bezierCurveTo(-randomLength, -10, 0, -20, 0, 0);
            crc2.fillStyle = "black";
            crc2.stroke();
            crc2.closePath();
            crc2.restore();
        }
    }

    function drawTrees(_position: Vector): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        for (let index: number = 0; index < 7; index++) {
            let randomX: number = Math.random() * (canvas.width - 1) + 1;
            let randomY: number = Math.random() * ((canvas.height - 170) - 500) + 500;

            console.log("trees");
            crc2.save();
            crc2.scale(1.5, 1);
            crc2.beginPath();
            crc2.translate(randomX, randomY);
            crc2.scale(2, 2);
            crc2.moveTo(20, 0);
            crc2.lineTo(-20, 0);
            crc2.lineTo(-15, -15);
            crc2.lineTo(-18, -15);
            crc2.lineTo(-10, -36);
            crc2.lineTo(-12, -36);
            crc2.lineTo(-5, -54);
            crc2.lineTo(-7, -54);
            crc2.lineTo(0, -73);
            crc2.lineTo(7, -54);
            crc2.lineTo(5, -54);
            crc2.lineTo(12, -36);
            crc2.lineTo(10, -36);
            crc2.lineTo(18, -15);
            crc2.lineTo(15, -15);
            crc2.fillStyle = "darkgreen";
            crc2.fill();
            crc2.closePath();
            crc2.restore();

            crc2.save();
            crc2.scale(1.5, 1);
            crc2.beginPath();
            crc2.translate(randomX, randomY);
            crc2.moveTo(5, 0);
            crc2.lineTo(-5, 0);
            crc2.lineTo(-5, 15);
            crc2.lineTo(5, 15);
            crc2.fillStyle = "brown";
            crc2.fill();
            crc2.closePath();
            crc2.restore();
        }



    }

    function drawSnow(): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        for (let index: number = 0; index < 100; index++) {
            let randomX: number = Math.random() * (canvas.width - 1) + 1;
            let randomY: number = Math.random() * (canvas.height - 1) + 1;
            crc2.save();
            crc2.shadowBlur = 2;
            crc2.shadowColor = "lightgray";
            crc2.translate(randomX, randomY);
            crc2.beginPath();
            crc2.arc(0, 0, 3, 0, 2 * Math.PI);
            crc2.fillStyle = "white";
            crc2.fill();
            crc2.closePath();
            crc2.restore();
        }
    }

    function drawBird(): void {
        //kopf
        crc2.save();
        crc2.translate(1008, 482);
        crc2.beginPath();
        crc2.arc(0, 0, 9, 0, 2 * Math.PI);
        crc2.fillStyle = "blue";
        crc2.fill();
        crc2.closePath();
        crc2.restore();


        //schnabel
        crc2.save();
        crc2.translate(210, -70);
        crc2.beginPath();
        crc2.moveTo(805, 550);
        crc2.lineTo(805, 555);
        crc2.lineTo(820, 553);
        crc2.fillStyle = "blue";
        crc2.fill();
        crc2.closePath();
        crc2.restore();


        //Füße
        crc2.save();
        crc2.translate(980, 510);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, 10);
        crc2.fillStyle = "blue";
        crc2.stroke();
        crc2.closePath();
        crc2.restore();

        crc2.save();
        crc2.translate(985, 512);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, 10);
        crc2.fillStyle = "blue";
        crc2.stroke();
        crc2.closePath();
        crc2.restore();

        //body
        crc2.save();
        crc2.translate(1000, 482);
        crc2.beginPath();
        crc2.ellipse(-10, 18, 10, 20, 1.1, 0, 0.1, true);
        crc2.fillStyle = "blue";
        crc2.fill();
        crc2.closePath();
        crc2.restore();

        //auge
        crc2.save();
        crc2.translate(1010, 482);
        crc2.beginPath();
        crc2.arc(2, -2, 1.2, 0, 2 * Math.PI);
        crc2.fillStyle = "black";
        crc2.fill();
        crc2.closePath();
        crc2.restore();

        //Fußunten
        crc2.save();
        crc2.translate(980, 520);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(8, 0);
        crc2.fillStyle = "black";
        crc2.stroke();
        crc2.closePath();
        crc2.restore();

        //Fußunten
        crc2.save();
        crc2.translate(985, 522);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(8, 0);
        crc2.fillStyle = "black";
        crc2.stroke();
        crc2.closePath();
        crc2.restore();

        //flügel
        crc2.save();
        crc2.translate(981, 510);
        crc2.rotate(2.8);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(20, 0);
        crc2.lineTo(23, 4);
        crc2.lineTo(0, 13);
        crc2.lineTo(0, 0);
        crc2.fillStyle = "blue";
        crc2.fill();
        crc2.closePath();
        crc2.restore();

    }



    function drawBirdCage(_position: Vector): void {
        crc2.save();
        crc2.shadowBlur = 2;
        crc2.shadowColor = "black";
        crc2.beginPath();
        crc2.rect(995, 550, 10, 100);
        crc2.closePath();
        crc2.fillStyle = "#8B4513";
        crc2.fill();
        crc2.restore();

        crc2.save();
        crc2.shadowBlur = 2;
        crc2.shadowColor = "black";
        crc2.beginPath();   
        crc2.rect(950, 450, 100, 100);
        crc2.closePath();
        crc2.fillStyle = "#8B4513";
        crc2.fill();
        crc2.restore();

        crc2.save();
        crc2.shadowBlur = 2;
        crc2.shadowColor = "black";
        crc2.beginPath();
        crc2.arc(1000, 490, 20, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = "#33140A";
        crc2.fill();
        crc2.restore();

        crc2.save();
        crc2.shadowBlur = 2;
        crc2.shadowColor = "black";
        crc2.beginPath();
        crc2.moveTo(1060, 450);
        crc2.lineTo(940, 450);
        crc2.lineTo(1000, 380);
        crc2.closePath();
        crc2.fillStyle = "#33140A";
        crc2.fill();
        crc2.restore();

        crc2.save();
        crc2.shadowBlur = 2;
        crc2.shadowColor = "black";
        crc2.beginPath();
        crc2.rect(960, 520, 80, 10);
        crc2.closePath();
        crc2.fillStyle = "#33140A";
        crc2.fill();
        crc2.restore();

    }

    function drawSnowman(_positionBot: Vector, _positionMid: Vector, _positionTop: Vector): void {
        let r1: number = 50;
        let r2: number = 40;
        let r3: number = 30;

        crc2.save();
        crc2.shadowBlur = 2;
        crc2.shadowColor = "lightgray";
        crc2.translate(_positionBot.x, _positionBot.y);
        crc2.beginPath();
        crc2.arc(0, 0, r1, 0, 2 * Math.PI);
        crc2.fillStyle = "white";
        crc2.fill();
        crc2.closePath();
        crc2.restore();

        crc2.save();
        crc2.shadowBlur = 2;
        crc2.shadowColor = "lightgray";
        crc2.translate(_positionMid.x, _positionMid.y);
        crc2.beginPath();
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fillStyle = "white";
        crc2.fill();
        crc2.closePath();
        crc2.restore();

        crc2.save();
        crc2.shadowBlur = 2;
        crc2.shadowColor = "lightgray";
        crc2.translate(_positionTop.x, _positionTop.y);
        crc2.beginPath();
        crc2.arc(0, 0, r3, 0, 2 * Math.PI);
        crc2.fillStyle = "white";
        crc2.fill();
        crc2.closePath();
        crc2.restore();

        crc2.save();
        crc2.translate(200, 453);
        crc2.beginPath();
        crc2.bezierCurveTo(-10, 10, 0, 20, 10, 10);
        crc2.stroke();
        crc2.closePath();
        crc2.restore();

        crc2.save();
        crc2.translate(_positionTop.x, _positionTop.y);
        crc2.beginPath();
        crc2.arc(8, -10, 2, 0, 2 * Math.PI);
        crc2.fillStyle = "black";
        crc2.fill();
        crc2.closePath();
        crc2.restore();


        crc2.save();
        crc2.translate(_positionTop.x, _positionTop.y);
        crc2.beginPath();
        crc2.arc(-8, -10, 2, 0, 2 * Math.PI);
        crc2.fillStyle = "black";
        crc2.fill();
        crc2.closePath();
        crc2.restore();

        crc2.save();
        crc2.translate(_positionMid.x, _positionMid.y);
        crc2.beginPath();
        crc2.arc(0, -20, 2, 0, 2 * Math.PI);
        crc2.fillStyle = "black";
        crc2.fill();
        crc2.closePath();
        crc2.restore();


        crc2.save();
        crc2.translate(_positionMid.x, _positionMid.y);
        crc2.beginPath();
        crc2.arc(0, 10, 2, 0, 2 * Math.PI);
        crc2.fillStyle = "black";
        crc2.fill();
        crc2.closePath();
        crc2.restore();

        crc2.save();
        crc2.translate(_positionMid.x, _positionMid.y);
        crc2.beginPath();
        crc2.arc(0, 50, 2, 0, 2 * Math.PI);
        crc2.fillStyle = "black";
        crc2.fill();
        crc2.closePath();
        crc2.restore();

        crc2.save();
        crc2.translate(_positionMid.x, _positionMid.y);
        crc2.beginPath();
        crc2.arc(0, 50, 2, 0, 2 * Math.PI);
        crc2.fillStyle = "black";
        crc2.fill();
        crc2.closePath();
        crc2.restore();

        crc2.save();
        crc2.shadowBlur = 2;
        crc2.shadowColor = "lightgray";
        crc2.beginPath();
        crc2.moveTo(160, 520);
        crc2.lineTo(130, 480);
        crc2.stroke();
        crc2.closePath();
        crc2.restore();

        crc2.save();
        crc2.shadowBlur = 5;
        crc2.shadowColor = "lightgray";
        crc2.beginPath();
        crc2.moveTo(240, 520);
        crc2.lineTo(270, 480);
        crc2.stroke();
        crc2.closePath();
        crc2.restore();
    }

    function drawBackground(): void {
        console.log("Background");

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(golden, "white");
        gradient.addColorStop(1, "lightgray");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }

    function drawSun(_position: Vector): void {
        console.log("Sun", _position);

        let r1: number = 30;
        let r2: number = 150;
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);

        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(20, 20%, 80%, 0)");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }


    function drawCloud(_position: Vector, _size: Vector): void {
        console.log("Cloud", _position, _size);

        let nParticles: number = 80;
        let radiusParticle: number = 50;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;

        for (let drawn: number = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = - (Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }



    function drawMountains(_position: Vector, _min: number, _max: number, _colorLow: string, _colorHigh: string): void {
        console.log("Mountains", _position, _min, _max);
        let stepMin: number = 50;
        let stepMax: number = 150;
        let x: number = 0;

        crc2.save();
        crc2.translate(_position.x, _position.y);

        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);

        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y: number = -_min - Math.random() * (_max - _min);

            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);

        crc2.lineTo(x, 0);
        crc2.closePath();

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);

        crc2.fillStyle = gradient;
        crc2.fill();

        crc2.restore();
    }

}