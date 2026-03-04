let myName = "Brenta"; // Block scope, can be reassigned
console.log(myName); // Brenta - myName is accessible here due to block scope
if (true) {
    console.log(myName); // TDZ (Temporal Dead Zone) Cannot access 'myName' before initialization
    let myName = "Charles"; // This creates a new variable 'myName' that is block-scoped to the if statement, shadowing the outer 'myName'
    console.log(myName); // Charles - This will log the inner 'myName' which is "Charles"
}


if(true){
    console.log(myName); // Brenta - This will log the outer 'myName' which is "Brenta"
}
if(true){
    console.log(mySweetName); // ReferenceError: TDZ (Temporal Dead Zone) Cannot access 'mySweetName' before initialization
    let mySweetName = "Antelson";
    console.log(mySweetName); // Antelson - This will log the inner 'mySweetName' which is "Antelson"
}

// Explanation:
// In JavaScript, variables declared with let are block-scoped, meaning they are only accessible within the block they are defined in. 
// In the first if block, we declare a new variable 'myName' that shadows the outer 'myName'. Therefore, when we log 'myName' inside the block, it refers to the inner variable which is "Charles". 
// In the second if block, we log 'myName' which refers to the outer variable "Brenta" since there is no inner variable declared in that block.
// In the third if block, we try to access 'mySweetName' before it is initialized, which results in a ReferenceError because 'mySweetName' is in the temporal dead zone (TDZ) until it is initialized. After initialization, it holds the value "Antelson".