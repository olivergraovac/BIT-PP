//Write a conditional statement to print three numbers as sorted number list.
//Sample numbers : 0, -1, 4
//Output : 4, 0, -1

var a = 4;
var b = 0;
var c = -1;

if ( a > b && a > c && b > c) {
    console.log(a,b,c);
}
else if ( a > b && a > c && c > b) {
    console.log(a,c,b);
}
else if (b > a && b > c && a > c) {
    console.log(b,a,c);
}
else if (b > a && b > c && c > a) {
    console.log(b,c,a);
}
else if ( c > a && c > b && b > a) {
    console.log(c,b,a);
}
else console.log(c,a,b);