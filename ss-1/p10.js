let propertyName = "make";
const myCar = {
    make: "Company",
    model: "Model",
    year: 1111,
};

myCar[propertyName] = "Ford";

// access different prototypes by changing the contents of the variable 
propertyName = "model"; 

myCar[propertyName] = "Mustang";

console.log(myCar);