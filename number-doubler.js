/*
- prompt user for a number
- while loop: print and double the number until it reaches <= 100
- print final number once it reaches <= 100
- create variable to hold user number
----------------------------------------------------*/

const prompt = require('prompt-sync')({ sigint: true });

let userNumber = Number(prompt("Enter a number to double: "))

while (userNumber < 100) {
    console.log(userNumber);
    userNumber *= 2;
}

console.log(userNumber);