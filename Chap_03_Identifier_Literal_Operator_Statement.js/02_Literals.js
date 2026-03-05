let age = 5; // This is a numeric literal, representing the number 5.
let name = "Brenta"; // This is a string literal, representing the text "Brenta".
let isStudent = true; // This is a boolean literal, representing the value true.
let person = { // This is an object literal, representing a person with properties name and age.
    name: "Brenta",
    age: 5
};
let numbers = [1, 2, 3, 4, 5]; // This is an array literal, representing a list of numbers from 1 to 5.
let nullValue = null; // This is a null literal, representing the absence of any value.
let undefinedValue = undefined; // This is an undefined literal, representing a variable that has been declared but not assigned a value.   
// Explanation:
// In JavaScript, literals are fixed values that are directly written in the code. They can be of various types, including numeric, string, boolean, object, array, null, and undefined. 
// Literals are used to represent specific values in the code and can be assigned to variables or used directly in expressions. 
// For example, the numeric literal 5 represents the number 5, while the string literal "Brenta" represents the text "Brenta". 
// Object literals allow us to create complex data structures with properties and values, while array literals let us create lists of values. 
// Null and undefined literals represent special values that indicate the absence of a value or an uninitialized variable, respectively.

//Hexcode literals:
let hexColor = 0xFF5733; // This is a hexadecimal literal, representing the color with the hex code #FF5733.
console.log(hexColor); // Output: 16734003 (the decimal equivalent of the hexadecimal value)
let red = 0xFF; // This is a hexadecimal literal, representing the red component of a color.
let green = 0x57; // This is a hexadecimal literal, representing the green component of a color.
let blue = 0x33;
console.log(`Red: ${red}, Green: ${green}, Blue: ${blue}`); // Output: Red: 255, Green: 87, Blue: 51
// Explanation:
// Hexadecimal literals in JavaScript are represented with a prefix of 0x followed by hexadecimal digits (0-9 and A-F). 
// They are commonly used to represent colors in web development, where the hex code corresponds to the RGB values of the color. 
// In the example above, the hexadecimal literal 0xFF5733 represents a specific shade of orange, and we can extract the red, green, and blue components from it using hexadecimal literals for each color channel.  
