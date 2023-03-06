const db = require("./db");// ya prisvaivayu modul k peremennoy db 

// console.log(db.users); // dalee ya prosto kak obychniy ob'ekt vyzybayu ego db.users 

console.log(db.users[0]);

for (let i = 0; i<db.users.length; i+=1) {
    console.log(db.users[i].id);// esli ya hochu tol'ko otobrazhenie id-shek 
    console.log(db.users[i].name);// esli ya hochu otobrazhenie imen

    console.log(`Pol'zovatelya nomer ${db.users[i].id} zovut ${db.users[i].name}`); // tut ya prosto reshil uslozhnit'  i vivesti krasivo 
}