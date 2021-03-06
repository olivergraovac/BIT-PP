//Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit. Formula : F = (9*C/5) + 32 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
//Sample Input: 60°C
//Output : 60°C is 140 °F

var result = ``;
var x = 60;
var a = (x-32)*5/9;
var b = (9*x/5)+32;

if(x) {
    result = x + ` °C is ` + b + ` °F ` + ` and ` + x + ` °F is ` + a + ` °C `;
}

console.log(result);