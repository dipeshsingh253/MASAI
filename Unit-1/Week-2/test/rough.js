  
   let S="thisracecarisgood"
   let sub_string = "";
    
   let arr=[];
   let palindrome=[];
    
   for (
      let substring_length = 1;
      substring_length <= S.length;
      substring_length++
    ) {
      
      for (let start = 0; start <= S.length - substring_length; start++) 
      {
        let end = start + substring_length - 1;

        for (substring_index = start; substring_index <= end; substring_index++)
        {
          sub_string = sub_string + S[substring_index];
        }
    
        if (sub_string[0] == sub_string[substring_length - 1]) {
           
          // console.log(sub_string);
          arr.push(sub_string);
         
        
        }
    
        sub_string = "";
      }
     
    }
    console.log(arr);
    
    //check palindrome
    
    for(i=0;i<arr.length;i++){
      let result=true;
      let x=arr[i];
      let length=x.length
    
      for (let i = 0; i < length/2; i++) {
    
            // check if first and last string are same
            if (x[i] !== x[length - 1 - i]) {
                result=false;
            }else{
              result=true;
            }
            
    
           
      }
      if(result==true){
              
             palindrome.push(x);
          }
     
    }
    
    
    let max=1;
    for(j=0;j<palindrome.length;j++){
    let y=palindrome[j];
    let longest_palindrome=y;
    
    if(y.length>max){
      max=y.length;
    }
    
    }

    console.log(max);