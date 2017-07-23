class Randomizer {
    value: number;
    constructor(value: number){
        this.value = value;
    }
    randomInt(){
        return Math.floor(Math.random() * this.value + 1);
    }
    randomFloat(){
        return Math.floor(Math.random() * this.value + 1);
    }
    setValue(value: number){
        this.value = value;
    }
    getValue(){
        return this.value;
    }
}