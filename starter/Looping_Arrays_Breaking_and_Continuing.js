// notes for looping arrays, breaking and continuing

const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

const types = [];

// how to log every element to the console using 'for loop'

for (let i = 0; i < jonas.length; i++) {
  //reading from jonas array
  console.log(jonas[i], typeof jonas[i]);

  //   //filing types array
  //   types[i] = typeof jonas[i];

  // using push method
  types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
// years is the array which contains the birthyear

const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}

console.log(ages);

// continue and beak
console.log("--- only strings ---");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== "string") continue;

  console.log(jonas[i], typeof jonas[i]);
}

console.log("--- break with number ---");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === "number") break;

  console.log(jonas[i], typeof jonas[i]);
}
