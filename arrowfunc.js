//regular function = A normal function that has its own separate identity and rules when it runs.
//arrow function = shorter way to write a function that automatically remembers the surroundings where it was created.

// const orders = [
//     {id:1 , item: "burger", quantity: 2},
//     {id:2 , item: "chocolate", quantity: 5},
//     {id:3 , item: "vanilla milkshake", quantity: 1},
// ]

// let result = orders.find(function(order){
//     return order.item === "chocolate"
// })

// console.log(result);

//here we are calling an array and just finding it in callback func(line 10,11) this is the normal or regular function that returns output as { id: 2, item: 'chocolate', quantity: 5 }

// const orders = [
//     {id:1 , item: "burger", quantity: 2},
//     {id:2 , item: "chocolate", quantity: 5},
//     {id:3 , item: "vanilla milkshake", quantity: 1},
// ]

// let result = orders.find((order) => {
//     return order.item === "chocolate"
// })

// console.log(result);

//even this gives the same output, we have just removed the function and added the =>

// const orders = [
//     {id:1 , item: "burger", quantity: 2},
//     {id:2 , item: "chocolate", quantity: 5},
//     {id:3 , item: "vanilla milkshake", quantity: 1},
// ]

// let result = orders.find( (order) => order.item === "chocolate")

// console.log(result);

//even this gives the same output, we have just removed the function,remove and {} and made it single line 
//find() is a built-in JavaScript array method.It searches the array.It returns the first matching element.If nothing matches, it returns undefined