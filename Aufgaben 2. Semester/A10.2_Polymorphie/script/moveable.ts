namespace A102 {
    export class Moveable {
        position: Vector;
        velocity: Vector;


        constructor(_position: Vector) {
            
            if (_position)
            this.position = _position.copy();
            else
            this.position = new Vector(0, 0);

            this.velocity = new Vector(0, 0);
        }

        draw(): void {
            //moveable move 
        }

        move(_timeslice: number): void {
            let randomNum: number = Math.random() * (800 - 1) + 1;
            console.log("move");
    

            let offset: Vector = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);

            if (this.position.x < 0)
                this.position.x += crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += crc2.canvas.height;
            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;
            if (this.position.y > crc2.canvas.height)
                this.position.y -= crc2.canvas.height;

       
        }



    }

    }






