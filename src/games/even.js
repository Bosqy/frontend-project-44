import createGame from '../index.js';
import getRandomNumber from '../utils.js';

const ruleMessage = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => (num % 2 === 0);

const roundOfEven = () => {
  const maxNum = 10000;
  const question = getRandomNumber(maxNum);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const playEven = () => createGame(roundOfEven, ruleMessage);

export default playEven;
