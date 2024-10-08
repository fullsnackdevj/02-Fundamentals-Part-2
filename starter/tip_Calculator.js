// notes for tip calculator

/* 

Rules:

Steven is still building his tip calculator, using the same rules as before.
tip 15% of the bill if the bill value is between 50 and 300. and if the value is different the tip is 20%.

Tasks:

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip calculated based on the rules above.
Use the function type you like the most. Test the function using a bill value of 100.

2. And now let's use arras! so create an array 'bills' containing the test data below.

3. Create and array 'tips' containing the tip value for each bill, calculated from the function you created before.

4. 'BONUS' Create an array 'total' containing the total values , so the bill + tip.

test DATA: 125, 555, 44

*/

const bills = [125, 555, 44]; // arrays containing 'bill values'

const calcTip = function (bill) {
  // function for calculating 'tip value'
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(tips, totals);
