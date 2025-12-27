import { prompt } from "./helper.js";

let i = 0;
let points = 0;

const correctAnswers = ["a", "b", "b", "a", "a", "b", "a", "a", "b", "a"];

const quizzes = [
  {
    question:
      "1. What is the main difference between let and var in a function?",
    responses: `    a) let is block-scoped { }, var is function-scoped
    
    b) var cannot store strings

    c) let is always faster than var`,
  },
  {
    question: "2. What does typeof NaN return?",
    responses: `    a) "NaN"

    b) "number"

    c) "undefined"`,
  },
  {
    question: "3. Which array declaration is correct?",
    responses: `    a) let arr = (1, 2, 3);
    
    b) let arr = [1, 2, 3];

    c) let arr = {1, 2, 3};`,
  },
  {
    question: "4. What does arr.includes(3) do on let arr = [1, 2, 3, 4];?",
    responses: `    a) Checks if 3 is present in the array

    b) Removes 3 from the array

    c) Returns the position of 3`,
  },
  {
    question: "5. Which statement is true about == and ===?",
    responses: `    a) == converts types before comparing, === does not
    
    b) === converts types before comparing, == does not

    c) Both always behave exactly the same`,
  },
  {
    question: `6. What is the potential problem with this pseudo-code?
"I create a function that modifies an array passed as a parameter."`,
    responses: `    a) The array cannot be passed as a parameter

    b) The function can directly modify the original array

    c) The function will always return an automatic copy`,
  },
  {
    question:
      "7. What does 'this' mean in an object method like: const user = { name: 'Ali', hello() { /* here */ } } when calling user.hello()?",
    responses: `    a) this refers to user

    b) this always refers to window

    c) this is always undefined`,
  },
  {
    question: "8. Why doesn't const make an object completely 'locked'?",
    responses: `    a) Because you can still change the object's internal content

    b) Because you can reassign the variable to another object

    c) Because const only works on numbers`,
  },
  {
    question: "9. What does arr.map(x => x * 2) do on an array of numbers?",
    responses: `    a) Directly modifies the original array

    b) Creates a new array with each element multiplied by 2

    c) Removes elements less than 2`,
  },
  {
    question: "10. What does JSON.stringify(obj) do?",
    responses: `    a) Convert an object to a JSON format text string

    b) Convert a JSON string to an object

    c) Remove all keys from the object`,
  },
];

console.log("");
console.log("Welcome to the quiz!");

while (i < 10) {
  console.log("");
  console.log(quizzes[i].question);
  console.log("");
  console.log(quizzes[i].responses);
  console.log("");
  let response = await prompt("Enter your answer: ");
  if (response === correctAnswers[i]) {
    console.log("");
    console.log("Correct answer!");
    points++;
  } else if (response === null || response === "") {
    console.log("");
    console.log("Error: Please enter a valid answer (a, b, or c)");
  } else if (response !== "a" && response !== "b" && response !== "c") {
    console.log("");
    console.log("Error: Please enter a valid answer (a, b, or c)");
  } else if (response !== correctAnswers[i]) {
    console.log("");
    console.log("Wrong answer");
    console.log("");
    console.log(`The correct answer is ${correctAnswers[i]}`);
  }
  i++;
}

console.log("");

if (points === 10) {
  console.log(
    "Congratulations, you got everything right, you scored 10 points!"
  );
} else if (points > 0 && points < 10) {
  console.log(`Great job, you scored ${points} points!`);
} else {
  console.log("Too bad, you scored 0 points");
}

console.log("");
console.log("Thanks for playing!");
console.log("");
console.log("Goodbye!");
console.log("");
