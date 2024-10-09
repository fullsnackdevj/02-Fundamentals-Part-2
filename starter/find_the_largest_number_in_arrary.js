/*

2. Task Name: Find the Largest Number in an Array
Instructions: Create a function findLargestNumber(arr) that takes an array of numbers and returns the largest number.

Sample Data:

const numbers = [23, 56, 78, 12, 90, 34];
Sample Output:

findLargestNumber(numbers); // 90

*/

const numbers = [23, 56, 78, 12, 90, 34];
let largest = 0;

const findLargestNumber = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
};

findLargestNumber(numbers);

console.log(largest);
