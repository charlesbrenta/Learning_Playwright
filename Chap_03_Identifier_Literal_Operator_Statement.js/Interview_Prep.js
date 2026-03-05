console.log(0==false); // Output: true (because of type coercion)
console.log(0===false); // Output: false (because they are of different types)

console.log(null==undefined); // Output: true (because of type coercion)
console.log(null===undefined); // Output: false (because they are of different types)

console.log(0==""); // Output: true (because of type coercion)
console.log(0===""); // Output: false (because they are of different types)

console.log(null==0); // Output: false (null is only equal to undefined)
console.log(null==""); // Output: false (null is only equal to undefined)

console.log(0=="0"); // Output: true (because of type coercion)
console.log(0==="0"); // Output: false (because they are of different types)
console.log(false=="false"); // Output: false (because "false" is a non-empty string, which is truthy)
console.log(false==="false"); // Output: false (because they are of different types)

//Rules of type coercion in JavaScript:
// 1. When comparing a number and a string, JavaScript converts the string to a number before making the comparison.
// 2. When comparing a boolean and a non-boolean value, JavaScript converts the boolean to a number (true becomes 1 and false becomes 0) before making the comparison.
// 3. When comparing null and undefined, they are considered equal (null == undefined is true), but they are not strictly equal (null === undefined is false).
// 4. When comparing an object and a primitive value, JavaScript attempts to convert the object to a primitive value using the object's valueOf() or toString() method before making the comparison.
// 5. NaN is not equal to anything, including itself (NaN == NaN is false and NaN === NaN is false).    


//Rules of strict equality (===) in JavaScript:
// 1. Strict equality (===) compares both the value and the type of the operands. 
// 2. If the operands are of different types, strict equality returns false without performing any type coercion.
// 3. If the operands are of the same type, strict equality compares their values for equality. 
// 4. For primitive types (number, string, boolean, null, undefined), strict equality returns true if the values are the same and false otherwise.
// 5. For objects, strict equality returns true if both operands refer to the same object in memory and false otherwise.    

//Rules of loose equality (==) in JavaScript:
// 1. Loose equality (==) compares values for equality, but it performs type coercion if the operands are of different types.
// 2. If one operand is a number and the other is a string, JavaScript converts the string to a number before making the comparison.

//Rule Breaking Examples:
console.log([] == false); // Output: true (because of type coercion, an empty array is considered falsy)
console.log([] === false); // Output: false (because they are of different types)
console.log({} == false); // Output: false (because an empty object is not considered falsy)
console.log({} === false); // Output: false (because they are of different types)

console.log(null == false); // Output: false (null is only equal to undefined)
console.log(null==0); // Output: false (null is only equal to undefined)
console.log(null==""); // Output: false (null is only equal to undefined)
console.log(null==undefined); // Output: true (because of type coercion)

console.log(" \t\n " == 0); // Output: true (because of type coercion, whitespace is considered falsy   )
console.log(" \t\n " === 0); // Output: false (because they are of different types)

//Danger of using loose equality (==):

console.log(false == "0"); // Output: true (because of type coercion, "0" is considered falsy)
console.log(false == "false"); // Output: false (because "false" is a non-empty string, which is truthy)
console.log("" == 0); // Output: true (because of type coercion, an empty string is considered falsy    
console.log(""=="0"); // Output: false (because "0" is a non-empty string, which is truthy
