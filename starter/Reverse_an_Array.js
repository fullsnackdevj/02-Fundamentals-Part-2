// notes for reversing array

// Write a function that takes an array and returns a new array with the elements in reverse order.

// Input:
// [54, 12, 67, 98]

// Output:
// [98, 67, 12, 54]

// Input:
const input = [54, 12, 67, 98]; // The original array you want to reverse.

let reverseOrder = []; // An empty array that will store the reversed elements.
let indexFromEnd = 0; // A variable to keep track of how far you are from the end of the array.

// This function will loop through the input array and reverse its elements.
const checkSetOfNumbers = function (arr) {
  // The 'for' loop will run as many times as there are elements in the array.
  for (let i = 0; i < arr.length; i++) {
    // Increment 'indexFromEnd' by 1 in each iteration.
    indexFromEnd = indexFromEnd + 1;

    // Access the element from the end of the array based on 'indexFromEnd'.
    // For example, on the first iteration, we access arr[arr.length - 1] (which is 98).
    reverseOrder.push(arr[arr.length - indexFromEnd]);
  }
};

// Call the function to reverse the 'input' array.
checkSetOfNumbers(input);

console.log(reverseOrder); // This will print the reversed array.

/*


Detailed Explanation:

1.Initial Setup:

You start with an empty array reverseOrder where the reversed elements will be stored.
The variable indexFromEnd is initialized to 0. This will help to track how far from the end of the array the iteration has moved.

2. The Loop:

The loop runs from i = 0 to i < arr.length (the length of the array). In this case, since the array has 4 elements, the loop will run 4 times.

3. During Each Iteration:

indexFromEnd increases by 1 in each iteration. It starts at 1, then 2, and so on.
On each iteration, you access the element at arr[arr.length - indexFromEnd], which means you're accessing elements starting from the last one (arr[arr.length - 1]) and moving backward.

For the first iteration, it accesses the last element: arr[4 - 1] = arr[3], which is 98.

For the second iteration, it accesses the second-to-last element: arr[4 - 2] = arr[2], which is 67. And so on, until you've gone through the entire array.

4. Pushing to reverseOrder:

In each iteration, the element you accessed is pushed into the reverseOrder array. This continues until all elements from the original array are reversed and stored in reverseOrder.

5. Final Result:

After the loop finishes, reverseOrder will have all the elements of the original array, but in reverse order.

For example, with input = [54, 12, 67, 98], the reversed array will be [98, 67, 12, 54].

*/
