var A102;
(function (A102) {
    class Snowflake extends A102.Moveable {
        size;
        constructor(_size, _position) {
            super(_position);
            if (_position)
                this.position = _position.copy();
            else
                this.position = new A102.Vector(0, 0);
            this.velocity = new A102.Vector(0, 0);
            this.velocity.random(200, 400);
            this.size = _size;
        }
        draw() {
            console.log("draw");
            A102.crc2.save();
            A102.crc2.translate(this.position.x, this.position.y);
            A102.crc2.scale(this.size, this.size);
            A102.crc2.beginPath();
            A102.crc2.arc(100, 10, 3, 0, 2 * Math.PI);
            A102.crc2.closePath();
            A102.crc2.fillStyle = "white";
            A102.crc2.fill();
            A102.crc2.restore();
        }
        move(_timeslice) {
            super.move(0.09);
        }
    }
    A102.Snowflake = Snowflake;
})(A102 || (A102 = {}));
//# sourceMappingURL=snowflake.js.map