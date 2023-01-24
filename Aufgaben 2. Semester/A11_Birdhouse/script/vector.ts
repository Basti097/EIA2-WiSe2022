namespace A11 {

    export class Vector {
        public x: number;
        public y: number;

        constructor(_x: number, _y: number) {
            this.set(_x, _y);
        }

        public set(_x: number, _y: number): void {
            let randomNum: number = Math.random() * (1500 - 1) + 1;
            let randomNum2: number = Math.random() * (1500 - 1) + 1;
            this.x = randomNum2;
            this.y = randomNum;
        }

        public scale(_factor: number): void {
            this.x *= _factor;
            this.y *= _factor;
        }

        public add(_addend: Vector): void {
            this.x += _addend.x;
            this.y += _addend.y;
        }

        public random(_minLength: number, _maxLength: number): void {
            let length: number = _minLength + Math.random() * (_maxLength - _minLength);
            let direction: number = 2;
            this.set(Math.cos(direction), Math.sin(direction));
            this.scale(length);
        }

        public copy(): Vector {
            return new Vector(this.x, this.y);
        }
    }

}




