var a = 10;
class newNumber{

    static a = 20;

    // Data
    constructor (value){
        this.n = value;
        this.a = 5;
        this._b = 10;
        this.__c = 20;
    }

    // Functions
    sqrt(){
        return this.n ** (1/2);
    }

    cubert(){
        return this.n ** (1/3);
    }

    pow(x){
        return  this.n ** x + this.a;
    }

    checkprime(){
        this.prime = true;
        for(this.i = 2;this.i < this.n;this.i++){
            if(this.n % this.i == 0){
                this.prime = false;
                break
            }
        }
        return this.prime;
    }

    total(){
        return a;
    }
}

// ---------------------------------------------------- 

var L = [10, 20, 30];

var objs = [];
for(item of L){
    objs.push(new newNumber(item));
}

for(item of objs){
    console.log(item.pow(1));
}

console.log(newNumber.a);
