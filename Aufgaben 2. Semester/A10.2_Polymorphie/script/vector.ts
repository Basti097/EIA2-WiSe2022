namespace A102 {

    export class Vector {
        x: number;
        y: number;

        constructor(_x: number, _y: number) {
            this.set(_x, _y);
        }

        set(_x: number, _y: number): void {
            let randomNum: number = Math.random() * (1500 - 1) + 1;
            let randomNum2: number = Math.random() * (1500 - 1) + 1;
            this.x = randomNum2;
            this.y = randomNum;
        }

        scale(_factor: number): void {
            this.x *= _factor;
            this.y *= _factor;
        }

        add(_addend: Vector): void {
            this.x += _addend.x;
            this.y += _addend.y;
        }

        random(_minLength: number, _maxLength: number): void {
            let length: number = _minLength + Math.random() * (_maxLength - _minLength);
            let direction: number = 2;
            this.set(Math.cos(direction), Math.sin(direction));
            this.scale(length);
        }

        copy(): Vector {
            return new Vector(this.x, this.y);
        }
    }

}




