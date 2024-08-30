"use strict";

// Notes on Function Declaration vs Expressions

//function declaration:

function calcAge1(birthYear) {
  // const age = 2037 - birthYear; So we calculate the age first and then we return that value.

  return 2037 - birthYear;
}
/* we can simplify using this ^ aside of using and declaring variable. we can simple direct to return the this value. And actually we can simplify this and basically return all in one go. So there's actually no need to store this value here in a variable, if all we do is then later return that value. So in fact, we can just take this value here, get rid of this and then simply return the result of this expression here

  */

const age1 = calcAge1(1991);
console.log(age1);

//function expression

// Instead of writing a function with the calcAge name,
// we simply write function basically without a name
// and then we still define the parameter,
// we still define the function body,
// which is gonna be the same as this one
// also called annonymouse function

const calcAge2 = function (birthYear) {
  return 2037 - birthYear; // functions is an expression because it produces a value, so if its produces a value we can store it in a variable.
};
const age2 = calcAge2(1991);
console.log(age2, age1);

// So we write a function like this
// and then what we have to do
// is to store all of this here into a variable
// and that variable will then be the function.
// So let's call it, calcAge2.

// final notes: what's the difference?

/*
Well, the main practical difference
is that we can actually call function declarations
before they are defined in the code.

ie: 

const age1 = calcAge1(1991); <- we can call a function declaration before we define it..

function calcAge1(birthYear) {
  // const age = 2037 - birthYear; So we calculate the age first and then we return that value.

  return 2037 - birthYear;
}

console.log(age1);

--

But if we attempt to do the same with the expression,
then that should not work.
So let's see and yeah,
so cannot access calcAge2 before initialization, okay?
and internally this happens
because of a process called hoisting 

*/
