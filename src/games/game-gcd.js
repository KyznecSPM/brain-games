import { gameData, startGame } from '..';

const randomNumber = () => Math.floor(Math.random() * (10 - 1)) + 1;

const exportDescription = 'Find the greatest common divisor of given numbers.';

const divisor = (x, y) => {
  if (y === 0) {
    return Math.abs(x);
  }
  return divisor(y, x % y);
};

const exportQuestionAnswer = () => {
  const firstNumber = randomNumber();
  const secondNumber = randomNumber();
  const question = `${firstNumber} ${secondNumber}`;
  const answer = divisor(firstNumber, secondNumber);
  return gameData(question, String(answer));
};

const runGame = () => startGame(exportDescription, exportQuestionAnswer);

export default runGame;
