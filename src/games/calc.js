import createGame, { getRandom } from '../index.js';

const ruleMessage = 'What is the result of the expression?';

const getOperation = () => {
  const operators = ['+', '-', '*'];
  return operators[getRandom(operators.length)];
};

const roundOfCalc = () => {
  const maxNumber = 20;
  const operand1 = getRandom(maxNumber);
  const operand2 = getRandom(maxNumber);
  const operation = getOperation();
  let correctAnswer;
  switch (operation) {
    case '+':
      correctAnswer = operand1 + operand2;
      break;
    case '-':
      correctAnswer = operand1 - operand2;
      break;
    case '*':
      correctAnswer = operand1 * operand2;
      break;
    default:
      break;
  }
  return [`${operand1} ${operation} ${operand2}`, `${correctAnswer}`];
};

const playCalc = () => createGame(roundOfCalc, ruleMessage);

export default playCalc;
