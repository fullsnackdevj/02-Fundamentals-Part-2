// notes for calculatingBMI_using_objects.js

/*

tasks:

1. For each of them, create an object with properties for their fullname, mass, and height(Mark Miller and John Smith)

2. Create a 'calcBMI' method on each object to calculate the BMI ( the same method on both objects) store the BMI value to a property,
and also return it from the method.

3. Log to the console who has the higher bmi, together with the full name and the respective bmi. 
ex: 'John' BMI(28.3) is higher than Mark's (23.9!)'

test data: Marks weights 78kg and is 1.69 tall.
John weights 92 kg and is 1.95m tall.


*/

const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,

  // method for calculating the BMI.
  calcBMI: function () {
    return this.mass / this.height ** 2;
  },
};

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,

  //method for calculating the BMI.

  calcBMI: function () {
    return this.mass / this.height ** 2;
  },
};

// console.log(`mark.calcBMI(), john.calcBMI()`);

new Promise((resolve, reject) => {
  if (mark.calcBMI() > john.calcBMI()) {
    console.log(
      `${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${
        john.fullName
      }'s BMI (${john.calcBMI()})!`
    );
  } else {
    `${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${
      mark.fullName
    }'s BMI (${mark.calcBMI()})!`;
  }
});
