// //function calculating average of 3 scores
// const calcAverage = (score1, score2, score3) => {
//   return (score1 + score2 + score3) / 3;
// };

// // data1
// // const scoreDolphins = calcAverage(44, 23, 71);
// // const scoreKoalas = calcAverage(65, 54, 49);

// // data2
// const scoreDolphins = calcAverage(85, 54, 41);
// const scoreKoalas = calcAverage(23, 34, 27);

// // console.log(scoreDolphins, scoreKoalas);
// const checkWinner = (avgDolphins, avgKoalas) => {
//   if (scoreKoalas > scoreDolphins * 2) {
//     console.log(`Koalas win (${scoreKoalas} vs. ${scoreDolphins})`);
//   } else if (scoreDolphins > scoreKoalas * 2) {
//     console.log(`Dolphins win (${scoreDolphins} vs. ${scoreKoalas})`);
//   } else {
//     console.log(`No team wins... (${scoreDolphins} vs. ${scoreKoalas})`);
//   }
// };

// checkWinner(scoreDolphins, scoreKoalas);

// ********
// Jonas Solutions

const calcAverage = (a, b, c) => {
  return (a + b + c) / 3;
};

// data1
const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

// data2
// const scoreDolphins = calcAverage(85, 54, 41);
// const scoreKoalas = calcAverage(23, 34, 27);

// console.log(scoreDolphins, scoreKoalas);
const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgKoalas > avgDolphins * 2) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else if (avgDolphins > avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else {
    console.log(`No team wins... (${avgDolphins} vs. ${avgKoalas})`);
  }
};

checkWinner(scoreDolphins, scoreKoalas);
