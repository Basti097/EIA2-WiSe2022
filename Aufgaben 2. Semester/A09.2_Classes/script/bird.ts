namespace A092 {

    export class Bird {

        pos: VectorBird;
        velocity: VectorBird;
        size: number;

        constructor(_size: number) {
            this.pos = new VectorBird(0,0);
            this.velocity = new VectorBird(0,0);
            this.velocity.random(0, 400);
            this.size = _size;
        }

        draw(): void {
            console.log("draw bird");
            crc2.save();
            crc2.translate(this.pos.x, this.pos.y);
            crc2.beginPath();
            crc2.bezierCurveTo(30, -10, 0, -20, 0, 0);
            crc2.strokeStyle = "black";
            crc2.stroke();
            crc2.closePath();
            crc2.restore();
            crc2.save();
            crc2.translate(this.pos.x, this.pos.y);
            crc2.beginPath();
            crc2.bezierCurveTo(-30, -10, 0, -20, 0, 0);
            crc2.fillStyle = "black";
            crc2.stroke();
            crc2.closePath();
            crc2.restore();
        }
        move(_timeslice: number): void {
            let randomNum: number = Math.random() * (800 - 1) + 1;
            console.log("move");
    
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.pos.add(offset);

            if (this.pos.x < 0)
                this.pos.x += crc2.canvas.width;

            if (this.pos.y < 0)
                this.pos.y += 420;

            if (this.pos.x > crc2.canvas.width)
                this.pos.x -= crc2.canvas.width;

            if (this.pos.y > crc2.canvas.height)
                this.pos.y -= crc2.canvas.height;
        }
    }
}