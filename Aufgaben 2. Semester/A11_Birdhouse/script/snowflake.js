var A11;
(function (A11) {
    class Snowflake extends A11.Moveable {
        size;
        constructor(_size, _position) {
            super(_position);
            if (_position)
                this.position = _position.copy();
            else
                this.position = new A11.Vector(0, 0);
            this.velocity = new A11.Vector(0, 0);
            this.velocity.random(200, 400);
            this.size = _size;
        }
        draw() {
            console.log("draw");
            A11.crc2.save();
            A11.crc2.translate(this.position.x, this.position.y);
            A11.crc2.scale(this.size, this.size);
            A11.crc2.beginPath();
            A11.crc2.arc(100, 10, 3, 0, 2 * Math.PI);
            A11.crc2.closePath();
            A11.crc2.fillStyle = "white";
            A11.crc2.fill();
            A11.crc2.restore();
        }
        move(_timeslice) {
            super.move(0.09);
        }
    }
    A11.Snowflake = Snowflake;
})(A11 || (A11 = {}));
//# sourceMappingURL=snowflake.js.map