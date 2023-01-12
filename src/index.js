import readlineSync from 'readline-sync';

const createGame = (roundOfGame, ruleMessage) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(ruleMessage);

  let goodbyeMessage = `Congratulations, ${userName}!`;

  for (let i = 0; i < 3; i += 1) {
    const [question, correctAnswer] = roundOfGame();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;( correct answer was '${correctAnswer}'`);
      goodbyeMessage = `Let's try again, ${userName}!`;
      i = 3;
    }
  }
  console.log(goodbyeMessage);
};

export default createGame;
