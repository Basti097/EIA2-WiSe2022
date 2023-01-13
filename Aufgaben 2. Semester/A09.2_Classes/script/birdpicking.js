var A092;
(function (A092) {
    class BirdPicking {
        velocity;
        size;
        constructor(_size) {
            this.velocity = new A092.VectorPicking(0, 0);
            this.velocity.random(0, 400);
        }
        draw() {
            console.log("jz");
            //kopf
            A092.crc2.save();
            A092.crc2.translate(1008, 482);
            A092.crc2.beginPath();
            A092.crc2.arc(0, 0, 9, 0, 2 * Math.PI);
            A092.crc2.fillStyle = "blue";
            A092.crc2.fill();
            A092.crc2.closePath();
            A092.crc2.restore();
            //schnabel
            A092.crc2.save();
            A092.crc2.translate(210, -70);
            A092.crc2.beginPath();
            A092.crc2.moveTo(805, 550);
            A092.crc2.lineTo(805, 555);
            A092.crc2.lineTo(820, 553);
            A092.crc2.fillStyle = "blue";
            A092.crc2.fill();
            A092.crc2.closePath();
            A092.crc2.restore();
            //Füße
            A092.crc2.save();
            A092.crc2.translate(980, 510);
            A092.crc2.beginPath();
            A092.crc2.moveTo(0, 0);
            A092.crc2.lineTo(0, 10);
            A092.crc2.fillStyle = "blue";
            A092.crc2.stroke();
            A092.crc2.closePath();
            A092.crc2.restore();
            A092.crc2.save();
            A092.crc2.translate(985, 512);
            A092.crc2.beginPath();
            A092.crc2.moveTo(0, 0);
            A092.crc2.lineTo(0, 10);
            A092.crc2.fillStyle = "blue";
            A092.crc2.stroke();
            A092.crc2.closePath();
            A092.crc2.restore();
            //body
            A092.crc2.save();
            A092.crc2.translate(1000, 482);
            A092.crc2.beginPath();
            A092.crc2.ellipse(-10, 18, 10, 20, 1.1, 0, 0.1, true);
            A092.crc2.fillStyle = "blue";
            A092.crc2.fill();
            A092.crc2.closePath();
            A092.crc2.restore();
            //auge
            A092.crc2.save();
            A092.crc2.translate(1010, 482);
            A092.crc2.beginPath();
            A092.crc2.arc(2, -2, 1.2, 0, 2 * Math.PI);
            A092.crc2.fillStyle = "black";
            A092.crc2.fill();
            A092.crc2.closePath();
            A092.crc2.restore();
            //Fußunten
            A092.crc2.save();
            A092.crc2.translate(980, 520);
            A092.crc2.beginPath();
            A092.crc2.moveTo(0, 0);
            A092.crc2.lineTo(8, 0);
            A092.crc2.fillStyle = "black";
            A092.crc2.stroke();
            A092.crc2.closePath();
            A092.crc2.restore();
            //Fußunten
            A092.crc2.save();
            A092.crc2.translate(985, 522);
            A092.crc2.beginPath();
            A092.crc2.moveTo(0, 0);
            A092.crc2.lineTo(8, 0);
            A092.crc2.fillStyle = "black";
            A092.crc2.stroke();
            A092.crc2.closePath();
            A092.crc2.restore();
            //flügel
            A092.crc2.save();
            A092.crc2.translate(981, 510);
            A092.crc2.rotate(2.8);
            A092.crc2.beginPath();
            A092.crc2.moveTo(0, 0);
            A092.crc2.lineTo(20, 0);
            A092.crc2.lineTo(23, 4);
            A092.crc2.lineTo(0, 13);
            A092.crc2.lineTo(0, 0);
            A092.crc2.fillStyle = "blue";
            A092.crc2.fill();
            A092.crc2.closePath();
            A092.crc2.restore();
        }
    }
    A092.BirdPicking = BirdPicking;
})(A092 || (A092 = {}));
//# sourceMappingURL=birdpicking.js.map