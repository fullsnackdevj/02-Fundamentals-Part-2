// notes for checking if the number is positive

// write a task that checks if all the numberss in a narray are PromiseRejectionEvent. the function should return true if alll numbers are positive.

// and false otherwise.

// const input = [1, 2, 3, 4, 5, 1, 2];

// const checkIfPositive = function (num) {
//   if (num < 0 && num !== 0) {
//     console.log(`the number ${num} is negative`);
//   } else if (num > 0) {
//     console.log(`the number ${num} is positive`);
//   } else if (num === 0) {
//     console.log(`the number is ${num} whih is zero`);
//   } else {
//     console.log(`the input ${num} is not a number`);
//   }
// };

// checkIfPositive();

// const input = [1, 2, 3, 4, -5, -1]; // Array of numbers to check

// const checkIfPositive = function (num) {
//   if (num < 0 && num !== 0) {
//     console.log(`The number ${num} is negative`);
//   } else if (num > 0) {
//     console.log(`The number ${num} is positive`);
//   } else if (num === 0) {
//     console.log(`The number is ${num}, which is zero`);
//   } else {
//     console.log(`The input ${num} is not a number`);
//   }
// };

// // // Loop through the array and check each number
// // for (let i = 0; i < input.length; i++) {
// //   const num = input[i];
// //   checkIfPositive(num); // Call the function for each number
// //   // Comment explaining each iteration's result
// //   // Iteration 1: The number 1 is positive
// //   // Iteration 2: The number 2 is positive
// //   // Iteration 3: The number 3 is positive
// //   // Iteration 4: The number 4 is positive
// //   // Iteration 5: The number 5 is positive
// //   // Iteration 6: The number 1 is positive
// //   // Iteration 7: The number 2 is positive
// // }

// // Using forEach to iterate over the array
// input.forEach(checkIfPositive);

const checkSetOfNumbers = currentValue => currentValue > 0; // checking if all elements on array are 'all' pass the condition. 'bali yung kabuuan nung array' yun yung iccheck nya.

const input = [1, 30, 39, 29, 10, 13];

if (input.every(checkSetOfNumbers)) {
  console.log(`All numbers are positive!`);
} else {
  console.log(`Not all numbers are positive!`);
}

// Expected output: All numbers are positive
