//Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit. Formula : F = (9*C/5) + 32 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
//Sample Input: 60°C
//Output : 60°C is 140 °F

var result = ``;
var c = 60;
var f = ``;
var a = (f-32)*5/9;
var b = (9*c/5)+32;

if(c) {
    result = c + ` °C is ` + b + ` °F ` ;
}
else if (f) {
    result = f + ` °F is ` + a + ` °C `
}
console.log(result);