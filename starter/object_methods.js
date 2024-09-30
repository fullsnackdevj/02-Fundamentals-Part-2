// notes for object methods

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthYear: 1991,
//   age: 2037 - 1991,
//   job: "Teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLiscence: true,

//   // calAge: function (birthYear) {
//   //   return 2037 - birthYear;
//   // },

//   calAge: function () {
//     return 2037 - this.birthYear;
//   },
// };

// console.log(jonas.calAge()); // dot notation
// // console.log(jonas["calAge"](1991)); // bracket notataion

// // any function that is attached to an object is called 'method'

// console.log(jonas.lastName); // dot notation
// console.log(jonas["lastName"]); // bracket notation

// const nameKey = "Name";
// console.log(jonas["first" + nameKey]);
// console.log(jonas["last" + nameKey]);

// console.log(jonas."first" + nameKey); // will not work

// const interestedIn = prompt(
//   "What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends."
// );

// // console.log(jonas[interestedIn]); // this expression will get evaluate

// jonas[interestedIn]
//   ? console.log(jonas[interestedIn])
//   : console.log(
//       "Wrong request! Choose between firstName, lastName, age, job, and friends."
//     );

// jonas.location = "Portugal";
// jonas["twitter"] = "@jonasschmedtman";

// console.log(jonas);

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "Teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLiscence: true,

  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },

  // calcAge: function () {
  //   // console.log(this); // 'this' will be object calling the method which is the 'jonas' object.
  //   return 2037 - this.birthYear; // jonas.birthYear
  // },

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    } and he has
    ${this.hasDriversLiscence ? "a" : "no"} driver's license.`;
  },
};

console.log(jonas.getSummary());
