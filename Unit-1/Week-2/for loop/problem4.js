// You are provided 3 integers: left, right and k. 
// Your task is to write a program that finds out the count of all such numbers between lefts and right (both inclusive) which are divided by k.

let left=1;
let right=10;
let k=3;
let count=0;

for(i=left;i<=right;i++){
    if(i%k==0){
        count++;
    }
}
console.log(count);