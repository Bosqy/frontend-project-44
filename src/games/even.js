import createGame from '../index.js';
import getRandomNumber from '../utils.js';

const ruleMessage = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => (num % 2 === 0);

const roundOfEven = () => {
  const question = getRandomNumber(10000);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const playEven = () => createGame(roundOfEven, ruleMessage);

export default playEven;
