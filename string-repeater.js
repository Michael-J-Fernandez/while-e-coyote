/*
- prompt user for a string
- hold user input in a variable
- while loop to repeat and add to string
- print each new string after it has been added
- final print once stringlength is <= 10
-----------------------------------------------*/

const prompt = require('prompt-sync')({ sigint: true });

let userStr = String(prompt("Type a string: "))
let strSum = userStr

while (userStr.length <= 10) {
    console.log(userStr);
    userStr = userStr + strSum;
}