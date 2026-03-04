//Step 1 - Defining a function
function greet() {
    // By default JavaScript hoists variable declarations to the top of their scope.
    // In this case, the variable 'message' is hoisted to the top of the function scope, but its assignment is not. 
    // Therefore, when we try to access 'message' before its assignment, it exists but has the value 'undefined'.
    // var message = "undefined"; // This is what happens during the hoisting process
    console.log(message); // Output: undefined, because the variable declaration is hoisted but not the assignment
    var message = "Hello, World!"; // Variable declaration is hoisted, but assignment is not
    console.log(message); // Output: Hello, World!
 }
// Step 2 - Calling the function
greet(); // Output: Hello, World!