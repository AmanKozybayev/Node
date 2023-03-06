
// const a = require("./p5-package");

// console.log(a.PI);
// console.log(a.students);
// console.log(a.square);
// console.log(a.students[1]);

// console.log(a.square(5));

// above see example of import of necessary modules. 

// here i will import modules that i need only 

const {square, students, pwd,PI} = require("./p5-package");

console.log(square(5)); // if i want to use only square function 
console.log(PI); // if some of my inputs doesnt exist in 15th row, i can't use that module 

