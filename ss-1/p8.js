let str = "myString"; 
const myObj = {};
myObj[str] = "This key is in variable str";

console.log(myObj);//{ myString: 'This key is in variable str' }
console.log(myObj.str);//undefined

console.log(myObj[str]); //This key is in variable str
