const Bolat = {
    firstName: "Bolat", 
    lastName: "Berik",
    occupation: null,
    age: 35,
};

const Raushan = {
    firstName: "Raushan",
    lastName: "Berik",
    occupation: null,
    age:25,
    spouse: null,// Kogda u dvoih est' otsylka k drug drugu voznikaet circular reference 
};
const Madina = {
    firstName: "Madina",
    lastName: "Berik",
    occupation: null,
    age: 5,
    spouse: null,
    children: null,
};
const children = [Madina];// element children u bolata otobrazitsya kak array iz obj
Bolat.children = children


Bolat.spouse = Raushan; // tak my mozhem dobavlyat' lyudei pryam na pryamuyu v obj

console.log(JSON.stringify(Bolat, null, 2)); // vot eta fignya perevodit iz obj v string 
// esli u dvoih 