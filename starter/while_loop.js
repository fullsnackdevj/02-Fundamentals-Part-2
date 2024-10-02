// notes in while loop

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
// }

// the while loop
// this will run while the condition is true

// let rep = 1;

// while (rep <= 10) {
//   console.log(`Lifting weights repetition ${rep}`);

//   rep++;
// }

/*

And that's because it does not really need a counter.

So you put the counter here because we need it
for this specific use case.

But all the while loop really needs is the condition

which needs to stay true for it to keep running.

And that condition can be any condition,
it doesn't have to be related to any counter at all.

And sometimes that's exactly what we need
to solve a certain problem.

*/

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You Just rolled ${dice}!`);
  dice = Math.trunc(Math.random() * 6) + 1;

  if (dice === 6) {
    console.log(`Loop is about to end because to rolled ${dice}!`);
  }
}
