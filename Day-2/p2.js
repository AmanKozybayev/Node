function test(ar) {// declare function test 
    let j = 0; // declare variable j that equal to zero 
    for (a of ar) {//for every element of ar 
        j+= a; // add j to every element (j was declared before the cycle)
        console.log(j);// display j every time when ran 
    }
}

test([-1, -1, -1]); // array -1,-1,-1 pasted into the function called test 
test([1,-1,-1]);

//same shit as was before, but at this time this code will display j not every time when cycle was ran, it will display sum of elements 
function test(ar) { 
    let j = 0; 
    for (a of ar) {
        j+= a; //j= j+a; short code ; j+=a, j-=a; J*=a;
    }
    console.log(j);
}

test([-1, -1, -1]); 
test([1,-1,-1]);
