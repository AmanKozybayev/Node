//Classes 

const bigDay = new Date(2019, 6, 19);

console.log(bigDay.toLocaleDateString());//Logs: 7/19/2019 what a fuck pochemu 7??? tam zhe 6 dolzhno bylo

if (bigDay.getTime() < Date.now()) {
    console.log("Once upon a time...");
};
console.log(bigDay.getTime());
console.log(Date.now());

//classes create object through new operator