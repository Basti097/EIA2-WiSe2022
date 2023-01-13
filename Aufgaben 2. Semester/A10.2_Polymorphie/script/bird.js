var A102;
(function (A102) {
    class Bird extends A102.Moveable {
        size;
        constructor(_size, _position) {
            super(_position);
            if (_position)
                this.position = _position.copy();
            else
                this.position = new A102.Vector(0, 0);
            this.velocity = new A102.Vector(0, 0);
            this.velocity.random(0, 400);
            this.size = _size;
        }
        draw() {
            console.log("draw bird");
            A102.crc2.save();
            A102.crc2.translate(this.position.x, this.position.y);
            A102.crc2.beginPath();
            A102.crc2.bezierCurveTo(30, -10, 0, -20, 0, 0);
            A102.crc2.strokeStyle = "black";
            A102.crc2.stroke();
            A102.crc2.closePath();
            A102.crc2.restore();
            A102.crc2.save();
            A102.crc2.translate(this.position.x, this.position.y);
            A102.crc2.beginPath();
            A102.crc2.bezierCurveTo(-30, -10, 0, -20, 0, 0);
            A102.crc2.fillStyle = "black";
            A102.crc2.stroke();
            A102.crc2.closePath();
            A102.crc2.restore();
        }
        move(_timeslice) {
            if (this.position.y > 420)
                this.position.y = A102.crc2.canvas.height;
            super.move(0.01);
        }
    }
    A102.Bird = Bird;
})(A102 || (A102 = {}));
//# sourceMappingURL=bird.js.map