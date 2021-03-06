//Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double difference between that number and 13.
//Sample Input: 11 Output : 2
//Sample Input: 32 Output : 38

var result = ``;
var x = 32;

if(x<13) {
    console.log(13-x);
} else console.log((x-13)*2);