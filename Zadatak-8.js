//Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.
// Sample Input: 12,5 Output : 17
// Sample Input: 8,8 Output : 48

var x = 12;
var y = 5;

if (x+y===x*2 || x+y===y*2) {
    console.log((x + y) * 3);
}
else console.log(x+y);