// notes for checking the highest and lowest # in an array.

const input = [-453, -900, 5, 800];

let highNum = 0;
let lowestNum = input[0]; // Initialize lowestNum to the first element of the array

const checkHighest = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (highNum < arr[i]) {
      highNum = arr[i];
    }
  }
};

const checkLowest = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (lowestNum > arr[i]) {
      lowestNum = arr[i];
    }
  }
};

checkHighest(input);
checkLowest(input);

console.log(highNum, lowestNum);

// arr[i] = 123
// i = 2
// 2 < arr.length = t
// highNum = 123
