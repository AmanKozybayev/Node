//setInterval(() => console.log("passed"),2000);

console.log("before calling setTimeOut");
setTimeout(() => console.log("Finished"), 2000);// cherez 2 seconds vidaet Finished 
console.log("after calling setTimeOut");

setInterval(() => console.log("interval"),3000);// kazhdie 3 seconds vidaet "Interal"

