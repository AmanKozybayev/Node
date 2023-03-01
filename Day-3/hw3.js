//төртінші: n және m сандары беріледі, n*m таблицаның квадраттарың шығар.

let n = 3; 
let m = 4; 
k=1;

function sqr (a,b) {
    for (let i = 0; i < a; i++) {
        let ar = [];
        for (let j = 0; j <b; j++) {
            ar.push(k*k);
            k++;
        }
        console.log(ar);
    }
}
sqr(n,m);