#!/usr/bin/env node

import playCalc from '../src/games/calc.js';

playCalc(3);

/*
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

console.log('What is the result of the expression?');

const getRandom = (max) => Math.floor(Math.random() * max);
const getOperation = () => {
  const operators = ['+', '-', '*'];
  return operators[Math.floor(Math.random() * 3)];
};
const calculate = (operand1, operation, operand2) => {
  switch (operation) {
    case '+':
      return Number(operand1) + Number(operand2);
    case '-':
      return Number(operand1) - Number(operand2);
    case '*':
      return Number(operand1) * Number(operand2);
    default:
      break;
  }
  return null;
};

let attemptRemains = 3;
const maxNumber = 100;
let goodbyeMessage = `Congratulations, ${name}!`;

while (attemptRemains > 0) {
  const operand1 = getRandom(maxNumber);
  const operand2 = getRandom(maxNumber);
  const operation = getOperation();
  console.log(`Question: ${operand1} ${operation} ${operand2}`);
  const correctAnswer = calculate(operand1, operation, operand2);
  const answer = readlineSync.question('Your answer: ');
  if (Number(correctAnswer) === Number(answer)) {
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
