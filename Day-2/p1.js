let i = 1;

function test() {
    let ar = [1,-1, 1];
    for (a of ar) {
        if (a === -1) {
            i+=1;
        }
    }
    console.log(i);
}

test();
test();
test();