// Question 14 — Remove Duplicate Numbers

var numbers = [10, 20, 10, 30, 20, 40, 30, 50];
var uniqueVal = []
var isUnique = false

for (var i = 0; i < numbers.length; i++) {

    if (numbers[i] === numbers[i]) {
        console.log(numbers[i], i);
        break
    }

}