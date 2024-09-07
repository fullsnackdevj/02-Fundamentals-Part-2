// notes for Basic_Array_Operations_Methods

const friends = ["Michael", "Steven", "Peter"];
// (3) ['Michael', 'Steven', 'Peter']

// capturing value of the new array length by storing it in a variable
// const newLength = friends.push("Jay");
// console.log(newLength); // 4

friends.push("Jay"); //push method adding element to the end of the array.
// (4) ['Michael', 'Steven', 'Peter', 'Jay']

friends.unshift("John"); // method to add element in the beginning
// (5) ['John', 'Michael', 'Steven', 'Peter', 'Jay']

//removing elements
friends.pop(); // removing the last element
// (4) ['John', 'Michael', 'Steven', 'Peter']
//pop method doest return the length of the array but instead returns the remove element.

const popped = friends.pop();
console.log(popped);

friends.shift(); //remove fist element
// console.log(friends); (2) ['Michael', 'Steven']

console.log(friends.indexOf("Steven"));
// this method returns the value of the arrays index
// console results: 1 'because steven is at the position [1] of the array.

console.log(friends.indexOf("bob")); // we will get -1 if the element was not in the given array.

// ES6 'IncludeS' Method
// This method simple return true if the element was in the array and false if its not
// and this method actually uses strict equality

friends.push(23); // string as a number
console.log(friends.includes("Steven")); //true
console.log(friends.includes("Bob")); // false
console.log(friends.includes("23")); // false because it 23 as string and not a number

// we can use include method to use conditionals

friends.includes("Steven")
  ? console.log("You have a friend called Steven") // if true
  : console.log("Steven is not your friend"); // if false
