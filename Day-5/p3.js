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

const Ruzana = {
    firstName: "Ruzana",
    lastName: "Berik", 
    occupation: null,
    age: 25,
}

Bolat.spouse = Raushan; // tak my mozhem dobavlyat' lyudei pryam na pryamuyu v obj

console.log(Bolat);
// esli u dvoih 