//notes filtering even numbers.

const setOfNumbers = [12, 5, 8, 13, 44, 99, 21, 33, 100, 81, 57, 0];
const evenNumbers = [];
const oddNumbers = [];

const filterEvenNumber = function () {
  for (let i = 0; i < setOfNumbers.length; i++) {
    if (setOfNumbers[i] % 2 === 0) {
      evenNumbers.push(setOfNumbers[i]);
    } else {
      oddNumbers.push(setOfNumbers[i]);
    }
  }
};

filterEvenNumber(setOfNumbers);

console.log(oddNumbers, evenNumbers);
