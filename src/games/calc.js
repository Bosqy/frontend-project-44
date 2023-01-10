import readlineSync from 'readline-sync';
import welcomeMessage, { getRandom } from '../index.js';
import helloDialog from '../cli.js';

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

const playCalc = (maxAttempts) => {
  let attemptRemains = maxAttempts;
  welcomeMessage();
  const name = helloDialog();
  console.log('What is the result of the expression?');
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
};

export default playCalc;
