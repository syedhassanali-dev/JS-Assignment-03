// Question 05 — Sum of Natural Numbers

var userN = +prompt("Enter a positive N")
var sum = 0;

for (var i = 1; i <= userN; i++) {
    sum += i
}
console.log("Sum =", sum);