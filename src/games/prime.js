import createGame from '../index.js';
import getRandomNumber from '../utils.js';

const ruleMessage = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  const maxDivisor = Math.sqrt(num);
  for (let i = 2; i <= maxDivisor; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const roundOfPrime = () => {
  const maxNum = 1000;
  const question = getRandomNumber(maxNum);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const playPrime = () => createGame(roundOfPrime, ruleMessage);

export default playPrime;
