//leap year finder 
//several years given (array) we should find if this array stores leap year 
let arr = [1990,2023];

function leap(array) {//define a function 
    let j=0; // counter of leap years 
    for (i = 0; i<array.length; i++) {
        if (array[i]%4===0) {
            j+=1;
        }
    }
    if (j>0) {
        console.log(`found ${j} leay year(s)`);
    }
    else {
        console.log(`nothing was found`);
    }
}
leap(arr);