//several arrays with different array length, 
//display sum of first and last elements, then second and the second from the end and etc 
//then it have to do it with all arrays 

//array with years need to find leap year or not if we find 

let ar = [1,2,3,4];
let ar2 = [5,6,7,8,5];

function sum(array) {//define function with argument array 
    for (let i = 0; i <array.length/2; i++) {// initiate a loop 
        // console.log(i);
        // console.log(array.length-1-i); here i reverse steps of count 
        console.log(`beggining value ${array[i]} + ending value ${array[array.length-1-i]} = ${array[i]+array[array.length-1-i]}`);


    }
}
sum(ar2);


