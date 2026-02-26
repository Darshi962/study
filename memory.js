// function createLeakyFunction() {
//   // Large object (about ~8MB)
//   const largeArray = new Array(1_000_000).fill("🔥");

//   return function () {
//     // We don't even use largeArray
//     console.log("Function still alive...");
//   };
// }

// // Store closures globally (this prevents GC)
// const storage = [];

// setInterval(() => {
//   const leaky = createLeakyFunction();
//   storage.push(leaky); // Memory leak happens here

//   const used = process.memoryUsage().heapUsed / 1024 / 1024;
//   console.log(`Memory Usage: ${used.toFixed(2)} MB`);
// }, 1000);

// // it gives output as 

// Memory Usage: 11.22 MB
// Memory Usage: 11.58 MB
// Memory Usage: 11.60 MB
// Memory Usage: 11.57 MB
// Memory Usage: 11.58 MB
// Memory Usage: 11.59 MB
// Memory Usage: 11.59 MB... infinity 

// function createSafeFunction() {
//   return function () {
//     const largeArray = new Array(1_000_000).fill("🔥"); //created inside function so no infinite renders
//     console.log("Created temporarily");
//   };
// }

// setInterval(() => {
//   const safe = createSafeFunction();
//   safe();

//   const used = process.memoryUsage().heapUsed / 1024 / 1024;
//   console.log(`Memory Usage: ${used.toFixed(2)} MB`);
// }, 1000);

//its giving output as 

// Created temporarily
// Memory Usage: 11.80 MB
// Created temporarily
// Memory Usage: 11.59 MB
// Created temporarily
// Memory Usage: 11.57 MB
// Created temporarily
// Memory Usage: 11.58 MB
// Created temporarily
// Memory Usage: 11.59 MB
// Created temporarily
// Memory Usage: 11.62 MB