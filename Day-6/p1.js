// const users = [
//     {id: 1, email: "first@mail.com"},
//     {id: 2, email: "second@mail.com"},
//     {id: 3, email: "third@mail.com"}
// ]; 

// const ar = [1,2,3];

// ar.forEach((num) => {
//     num+=100;
//     console.log(num);
// }
// );
const ar = [1,2,3]; 

//logic of forEach --> 
function forech (array,callback) {
    for (let index = 0; index < array.length; index+=1) {
        callback(array[index],index,array);
    }
};

forech(ar,(num,i,ar) => {
    console.log(num,i,ar);
});
    



// ar.forEach((num,index,array) => {
//     console.log(num, index,array);
    
// });// tut naglyadno vidno chto metod massiva foreach prinimaet tri parametra -> value, index, array 

