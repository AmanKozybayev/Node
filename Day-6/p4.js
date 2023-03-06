const ar = [567, 42, 38];
// squares of every element in array ar is added to new array called squares 
// const squares   = [];
// for (let i = 0; i < ar.length; i+=1) {
//     squares.push(ar[i]*ar[i]);
// }

// console.log(squares);


// below we will see an example of how map works 

// const squares = ar.map((value,index,array) => {//if i want to return value
//     return value;

// })
// console.log(squares);

// const mapResult = ar.map((value,index,array) => {
//     return array;
// });
// console.log(mapResult);

// obrati vnimanie na to chto delaet map v opisanii. 

function map(ar, callback) {
    const result = [];
    for (let i = 0; i < ar.length; i+=1) {
        result.push(callback(ar[i],i,ar));
    }
    return result;
}

console.log(map([1,2,3],(value,index,array) => {
    return array;
}));// ochen krutoi primer raboty callback function 

