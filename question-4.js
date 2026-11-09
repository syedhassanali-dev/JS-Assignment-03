// Question 04 — Multiplication Table

var userTable = +prompt("Enter a number:")
var tableLength = +prompt("Enter Table Length")

for ( var i = 1; i <= tableLength ; i++ ) {
    document.writeln(`<h1> ${userTable} × ${i} = ${userTable * i} <h1/>`);

}