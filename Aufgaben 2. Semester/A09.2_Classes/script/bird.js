var A092;
(function (A092) {
    class Bird {
        pos;
        velocity;
        size;
        constructor(_size) {
            this.pos = new A092.VectorBird(0, 0);
            this.velocity = new A092.VectorBird(0, 0);
            this.velocity.random(0, 400);
            this.size = _size;
        }
        draw() {
            console.log("draw bird");
            A092.crc2.save();
            A092.crc2.translate(this.pos.x, this.pos.y);
            A092.crc2.beginPath();
            A092.crc2.bezierCurveTo(30, -10, 0, -20, 0, 0);
            A092.crc2.strokeStyle = "black";
            A092.crc2.stroke();
            A092.crc2.closePath();
            A092.crc2.restore();
            A092.crc2.save();
            A092.crc2.translate(this.pos.x, this.pos.y);
            A092.crc2.beginPath();
            A092.crc2.bezierCurveTo(-30, -10, 0, -20, 0, 0);
            A092.crc2.fillStyle = "black";
            A092.crc2.stroke();
            A092.crc2.closePath();
            A092.crc2.restore();
        }
        move(_timeslice) {
            let randomNum = Math.random() * (800 - 1) + 1;
            console.log("move");
            let offset = new A092.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.pos.add(offset);
            if (this.pos.x < 0)
                this.pos.x += A092.crc2.canvas.width;
            if (this.pos.y < 0)
                this.pos.y += 420;
            if (this.pos.x > A092.crc2.canvas.width)
                this.pos.x -= A092.crc2.canvas.width;
            if (this.pos.y > A092.crc2.canvas.height)
                this.pos.y -= A092.crc2.canvas.height;
        }
    }
    A092.Bird = Bird;
})(A092 || (A092 = {}));
//# sourceMappingURL=bird.js.map