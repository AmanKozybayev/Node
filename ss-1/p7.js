const myObj = {};
const str = "myString";
const rand = Math.random();
const anotherObj = {};

//create additional properties on myObj
myObj.type = "Dot syntax for a key named type";
myObj["Date created"] = "This key has a space";
myObj[str] = "This key is in variable str";
myObj[rand] = "A random number is the key here";
myObj[anotherObj] = "This key is an empty anotherObj";
myObj[""] = "This key is an empty string";

console.log(myObj);
//Logs:
// {
//     type: 'Dot syntax for a key named type',
//     'Date created': 'This key has a space',
//     myString: 'This key is in variable str',
//     '0.9649681010723816': 'A random number is the key here',
//     '[object Object]': 'This key is an empty anotherObj',
//     '': 'This key is an empty string'
//   }
console.log(myObj.myString);
//Logs:
// This key is in variable str