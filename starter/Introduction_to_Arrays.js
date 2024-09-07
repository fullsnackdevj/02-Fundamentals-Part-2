//notes introduction to arrays

/*And Arrays are such a data structure.
So an Array is like a big container
into which we can throw variables
and then later reference them. */

// arrays syntax:
// how to put elements in array

const friends = ["Michael", "Steven", "Peter"]; // literal syntax of creating arrays.
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020); // another way of creating array.
console.log(years);

// So basically how to put elements into an Array,
// but of course we need to have a way to get them out.

console.log(friends.length); // getting how many elements in an array

console.log(friends[friends.length - 1]);
// retrieving elements using .length method which is 'peter'

friends[2] = "Jay"; // changing element of the array from peter to 'Jay' even it was declared as 'const' above.
console.log(friends); //  ['Michael', 'Steven', 'Jay']

// It's not a contradiction, the thing is that only primitive values , are immutable. But an 'Array' is not a primitive value. so we can actually always change it so we can mutate it and works this way.

// what we cannot do is to replace the entire array

// array can hold values with different type:
// here we can have an element that calculate the age.
// because javascript simple expects expression so if we do this its perfectly fine.

const firstName = "Jonas";
// using variable and put inside to the array.

const jonas = [firstName, "Schmedtman", 2037 - 1991, "teacher", friends];

// and actually we could even put other Arrays inside of an Array.

console.log(jonas);
// ['Jonas', 'Schmedtman', 46, Array(3)]

// Exercise for Array

const calcAge = (birthYear) => 2037 - birthYear;

const yearsAny = [1990, 1967, 2002, 2010, 2018];

// console.log(calcAage(yearsAny)); // NaN this is a result of attempting to subtract a whole array from a number.

// calculate the age for the position 0, 1 and stored to 'variables'

const age1 = calcAge(yearsAny[0]);
const age2 = calcAge(yearsAny[1]);
const age3 = calcAge(yearsAny[yearsAny.length - 1]);
// 5 - 2 = 4 array in position for which is 2018.

console.log(age1, age2, age3);

// since we started with array so lets ended with array

// that any position of the Array simply needs to be an expression. So something that produces a value.

const ages = [
  calcAge(yearsAny[0]),
  calcAge(yearsAny[1]),
  calcAge(yearsAny[yearsAny.length - 1]),
];

// So basically we can place function calls into an Array just fine, because they will produce a value.

console.log(ages); //(3) [47, 70, 19]
