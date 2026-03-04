var myName; // Declaration is hoisted to the top of the scope
console.log(myName); // Output: undefined
myName = "John"; // Assignment is not hoisted
console.log(myName); // Output: John    