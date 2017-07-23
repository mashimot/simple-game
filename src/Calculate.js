var Calculate = (function () {
    function Calculate(x, y) {
        this.x = x;
        this.y = y;
    }
    Calculate.prototype.addition = function () {
        this.e = '+';
        this.result = this.x + this.y;
    };
    Calculate.prototype.product = function () {
        this.e = '*';
        this.result = this.x * this.y;
    };
    Calculate.prototype.division = function () {
        this.e = '/';
        this.result = this.x / this.y;
    };
    Calculate.prototype.subtraction = function () {
        this.e = '-';
        this.result = this.x - this.y;
    };
    Calculate.prototype.getResult = function () {
        return this.result;
    };
    Calculate.prototype.getExpression = function () {
        return (this.x).toString() + this.e + (this.y).toString();
    };
    return Calculate;
}());
//# sourceMappingURL=Calculate.js.map