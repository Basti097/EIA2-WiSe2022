namespace A11 {
    
    export class Snowflake extends Moveable {
        size: number;
        constructor(_size: number, _position?: Vector) {

            super(_position);

            if (_position)
            this.position = _position.copy();
            else
            this.position = new Vector(0, 0);

            this.velocity = new Vector(0, 0);
            this.velocity.random(200, 400);
            this.size = _size;
            
        }

       public draw(): void {
            console.log("draw");
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.scale(this.size, this.size);
            crc2.beginPath();
            crc2.arc(100, 10, 3, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "white";
            crc2.fill();
            crc2.restore();
        }

        public move(_timeslice: number): void {
            super.move(0.09);
        }



    }

}