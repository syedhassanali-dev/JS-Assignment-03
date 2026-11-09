// Question 12 — Find a Number

var userNum = +prompt("Enter Number:")
var numbers = [10, 25, 40, 55, 70, 85, 100];
var isMatch = false

for (var i = 0; i < numbers.length; i++) {
    if (userNum === numbers[i]) {
        isMatch = true
        alert(`Number Found! at ${i}`)
        break
    }

}

if (!isMatch) {
    alert("Number Not Found!")
}