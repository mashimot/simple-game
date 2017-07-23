var Randomizer = (function () {
    function Randomizer(value) {
        this.value = value;
    }
    Randomizer.prototype.randomInt = function () {
        return Math.floor(Math.random() * this.value + 1);
    };
    Randomizer.prototype.randomFloat = function () {
        return Math.floor(Math.random() * this.value + 1);
    };
    Randomizer.prototype.setValue = function (value) {
        this.value = value;
    };
    Randomizer.prototype.getValue = function () {
        return this.value;
    };
    return Randomizer;
}());
//# sourceMappingURL=Randomizer.js.map