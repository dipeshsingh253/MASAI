// identify prime

let num=9;
let prime=true;
for(i=2;i<num;i++){
    if(num%i==0){
      prime=false;
      break;
    }
}
if(prime){
    console.log(num,"is a prime");
}else{
    console.log(num,"is not a prime");
}
