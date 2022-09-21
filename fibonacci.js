const prompt = require('prompt-sync')({ sigint: true });

let n = Number(prompt("Enter a number: "));

let f0 = 0;     // first initial value in sequence
let f1 = 1;     // second initial value in sequence
let fib = 0;    // sum of two previous numbers
let check = 0;  // checks for equality with n

while (check < n) {
    console.log(fib)
    
    f0 = f1;
    f1 = fib;
    fib = f0 + f1;

    check++;
}

