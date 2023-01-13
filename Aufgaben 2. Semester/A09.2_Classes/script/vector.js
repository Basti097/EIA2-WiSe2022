var A092;
(function (A092) {
    class Vector {
        x;
        y;
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        set(_x, _y) {
            let randomNum = Math.random() * (1500 - 1) + 1;
            let randomNum2 = Math.random() * (1500 - 1) + 1;
            this.x = randomNum2;
            this.y = randomNum;
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
        random(_minLength, _maxLength) {
            let length = _minLength + Math.random() * (_maxLength - _minLength);
            let direction = 2;
            this.set(Math.cos(direction), Math.sin(direction));
            this.scale(length);
        }
    }
    A092.Vector = Vector;
    class VectorBird {
        x;
        y;
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        set(_x, _y) {
            let randomNum = Math.random() * (230 - 1) + 1;
            let randomNum2 = Math.random() * (1500 - 1) + 1;
            this.x = randomNum2;
            this.y = randomNum;
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend) {
            this.x -= _addend.x;
            this.y -= _addend.y;
        }
        random(_minLength, _maxLength) {
            let length = _minLength + Math.random() * (_maxLength - _minLength);
            let direction = 10;
            this.set(Math.cos(direction), Math.sin(direction));
            this.scale(length);
        }
    }
    A092.VectorBird = VectorBird;
    class VectorPicking {
        x;
        y;
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        set(_x, _y) {
            // this.x = randomNum2;
            // this.y = randomNum;
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend) {
            this.x -= _addend.x;
            this.y -= _addend.y;
        }
        random(_minLength, _maxLength) {
            let length = _minLength + Math.random() * (_maxLength - _minLength);
            let direction = 10;
            this.set(Math.cos(direction), Math.sin(direction));
            this.scale(length);
        }
    }
    A092.VectorPicking = VectorPicking;
})(A092 || (A092 = {}));
//# sourceMappingURL=vector.js.map