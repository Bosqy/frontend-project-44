import readlineSync from 'readline-sync';
import welcomeMessage, { getRandom } from '../index.js';
import helloDialog from '../cli.js';

const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const playEven = (maxAttempts) => {
  let attemptRemains = maxAttempts;
  welcomeMessage();
  const name = helloDialog();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const maxNumber = 100;
  let goodbyeMessage = `Congratulations, ${name}!`;

  while (attemptRemains > 0) {
    const num = getRandom(maxNumber);
    console.log(`Question: ${num}`);
    const correctAnswer = isEven(num);
    const answer = readlineSync.question('Your answer: ');
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

export default playEven;
