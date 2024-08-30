// notes on functions

function logger() {
  console.log("My name is Jay");
}

// calling, running , invoking function
logger();
logger();

// sample function

function fruitProcessor(apples, oranges) {
  // function parameters 'apples & oranges'
  // when the function is running apples will be 5 and orange will be 0.
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice; // we return that value from the function.
  // juice will be the result of executing the function 'fruitProcessor'
}

const appleJuice = fruitProcessor(5, 6); // it passes value on the parameters above. 5, 0 ( apples, oranges) // the result of calling this function will be the 'juice' value that was returned.

// if we want to use that value that was returned  we need to store it in a variable.

console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(7, 2); // arguments 7,2 that will be passed to the functions parameters 'apples and 'oranges.
console.log(appleOrangeJuice);

//final notes
// not all functions need to 'return' something.
// not all functions need to accept parameters.
