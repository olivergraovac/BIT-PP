//Write a program to check if the variable is a number and if it’s a number, check if it is divisible by 2. If it is, print the result, if not, show “X”.
//Sample input: 10 => Output: 10 / 2 = 5
//Sample input: 7 =>  Output: X

var a = 10;
var b = 7;

if (typeof a === `number` && a % 2 === 0) {
        console.log(a/2);
    }
if (typeof b === `number` && b % 2 === 0) {
    console.log(b/2);
} 
else console.log(`x`);