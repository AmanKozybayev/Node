// creating object with constructor function 


// for example 
function Car(make,model,year) {
    this.make = make; // koroche tam vse prosto this.make sozdaet - kluch (key), a kogda ty delaesh = make vot etot make eto to chto budet v znacheniyah 
    this.model = model;
    this.year = year;
}

// try to create new object by calling new 

const myCar = new Car("Eagle", "Talon TSI", "1993");

console.log(myCar.model);// kogda my vyzybaem etu function poluchaetsya my uzhe sozdali obj
//myCar s znacheniyami myCar = Car(make: "Eagle", model: "Talon TSI", year: "1993")