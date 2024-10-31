// js V8 app for guessing a number
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
rl.setPrompt('Enter a number between 1 and 100: ');
rl.prompt();
rl.on('line', (input) => {
    attempts++;
    const number = parseInt(input);
    if (number === secretNumber) {
        console.log(`Congratulations! You guessed the number in ${attempts} attempts.`);
        rl.close();
    } else if (number < secretNumber) {
        console.log('Try a higher number.');
        rl.prompt();
    } else {
        console.log('Try a lower number.');
        rl.prompt();
    }
});

if (process.argv.includes('--debug')){
    console.log(`Secret number: ${secretNumber}`);
}


