// // Question 19 — Student Result Analyzer

const students = ["Ali", "Sara", "Ahmed", "Ayesha", "Hamza"];
const marks = [78, 92, 45, 88, 33];

var passedCount = 0;
var failedCount = 0;
var totalMarks = 0;
var highestMarks = marks[0];
var topStudent = students[0];

for (let i = 0; i < students.length; i++) {
    var stdStatus = "";

    // Check Pass or Fail
    if (marks[i] >= 50) {
        stdStatus = "PASS"
        passedCount++
    } else {
        stdStatus = "FAIL"
        failedCount++
    }

    // Display Student Details
    console.log(`${students[i]} - ${marks[i]} - ${stdStatus}`);

    // Add total marks for avg calculator
    totalMarks += marks[i]

    // Check highest scoring student
    if (marks[i] >= highestMarks) {
        highestMarks = marks[i]
        topStudent = students[i]
    }
}

var average = totalMarks / students.length

console.log("");
console.log("Total Students: " + students.length);
console.log("Passed: " + passedCount);
console.log("Failed: " + failedCount);
console.log("Top Student: " + topStudent + " (" + highestMarks + ")");
console.log("Class Average: " + average);

