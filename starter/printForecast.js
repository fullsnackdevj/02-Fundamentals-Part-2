//  notes for printForecast.js

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

let forecast = '';

const printForecast = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    forecast += `${arr[i]} degree in ${i + 1} days... `;
  }
  return '...' + forecast;
};

console.log(printForecast(data1));
