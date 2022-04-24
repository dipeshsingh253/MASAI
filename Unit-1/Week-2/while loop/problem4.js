// Problem 4: Print the average of even numbers from 1 to 100 (both included)
// let sum=0;

// for(i=1;i<=100;i++){
//     if(i%2==0){
//         sum=sum+i;
//     }
// }
// let average=sum/50;
// console.log(average);


let start=1;
let end=100;
let sum=0;
let no_of_terms=0;

while(start<=end){
  if(start%2===0){
    sum=sum+start;
    }
  start++;  
}
while(no_of_terms<(end/2)){

  no_of_terms++;
}
if(sum%no_of_terms===0){
  console.log(sum/no_of_terms);
}