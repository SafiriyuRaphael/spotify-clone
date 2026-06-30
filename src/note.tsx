// lets talk about typescript

// TypeScript is a statically typed superset of JavaScript that compiles to plain JavaScript, enabling developers to write safer, more maintainable, and scalable applications.

// Typescript ---  obsessed with data types
let x: number;
x = 20;

let name: string;
// name = false  // -- error
name = "Wura";

let hasEaten: boolean;
// hasEaten= 10
hasEaten = false;

let isSleeping: string | boolean;
isSleeping = "yes";
isSleeping = true;
// isSleeping = 12;

//
let userName: "john" | "jane" | "doe";
userName = "jane";
// userName = "declan";

// javascript inferred data types
let y: boolean | number = false;
y = false;
y = 20;

let arr: (string | number)[] = ["true", "this", "is", "a", "string", 20];
console.log(arr);

let obj: {
  name: string;
  age: number;
  gender: string | number;
  friends: number;
};
obj = { name: "Wura", age: 2, gender: 2, friends: 0 };

let classAStudents: {
  name: string;
  age?: number;
  gender: string | number;
  friends: number;
}[];

classAStudents = [
  { name: "Wura", age: 2, gender: 2, friends: 0 },
  { name: "Wura", age: 2, gender: 2, friends: 0 },
  { name: "Wura", gender: 2, friends: 0 },
];

let logOne: () => void;
logOne = () => {
  console.log("one");
};

let addTwo: (a: number, b: number) => number;

addTwo = (a, b) => {
  return a + b;
};

addTwo(11, 12);

let multiplyThree = (a: number): number => {
  return a * 3;
};

multiplyThree(3);

// Part 1: Variables
// Create the following variables with appropriate types:
// schoolName
// schoolFees
// isSchoolOpen
// principalName (can only be "Mr James" or "Mrs Grace")
// Part 2: Union Types

// Create a variable called studentID that can accept either:

// a number
// or a string

// Assign it two different values.

// Part 3: Arrays

// Create an array called subjects that stores only strings.

// Then create another array called scores that stores both numbers and strings.

// Example:

// ["Math", 80, "English", 75]
// Part 4: Object

// Create an object called teacher with the following properties:

// name
// age
// department
// yearsOfExperience

// Ensure all properties have appropriate types.

// Part 5: Array of Objects

// Create an array called students.

// Each student should have:

// name
// age (optional)
// gender
// score

// Add at least four students, and make sure one student does not have an age.

// Part 6: Function Types

// Create a function variable called printWelcome.

// It should:

// take no parameters
// return nothing
// print:
// Welcome to TypeScript Class
// Part 7: Function with Parameters

// Create a function called calculateAverage.

// It should accept three numbers and return their average.

// Example:

// calculateAverage(60, 70, 80);

// Expected result:

// 70
// Part 8: Arrow Function

// Create an arrow function called passOrFail.

// It accepts one number.

// If the score is 50 or above, return:

// Pass

// Otherwise return:

// Fail
// Part 9: Challenge 🧠

// Using your students array:

// Print the name of the first student.
// Print the score of the last student.
// Add a fifth student.
// Print the total number of students.
// Call printWelcome().
// Call calculateAverage() using any three scores.
// Test passOrFail() with at least two different scores.

// continuation from yesterday
type Props = {
  name: string;
  age?: number;
};

interface PrimaryProps {
  student: number;
  ages: number[];
}

let martinData: Props = {
  name: "Martin",
  age: 12,
};

let primaryOneStudent: PrimaryProps = {
  student: 20,
  ages: [5, 6, 4, 5, 6],
};

//  Difference between types and interface to declare a data

type WaterProp = number | "green";

// interface WaterData {

// }

type AddedProp = Props & {
  gender: "male" | "female";
};

let fullDetails: AddedProp = {
  gender: "male",
  name: "Declan",
  age: 49,
};

interface AddedData extends PrimaryProps {
  grades: { pass: number; fail: number };
}

let fullPrimaryOneDetails: AddedData = {
  ages: [5, 6, 4, 5],
  student: 20,
  grades: { fail: 15, pass: 5 },
};

// ANY ---- avoid it
let avoid: any;
avoid = true;
avoid = 12;

// never
const showError = (): never => {
  throw new Error("this is an error");
};

// as keywords
//  type assertion
let data: "martin" | "declan";
data = "wura" as "martin";
// data = 10 as "martin" error here
