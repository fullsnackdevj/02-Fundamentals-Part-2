// // #1
// const calcTip = (billValue) => {
//   if (billValue >= 50 && billValue <= 300) {
//     const totalTip = billValue * 0.15;
//     return totalTip;
//   } else {
//     const totalTip = billValue * 0.2;
//     return totalTip;
//   }
// };

// // #2
// const bills = [125, 555, 44];

// // #3
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// // #4
// const totals = [
//   bills[0] + calcTip(bills[0]),
//   bills[1] + calcTip(bills[1]),
//   bills[2] + calcTip(bills[2]),
// ];

// console.log(tips, totals);

/* Write your code below. Good luck! 🙂 */

// const calcTip = (billValue) => {
//   if (billValue >= 50 && billValue <= 300) {
//     return billValue * 0.15;
//   } else return billValue * 0.2;
// };

// const bills = [125, 555, 44];

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(tips, totals);

const calcTip = (billValue) =>
  billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(tips, totals);
