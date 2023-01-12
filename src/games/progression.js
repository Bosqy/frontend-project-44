import createGame from '../index.js';
import getRandom from '../utils.js';

const ruleMessage = 'What number is missing in the progression?';

const getProgression = (start, incr, total, blank) => {
  let string = '';
  let member;
  let missingElement;
  for (let i = 1; i <= total; i += 1) {
    member = start + incr * (i - 1);
    if (i === blank) {
      string += ' ..';
      missingElement = member;
    } else {
      string += ` ${member}`;
    }
  }
  return [string, missingElement];
};

const roundOfProgression = () => {
  const progression = getProgression(getRandom(100), getRandom(20) + 2, 10, getRandom(10));
  const question = progression[0];
  const correctAnswer = progression[1];
  return [question, `${correctAnswer}`];
};

const playProgression = () => createGame(roundOfProgression, ruleMessage);

export default playProgression;
