#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const getRandom = (max) => Math.floor(Math.random() * max);
const isEven = (num) => num % 2 === 0;

let winsCount = 0;
const maxNumber = 100;

while (winsCount < 3) {
  const num = getRandom(maxNumber);
  console.log(`Question: ${num}`);
  const answer = readlineSync.question('Your answer: ');
  if ((isEven(num) && answer === 'yes') || (!isEven(num) && answer === 'no')) {
    console.log('Correct!');
    winsCount += 1;
  } else {
    console.log('Wrong!');
    winsCount = 0;
  }
}
console.log(`Congratulations, ${name}!`);
