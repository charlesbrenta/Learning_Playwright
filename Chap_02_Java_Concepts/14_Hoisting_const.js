console.log(Max_Retries); // TDZ : Output: ReferenceError: Cannot access 'Max_Retries' before initialization
const Max_Retries = 5;
console.log(Max_Retries); // Output: 5
Max_Retries = 10; // TypeError: Assignment to constant variable.

// Const variables are used for urls, configuration settings, or any value that should not change throughout the program.
//const API_URL = "https://api.example.com/v1/"; // This is a common use case for const, as the API URL is not expected to change during the execution of the program.  
//const MAX_USERS = 100; // This is another example of using const for a value that should remain constant throughout the program, such as a maximum limit for users.   
//const PI = 3.14159; // This is a common use case for const, as the value of PI is a mathematical constant that should not change. 
//cont MAX_RETRIES = 5; // This is a good use case for const, as the maximum number of retries is a value that should not change during the execution of the program.   
//const DEFAULT_TIMEOUT = 5000; // This is another example of using const for a value that should remain constant throughout the program, such as a default timeout duration in milliseconds.   
//const GRAVITY = 9.81; // This is a common use case for const, as the value of gravity is a physical constant that should not change.  
//const values will not be updated or reassigned, and they are block-scoped. They are also hoisted to the top of their scope but are not initialized until their definition is evaluated, which means they will throw a ReferenceError if accessed before initialization.   

// Explanation:
// In JavaScript, variables declared with const are block-scoped and cannot be reassigned. 
// Similar to let, const declarations are hoisted to the top of their scope but are not initialized until their definition is evaluated. 
// This means that when we try to access 'Max_Retries' before its initialization, it results in a ReferenceError because 'Max_Retries' is in the temporal dead zone (TDZ) until it is initialized. 
// After the initialization, 'Max_Retries' holds the value 5 and can be accessed without any issues.