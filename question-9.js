// Question 09 — Filter Passing Students

var marks = [85, 42, 67, 30, 90, 55, 25, 78];
var passMark = []

for (var i = 0; i < marks.length; i++) {
    if (marks[i] >= 50) {
        passMark.push(marks[i])

    }
}
console.log("Passing Marks: ", passMark);
console.log("Total Passed: ", passMark.length);
