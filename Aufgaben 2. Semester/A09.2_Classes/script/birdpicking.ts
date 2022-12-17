namespace A092 {
    export class BirdPicking {
        velocity: VectorPicking;
        size: number;

        constructor(_size: number) {
            this.velocity = new VectorPicking(0, 0);
            this.velocity.random(0, 400);

        }

        draw(): void {
            console.log("jz");
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
    }
}