// Question 10 — Sum & Average of Array

var prices = [1200, 850, 430, 1600, 990];
var total = 0;

for (var i = 0; i < prices.length; i++) {
    total += prices[i]
}
var avg = total / prices.length

console.log("Total =", total);
console.log("Average =", avg);
