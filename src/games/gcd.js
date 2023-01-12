import createGame from '../index.js';
import getRandom from '../utils.js';

const ruleMessage = 'Find the greatest common divisor of given numbers.';

const getGCD = (num1, num2) => {
  let GCD = 1;
  const min = (num1 > num2) ? num2 : num1;
  for (let i = 1; i <= min; i += 1) {
    if ((num1 % i === 0) && (num2 % i === 0)) {
      GCD = i;
    }
  }
  return GCD;
};

const roundOfGCD = () => {
  const maxNumber = 99;
  const operand1 = getRandom(maxNumber) + 1;
  const operand2 = getRandom(maxNumber) + 1;
  const correctAnswer = getGCD(operand1, operand2);
  return [`${operand1} ${operand2}`, `${correctAnswer}`];
};

const playGCD = () => createGame(roundOfGCD, ruleMessage);

export default playGCD;
