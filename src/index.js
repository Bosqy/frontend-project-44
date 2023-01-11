import readlineSync from 'readline-sync';

const getRandom = (max) => Math.floor(Math.random() * max);

const createGame = (roundOfGame, ruleMessage) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(ruleMessage);

  const maxAttempts = 3;
  let attemptRemains = maxAttempts;
  let goodbyeMessage = `Congratulations, ${userName}!`;

  while (attemptRemains > 0) {
    const [question, correctAnswer] = roundOfGame();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      attemptRemains -= 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;( correct answer was '${correctAnswer}'`);
      goodbyeMessage = `Let's try again, ${userName}!`;
      attemptRemains = 0;
    }
  }
  console.log(goodbyeMessage);
};

export { getRandom };
export default createGame;
