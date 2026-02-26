//function that can access values outside of their own curlybraces
// an inner function has access to the outer function variables even after the execution of outer function.
//inner func can access the outer func's scope

// const Name = "Darshi" //global scope 

// function outerfunc(){
//     console.log('access global scope: ', Name)

//     const lastName='mol' //local scope

//     const innerfunc = () => {
//         console.log('can i access? function scope', Name)
//     }
// }

// outerfunc();

// it gives output as [access global scope:  Darshi] but its nor necessary so we can try another form 
//------------------------------------------------------------------------------------------------------------------------------------//

// function outerfunc(){

//     const localValue = 'something' //local scope

//     const innerfunc = () => {
//         console.log('can i access? function scope', localValue)
//     }
// }

// outerfunc();

//it doesnot give anyoutput because we have called the outerfunc..so it just run the outerfunc block but we have another function caller innerfunc inside it so we must call that again aswell

//-------------------------------------------------------------------------------------------------------------------------------------------------------------//

// function outerfunc(){

//     const localValue = 'something' //local scope

//     const innerfunc = () => {
//         console.log('can i access? function scope?', localValue)
//     }

//     innerfunc();
// }

// outerfunc();

//now this gives the output as [can i access? function scope something]... 

