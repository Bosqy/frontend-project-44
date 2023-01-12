import createGame from '../index.js';
import getRandom from '../utils.js';

const ruleMessage = 'What number is missing in the progression?';

const getProgression = (start, incr, total, blank) => {
  const progression = [];
  let member;
  let missingElement;
  for (let i = 1; i <= total; i += 1) {
    member = start + incr * (i - 1);
    if (i === blank) {
      progression.push('..');
      missingElement = member;
    } else {
      progression.push(member);
    }
  }
  return [progression.join(' '), missingElement];
};

const roundOfProgression = () => {
  const start = getRandom(100);
  const incr = getRandom(18) + 2;
  const total = 10;
  const blank = getRandom(total - 1) + 1;
  const progression = getProgression(start, incr, total, blank);
  const question = progression[0];
  const correctAnswer = progression[1];
  return [question, `${correctAnswer}`];
};

const playProgression = () => createGame(roundOfProgression, ruleMessage);

export default playProgression;
