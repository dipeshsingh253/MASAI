let count="";
let sum=0;
let n=3;
for(i=1;i<=n;i++){
	for(j=1;j<=n;j++){
        sum=j+(n*(i-1));
		count=count+sum+" ";
		
	}
	console.log(count);
	// console.log(count);
	count="";
}