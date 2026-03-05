//inbuilt static property

console.log(Math.PI) //static property

console.log(Math.random()) //static method

//Array static method 

Array.isArray()  //static method inside array class

new Array()  //array constructor

const result = Array.isArray(4)
console.log(result)

// //this gives us false because 4 is not an array

const result1 = Array.isArray(['4'])
console.log(result1)

// //this gives us true because ['4'] is an array


//fromCharCode() is a static method from string class that converts Unicode values to characters. It takes one or more Unicode values as arguments and returns a string created by using those values.


console.log(String.fromCharCode(68, 65, 82, 83, 72, 73)) //static method from string class



