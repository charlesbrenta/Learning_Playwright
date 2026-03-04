console.log(a);
var a = 10; // Output: undefined
console.log(a); // Output: 10

// Explanation: 
// In JavaScript, variable declarations using var are hoisted to the top of their scope. 
// This means that the declaration of the variable 'a' is moved to the top of the scope, but its assignment (a = 10) is not hoisted. 
// Therefore, when we try to access 'a' before its assignment, it exists but has the value 'undefined'. 
// After the assignment, 'a' holds the value 10.    
// However, with let and const, the variables are also hoisted but are not initialized until their definition is evaluated.

//Phase 1: memory creation phase:
// var a; // hoisted and initialized with undefined
// let b; // hoisted but not initialized (temporal dead zone)
// const c; // hoisted but not initialized (temporal dead zone)
var a = undefined; // hoisted and initialized with undefined
console.log(a); // Output: undefined
var a = 10; // assignment
console.log(a); // Output: 10


//Phase 2: execution phase:
console.log("Value of d before initialization:",d); // ReferenceError: Cannot access 'c' before initialization
var d = 30; // Output: ReferenceError
console.log("Value of d after initialization:",d); // Output: 30

//Example 2:
var greeting; // Phase 1: memory creation phase, hoisted and initialized with undefined
console.log(greeting); // Output: undefined
greeting = "Hello, World!"; // Phase 2: execution phase, assignment
console.log(greeting); // Output: Hello, World!


// Example with let
console.log("Value of b before initialization:",b); // ReferenceError: Cannot access 'b' before initialization
let b = 20; // Output: ReferenceError
console.log("Value of b after initialization:",b); // ReferenceError: Cannot access 'b' before initialization