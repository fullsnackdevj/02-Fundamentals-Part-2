// notes for iteration: the for loop lecture

// console.log("lifting weights repetition 1");
// console.log("lifting weights repetition 2");
// console.log("lifting weights repetition 3");
// console.log("lifting weights repetition 4");
// console.log("lifting weights repetition 5");
// console.log("lifting weights repetition 6");
// console.log("lifting weights repetition 7");
// console.log("lifting weights repetition 8");
// console.log("lifting weights repetition 8");
// console.log("lifting weights repetition 10");

// For Loop , a loop with a counter

// syntax 3 parts:
// The first part is the initial value of a counter.
// The second part, is a logical condition that is evaluated before each iteration of the loop.

/* Now, if the condition is true, then the next loop iteration will run. But as soon as this condition is false, then the loop stops.And so no more code will then be executed.

3rd: And now here, we actually update the counter after each iteration. So that's necessary, because right now, the counter would just stay at one forever.

And so this condition here would never be false. And so what we do here, is to now increase the counter by one after each iteration.

*/

// So for loop keeps running, while condition is true.

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}
