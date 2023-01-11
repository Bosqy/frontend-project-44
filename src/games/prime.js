import createGame, { getRandom } from '../index.js';

const ruleMessage = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  const maxDivisor = Math.floor(num / 2);
  for (let i = 2; i <= maxDivisor; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const roundOfPrime = () => {
  const maxNum = 1000;
  const question = getRandom(maxNum);
  const correctAnswer = isPrime(question);
  return [question, correctAnswer];
};

const playPrime = () => createGame(roundOfPrime, ruleMessage);

export default playPrime;
