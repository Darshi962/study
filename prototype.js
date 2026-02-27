// // prototype is like a blue print 

// const myDog ={
//     name: 'Blacky',

//     greet(){
//         console.log('woof ${this.name}!')
//     },
// } //if i have to convert this obj to string then we will have to use other method nut to make it simpler we use prototype

// console.log(myDog)


// // this gives output as { name: 'Blacky', greet: [Function: greet] }

// // -----------------------------------------------------------------------------------------------------------------------------------//

// const myCat = {
//     name:'sonu',

//     greet(){
//         console.log('Meow ${this.name}!')
//     },
// }
// console.log(myCat.name)

// // this gives output as sonu and now if i want the prototype of the object (17-21) its given below 

// // ---------------------------------------------------------------------------------------------------------------------------------------------//

// const myCat = {
//     name:'sonu',

//     greet(){
//         console.log('Meow ${this.name}!')
//     },
// }
// console.log(Object.getPrototypeOf(myCat))

// // it give [Object: null prototype] {} as output //these are the input methods created by object so now 

// // ----------------------------------------------------------------------------------------------------------------------------------------//

// const myCat = {
//     name:'sonu',

//     greet(){
//         console.log('Meow ${this.name}!')
//     },
// }
// console.log(myCat.toString())

// // it gives output as [object Object] because object tried to convert it as string and here if we remove .toString() then output will be Sonu


// // ------------------------------------------------------------------------------------------------------------------------------------------------------//

// const myCat = {
//     name:'sonu',

//     greet(){
//         console.log('Meow ${this.name}!')
//     },
// }  //object   

// const numbers=[1,2,3] //array 

// console.log(numbers)

// // it give array as output [ 1, 2, 3 ]