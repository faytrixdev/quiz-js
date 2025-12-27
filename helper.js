import readline from "readline";

// 🦁 This code generates a "prompt" function
// This function retrieves a value entered by the user
// You're not expected to understand this code yet, but you can read and analyze it
// We'll see later in the course:
// * How this code works
// * How promises work
// * How async/await works
// And we'll revisit this code to understand it

// 👇 What you see here is JS documentation that allows you to document your code.

/**
 * The prompt function retrieves a value entered by the user.
 * @param {string} question The question to ask the user.
 * @returns {Promise<string>} A promise that will be resolved with the value entered by the user.
 */
export function prompt(question) {
  // Creation of a reading interface
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  // Returns a promise
  return new Promise((resolve) => {
    // Asks the question
    rl.question(question, (answer) => {
      // Closes the read interface when the answer is received
      rl.close();
      // Returns the answer
      resolve(answer);
    });
  });
}
