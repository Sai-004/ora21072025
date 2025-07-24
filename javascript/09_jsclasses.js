class Car {
    constructor(brand) {
        this.carname = brand;
        this.present();
    }
    present() {
        this.creator = "Karl and Bertha Benz";
        console.log ('CAR -> ' + 'I have a ' + this.carname + " " + this.creator);
        return 'I have a ' + this.carname
    }
}


class Model extends Car {
    constructor(brand, mod) {
        super(brand);
        this.model = mod;
    }
    present() {
        console.log ('OVERRIDE -> ' + 'I have a ' + this.carname);
        return this.carname;
    }
    show() {
        console.log('MODEL -> ' + this.present() + ', it is a ' + this.model);
    }
}


mycar = new Car("Mercedes");
//console.log(mycar.present());
myNewCar = new Model("Mercedes", "GLS");
myNewCar.show();

// Polymorphism

car = mycar;

//car = myNewCar;
car.present()