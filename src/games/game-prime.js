import { gameData, startGame } from '..';
import generateNumber from '../lib/generateNumber';

const description = 'Is this number prime?';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const questionAnswer = () => {
  const question = generateNumber(10, 100);
  const answer = isPrime(question);
  console.log(answer);
  return gameData(question, String(answer));
};

const runGame = () => startGame(description, questionAnswer);

export default runGame;
