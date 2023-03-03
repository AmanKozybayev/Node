// 2. бірінші жұмысты бір функцияға тық. функцияға callback function қосып 
// сол жұмысты бітірген соң callbackты шақыр,
// ол коллбек сол қайтарылған stringтың ұзындығын айтсын


//try to train callback function 
// function add(a,b,callback) {
//     const result = a + b;
//     callback(result);
// }

// function callBackFunction(result) {
//     console.log("The result is:", result);
// }

// add(10,20,callBackFunction);

const Aman = {//define obj calle Aman
    a: "one",
    b: "two",
    c: "three"
}; 

const Alihan = {// define obj called Alihan
    a:"four", 
    b: "five", 
    c: "six"
}; 

const ppl = {
    arr: [Aman, Alihan]// value of key called arr in obj ppl is a array with two previous obj
}
function strng(j1,callback) {
    j1.forEach((ob)=>{//taking every object in ppl.arr array and displaying it as json string object 
        let a = JSON.stringify(ob,null,2);
        callback(a);
        console.log(a);
    });
}
function callBackFunction(inp){
    console.log(inp.length);
}
strng(ppl.arr,callBackFunction);
//koroche ya vzyal i zasunul predidushii code v function u kotorogo est' callback, 
//a ego argument prisvaivaetsya tolko posle togo kak my zaexecutim function 


