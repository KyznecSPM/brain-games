import { gameData, startGame } from '..';
import generateNumber from '../lib/generateNumber';

const description = 'Find the greatest common divisor of given numbers.';

const greatestCommonDivisor = (x, y) => {
  if (y === 0) {
    return Math.abs(x);
  }
  return greatestCommonDivisor(y, x % y);
};

const questionAnswer = () => {
  const firstNumber = generateNumber(1, 10);
  const secondNumber = generateNumber(1, 10);
  const question = `${firstNumber} ${secondNumber}`;
  const answer = greatestCommonDivisor(firstNumber, secondNumber);
  return gameData(question, String(answer));
};

const runGame = () => startGame(description, questionAnswer);

export default runGame;
