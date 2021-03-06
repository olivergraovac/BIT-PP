//Write a JavaScript program to check a given integer is within 20 of 100 or 400, and print range in which number belongs.
//Sample Input: 13 Output : -
//Sample Input: 34 Output : 20 ⇔ 100
//Sample Input: 256 Output : 100 ⇔ 400

var result = ``;
var x = 256;

if (x < 20) {
    result = `-`;
}
else if (x > 19 && x < 101) {
    result = `20` + `⇔` + `100`;
}
else if (x > 100 && x <= 401) {
    result = `100` + `⇔` + `400`;
}
console.log(result);