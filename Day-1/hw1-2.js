const array1 = [1,2,3]; //declaring constant array named array1
const array2 = [1,-2,4];// declaring constant array named array2
let i = 0;// counter set to zero to count how many negative exsisting in array 

//function that will check the array and display the result to us in command prompt output 
function Check1(AnyArray) {
    for (b of AnyArray) {//declaring b variable that will store the vallue of array should be checked 
        if ( b < 0 ) {//checking the element of array for negative value 
            i+=1;//counter set added by 1 when if statement is true 
        }//closing brackets for the condition
    }//closing bracket for the loop, it will repeat the code within this breckets till the end of an array 
    
    if (i===1) {//condition that will check the equality to one negative value 
        console.log(`Fine ${AnyArray}`);//display fine if this condition is true 
    }
    else if (i===2) {//condition that will check the equality to two negative values in array 
        console.log(`cool ${AnyArray}`);//display cool if this condition is true 
    }
    else if (i===3) {//condition that will check the equality to three negative values in array 
        console.log(`freezing cold ${AnyArray}`);//display freezing cold
    }
    else {
        console.log("hot season");//if there is no any negative number display hot season 
    }
}
Check1(array2);
Check1(array1); // troubles 