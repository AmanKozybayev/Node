const ab1 =[1,1,-3]; // declare array 
let i=0; // declare variable i which will count negative 
//for this array i am taking every element and checking it for negativity 
for (a of ab1) {
    if (a<0) {
        i+=1; // every time when code finds negative number it will increase value of i by 1
    }
}
console.log(i);// rechecking the count of negative number in array (just for visualization)
//condition to check the count of negative numbers in array and to display logs 
if (i===1) {
    console.log("fine"); // when only one negative number it will say fine 
}
else if (i===2) {
    console.log("cool");// when two negative numbers it will say cool
}
else if (i===3) {
    console.log("freezing cold");//when all three numbers are negative then say freezing cold 
}
else {
    console.log("hot season"); // when there is no any negative numbers display hot season
}
