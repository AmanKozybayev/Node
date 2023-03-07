function Person(name, age, sex) {
    this.name = name;
    this.age =age;
    this.sex =sex;
};

const rand = new Person("Random Personson", 33, "M");
const ken = new Person("Amangeldy Kozybayev", 29, "M");

console.log(`Rands age is ${rand.age}, and ken's true name is ${ken.name}`);

// ya ewe mogu prisvaivat' novye svoistva 

// naprimer 
rand.nationality = "English"; 
ken.nationality = "Kazakh";

console.log(rand);