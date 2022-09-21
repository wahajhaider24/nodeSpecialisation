const rect = require('./rectangle')
function solveRect(l, b) {

    console.log("Solving>>>>>", l, b);
    rect(l, b, (err, rectangle) => {
        if (err) {
            console.log("ERROR:", err.message);
        }
        else {
            console.log("The area of the rectangle=", rectangle.area);
            console.log("The perimeter of the rectangle=", rectangle.perimeter);
        }
    })
}

solveRect(parseInt(0), parseInt(0));
solveRect(parseInt(5), parseInt(2));