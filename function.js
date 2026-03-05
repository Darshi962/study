//first class function = assigning a function to a variable

//SCENARIO 1 : FUNC IS ASSIGNED TO A VARIABLE


const a=function(){
    console.log("Hi, My name is Darshika")
}

a();

//SCENARIO 2 : FUNC IS PASSED AS INPUT PARAMETER 

function b(input){  //passing input as a parameter to func b 
    input();
}

b(a);


//SCENARIO 3 : FUNC RETURNS ANOTHER FUNC

function c(){
    return a; //returning func a from func c
}

let d = c();
d();


// all gives Hi, My name is Darshika same output
