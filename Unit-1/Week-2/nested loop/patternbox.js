let n=10;
let str="";

for(i=0;i<n;i++){
    for(j=0;j<n;j++){
    
        if(i==0 || i==n-1 || j==0 || j==n-1){
            str=str+"*";
        }else{
            str=str+" ";
        }
    }
     str=str+"\n";
}
console.log(str);