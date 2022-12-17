var A092;
(function (A092) {
    class Snowflake {
        pos;
        velocity;
        size;
        constructor(_size) {
            this.pos = new A092.Vector(0, 0);
            this.velocity = new A092.Vector(0, 0);
            this.velocity.random(200, 400);
            this.size = _size;
        }
        draw() {
            console.log("draw");
            A092.crc2.save();
            A092.crc2.translate(this.pos.x, this.pos.y);
            A092.crc2.scale(this.size, this.size);
            A092.crc2.beginPath();
            A092.crc2.arc(100, 10, 3, 0, 2 * Math.PI);
            A092.crc2.closePath();
            A092.crc2.fillStyle = "white";
            A092.crc2.fill();
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
                this.pos.y += A092.crc2.canvas.height;
            if (this.pos.x > A092.crc2.canvas.width)
                this.pos.x -= A092.crc2.canvas.width;
            if (this.pos.y > A092.crc2.canvas.height)
                this.pos.y -= A092.crc2.canvas.height;
        }
    }
    A092.Snowflake = Snowflake;
})(A092 || (A092 = {}));
//# sourceMappingURL=snowflake.js.map