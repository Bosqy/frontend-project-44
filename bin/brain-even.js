#!/usr/bin/env node

import playEven from '../src/games/even.js';

playEven(3);

/*
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const getRandom = (max) => Math.floor(Math.random() * max);
const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

let attemptRemains = 3;
const maxNumber = 100;
let goodbyeMessage = `Congratulations, ${name}!`;

while (attemptRemains > 0) {
  const num = getRandom(maxNumber);
  console.log(`Question: ${num}`);
  const correctAnswer = isEven(num);
  const answer = readlineSync.question('Your answer: ');
  if (correctAnswer === answer) {
    console.log('Correct!');
    attemptRemains -= 1;
  } else {
    console.log(`'${answer}' is wrong answer ;( correct answer was '${correctAnswer}'`);
    goodbyeMessage = `Let's try again, ${name}!`;
    attemptRemains = 0;
  }
}

console.log(goodbyeMessage);
*/
