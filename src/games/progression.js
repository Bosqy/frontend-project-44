import createGame from '../index.js';
import getRandom from '../utils.js';

const ruleMessage = 'What number is missing in the progression?';

const roundOfProgression = () => {
  const start = getRandom(100);
  const incr = getRandom(20) + 2;
  const count = 10;
  const question = [];
  for (let i = 0; i < count; i += 1) {
    question.push(start + i * incr);
  }
  const blank = getRandom(question.length);
  const correctAnswer = question[blank];
  question[blank] = '..';
  return [question.join(' '), `${correctAnswer}`];
};

const playProgression = () => createGame(roundOfProgression, ruleMessage);

export default playProgression;
