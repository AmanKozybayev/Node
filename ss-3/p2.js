function myClass() {
    this.myField = "foo";
}
myClass.myStaticField = "bar";

console.log(myClass);

myClass.myStaticMethod = function () {

};

myClass.prototype.myMethod = function () {

};

// Constructing a class 

const myInstance = new myClass();
console.log(myInstance.myField);

