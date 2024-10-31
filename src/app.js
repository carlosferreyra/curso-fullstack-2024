// js V8 app for guessing a number with difficulty levels
console.log('Welcome to the game!');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const min = 1;
const max = 100;
const secretNumber = Math.floor(Math.random() * (max - min + 1)) + min;
let attempts = 0;
let maxAttempts = 0;

const selectDifficulty = () => {
  rl.question('Select difficulty (easy, medium, hard, debug): ', (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case 'easy':
        maxAttempts = 10;
        break;
      case 'medium':
        maxAttempts = 5;
        break;
      case 'hard':
        maxAttempts = 3;
        break;
      case 'debug':
        maxAttempts = Infinity;
        console.log(`Debug mode activated. Secret number is ${secretNumber}.`);
        break;
      default:
        console.log('Invalid difficulty. Defaulting to easy.');
        maxAttempts = 10;
    }
    promptGuess();
  });
};

const promptGuess = () => {
  rl.setPrompt(`Enter a number between ${min} and ${max}: `);
  rl.prompt();
};

rl.on('line', (input) => {
  attempts++;
  const number = parseInt(input);
  if (number === secretNumber) {
    console.log(`Congratulations! You guessed the number in ${attempts} attempts.`);
    rl.close();
  } else {
    if (attempts >= maxAttempts) {
      console.log(`Sorry, you've used all ${maxAttempts} attempts. The number was ${secretNumber}.`);
      rl.close();
    } else if (number < secretNumber) {
      console.log('Try a higher number.');
      promptGuess();
    } else {
      console.log('Try a lower number.');
      promptGuess();
    }
  }
});

if (process.argv.includes('--debug')){
    console.log(`Secret number: ${secretNumber}`);
}

selectDifficulty();


