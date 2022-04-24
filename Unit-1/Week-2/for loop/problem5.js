// You are given three integers: X, K, Y.
// You have to print the sum of first K multiples of N, on a condition that it should be divisible by Y.

let X = 3;
let K = 10;
let Y = 5;
let sum_multiplex=0;
let multiples_x=1;
for(i=1;i<=K;i++){
    multiples_x=X*i;
    if(multiples_x%Y==0){
        sum_multiplex=sum_multiplex+multiples_x;
    }
}

console.log(sum_multiplex);