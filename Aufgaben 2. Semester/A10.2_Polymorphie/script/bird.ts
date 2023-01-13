namespace A102 {

    export class Bird extends Moveable {
        size: number;

        constructor(_size: number, _position?: Vector) {
            super(_position);

            if (_position)
                this.position = _position.copy();
            else
                this.position = new Vector(0, 0);

            this.velocity = new Vector(0, 0);
            this.velocity.random(0, 400);
            this.size = _size;
        }

        draw(): void {
            console.log("draw bird");
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.beginPath();
            crc2.bezierCurveTo(30, -10, 0, -20, 0, 0);
            crc2.strokeStyle = "black";
            crc2.stroke();
            crc2.closePath();
            crc2.restore();
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.beginPath();
            crc2.bezierCurveTo(-30, -10, 0, -20, 0, 0);
            crc2.fillStyle = "black";
            crc2.stroke();
            crc2.closePath();
            crc2.restore();
        }

        move(_timeslice: number): void {
            if (this.position.y > 420)
            this.position.y = crc2.canvas.height;
            super.move(0.01);

        }
    }
}