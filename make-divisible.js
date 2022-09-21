const prompt = require('prompt-sync')({ sigint: true });

let x = Number(prompt("Enter x; "));
let y = Number(prompt("Enter y; "));

if (isNaN(x) || isNaN(y)) {  // returns error if NaN to avoid infinite loop
    console.log("Error - One or more inputs is not a number.")
} else {
    while (x % y !== 0) {
        console.log(x);
        x++
    }
}

console.log(`${x} is divisible by ${y}.`)