// Objects and properties 

//forex: 

const myCar = {
    make: "Ford",
    model: "Mustang",
    year: 1969,
};// created an object called myCar 

//accessing properties 

//Dot notation 
myCar.make = "Toyota";
myCar.model = "Camry";
myCar.year = 2023;
console.log(myCar);

myCar["make"] = "Ford";
myCar["model"] = "Mustang";
myCar["year"] = 2022;
console.log(myCar);
