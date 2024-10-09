const mark = {
  fullName: "Mark Miller",
  height: 1.69,
  mass: 78,

  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  height: 1.95,
  mass: 92,

  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

mark.calcBMI(); // calling this method explicitly
john.calcBMI(); // calling this method explicitly

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI ${mark.bmi} is higher than ${
      john.fullName
    }'s ${john.bmi()}!`
  );
} else {
  console.log(
    `${john.fullName}'s BMI ${john.bmi} is higher than ${
      mark.fullName
    }'s ${mark.bmi()}!`
  );
}

#2 Create a calcBMI method on each object to calculate the BMI (the same method on both objects). Assign the BMI value to a property called bmi (lowercase), and also return it from the method.

#3 Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".
