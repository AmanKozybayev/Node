const myObj = new Object();

myObj.a = 5;
myObj.b = 12;

console.log(myObj);
//logs: { a: 5, b: 12 }

//Deleting properties 

delete myObj.a;
console.log("a" in myObj);// logs: false 

