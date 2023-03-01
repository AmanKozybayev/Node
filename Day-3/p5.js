//trying to make array with continued numbers 
let num = 0; 

for (i = 0; i < 10; i++) {
    let ar = [];
    for (j = 0; j < 5; j++) {
        ar.push(num);
        num++; 
    }
    console.log(ar);
}