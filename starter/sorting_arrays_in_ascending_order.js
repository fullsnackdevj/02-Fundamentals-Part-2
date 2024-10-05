// notes for sorting_arrays_in_ascending_order.js

const setOfNumbers = [34, 7, 23, 32, 5, 62];
// output [5, 7, 23, 32, 34, 62]

const checkGreater = function (a, b) {
  return a - b;
};

setOfNumbers.sort(checkGreater);

console.log(setOfNumbers);

// ginamitan ng sort() method.. nabasa sa documentation sa MDN DOCS:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
