// *
// Aufgabe: L11 Birdhouse
// Name: Bastian Aberle
// Matrikel: 271166
// Datum: 23.01.2023
// Quellen: Konzepte (mit Lisa zusammen gemacht), Lisa Blindenhöfer, EIA Videos, W3Schools
// */
var A11;
(function (A11) {
    window.addEventListener("load", handleLoad);
    let background;
    let moveables = [];
    let golden = 0.62;
    function handleLoad() {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        A11.crc2 = canvas.getContext("2d");
        console.log("test");
        drawBackground();
        create();
        setInterval(update, 100);
    }
    A11.handleLoad = handleLoad;
    function create() {
        for (let index = 0; index < 100; index++) {
            let snowflake = new A11.Snowflake(1);
            moveables.push(snowflake);
        }
        for (let index2 = 0; index2 < 20; index2++) {
            let bird = new A11.Bird(200);
            moveables.push(bird);
        }
    }
    A11.create = create;
    function update() {
        console.log("update");
        A11.crc2.putImageData(background, 0, 0);
        // crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        for (let snowflake of moveables) {
            snowflake.move(1 / 50);
            snowflake.draw();
        }
        for (let bird of moveables) {
            bird.move(1 / 50);
            bird.draw();
        }
    }
    A11.update = update;
    function drawBackground() {
        console.log("Background");
        let horizon = A11.crc2.canvas.height * golden;
        let posMountains = { x: 0, y: horizon };
        let posSnowmanBot = { x: 200, y: 590 };
        let posSnowmanMid = { x: 200, y: 525 };
        let posSnowmanTop = { x: 200, y: 470 };
        let posCage = { x: 500, y: 500 };
        let gradient = A11.crc2.createLinearGradient(0, 0, 0, A11.crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(golden, "white");
        gradient.addColorStop(1, "lightgray");
        A11.crc2.fillStyle = gradient;
        A11.crc2.fillRect(0, 0, A11.crc2.canvas.width, A11.crc2.canvas.height);
        drawSun({ x: 100, y: 75 });
        drawCloud({ x: 500, y: 125 }, { x: 250, y: 75 });
        drawMountains(posMountains, 75, 200, "grey", "white");
        drawMountains(posMountains, 50, 150, "grey", "lightgrey");
        drawTrees({ x: 500, y: 600 });
        drawSnowman(posSnowmanBot, posSnowmanMid, posSnowmanTop);
        drawBirdCage(posCage);
        drawPicking();
        background = A11.crc2.getImageData(0, 0, A11.crc2.canvas.width, A11.crc2.canvas.height);
    }
    function drawTrees(_position) {
        let canvas = document.querySelector("canvas");
        for (let index = 0; index < 7; index++) {
            let randomX = Math.random() * (canvas.width - 1) + 1;
            let randomY = Math.random() * ((canvas.height - 170) - 500) + 500;
            console.log("trees");
            A11.crc2.save();
            A11.crc2.scale(1.5, 1);
            A11.crc2.beginPath();
            A11.crc2.translate(randomX, randomY);
            A11.crc2.scale(2, 2);
            A11.crc2.moveTo(20, 0);
            A11.crc2.lineTo(-20, 0);
            A11.crc2.lineTo(-15, -15);
            A11.crc2.lineTo(-18, -15);
            A11.crc2.lineTo(-10, -36);
            A11.crc2.lineTo(-12, -36);
            A11.crc2.lineTo(-5, -54);
            A11.crc2.lineTo(-7, -54);
            A11.crc2.lineTo(0, -73);
            A11.crc2.lineTo(7, -54);
            A11.crc2.lineTo(5, -54);
            A11.crc2.lineTo(12, -36);
            A11.crc2.lineTo(10, -36);
            A11.crc2.lineTo(18, -15);
            A11.crc2.lineTo(15, -15);
            A11.crc2.fillStyle = "darkgreen";
            A11.crc2.fill();
            A11.crc2.closePath();
            A11.crc2.restore();
            A11.crc2.save();
            A11.crc2.scale(1.5, 1);
            A11.crc2.beginPath();
            A11.crc2.translate(randomX, randomY);
            A11.crc2.moveTo(5, 0);
            A11.crc2.lineTo(-5, 0);
            A11.crc2.lineTo(-5, 15);
            A11.crc2.lineTo(5, 15);
            A11.crc2.fillStyle = "brown";
            A11.crc2.fill();
            A11.crc2.closePath();
            A11.crc2.restore();
        }
    }
    function drawBirdCage(_position) {
        A11.crc2.save();
        A11.crc2.shadowBlur = 2;
        A11.crc2.shadowColor = "black";
        A11.crc2.beginPath();
        A11.crc2.rect(995, 550, 10, 100);
        A11.crc2.closePath();
        A11.crc2.fillStyle = "#8B4513";
        A11.crc2.fill();
        A11.crc2.restore();
        A11.crc2.save();
        A11.crc2.shadowBlur = 2;
        A11.crc2.shadowColor = "black";
        A11.crc2.beginPath();
        A11.crc2.rect(950, 450, 100, 100);
        A11.crc2.closePath();
        A11.crc2.fillStyle = "#8B4513";
        A11.crc2.fill();
        A11.crc2.restore();
        A11.crc2.save();
        A11.crc2.shadowBlur = 2;
        A11.crc2.shadowColor = "black";
        A11.crc2.beginPath();
        A11.crc2.arc(1000, 490, 20, 0, 2 * Math.PI);
        A11.crc2.closePath();
        A11.crc2.fillStyle = "#33140A";
        A11.crc2.fill();
        A11.crc2.restore();
        A11.crc2.save();
        A11.crc2.shadowBlur = 2;
        A11.crc2.shadowColor = "black";
        A11.crc2.beginPath();
        A11.crc2.moveTo(1060, 450);
        A11.crc2.lineTo(940, 450);
        A11.crc2.lineTo(1000, 380);
        A11.crc2.closePath();
        A11.crc2.fillStyle = "#33140A";
        A11.crc2.fill();
        A11.crc2.restore();
        A11.crc2.save();
        A11.crc2.shadowBlur = 2;
        A11.crc2.shadowColor = "black";
        A11.crc2.beginPath();
        A11.crc2.rect(960, 520, 80, 10);
        A11.crc2.closePath();
        A11.crc2.fillStyle = "#33140A";
        A11.crc2.fill();
        A11.crc2.restore();
    }
    function drawSnowman(_positionBot, _positionMid, _positionTop) {
        let r1 = 50;
        let r2 = 40;
        let r3 = 30;
        A11.crc2.save();
        A11.crc2.shadowBlur = 2;
        A11.crc2.shadowColor = "lightgray";
        A11.crc2.translate(_positionBot.x, _positionBot.y);
        A11.crc2.beginPath();
        A11.crc2.arc(0, 0, r1, 0, 2 * Math.PI);
        A11.crc2.fillStyle = "white";
        A11.crc2.fill();
        A11.crc2.closePath();
        A11.crc2.restore();
        A11.crc2.save();
        A11.crc2.shadowBlur = 2;
        A11.crc2.shadowColor = "lightgray";
        A11.crc2.translate(_positionMid.x, _positionMid.y);
        A11.crc2.beginPath();
        A11.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        A11.crc2.fillStyle = "white";
        A11.crc2.fill();
        A11.crc2.closePath();
        A11.crc2.restore();
        A11.crc2.save();
        A11.crc2.shadowBlur = 2;
        A11.crc2.shadowColor = "lightgray";
        A11.crc2.translate(_positionTop.x, _positionTop.y);
        A11.crc2.beginPath();
        A11.crc2.arc(0, 0, r3, 0, 2 * Math.PI);
        A11.crc2.fillStyle = "white";
        A11.crc2.fill();
        A11.crc2.closePath();
        A11.crc2.restore();
        A11.crc2.save();
        A11.crc2.translate(200, 453);
        A11.crc2.beginPath();
        A11.crc2.bezierCurveTo(-10, 10, 0, 20, 10, 10);
        A11.crc2.stroke();
        A11.crc2.closePath();
        A11.crc2.restore();
        A11.crc2.save();
        A11.crc2.translate(_positionTop.x, _positionTop.y);
        A11.crc2.beginPath();
        A11.crc2.arc(8, -10, 2, 0, 2 * Math.PI);
        A11.crc2.fillStyle = "black";
        A11.crc2.fill();
        A11.crc2.closePath();
        A11.crc2.restore();
        A11.crc2.save();
        A11.crc2.translate(_positionTop.x, _positionTop.y);
        A11.crc2.beginPath();
        A11.crc2.arc(-8, -10, 2, 0, 2 * Math.PI);
        A11.crc2.fillStyle = "black";
        A11.crc2.fill();
        A11.crc2.closePath();
        A11.crc2.restore();
        A11.crc2.save();
        A11.crc2.translate(_positionMid.x, _positionMid.y);
        A11.crc2.beginPath();
        A11.crc2.arc(0, -20, 2, 0, 2 * Math.PI);
        A11.crc2.fillStyle = "black";
        A11.crc2.fill();
        A11.crc2.closePath();
        A11.crc2.restore();
        A11.crc2.save();
        A11.crc2.translate(_positionMid.x, _positionMid.y);
        A11.crc2.beginPath();
        A11.crc2.arc(0, 10, 2, 0, 2 * Math.PI);
        A11.crc2.fillStyle = "black";
        A11.crc2.fill();
        A11.crc2.closePath();
        A11.crc2.restore();
        A11.crc2.save();
        A11.crc2.translate(_positionMid.x, _positionMid.y);
        A11.crc2.beginPath();
        A11.crc2.arc(0, 50, 2, 0, 2 * Math.PI);
        A11.crc2.fillStyle = "black";
        A11.crc2.fill();
        A11.crc2.closePath();
        A11.crc2.restore();
        A11.crc2.save();
        A11.crc2.translate(_positionMid.x, _positionMid.y);
        A11.crc2.beginPath();
        A11.crc2.arc(0, 50, 2, 0, 2 * Math.PI);
        A11.crc2.fillStyle = "black";
        A11.crc2.fill();
        A11.crc2.closePath();
        A11.crc2.restore();
        A11.crc2.save();
        A11.crc2.shadowBlur = 2;
        A11.crc2.shadowColor = "lightgray";
        A11.crc2.beginPath();
        A11.crc2.moveTo(160, 520);
        A11.crc2.lineTo(130, 480);
        A11.crc2.stroke();
        A11.crc2.closePath();
        A11.crc2.restore();
        A11.crc2.save();
        A11.crc2.shadowBlur = 5;
        A11.crc2.shadowColor = "lightgray";
        A11.crc2.beginPath();
        A11.crc2.moveTo(240, 520);
        A11.crc2.lineTo(270, 480);
        A11.crc2.stroke();
        A11.crc2.closePath();
        A11.crc2.restore();
    }
    function drawSun(_position) {
        console.log("Sun", _position);
        let r1 = 30;
        let r2 = 150;
        let gradient = A11.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(20, 20%, 80%, 0)");
        A11.crc2.save();
        A11.crc2.translate(_position.x, _position.y);
        A11.crc2.fillStyle = gradient;
        A11.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        A11.crc2.fill();
        A11.crc2.restore();
    }
    function drawCloud(_position, _size) {
        console.log("Cloud", _position, _size);
        let nParticles = 80;
        let radiusParticle = 50;
        let particle = new Path2D();
        let gradient = A11.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        A11.crc2.save();
        A11.crc2.translate(_position.x, _position.y);
        A11.crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            A11.crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            A11.crc2.translate(x, y);
            A11.crc2.fill(particle);
            A11.crc2.restore();
        }
        A11.crc2.restore();
    }
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        console.log("Mountains", _position, _min, _max);
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        A11.crc2.save();
        A11.crc2.translate(_position.x, _position.y);
        A11.crc2.beginPath();
        A11.crc2.moveTo(0, 0);
        A11.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            A11.crc2.lineTo(x, y);
        } while (x < A11.crc2.canvas.width);
        A11.crc2.lineTo(x, 0);
        A11.crc2.closePath();
        let gradient = A11.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        A11.crc2.fillStyle = gradient;
        A11.crc2.fill();
        A11.crc2.restore();
    }
    function drawPicking() {
        A11.crc2.save();
        A11.crc2.translate(1008, 482);
        A11.crc2.beginPath();
        A11.crc2.arc(0, 0, 9, 0, 2 * Math.PI);
        A11.crc2.fillStyle = "blue";
        A11.crc2.fill();
        A11.crc2.closePath();
        A11.crc2.restore();
        //schnabel
        A11.crc2.save();
        A11.crc2.translate(210, -70);
        A11.crc2.beginPath();
        A11.crc2.moveTo(805, 550);
        A11.crc2.lineTo(805, 555);
        A11.crc2.lineTo(820, 553);
        A11.crc2.fillStyle = "blue";
        A11.crc2.fill();
        A11.crc2.closePath();
        A11.crc2.restore();
        //Füße
        A11.crc2.save();
        A11.crc2.translate(980, 510);
        A11.crc2.beginPath();
        A11.crc2.moveTo(0, 0);
        A11.crc2.lineTo(0, 10);
        A11.crc2.fillStyle = "blue";
        A11.crc2.stroke();
        A11.crc2.closePath();
        A11.crc2.restore();
        A11.crc2.save();
        A11.crc2.translate(985, 512);
        A11.crc2.beginPath();
        A11.crc2.moveTo(0, 0);
        A11.crc2.lineTo(0, 10);
        A11.crc2.fillStyle = "blue";
        A11.crc2.stroke();
        A11.crc2.closePath();
        A11.crc2.restore();
        //body
        A11.crc2.save();
        A11.crc2.translate(1000, 482);
        A11.crc2.beginPath();
        A11.crc2.ellipse(-10, 18, 10, 20, 1.1, 0, 0.1, true);
        A11.crc2.fillStyle = "blue";
        A11.crc2.fill();
        A11.crc2.closePath();
        A11.crc2.restore();
        //auge
        A11.crc2.save();
        A11.crc2.translate(1010, 482);
        A11.crc2.beginPath();
        A11.crc2.arc(2, -2, 1.2, 0, 2 * Math.PI);
        A11.crc2.fillStyle = "black";
        A11.crc2.fill();
        A11.crc2.closePath();
        A11.crc2.restore();
        //Fußunten
        A11.crc2.save();
        A11.crc2.translate(980, 520);
        A11.crc2.beginPath();
        A11.crc2.moveTo(0, 0);
        A11.crc2.lineTo(8, 0);
        A11.crc2.fillStyle = "black";
        A11.crc2.stroke();
        A11.crc2.closePath();
        A11.crc2.restore();
        //Fußunten
        A11.crc2.save();
        A11.crc2.translate(985, 522);
        A11.crc2.beginPath();
        A11.crc2.moveTo(0, 0);
        A11.crc2.lineTo(8, 0);
        A11.crc2.fillStyle = "black";
        A11.crc2.stroke();
        A11.crc2.closePath();
        A11.crc2.restore();
        //flügel
        A11.crc2.save();
        A11.crc2.translate(981, 510);
        A11.crc2.rotate(2.8);
        A11.crc2.beginPath();
        A11.crc2.moveTo(0, 0);
        A11.crc2.lineTo(20, 0);
        A11.crc2.lineTo(23, 4);
        A11.crc2.lineTo(0, 13);
        A11.crc2.lineTo(0, 0);
        A11.crc2.fillStyle = "blue";
        A11.crc2.fill();
        A11.crc2.closePath();
        A11.crc2.restore();
    }
})(A11 || (A11 = {}));
//# sourceMappingURL=main.js.map