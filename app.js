const rect = require('./rectangle');

function solveRect(l, w) {
    console.log(`Solving for rectangle with the dimensions: ${l}, ${w}`);

if(l<=0 || w <= 0) {
    console.log(`Rectangle dimensions must be greater than zero. Recieved: ${l}, ${w}`);

} else {
    console.log(`Area of rectangle: ${rect.area(l,w)}`);
    console.log(`Perimeter of rectangle: ${rect.perimeter(l,w)}`);
}
}

solveRect(3,5);
solveRect(2,9);
solveRect(5,8);