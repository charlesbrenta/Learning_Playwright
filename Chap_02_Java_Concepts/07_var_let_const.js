//let, var, const

//var - Function-scoped variable
var House_name = "The Antelsons"; // Global scope


//Definition of a function to demonstrate var scope
 function greet() {
    var name = "Brenta"; // Function scope or Local scope
    console.log(name); // Brenta
    if (true) {
        var name = "Charles"; // Still function scope, not block scope
        console.log(name); // Charles
    }
     console.log("Var has function scope & allows redeclaration : ",name); // Charles - var does not have block scope, it is function-scoped
}
// Calling the function to see the effect of var scope
greet(); 

function greet2() {
   let name = "Sandra"; // Block scope
    console.log(name); // Sandra
    if (true) {
        let name = "Antelson"; // Block scope, different from the outer name variable
      //  let name = "BrentaAnt"; // Identifier 'name' has already been declared
        console.log(name); // Antelson  
    }
    console.log("Let has block scope & does not allow redeclaration : ",name); // Sandra - let has block scope, so the outer name variable is not affected
}   
greet2();

//const - Block-scoped constant variable
const PI = 3.14; // Block scope, cannot be reassigned
//PI = 3.14159; // Error: Assignment to constant variable

console.log(PI); // 3.14    
console.log("House Name : ",House_name); // The Antelsons - var is function-scoped, so it is accessible here    
