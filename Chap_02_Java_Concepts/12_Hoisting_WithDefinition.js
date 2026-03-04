console.log(a); // Output: undefined
var a = 10;
console.log(a); // Output: 10

// Explanation:
// In JavaScript, variable declarations using var are hoisted to the top of their scope.
// This means that the declaration of the variable 'a' is moved to the top of the scope, but its assignment (a = 10) is not hoisted.
// Therefore, when we try to access 'a' before its assignment, it exists but has the value 'undefined'.
// After the assignment, 'a' holds the value 10.    
// However, with let and const, the variables are also hoisted but are not initialized until their definition is evaluated. Hence they will throw a ReferenceError if accessed before initialization.