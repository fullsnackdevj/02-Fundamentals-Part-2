// notes for learning reduce() method

// playground

/*

1. Sum of All Numbers
Problem: Given an array of numbers, find the sum of all the numbers.

Example Input: [2, 5, 8, 12, 7]
Expected Output: 34

*/

// solution:

const numbers = [2, 5, 8, 12, 7];
const sumOfAllNumbers = numbers.reduce(sum);

function sum(prevNumber, nextNumber) {
  return prevNumber + nextNumber;
}

console.log(sumOfAllNumbers);
