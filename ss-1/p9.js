let propertyName = "make";

const myCar = {
    make: "Toyota",
    model: "Camry",
    year: 2023,
};
myCar[propertyName] = "Ford";

console.log(myCar); //{ make: 'Ford', model: 'Camry', year: 2023 }

myCar[propertyName] = "Toyota";

console.log(myCar);//{ make: 'Toyota', model: 'Camry', year: 2023 }

myCar.propertyName = "Ferrari";

console.log(myCar);//{ make: 'Toyota', model: 'Camry', year: 2023, propertyName: 'Ferrari' } <-- 
//<-- zamet' chto on sozdal key pod nazvaniem propertyName i tuda tupo prisvoil znachenie "Ferrari"