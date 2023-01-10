import readlineSync from 'readline-sync';
import welcomeMessage, { getRandom } from '../index.js';
import helloDialog from '../cli.js';

const isPrime = (num) => {
  const maxDivisor = Math.floor(num / 2);
  for (let i = 2; i <= maxDivisor; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const playPrime = (maxAttempts) => {
  let attemptRemains = maxAttempts;
  welcomeMessage();
  const name = helloDialog();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  const maxNumber = 100;
  let goodbyeMessage = `Congratulations, ${name}!`;

  while (attemptRemains > 0) {
    const num = getRandom(maxNumber);
    console.log(`Question: ${num}`);
    const correctAnswer = isPrime(num);
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

export default playPrime;
