//it is a closure bug that happens when var is used inside a loop and function created inside a loop

// for (var i = 0; i < 3; i++) { //since var is function scoped only one single i variable exists for the entire loop.
//   setTimeout(function () {
//     console.log(i);
//   }, 1000);
// }

//we would expect output as 0 1 2  but the output is 3 3 3 

// for (var i = 0; i < 3; i++) {
//   (function (j) {
//     setTimeout(function () {
//       console.log(j);
//     }, 1000); //the inner func forms a closure over j and not i 
//   })(i);
// }

//this gives the output as 0 1 2 because in previous code all callbacks share same i but here none of the callbacks uses i they uses j