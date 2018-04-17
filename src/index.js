import readlineSync from 'readline-sync';

const greetingUser = () => {
  const getName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${getName}`);
  return getName;
};

const userName = greetingUser();

const parityCheck = () => {
  console.log('Answer "yes" if number even otherwise answer "no".');
  const runGame = (countCorrectAnswer) => {
    if (countCorrectAnswer === 3) return console.log(`Congratulations, ${userName}!`);
    const randomNumber = Math.floor(Math.random() * 10) + 1; // рандомные числа от 1 до 10.
    console.log(`Question: ${randomNumber}`);
    const getAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
    if (getAnswer === correctAnswer) runGame(countCorrectAnswer + 1);
    else return console.log(`Let's try again, ${userName}!`);
  };
  runGame(0);
};

export { greetingUser, parityCheck };
