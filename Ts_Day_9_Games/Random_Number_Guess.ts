// randomGuess.ts
import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomNumber: number = getRandomNumber(1, 100);
let attempts: number = 0;

function askGuess() {
  rl.question("Guess a number between 1 and 100: ", (input) => {
    const guess: number = parseInt(input);
    attempts++;

    if (isNaN(guess)) {
      console.log("❌ Please enter a valid number.");
      askGuess();
      return;
    }

    if (guess === randomNumber) {
      console.log(`🎉 Correct! The number was ${randomNumber}. You guessed it in ${attempts} tries.`);
      rl.close();
    } else if (guess < randomNumber) {
      console.log("📉 Too low! Try again.");
      askGuess();
    } else {
      console.log("📈 Too high! Try again.");
      askGuess();
    }
  });
}

console.log("🔢 Welcome to the Random Number Guessing Game!");
askGuess();
