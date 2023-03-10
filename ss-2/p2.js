const Manager = {
    name: "Karina", 
    age: 27,
    job: "Software Engineer",
};

const Intern = Object.create(Manager);
console.log(Intern); // logs : {}

Intern.name = "Tyron";
Intern.age = 21;
Intern.job = "Software Engineer";
console.log(Intern);//logs: { name: 'Tyron', age: 21, job: 'Software Engineer' }

function sayHi(){
    console.log(`Hello, my name is ${this.name}`);
}

Manager.sayHi = sayHi;// logs: Hello, my name is Karina
Intern.sayHi = sayHi;

console.log(Manager);//Logs: Hello, my name is Tyron

Manager.sayHi();
Intern.sayHi();