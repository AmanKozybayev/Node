const users = [
    {id: 1, email: "first@mail.com"}, 
    {id: 2, email: "second@mail.com"},
    {id: 3, email: "third@mail.com"},
];

// for (let i=0; i < users.length; i+=1) {
//     const user = users[i];
//     console.log(user.id);
// } // if i need to display ids 

//if i want to display emails i just use email key

// for (let i=0; i < users.length; i+=1) {
//     const user = users[i];
//     console.log(user.email);
// }

// in every function parameter has its own place for.ex: in forEach first is value then index and then array
users.forEach((value,index) => {
    console.log(index);
})// it displau indexes of the users 

users.forEach((value,inex,array) => {
    console.log(array);
})

users.forEach((value, index, array) => {
    console.log(value);
})


