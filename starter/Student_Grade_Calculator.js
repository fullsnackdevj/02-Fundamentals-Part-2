/*

3. Task Name: Student Grade Calculator
Instructions: Write a function calculateGrade(student) that accepts an object with student name and an array of grades. Calculate the average of the grades and return the student’s name with the grade category:

A for average >= 90
B for average >= 80
C for average >= 70
D for average >= 60
F for average < 60

*/

// my solution:

const student1 = {
  name: 'Ricknel',
  grades: [85, 92, 75, 82, 70],
};

let ave = 0;
let sum = 0;
let mark = '';

// student1.grades[0] // this is how i can access the grades in array

// console.log(ave);

const calculateGrade = function (student) {
  for (let i = 0; i < student.grades.length; i++) {
    sum = sum + student.grades[i];
    ave = sum / student.grades.length;

    if (ave >= 90) {
      mark = 'A';
    } else if (ave >= 80) {
      mark = 'B';
    } else if (ave >= 70) {
      mark = 'C';
    } else if (ave >= 60) {
      mark = 'D';
    } else if (ave < 60) {
      mark = 'F';
    }
  }
};

calculateGrade(student1);
console.log(
  `${student1.name}'s average is ${ave}, with a mark equivalent to a ${mark}, which means he passed. Gagraduate Kana Garrrrrrrrrrrrr !!!!! HAHAHAHAHAHHA`
);

// shorter version:

// const student1 = { name: 'Emily', grades: [85, 92, 75, 82, 70] };

// const ave =
//   student1.grades.reduce((sum, grade) => sum + grade, 0) /
//   student1.grades.length;

// console.log(ave);

/*

Explanation:
reduce(): This method is used to sum all the grades in the array.
sum + grade: It adds each grade to the running total.

/ student1.grades.length: This divides the total sum by the number of grades to get the average.

This makes the code much shorter and more efficient!


*/
