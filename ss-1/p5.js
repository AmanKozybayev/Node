// seichas budet krutaya feature 

// budem ispolzovat' object.create();

const Animal = {
    type: "Invertebrates", // default value of properties 
    displayType() {
        //Method which will display type of Animal
        console.log(this.type);
    },
};




// create new animal type called animal1 

const animal1 = Object.create(Animal);


animal1.displayType(); // Logs: Invertebrates 

// const Fish = {
//     type: "Shark",
//     displayType() {
//         console.log(this.type);
//     },
// };
// const Fish1 = Object.create(Fish);

// ves' verhnii code zamenyaet sleduyushaya tema 

const fish = Object.create(Animal);

fish.type = "Fishes";
fish.displayType(); // Logs: Fishes
