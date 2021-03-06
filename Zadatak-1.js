//Write a conditional statement to find the sign of product of three numbers. Display the result in the console with the specified sign.
//Sample numbers: 3, -7, 2
//Output: The sign is -

var sign = ``;
var a = 3;
var b = -7;
var c = 2;
var p = a*b*c;

if (p < 0) {
    sign = ` The sign is - `;
}

console.log(sign);