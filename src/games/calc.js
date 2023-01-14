import createGame from '../index.js';
import getRandomNumber from '../utils.js';

const ruleMessage = 'What is the result of the expression?';

const getOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[getRandomNumber(operators.length)];
};

const calculate = (operand1, operator, operand2) => {
  switch (operator) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    default:
      return null;
  }
};

const roundOfCalc = () => {
  const maxNumber = 20;
  const operand1 = getRandomNumber(maxNumber);
  const operand2 = getRandomNumber(maxNumber);
  const operator = getOperator();
  const correctAnswer = calculate(operand1, operator, operand2);
  return [`${operand1} ${operator} ${operand2}`, `${correctAnswer}`];
};

const playCalc = () => createGame(roundOfCalc, ruleMessage);

export default playCalc;
