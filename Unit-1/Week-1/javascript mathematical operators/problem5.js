// You are given a number stored in a variable with the nameN, and another number stored in a variable with the nameM

// You have to perform the following operations on the value stored inN

//     Multiply the value stored in N with 40

//     Add 20 to the value stored in N

//     Subtract 50 from the value stored in N

// You are given another number stored in the variableM

// If the value after of after performing the above operations is greater thanM, printGreater!, else if the value is equal, printEqual!, else printLesser!

// For example, consider the value stored inN= 5, and the value stored inM= 10

// Then, after performing the above operation, the value stored inNbecomes


    let N=3;
    let M=393;
    N=N*40;
    N=N+20;
    N=N-50;
    
    if(N>M){
     console.log("Greater!");   
    }else if(N<M){
        console.log("Lesser!");
    }else{
        console.log("Equal!");
    }

