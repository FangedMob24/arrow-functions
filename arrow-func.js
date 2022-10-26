// function double(arr) {
//     return arr.map(val => val*2);
// }

const double = arr => arr.map(val => val * 2);

// function squareAndFindEvens(number){
//     const squares = numbers.map(num => num ** 2);
//     const evens = squares.filter(square => square % 2 === 0);
//     return evens;
// }

const squareAndFindEvens = numbers => numbers.map(num => num ** 2).filter(square => square % 2 === 0);