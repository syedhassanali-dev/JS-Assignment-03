// Question 11 — Student Name Search\

var stdUser = prompt("Enter student name:")
var students = ["Ali", "Ahmed", "Sara", "Hamza", "Ayesha"];

var isFound = false

for (var i = 0; i < students.length; i++) {
    if (stdUser === students[i]) {

        isFound = true
        alert(`Student Found!`)
        break
    }
}

if (!isFound) {
    alert("Student Not Found!")
}