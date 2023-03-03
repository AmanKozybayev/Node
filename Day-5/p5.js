// function showUsers(users) {
//     //users.each=>
//     for (const user of users) {
//         console.log(user);
//     }
// }

// function showUsers(users) {

//     users.forEach(user => {
//         console.log(user);
//     });
// }

// const users = [
//     {id: 1, email: "first@mail.com"},
//     {id: 2, email: "second@mail.com"},
//     {id: 3, email: "third@mail.com"},
// ];

// showUsers(users); 

// [1,2,3].forEach((num) => {
//     console.log(num);
// })

function myFunction(num, obj,str, func){
    console.log(typeof num);
    console.log(typeof obj);
    console.log(typeof str);
    console.log(func);
    func("secret");
}

myFunction(1,{name: "Aman"}, "wahaha",(info) => {
    console.log("I am a lambda function");
    console.log(`Passed info is ${info}`);
} );
