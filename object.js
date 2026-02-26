//Object.create() is creating a new object that borrows from another object


const animal = {  //object creation
  speak() { console.log("Animal speaks"); }  //method declare
};

const dog = Object.create(animal); //create new empty obj

dog.speak();   // executes and finds speaks