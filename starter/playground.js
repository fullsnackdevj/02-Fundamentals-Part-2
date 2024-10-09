// notes for playground js

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  let tip = tips.push(calcTip(bills[i]));
  totals.push(bills[i] + tips[i]);
}

let sum = 0;

const calcAverage = function (arr) {
  console.log(sum);
  for (let i = 0; i < arr.length; i++) {
    console.log(sum);
    sum = sum + arr[i];
  }
  return sum / arr.length; // total sum array of  totals
};

console.log(calcAverage(totals), sum);
