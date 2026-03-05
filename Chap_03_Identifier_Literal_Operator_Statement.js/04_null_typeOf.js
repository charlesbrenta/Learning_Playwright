//Null - intentionally no value
let nullValue = null;
console.log(nullValue); // Output: null
console.log(typeof nullValue); // Output: object
// Explanation:
// The null literal in JavaScript represents the intentional absence of any object value. 
// It is often used to indicate that a variable should have no value or that an object reference is intentionally empty. 
// Interestingly, the typeof operator returns "object" for null, which is a historical quirk in JavaScript. 
// This behavior is due to the way JavaScript was originally implemented, where null was represented as a special object type.  
// Example of using null:
let user = {
    name: "Brenta",
    age: 5,
    address: null // The address property is intentionally set to null, indicating that the user has no address information available.
};
console.log(user); // Output: { name: 'Brenta', age: 5, address: null } 

// Example of using null in a function:
function getUserInfo(userId) {
    // Simulating a database query to fetch user information
    if (userId === 1) {
        return {
            name: "Brenta",
            age: 5
        };
    } else {
        return null; // If the user is not found, return null to indicate the absence of user information.
    }
}
console.log(getUserInfo(1)); // Output: { name: 'Brenta', age: 5 }
console.log(getUserInfo(2)); // Output: null

//undefined - variable declared but not assigned a value
let undefinedValue;
console.log(undefinedValue); // Output: undefined
console.log(typeof undefinedValue); // Output: undefined
// Explanation: 
/* The undefined literal in JavaScript represents a variable that has been declared but has not been assigned a value.
When a variable is declared without an initial value, it is automatically assigned the value undefined. 
The typeof operator returns "undefined" for variables that are undefined.    */

// Example of using undefined:
let userName;
console.log(userName); // Output: undefined
// The userName variable is declared but not assigned a value, so it is undefined.

function greet(name) {
    if (name === undefined) {
        console.log("Hello, Guest!"); // If the name parameter is undefined, greet the user as a guest.
    } else {
        console.log(`Hello, ${name}!`); // If the name parameter is provided, greet the user by their name.
    }   
}

//When to use null vs undefined:
// Use null when you want to explicitly indicate that a variable should have no value or that an object reference is intentionally empty. 
// Use undefined when you want to indicate that a variable has been declared but has not been assigned a value, or when a function parameter is missing.    

let myScore =null; // The myScore variable is explicitly set to null, indicating that it has no value.
console.log("My score : ",myScore); // Output: null
console.log("Type of my score : ", typeof myScore); // Output: object

let dreamJob; // The dreamJob variable is declared but not assigned a value, so it is undefined.
console.log("Dream job : ", dreamJob); // Output: undefined
console.log("Type of dream job : ", typeof dreamJob); // Output: undefined
