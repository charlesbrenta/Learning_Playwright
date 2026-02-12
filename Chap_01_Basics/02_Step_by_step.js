let x=30;
let y=35;

let sum = x + y;
console.log("The sum of x and y is: " + sum);


for(let i=0; i<50; i++){
    console.log("Iteration number: " + i);
    console.log(greet( i));
}

function greet(iteration){
    return "Greetings! This is iteration number: " + iteration;
}