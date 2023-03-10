const Car = {
    make: "Toyota",
    model: "Rav4",
    year: 2222,
};

Car.make.displayCar = function() {
    const result = `A beautiful ${this.year} ${this.make} ${this.model}`;
    console.log(result);
};

const car1 = Object.create(Car);
console.log(car1.make);

car1.displayCar();// ne rabotaet nihuya 
