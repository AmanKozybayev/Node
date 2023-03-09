// function showProps(obj, objName) {
//     let result = "";
    
//     for (const i in obj) {
        

//         if (Object.getOwnPropertyNames(obj, i)) {
//             result += `${objName}.${i} = ${obj[i]}\n`;
//         }
//     }
//     console.log(result);
// }


const myCar = {
    make: "Ford",
    model: "Mustang",
    year: "1960",
};

// showProps(myCar,'myCar');
//Logs:
//myCar.make = Ford
// myCar.model = Mustang
// myCar.year = 1960

//the above is equivalent to: 
function showProps(obj,objName) {
    let result = ""; 
    Object.keys(obj).forEach((i) => {
        result += `${objName}.${i} = ${obj[i]}\n`
        
    });
    console.log(result);
};
showProps(myCar,'myCar');