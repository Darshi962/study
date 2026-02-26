// var Counter = (function () { //var declaration and IIFE-function that executes immediately

//   var count = 0; //created inside IIFE cannotbe accessed outside 

//   return {
//     increment: function () {
//       count++;
//       console.log(count);
//     }
//   }; //returns an object and the object has one method (increment)-since increment is defined inside IIFE,it has acces to count 

// })(); //closes func and immediately executes it 
// Counter.increment();
// Counter.increment();
// Counter.increment();

// //this gives output as 1 2 3 because 