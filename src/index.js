import readlineSync from 'readline-sync';

const gameBrainEven = () => {
  const number = Math.floor(Math.random() * 100) + 1;
  console.log(`Question: ${number}`);
  const getAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = (number % 2 === 0) ? 'yes' : 'no';
  if (getAnswer === correctAnswer) {
    return true;
  }
  console.log(`'${getAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
};

const runGameBrainEven = () => {
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}`);
  console.log();
  console.log('Answer "yes" if number even otherwise answer "no".');
  console.log();
  for (let i = 0; i < 3; i += 1) {
    const result = gameBrainEven();
    if (result === true) console.log('Correct!');
    else return console.log(`Let's try again, ${username}!`);
  }
  return console.log(`Congratulations, ${username}!`);
};

export default runGameBrainEven;
