// notes for learning reduce() method

// playground

/*

1. Sum of All Numbers
Problem: Given an array of numbers, find the sum of all the numbers.

Example Input: [2, 5, 8, 12, 7]
Expected Output: 34

*/

// solution:

// const numbers = [2, 5, 8, 12, 7];
// const sumOfAllNumbers = numbers.reduce(sum);

// function sum(prevNumber, nextNumber) {
//   return prevNumber + nextNumber;
// }

// // console.log(sumOfAllNumbers);

/*

2. Product of All Numbers
Problem: Given an array of numbers, return the product of all the numbers (multiply them all).

Example Input: [3, 5, 2]
Expected Output: 30

Hint: Start the reduce() with an initial value of 1 and multiply each element.

*/

// solution

const numbers = [3, 5, 2];
const product = numbers.reduce(calcProduct);

function calcProduct(prevNumber, nextNumber) {
  return prevNumber * nextNumber;
}

console.log(product);
