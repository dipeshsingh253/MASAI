//Problem 4: Given stored username and password and input username and password, Print if the user can login or not.

let username="dipesh_253";
let password=123456;
let input_name="dipesh_252";
let input_password=12356;

if(input_name==username){
    if(password==input_password){
        console.log("Welcome Back");
    }else{
        console.log("wrong username or password");
    }
}else{
    console.log("wrong username or password");
}