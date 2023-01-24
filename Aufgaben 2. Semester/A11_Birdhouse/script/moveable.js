var A11;
(function (A11) {
    class Moveable {
        position;
        velocity;
        constructor(_position) {
            if (_position)
                this.position = _position.copy();
            else
                this.position = new A11.Vector(0, 0);
            this.velocity = new A11.Vector(0, 0);
        }
        draw() {
            console.log("draw");
        }
        move(_timeslice) {
            let randomNum = Math.random() * (800 - 1) + 1;
            console.log("move");
            let offset = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += A11.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += A11.crc2.canvas.height;
            if (this.position.x > A11.crc2.canvas.width)
                this.position.x -= A11.crc2.canvas.width;
            if (this.position.y > A11.crc2.canvas.height)
                this.position.y -= A11.crc2.canvas.height;
        }
    }
    A11.Moveable = Moveable;
})(A11 || (A11 = {}));
//# sourceMappingURL=moveable.js.map