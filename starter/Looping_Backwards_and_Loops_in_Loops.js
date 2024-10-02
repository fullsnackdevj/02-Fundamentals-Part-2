// notes for Looping Backwards and Loops in Loops

const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

// 0, 1, ... 4
// 4, 3, .... 0

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(jonas[i]);
}

// loop inside a loop

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`---- Starting Exercise ${exercise} `);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Lifting weight repetition ${rep}`);
  }
}
