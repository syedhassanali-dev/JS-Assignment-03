// Question 18 — Multiplication Table Grid

for (var i = 2; i <= 5; i++) {
    var tableNum = i
    console.log("Table of", i);

    for (var j = 1; j <= 10; j++) {
        var countNum = j
        var multiplyNum = tableNum * countNum
        
        console.log(`${tableNum} x ${countNum} = ${multiplyNum}`);
    }
    
}