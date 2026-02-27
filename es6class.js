// // it is a cleaner way to write constructor functions and prototype

// // BEFORE ES6 (CONSTRUCTOR FUNCTION)

// function Person(name,age){  //Create a func and name it as Person and pass parameter name & age
//     this.name = name ;  //this->new object being created , name->property
//     this.age = age ;  //another property
// }  //constructor function

// Person.prototype.introduce = function(){  //Adds a method to Person.prototype..ie..all objects created using Person share this method.
//     console.log("Hi, I am " + this.name + " and I am " + this.age +" years old"); //object calling the method
// };

// const p1 = new Person("Darshika",21); //new->creates empty obj{},sets prototype link,binds this yo new obj,return obj
// p1.introduce();

// // this gives output as Hi, I am Darshika and I am 21 years old


// // ---------------------------------------------------------------------------------------------------------------------------------------//

// // ES6 CLASS VERSION (SAME THING) -they provide a cleaner and more structured syntax.

// class Person{   //defines a class named person(internally its a function)
//     constructor(name, age){  //method that runs automatically when new person() is called  
//         this.name = name ;  //same as constructor func ie,create obj and set property
//         this.age = age ;
//     }

//     introduce(){ //its a method that is automatically added to person.prototype ie.. no need to manually write Person.prototype.introduce
//         console.log(`Hi, I am ${this.name} and I am ${this.age} years old`);
//     }
// }

// const p1 = new Person("Darshika", 21); //same as constructor
// p1.introduce(); //calls 

// // this also gives the same output that is Hi, I am Darshika and I am 21 years old
