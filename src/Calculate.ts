class Calculate {
    x: number;
    y: number;
    e: string;
    result: number;

    constructor(x: number, y: number){
        this.x = x;
        this.y = y;
    }
    addition() {
        this.e = '+';
        this.result =  this.x + this.y;
    }
    product(){
        this.e = '*';
        this.result = this.x * this.y;
    }
    division(){
        this.e = '/';
        this.result = this.x / this.y;
    }
    subtraction(){
        this.e = '-';
        this.result = this.x - this.y;
    }

    getResult(){
        return this.result;
    }
    getExpression(){
        return (this.x).toString() + this.e + (this.y).toString();
    }
}
