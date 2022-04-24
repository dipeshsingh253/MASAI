//identify PRIME

let num=13;
let prime=true;
for(i=2;i<num;i++){
    if(num%i===0){
        prime=false;
    }
}
if(prime){
    console.log("Yes");
}else{
    console.log("No");
}