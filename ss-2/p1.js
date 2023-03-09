// Defining methods 

const myObj = {
    car:"good",
    myMethod: function (param) {
        console.log(`Everything is ${this[param]}`)//doe etogo tut stoyal myObj[param] v sledstvii s drugimi prototipami eto ne rabotalo, poetomu ya ego zamenil na this i zarabotalo 
},};

myObj.myMethod('car'); // logs: Everything is good

const myCar = Object.create(myObj); // kogda ya sozdayu object cherez const mozhno tol'ko tak sozdavat' protorypes

myCar.car = "bad";
console.log(myCar);//logs: { car: 'bad' }

myCar.myMethod('car'); //logs: Everything is bad





