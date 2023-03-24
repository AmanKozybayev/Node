const readline = require('readline');


//ya hotel posmotret' chto est' v readline
// console.log(Object.keys(readline));
//output:
// [
//     'Interface',
//     'clearLine',
//     'clearScreenDown',
//     'createInterface',
//     'cursorTo',
//     'emitKeypressEvents',
//     'moveCursor',
//     'promises'
//   ]

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('what is your name? :', (answer) => {
    console.log(`Hello, ${answer}!`);
    rl.close();
});



