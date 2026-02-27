// // used to create multiple objact with same structure

// // Constructor functions always start with a capital letter by convention (Person, Car, Book).

// // Use the "new" keyword to create a new object.

// // Without new, this would refer to the global object, not the new object.

// function Person(name,age){  //constructor func
//     this.name = name;  //this->new obj creation , name->property
//     this.age = age;    //add new prop to the obj
//     this.sayHello = function(){   //adding method to object
//         console.log(`Hello,my name is ${this.name}`);
//     };
// }

// const person1 = new Person("Darshi",21); //creating new obj and seting name & age
// const person2 = new Person("Teju",21);

// person1.sayHello(); //calling method for specific obj 
// person2.sayHello(); //calling method for specific obj


// // so now the output of this willbe 

// // Hello,my name is Darshi
// // Hello,my name is Teju


// // ----------------------------------------------------------------------------------------------------------------------------------------------//

// function Person(name,age){  
//     this.name = name;  
//     this.age = age;    
//     this.sayHello = function(){   
//         console.log(`Hello,my name is ${this.name} ${this.age}`);
//     };
// }

// const person1 = new Person("Darshi",21); 
// const person2 = new Person("Teju",21);

// person1.sayHello(); 
// person2.sayHello(); 


// // now since we have consoled age ,the output will be 

// // Hello,my name is Darshi 21
// // Hello,my name is Teju 21
