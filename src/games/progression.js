import readlineSync from 'readline-sync';
import welcomeMessage, { getRandom } from '../index.js';
import helloDialog from '../cli.js';

const generateProgression = () => {
  const start = getRandom(100);
  const incr = getRandom(20) + 2;
  const count = 10;
  const question = [];
  for (let i = 0; i < count; i += 1) {
    question.push(start + i * incr);
  }
  return question;
};

const playProgression = (maxAttempts) => {
  let attemptRemains = maxAttempts;
  welcomeMessage();
  const name = helloDialog();
  console.log('What number is missing in the progression?');
  let goodbyeMessage = `Congratulations, ${name}!`;

  while (attemptRemains > 0) {
    const question = generateProgression();
    const blank = getRandom(question.length - 1);
    const correctAnswer = question[blank];
    question[blank] = '..';
    console.log(`Question: ${question.join(' ')}`);
    const answer = Number(readlineSync.question('Your answer: '));
    if (correctAnswer === answer) {
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

export default playProgression;
