//Identifier
var myVariable = 10; // 'myVariable' is an identifier that holds the value 10.
myVariable = 20; // We can reassign a new value to the identifier 'myVariable'.
console.log(myVariable); // This will output 20 to the console, as 'myVariable' now holds the new value.

//Identifier -  Variable names must start with a letter, underscore (_), or dollar sign ($). They cannot start with a number. For example:
var _myVariable = 30; // This is a valid identifier because it starts with an underscore.
var $myVariable = 40; // This is also a valid identifier because it starts with a dollar sign.
// var 1myVariable = 50; // This would be an invalid identifier because it starts with a number, and it would cause a syntax error if uncommented.  

//Identifier -  Variable name given to the container that holds the value. It is used to reference and manipulate the value stored in that container throughout the code. For example:
var myName = "Brenta"; // 'myName' is an identifier that holds the string value "Brenta".
console.log(myName); // This will output "Brenta" to the console, as 'myName' is the identifier that references the value stored in the variable.   


//Literal - A literal is a fixed value that is directly written in the code. It can be a number, string, boolean, array, object, etc. For example:
var myNumber = 100; // '100' is a numeric literal that is assigned to the variable 'myNumber'.
var myString = "Hello, World!"; // 'Hello, World!' is a string literal that is assigned to the variable 'myString'.
var myBoolean = true;
var myArray = [1, 2, 3, 4, 5]; // '[1, 2, 3, 4, 5]' is an array literal that is assigned to the variable 'myArray'.
var myObject = { name: "Alice", age: 25 }; // '{ name: "Alice", age: 25 }' is an object literal that is assigned to the variable 'myObject'.    

//Operator - An operator is a symbol or function that performs a specific operation on one or more operands (values or variables). For example:
var a = 10;
var b = 5;
var sum = a + b; // The '+' operator is used to add the values of 'a' and 'b', and the result is stored in the variable 'sum'.
console.log(sum); // This will output 15 to the console, as the '+' operator has added the values of 'a' and 'b' together.  

// //Identifiers can also be used for functions
function myFunction() {
    console.log("This is a function identifier.");
}
myFunction(); // This will call the function and output the message to the console.
//Identifiers can also be used for objects
var myObject = {
    name: "John",
    height: 160,
    age : 30,
    relationship : "Single",
    Occupation : "Software Engineer"

};
console.log(myObject.Occupation); // This will output "Software Engineer" to the console, as 'myObject' is an identifier for the object that contains the property 'Occupation'.     


//Rules for Identifiers in JavaScript:
//1. Identifiers must start with a letter, underscore (_), or dollar sign ($). They cannot start with a number.
//2. After the first character, identifiers can contain letters, digits, underscores, or dollar signs.
//3. Identifiers are case-sensitive, meaning that 'myVariable' and 'myvariable' would be considered different identifiers.
//4. Identifiers cannot be the same as reserved keywords in JavaScript (e.g., 'var', 'function', 'if', etc.).

var MYNAME = "Brenta"; // This is a valid identifier, but it is different from 'myName' due to case sensitivity.
console.log(MYNAME); // This will output "Brenta" to the console, as 'MYNAME' is a valid identifier that holds the string value "Brenta".   
var myname = "Brenta"; // This is also a valid identifier, but it is different from 'myName' and 'MYNAME' due to case sensitivity.
console.log(myname); // This will output "Brenta" to the console, as 'myname' is a valid identifier that holds the string value "Brenta".   
var pi = 3.14; // This is a valid identifier that holds the numeric value 3.14.
var _ = "underscore"; // This is a valid identifier that starts with an underscore.
var $ = "dollar"; // This is a valid identifier that starts with a dollar sign.
// var break = "This is a reserved keyword"; // This would be an invalid identifier because 'break' is a reserved keyword in JavaScript, and it would cause a syntax error if uncommented.    
