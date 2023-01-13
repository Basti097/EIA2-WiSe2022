// *
// Aufgabe: L09.2 Classes
// Name: Bastian Aberle
// Matrikel: 271166
// Datum: 20.12.2022
// Quellen: Konzepte (mit Lisa zusammen gemacht), Lisa Blindenhöfer, EIA Videos, W3Schools
// */
var A092;
(function (A092) {
    window.addEventListener("load", handleLoad);
    let background;
    let snowflakes = [];
    let birds = [];
    let birdsPicking = [];
    let golden = 0.62;
    function handleLoad() {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        A092.crc2 = canvas.getContext("2d");
        drawBackground();
        create();
        setInterval(update, 100);
    }
    A092.handleLoad = handleLoad;
    function create() {
        for (let index = 0; index < 100; index++) {
            let snowflake = new A092.Snowflake(1);
            snowflakes.push(snowflake);
        }
        for (let index2 = 0; index2 < 20; index2++) {
            let bird = new A092.Bird(200);
            birds.push(bird);
        }
    }
    A092.create = create;
    function update() {
        console.log("update");
        A092.crc2.putImageData(background, 0, 0);
        // crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        for (let snowflake of snowflakes) {
            snowflake.move(1 / 50);
            snowflake.draw();
        }
        for (let bird of birds) {
            bird.move(1 / 50);
            bird.draw();
        }
    }
    A092.update = update;
    function drawBackground() {
        console.log("Background");
        let horizon = A092.crc2.canvas.height * golden;
        let posMountains = { x: 0, y: horizon };
        let posSnowmanBot = { x: 200, y: 590 };
        let posSnowmanMid = { x: 200, y: 525 };
        let posSnowmanTop = { x: 200, y: 470 };
        let posCage = { x: 500, y: 500 };
        let gradient = A092.crc2.createLinearGradient(0, 0, 0, A092.crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(golden, "white");
        gradient.addColorStop(1, "lightgray");
        A092.crc2.fillStyle = gradient;
        A092.crc2.fillRect(0, 0, A092.crc2.canvas.width, A092.crc2.canvas.height);
        drawSun({ x: 100, y: 75 });
        drawCloud({ x: 500, y: 125 }, { x: 250, y: 75 });
        drawMountains(posMountains, 75, 200, "grey", "white");
        drawMountains(posMountains, 50, 150, "grey", "lightgrey");
        drawTrees({ x: 500, y: 600 });
        drawSnowman(posSnowmanBot, posSnowmanMid, posSnowmanTop);
        drawBirdCage(posCage);
        background = A092.crc2.getImageData(0, 0, A092.crc2.canvas.width, A092.crc2.canvas.height);
    }
    function drawTrees(_position) {
        let canvas = document.querySelector("canvas");
        for (let index = 0; index < 7; index++) {
            let randomX = Math.random() * (canvas.width - 1) + 1;
            let randomY = Math.random() * ((canvas.height - 170) - 500) + 500;
            console.log("trees");
            A092.crc2.save();
            A092.crc2.scale(1.5, 1);
            A092.crc2.beginPath();
            A092.crc2.translate(randomX, randomY);
            A092.crc2.scale(2, 2);
            A092.crc2.moveTo(20, 0);
            A092.crc2.lineTo(-20, 0);
            A092.crc2.lineTo(-15, -15);
            A092.crc2.lineTo(-18, -15);
            A092.crc2.lineTo(-10, -36);
            A092.crc2.lineTo(-12, -36);
            A092.crc2.lineTo(-5, -54);
            A092.crc2.lineTo(-7, -54);
            A092.crc2.lineTo(0, -73);
            A092.crc2.lineTo(7, -54);
            A092.crc2.lineTo(5, -54);
            A092.crc2.lineTo(12, -36);
            A092.crc2.lineTo(10, -36);
            A092.crc2.lineTo(18, -15);
            A092.crc2.lineTo(15, -15);
            A092.crc2.fillStyle = "darkgreen";
            A092.crc2.fill();
            A092.crc2.closePath();
            A092.crc2.restore();
            A092.crc2.save();
            A092.crc2.scale(1.5, 1);
            A092.crc2.beginPath();
            A092.crc2.translate(randomX, randomY);
            A092.crc2.moveTo(5, 0);
            A092.crc2.lineTo(-5, 0);
            A092.crc2.lineTo(-5, 15);
            A092.crc2.lineTo(5, 15);
            A092.crc2.fillStyle = "brown";
            A092.crc2.fill();
            A092.crc2.closePath();
            A092.crc2.restore();
        }
    }
    function drawBirdCage(_position) {
        A092.crc2.save();
        A092.crc2.shadowBlur = 2;
        A092.crc2.shadowColor = "black";
        A092.crc2.beginPath();
        A092.crc2.rect(995, 550, 10, 100);
        A092.crc2.closePath();
        A092.crc2.fillStyle = "#8B4513";
        A092.crc2.fill();
        A092.crc2.restore();
        A092.crc2.save();
        A092.crc2.shadowBlur = 2;
        A092.crc2.shadowColor = "black";
        A092.crc2.beginPath();
        A092.crc2.rect(950, 450, 100, 100);
        A092.crc2.closePath();
        A092.crc2.fillStyle = "#8B4513";
        A092.crc2.fill();
        A092.crc2.restore();
        A092.crc2.save();
        A092.crc2.shadowBlur = 2;
        A092.crc2.shadowColor = "black";
        A092.crc2.beginPath();
        A092.crc2.arc(1000, 490, 20, 0, 2 * Math.PI);
        A092.crc2.closePath();
        A092.crc2.fillStyle = "#33140A";
        A092.crc2.fill();
        A092.crc2.restore();
        A092.crc2.save();
        A092.crc2.shadowBlur = 2;
        A092.crc2.shadowColor = "black";
        A092.crc2.beginPath();
        A092.crc2.moveTo(1060, 450);
        A092.crc2.lineTo(940, 450);
        A092.crc2.lineTo(1000, 380);
        A092.crc2.closePath();
        A092.crc2.fillStyle = "#33140A";
        A092.crc2.fill();
        A092.crc2.restore();
        A092.crc2.save();
        A092.crc2.shadowBlur = 2;
        A092.crc2.shadowColor = "black";
        A092.crc2.beginPath();
        A092.crc2.rect(960, 520, 80, 10);
        A092.crc2.closePath();
        A092.crc2.fillStyle = "#33140A";
        A092.crc2.fill();
        A092.crc2.restore();
    }
    function drawSnowman(_positionBot, _positionMid, _positionTop) {
        let r1 = 50;
        let r2 = 40;
        let r3 = 30;
        A092.crc2.save();
        A092.crc2.shadowBlur = 2;
        A092.crc2.shadowColor = "lightgray";
        A092.crc2.translate(_positionBot.x, _positionBot.y);
        A092.crc2.beginPath();
        A092.crc2.arc(0, 0, r1, 0, 2 * Math.PI);
        A092.crc2.fillStyle = "white";
        A092.crc2.fill();
        A092.crc2.closePath();
        A092.crc2.restore();
        A092.crc2.save();
        A092.crc2.shadowBlur = 2;
        A092.crc2.shadowColor = "lightgray";
        A092.crc2.translate(_positionMid.x, _positionMid.y);
        A092.crc2.beginPath();
        A092.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        A092.crc2.fillStyle = "white";
        A092.crc2.fill();
        A092.crc2.closePath();
        A092.crc2.restore();
        A092.crc2.save();
        A092.crc2.shadowBlur = 2;
        A092.crc2.shadowColor = "lightgray";
        A092.crc2.translate(_positionTop.x, _positionTop.y);
        A092.crc2.beginPath();
        A092.crc2.arc(0, 0, r3, 0, 2 * Math.PI);
        A092.crc2.fillStyle = "white";
        A092.crc2.fill();
        A092.crc2.closePath();
        A092.crc2.restore();
        A092.crc2.save();
        A092.crc2.translate(200, 453);
        A092.crc2.beginPath();
        A092.crc2.bezierCurveTo(-10, 10, 0, 20, 10, 10);
        A092.crc2.stroke();
        A092.crc2.closePath();
        A092.crc2.restore();
        A092.crc2.save();
        A092.crc2.translate(_positionTop.x, _positionTop.y);
        A092.crc2.beginPath();
        A092.crc2.arc(8, -10, 2, 0, 2 * Math.PI);
        A092.crc2.fillStyle = "black";
        A092.crc2.fill();
        A092.crc2.closePath();
        A092.crc2.restore();
        A092.crc2.save();
        A092.crc2.translate(_positionTop.x, _positionTop.y);
        A092.crc2.beginPath();
        A092.crc2.arc(-8, -10, 2, 0, 2 * Math.PI);
        A092.crc2.fillStyle = "black";
        A092.crc2.fill();
        A092.crc2.closePath();
        A092.crc2.restore();
        A092.crc2.save();
        A092.crc2.translate(_positionMid.x, _positionMid.y);
        A092.crc2.beginPath();
        A092.crc2.arc(0, -20, 2, 0, 2 * Math.PI);
        A092.crc2.fillStyle = "black";
        A092.crc2.fill();
        A092.crc2.closePath();
        A092.crc2.restore();
        A092.crc2.save();
        A092.crc2.translate(_positionMid.x, _positionMid.y);
        A092.crc2.beginPath();
        A092.crc2.arc(0, 10, 2, 0, 2 * Math.PI);
        A092.crc2.fillStyle = "black";
        A092.crc2.fill();
        A092.crc2.closePath();
        A092.crc2.restore();
        A092.crc2.save();
        A092.crc2.translate(_positionMid.x, _positionMid.y);
        A092.crc2.beginPath();
        A092.crc2.arc(0, 50, 2, 0, 2 * Math.PI);
        A092.crc2.fillStyle = "black";
        A092.crc2.fill();
        A092.crc2.closePath();
        A092.crc2.restore();
        A092.crc2.save();
        A092.crc2.translate(_positionMid.x, _positionMid.y);
        A092.crc2.beginPath();
        A092.crc2.arc(0, 50, 2, 0, 2 * Math.PI);
        A092.crc2.fillStyle = "black";
        A092.crc2.fill();
        A092.crc2.closePath();
        A092.crc2.restore();
        A092.crc2.save();
        A092.crc2.shadowBlur = 2;
        A092.crc2.shadowColor = "lightgray";
        A092.crc2.beginPath();
        A092.crc2.moveTo(160, 520);
        A092.crc2.lineTo(130, 480);
        A092.crc2.stroke();
        A092.crc2.closePath();
        A092.crc2.restore();
        A092.crc2.save();
        A092.crc2.shadowBlur = 5;
        A092.crc2.shadowColor = "lightgray";
        A092.crc2.beginPath();
        A092.crc2.moveTo(240, 520);
        A092.crc2.lineTo(270, 480);
        A092.crc2.stroke();
        A092.crc2.closePath();
        A092.crc2.restore();
    }
    function drawSun(_position) {
        console.log("Sun", _position);
        let r1 = 30;
        let r2 = 150;
        let gradient = A092.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(20, 20%, 80%, 0)");
        A092.crc2.save();
        A092.crc2.translate(_position.x, _position.y);
        A092.crc2.fillStyle = gradient;
        A092.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        A092.crc2.fill();
        A092.crc2.restore();
    }
    function drawCloud(_position, _size) {
        console.log("Cloud", _position, _size);
        let nParticles = 80;
        let radiusParticle = 50;
        let particle = new Path2D();
        let gradient = A092.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        A092.crc2.save();
        A092.crc2.translate(_position.x, _position.y);
        A092.crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            A092.crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            A092.crc2.translate(x, y);
            A092.crc2.fill(particle);
            A092.crc2.restore();
        }
        A092.crc2.restore();
    }
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        console.log("Mountains", _position, _min, _max);
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        A092.crc2.save();
        A092.crc2.translate(_position.x, _position.y);
        A092.crc2.beginPath();
        A092.crc2.moveTo(0, 0);
        A092.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            A092.crc2.lineTo(x, y);
        } while (x < A092.crc2.canvas.width);
        A092.crc2.lineTo(x, 0);
        A092.crc2.closePath();
        let gradient = A092.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        A092.crc2.fillStyle = gradient;
        A092.crc2.fill();
        A092.crc2.restore();
    }
})(A092 || (A092 = {}));
//# sourceMappingURL=main.js.map