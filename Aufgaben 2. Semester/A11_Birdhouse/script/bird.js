var A11;
(function (A11) {
    class Bird extends A11.Moveable {
        size;
        constructor(_size, _position) {
            super(_position);
            if (_position)
                this.position = _position.copy();
            else
                this.position = new A11.Vector(0, 0);
            this.velocity = new A11.Vector(0, 0);
            this.velocity.random(0, 400);
            this.size = _size;
        }
        draw() {
            console.log("draw bird");
            A11.crc2.save();
            A11.crc2.translate(this.position.x, this.position.y);
            A11.crc2.beginPath();
            A11.crc2.bezierCurveTo(30, -10, 0, -20, 0, 0);
            A11.crc2.strokeStyle = "black";
            A11.crc2.stroke();
            A11.crc2.closePath();
            A11.crc2.restore();
            A11.crc2.save();
            A11.crc2.translate(this.position.x, this.position.y);
            A11.crc2.beginPath();
            A11.crc2.bezierCurveTo(-30, -10, 0, -20, 0, 0);
            A11.crc2.fillStyle = "black";
            A11.crc2.stroke();
            A11.crc2.closePath();
            A11.crc2.restore();
        }
        move(_timeslice) {
            if (this.position.y > 420)
                this.position.y = A11.crc2.canvas.height;
            super.move(0.01);
        }
        flying() {
            console.log("aus dem Bildschirm fliegen");
        }
        picking() {
            console.log("pickt am Boden ");
        }
    }
    A11.Bird = Bird;
})(A11 || (A11 = {}));
//# sourceMappingURL=bird.js.map