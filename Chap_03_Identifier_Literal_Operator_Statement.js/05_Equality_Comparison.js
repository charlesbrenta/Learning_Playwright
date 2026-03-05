//Assignment: Equality Comparison in JavaScript

let a = 5; // Here equals operator is used for assignment, assigning the value 5 to the variable a
console.log(a); // Output: 5

// In JavaScript, there are two main equality operators: the single equality operator (==) and the strict equality operator (===).  
//single equality operator (==) - compares values for equality, performing type coercion if necessary. Also known as the loose equality operator, it allows for comparisons between different types by converting them to a common type before making the comparison.
//strict equality operator (===) - compares values for equality without performing type coercion    


// single equality operator (==) - compares values for equality, performing type coercion if necessary
let num1 = 5;
let num2 = "5";
console.log(num1 == num2); // Output: true (because of type coercion)

// strict equality operator (===) - compares values for equality without performing type coercion
console.log(num1 === num2); // Output: false (because they are of different types)
// Explanation:
/* The single equality operator (==) in JavaScript compares values for equality, but it performs type coercion if the values being compared are of different types. 
This means that if you compare a number and a string, JavaScript will attempt to convert the string to a number before making the comparison. 
In the example above, num1 is a number (5) and num2 is a string ("5"), but when we use the == operator, JavaScript converts the string "5" to the number 5, resulting in true. */   

/* The strict equality operator (===) in JavaScript compares values for equality without performing type coercion. 
This means that if you compare a number and a string using ===, it will return false because they are of different types. 
In the example above, num1 is a number (5) and num2 is a string ("5"), so when we use the === operator, it does not perform type coercion and directly compares the values, resulting in false. */  

// Example of using equality operators in a function:
function isEqual(a, b) {
    if (a == b) {
        console.log("Values are equal (using ==)");
    } else {
        console.log("Values are not equal (using ==)");
    }

    if (a === b) {
        console.log("Values are strictly equal (using ===)");
    } else {
        console.log("Values are not strictly equal (using ===)");
    }
}   
isEqual(5, "5"); // Output: Values are equal (using ==), Values are not strictly equal (using ===)
isEqual(5, 5); // Output: Values are equal (using ==), Values are strictly equal (using ===)    
isEqual("hello", "hello"); // Output: Values are equal (using ==), Values are strictly equal (using ===)
isEqual("hello", "Hello"); // Output: Values are not equal (using ==), Values are not strictly equal (using ===)    

console.log(0 == false); // Output: true (because of type coercion)
console.log(0 === false); // Output: false (because they are of different types)
console.log(null == undefined); // Output: true (because of type coercion)
console.log(null === undefined); // Output: false (because they are of different types) 
console.log(NaN == NaN); // Output: false (NaN is not equal to anything, including itself)
console.log(NaN === NaN); // Output: false (NaN is not equal to anything, including itself) 
console.log(null == null); // Output: true (null is equal to null
console.log(undefined == undefined); // Output: true (undefined is equal to undefined)
console.log(null === null); // Output: true (null is strictly equal to null)    
console.log(undefined === undefined); // Output: true (undefined is strictly equal to undefined)
console.log(0 == ""); // Output: true (because of type coercion)
console.log(0 === ""); // Output: false (because they are of different types)
console.log(null == 0); // Output: false (null is only equal to undefined)
console.log(null==""); // Output: false (null is only equal to undefined)
console.log(undefined == 0); // Output: false (undefined is only equal to null)
console.log(undefined == ""); // Output: false (undefined is only equal to null)

console.log(5 == 5.0); // Output: true (because of type coercion, 5 and 5.0 are considered equal    
console.log(5 === 5.0); // Output: true (because they are of the same type and value    )