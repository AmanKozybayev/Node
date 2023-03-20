const name = 'Miriam';
const greeting = `Hello, my name is ${name}!`;
console.log(greeting);
//Hello, my name is Miriam!

function makeGreeting(name) {
    return `Hello, my name is ${name}!`;
}

const greeting2 = makeGreeting(name);
console.log(greeting2);
