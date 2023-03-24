const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,//pomogaet chto-to prinimat' cherez command prompt
    output: process.stdout//vivodit zapros cotoryi my pishem v rl.question("Please .... ") chelovek kotoryi rabotaet ponimaet chto nado
});

rl.question('Please input first number : ', (num1) => {
    rl.question('Please input second number: ', (num2) => {
        rl.question('Please input operator (*/+-): ', (operator) => {
            let result;
            switch (operator) {
                case '+':
                    result = parseFloat(num1)+parseFloat(num2);
                    break;
                case '-': 
                    result = parseFloat(num1) - parseFloat(num2);
                    break;
                case '*':
                    result = parseFloat(num1) * parseFloat(num2);
                    break;
                case '/':
                    result = parseFloat(num1) / parseFloat(num2);
                    break;
                default: 
                console.log('Invalid operator!');
                rl.close();
                
            }
            console.log(`The result is ${result}`);
            rl.close();
        });
        
    });
})