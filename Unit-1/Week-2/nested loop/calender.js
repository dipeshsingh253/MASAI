let date="";
for(i=1;i<=12;i++){
    if(i=2){
        for(j=1;j<=28;j++){
            date=j+"-"+i;
            console.log(date);
        }
    }
    for(j=1;j<=31;j++){
        date=j+"-"+i;
        console.log(date);
    }
}