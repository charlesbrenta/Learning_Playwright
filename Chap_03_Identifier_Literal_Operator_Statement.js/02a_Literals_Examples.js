let count   = 10; // This is a numeric literal, representing the number 10.
let negative = -5; // This is a numeric literal, representing the number -5.
let pi       = 3.14159; // This is a numeric literal, representing the value of pi.
let hexValue = 0xFF; // This is a hexadecimal numeric literal, representing the number 255 in decimal.
let binaryValue = 0b1010; // This is a binary numeric literal, representing the number 10 in decimal.
let octalValue = 0o77; // This is an octal numeric literal, representing the number 63 in decimal.
let million   = 1e6; // This is a numeric literal in exponential notation, representing the number 1,000,000.
let smallNumber = 1e-6; // This is a numeric literal in exponential notation, representing the number 0.000001.
let tinyNumber = 1e-10; // This is a numeric literal in exponential notation, representing the number 0.0000000001.
// Explanation:
// In JavaScript, numeric literals can be represented in various formats, including decimal, hexadecimal, binary, octal, and exponential notation.  

let myName = "Brenta"; // This is a string literal, representing the text "Brenta".
let singleQuoteString = 'Hello, World!'; // This is a string literal using single quotes.
let doubleQuoteExample = "She said, \"Hello!\""; // This is a string literal using double quotes, with an escaped double quote inside.  
console.log(doubleQuoteExample); // Output: She said, "Hello!"
let doubleQuoteString = "Hello, World!"; // This is a string literal using double quotes.
let templateLiteral = `Hello, ${myName}!`; // This is a template literal, allowing for embedded expressions and multi-line strings.
console.log(templateLiteral); // Output: Hello, Brenta!
// Explanation:
// In JavaScript, string literals can be defined using single quotes, double quotes, or backticks (template literals). 
// Template literals provide additional features such as string interpolation (embedding expressions) and multi-line strings, making them a powerful tool for working with strings in JavaScript.   

//single quote string literal - used for simple strings without the need for escaping double quotes
//double quote string literal - used for simple strings without the need for escaping single quotes
let sheSaid = "She said, \"Hello, It's party time!\""; // This is a string literal using double quotes, with an escaped double quote inside.
console.log(sheSaid); // Output: She said, "Hello, It's party time!"
//template literal - used for complex strings that require interpolation or multi-line formatting, allowing for easier readability and maintainability. 
let math_add = `The sum of 2 and 3 is ${2 + 3}.`; // This is a template literal with an embedded expression for addition.
console.log("Math_add: ",math_add); // Output: The sum of 2 and 3 is 5.  S

//To store a path to a file, we can use a string literal. For example:
let filePath = "C:\\Users\\Brenta\\Documents\\file.txt"; // This is a string literal representing a file path, with escaped backslashes.
console.log(filePath); // Output: C:\Users\Brenta\Documents\file.txt
//To store a URL, we can also use a string literal. For example:
let url = "https://www.example.com"; // This is a string literal representing a URL.
console.log(url); // Output: https://www.example.com        
let filePath2 = `C:\Users\Brenta\Documents\file.txt`; // This is a template literal representing a file path, with escaped backslashes.
console.log(filePath2); // Output: C:\Users\Brenta\Documents\file.txt
let filePath3 = "C:\Users\Brenta\Documents\file.txt";
console.log(filePath3); // Output: C:\Users\Brenta\Documents\file.txt

//For file paths, using template literals can help avoid the need for escaping backslashes, as they allow for easier handling of special characters.    
//For urls, use double forward slashes (//) which do not require escaping in string literals.
//For path to files, especially on Windows, use double backslashes (\\) in string literals to avoid syntax errors due to unescaped backslashes. Alternatively, using template literals can simplify this by allowing you to write the path without needing to escape the backslashes.   


// Explanation:
// When using string literals to represent file paths or URLs, it's important to ensure that any special characters (such as backslashes in file paths) are properly escaped to avoid syntax errors. 
// In the case of file paths on Windows, backslashes need to be escaped by using double backslashes (\\) in the string literal. 
// Alternatively, you can use template literals, which allow for easier handling of special characters without the need for escaping, as shown in the example with filePath2.

//string literal edge case example:
let emptyString = ""; // This is an empty string literal, representing a string with no characters.
console.log(emptyString);
let whitespaceString = "   "; // This is a string literal consisting of only whitespace characters.
console.log(whitespaceString);
let multiLineString = `This is a multi-line string literal.
It can span multiple lines without the need for concatenation.`;
console.log(multiLineString);
let stringWithSpecialChars = "This string contains special characters: \n\t\"\\"; // This is a string literal with special characters, including a newline, tab, double quote, and backslash.
console.log(stringWithSpecialChars);
let zeroString = "0"; // This is a string literal representing the character "0", which is different from the numeric literal 0.
console.log(zeroString);
// Explanation:
// String literals can also include edge cases such as empty strings, strings with only whitespace, multi-line strings, and strings with special characters. 
// It's important to be aware of these edge cases when working with string literals to ensure that your code behaves as expected and to avoid unintended consequences when processing or manipulating strings.  

let isTrue = true; // This is a boolean literal, representing the value true.
let isFalse = false; // This is a boolean literal, representing the value false.
console.log(isTrue); // Output: true
console.log(isFalse); // Output: false
// Explanation:
// Boolean literals in JavaScript represent the two possible values of the boolean data type: true and false. 
// They are often used in conditional statements and logical operations to control the flow of the program based on certain conditions. 

//NaN - Not a Number, represents an invalid numberic value resulting from an undefined or erroneous mathematical operation.
let notANumber = NaN; // This is a numeric literal representing the special value NaN (Not-a-Number).
console.log(notANumber); // Output: NaN
var result = 0 / 0; // This will result in NaN because dividing zero by zero is an undefined operation.
console.log(result); // Output: NaN
var sqrtOfNegative = Math.sqrt(-1); // This will result in NaN because the square root of a negative number is not a real number.
console.log(sqrtOfNegative); // Output: NaN

// Explanation:
// NaN is a special numeric value in JavaScript that represents an invalid number. It is typically the result of an undefined or erroneous mathematical operation, such as dividing zero by zero or taking the square root of a negative number. 
// NaN is unique in that it is not equal to any value, including itself, which can lead to some interesting behavior when comparing values in JavaScript.