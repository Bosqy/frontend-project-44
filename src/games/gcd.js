import readlineSync from 'readline-sync';
import welcomeMessage, { getRandom } from '../index.js';
import helloDialog from '../cli.js';

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

const playGCD = (maxAttempts) => {
  let attemptRemains = maxAttempts;
  welcomeMessage();
  const name = helloDialog();
  console.log('Find the greatest common divisor of given numbers.');
  const maxNumber = 100;
  let goodbyeMessage = `Congratulations, ${name}!`;

  while (attemptRemains > 0) {
    const num1 = getRandom(maxNumber);
    const num2 = getRandom(maxNumber);
    console.log(`Question: ${num1} ${num2}`);
    const correctAnswer = getGCD(num1, num2);
    const answer = readlineSync.question('Your answer: ');
    if (Number(correctAnswer) === Number(answer)) {
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

export default playGCD;
