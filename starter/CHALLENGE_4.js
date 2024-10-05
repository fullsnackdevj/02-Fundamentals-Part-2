// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// /* Write your code below. Good luck! 🙂 */

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// let tips = [];
// let totals = [];

// for (let i = 0; i < bills.length; i++) {
//   tips.push(calcTip(bills[i]));
// }

// for (let i = 0; i < tips.length; i++) {
//   totals.push(tips[i] + bills[i]);
// }

// console.log(bills, tips, totals);

// //

// function calcAverage(arr) {
//   let sum = 0;

//   // Loop to calculate the sum of elements
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }

//   // Calculate average
//   return sum / arr.length;
// }

// console.log(calcAverage(totals));

// JONAS SOLUTIONS

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// let tips = [];
// let totals = [];

// for (let i = 0; i < bills.length; i++) {
//   const tip = calcTip(bills[i]);
//   tips.push(tip);
//   totals.push(tip + bills[i]);
// }

// console.log(bills, tips, totals);

// // bonus (difficult)

// const calcAverage = function (arr) {
//   let sum = 0; // declaring sum = 0

//   for (let i = 0; i < arr.length; i++) {
//     // sum = sum + arr[i]; // natural way
//     sum += arr[i]; // shorthand
//   }

//   return sum / arr.length;
// };

// console.log(calcAverage(bills));
// console.log(calcAverage(tips));
// console.log(calcAverage(totals));

// PROBLEM:
// - how can i create a function?
// - how ill log a string like : '...17 in 1days '?
/// - shall i need a loop here?

// const printForcast = function (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(`...${arr[i]} degree in ${i + 1} days`);
//   }
// };

// console.log(printForcast([17, 21, 23]));

// const arr = [5, 4, 3];

// let a = `...${arr[0]} degree in ${day} days`;
// let b = `...${arr[1]} degree in ${day} days`;
// let c = `...${arr[2]} degree in ${day} days`;

// //
let day = 0;

const printForcast = function (arr) {
  let result = '';
  for (let i = 0; i < arr.length; i++) {
    day = day + 1;
    result += `...${arr[i]} degree in ${day} days `;
  }
  return result;
};

console.log(printForcast([17, 21, 23, 25, 75]));

// console.log(a + b + c);

// ...5 degree in 1 days...4 degree in 1 days...3 degree in 1 days
