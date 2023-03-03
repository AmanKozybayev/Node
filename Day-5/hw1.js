// this is first home work on objects 

// 1. любой объектердің массивына array.foreach қолданып ішіндегі объектерді JSON.stringify арқылы лог жаса

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

ppl.arr.forEach((ob)=>{//taking every object in ppl.arr array and displaying it as json string object 
    console.log(JSON.stringify(ob,null,2));//as a result we will see 
})