//notes for 'Arrow Function' Lecture.

//arrow function syntax

const calcAge = birthYear => 2037 - birthYear;
const age3 = calcAge(1991);
console.log(age3);

// anonther form with more than one parameter
// calculating age of retirement of a person

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirementAge = 65 - age;
  return `${firstName} has ${retirementAge} years until retirement.`;
};

console.log(yearsUntilRetirement(1991, 'Jay'));
