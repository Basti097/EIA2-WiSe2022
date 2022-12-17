namespace A092 {

   

    export class Snowflake {
        pos: Vector;
        velocity: Vector;
        size: number;

        constructor(_size: number) {
            this.pos = new Vector(0, 0);
            this.velocity = new Vector(0, 0);
            this.velocity.random(200, 400);
            this.size = _size;
            
        }

        draw(): void {
            console.log("draw");
            crc2.save();
            crc2.translate(this.pos.x, this.pos.y);
            crc2.scale(this.size, this.size);
            crc2.beginPath();
            crc2.arc(100, 10, 3, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "white";
            crc2.fill();
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
                this.pos.y += crc2.canvas.height;
            if (this.pos.x > crc2.canvas.width)
                this.pos.x -= crc2.canvas.width;
            if (this.pos.y > crc2.canvas.height)
                this.pos.y -= crc2.canvas.height;

       
        }



    }

}