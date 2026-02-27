// //method=>obj
// //function=>global(if called in browser it will be in windows and if it is called in node it will be global)


// const channel = {
//     title : "Raido",
//     join(){
//         console.log(title);
//     },
// };
// channel.join();

// //the above code gives title is not defined error because we should cl an object only using this 

// const channel = {
//     title : "Raido",
//     join(){
//         console.log(this);
//     },
// };
// channel.join();

// //this gives the created object as output = { title: 'Raido', join: [Function: join] } because if we use this in a method it will refer that current object

// const channel = {
//     title : "Raido",
//     join(){
//         console.log(this);
//     },
// };

// function Ride(){
//     console.log(this);
// }

// Ride();

// //if we call this in function (it is global) it gives the output as 
// {/* <ref *1> Object [global] {
//   global: [Circular *1],
//   clearImmediate: [Function: clearImmediate],
//   setImmediate: [Function: setImmediate] {
//     Symbol(nodejs.util.promisify.custom): [Getter]
//   },
//   clearInterval: [Function: clearInterval],
//   clearTimeout: [Function: clearTimeout],
//   setInterval: [Function: setInterval],
//   setTimeout: [Function: setTimeout] {
//     Symbol(nodejs.util.promisify.custom): [Getter]
//   },
//   queueMicrotask: [Function: queueMicrotask],
//   structuredClone: [Function: structuredClone],
//   atob: [Function: atob],
//   btoa: [Function: btoa],
//   performance: [Getter/Setter],
//   fetch: [Function: fetch],
//   crypto: [Getter],
//   navigator: [Getter],
//   localStorage: [Getter/Setter],
//   sessionStorage: [Getter/Setter]
// } */}

// //----------------------------------------- this -------------------------------------------------------------------------------//