let rect = {
    perimeter: (x, y) => (2 * (x + y)),
    area: (x, y) => (x * y)
};

function solveRect(l, b) {

    console.log("Solving>>>>>", l, b);
    if (l <= 0 || b <= 0) {
        console.log("You are Dumb")
    }
    else {
        console.log("The perimeter of recatangle is" + rect.perimeter(l, b));
        console.log("The area of recatangle is" + rect.area(l, b));
    }
}

solveRect(2, 4);
solveRect(1, 2);