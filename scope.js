//Lexical means:Scope is decided by where the function is written (its physical location in code)
//Dynamic scope means:Scope is decided by who calls the function.

// let name = "Global"; //creating a global variable

// function outer() { //We declare a function called outer.
//   let name = "Outer";  //Inside outer, we create a new variable also called name.

//   function inner() { //We define another function inside outer.
//     console.log(name); //When inner runs, it searches for name.
//   }

//   inner(); //We call inner from inside outer
// }

// outer(); //We start the execution.

//the output is outer 

//Because inner() is written inside outer().So it looks at its surrounding (lexical environment).Even if you call it somewhere else, it still remembers where it was created.
//---------------------------------------------------------------------------Lexical scope ------------------------------------------------------------------------------//


// let name = "Global";

// function show() { //Function show is created in global scope.It is NOT written inside outer.
//   console.log(name); //When show() runs, it looks for name. It searches:Outside → Global scope 
// }

// function outer() {
//   let name = "Outer";
//   show();
// }

// outer();

//the output is global 

//it prints global because it looks where it is created not where it is called

//---------------------------------------------------------------------------dynamic scope ------------------------------------------------------------------------------//
