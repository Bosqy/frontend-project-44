import createGame, { getRandom } from '../index.js';

const ruleMessage = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const roundOfEven = () => {
  const maxNum = 10000;
  const question = getRandom(maxNum);
  const correctAnswer = isEven(question);
  return [question, correctAnswer];
};

const playEven = () => createGame(roundOfEven, ruleMessage);

export default playEven;
