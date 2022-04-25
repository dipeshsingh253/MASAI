let num=17;

for(i=1;i<=num;i++){
let prime=true;
    for(j=2;j<i;j++){
       if(i%j==0){
           prime=false;
       }
    }
    if(prime){
        console.log(i);
    }
  
  }
