import readlineSync from 'readline-sync';
// функция приветствия, из которой получаем имя игрока
const greetingUser = () => {
  const getName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${getName}`);
  return getName;
};

const GameBrainEven = () => {
  console.log('GameBrainEven');
  const number = Math.floor(Math.random() * 100) + 1;
  console.log(`Question: ${number}`);
  const getAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = (number % 2 === 0) ? 'yes' : 'no';
  if (getAnswer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${getAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
};

export { greetingUser, GameBrainEven };
