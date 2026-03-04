let myName = "Brenta"; // Block scope, can be reassigned
if (true) {
    console.log(myName); // Brenta - myName is accessible here due to block scope
}
//console.log(name); // ReferenceError: name is not defined - name is not accessible here because it is block-scoped to the if statement

// Explanation:
// In JavaScript, variables declared with let are block-scoped, meaning they are only accessible within the block they are defined in. 
// In this example, 'myName' is declared outside the if block and is accessible within it. However, if we were to declare a variable inside the if block using let, it would not be accessible outside of that block, resulting in a ReferenceError if we try to access it. 
