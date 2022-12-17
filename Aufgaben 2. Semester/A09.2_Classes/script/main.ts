namespace A092 {
    window.addEventListener("load", handleLoad);
    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;
    let background: ImageData; 
    let snowflakes: Snowflake[] = []; 
    let birds: Bird[] = [];
    let birdsPicking: BirdPicking[] = [];
    let golden: number = 0.62;

    interface VectorBackground {
        x: number;
        y: number;
    }

    
    export function handleLoad(): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        
        drawBackground();   
        create();
        setInterval(update, 100);
        

    }


      

    export function create(): void {
        
        for (let index: number = 0; index < 100; index++) {
            let snowflake: Snowflake = new Snowflake(1); 
            snowflakes.push(snowflake); 
        }

        for (let index2: number = 0; index2 < 20; index2++) {
            let bird: Bird = new Bird(200);
            birds.push(bird);
        }

    }

    export function update(): void {
        console.log("update");
        crc2.putImageData(background, 0, 0); 
        // crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        for (let snowflake of snowflakes) {
            snowflake.move(1 / 50);
            snowflake.draw();
        }
        for (let bird of birds) {
            bird.move(1/ 50);
            bird.draw();
        }
    }    

    function drawBackground(): void {
        console.log("Background");
        let horizon: number = crc2.canvas.height * golden;
        let posMountains: VectorBackground = { x: 0, y: horizon };
        let posSnowmanBot: VectorBackground = { x: 200, y: 590 };
        let posSnowmanMid: VectorBackground = { x: 200, y: 525 };
        let posSnowmanTop: VectorBackground = { x: 200, y: 470 };
        let posCage: VectorBackground = { x: 500, y: 500 };
        
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(golden, "white");
        gradient.addColorStop(1, "lightgray");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        drawSun({ x: 100, y: 75 });
        drawCloud({ x: 500, y: 125 }, { x: 250, y: 75 });
        drawMountains(posMountains, 75, 200, "grey", "white");
        drawMountains(posMountains, 50, 150, "grey", "lightgrey");
        drawTrees({ x: 500, y: 600 });
        drawSnowman(posSnowmanBot, posSnowmanMid, posSnowmanTop);
        drawBirdCage(posCage);
        background = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height); 
    }

    

    function drawTrees(_position: VectorBackground): void {
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

    function drawBirdCage(_position: VectorBackground): void {
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

    function drawSnowman(_positionBot: VectorBackground, _positionMid: VectorBackground, _positionTop: VectorBackground): void {
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



    function drawSun(_position: VectorBackground): void {
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


    function drawCloud(_position: VectorBackground, _size: VectorBackground): void {
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



    function drawMountains(_position: VectorBackground, _min: number, _max: number, _colorLow: string, _colorHigh: string): void {
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
