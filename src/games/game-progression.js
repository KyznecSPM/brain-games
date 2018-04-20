import { gameData, startGame } from '..';
import generateNumber from '../lib/generateNumber';

const description = 'What number is missing in this progression?';

const progressionNum = (first, commonDifference, n) => first + (commonDifference * (n - 1));

const arithmeticProgression = (firstNum, commonDifference, hiddeNum) => {
  let result = '';
  for (let i = 1; i < 10; i += 1) {
    if (i === hiddeNum) result += ' ..';
    else result += ` ${progressionNum(firstNum, commonDifference, i)}`;
  }
  return result;
};

const questionAnswer = () => {
  const firstNum = generateNumber(1, 10);
  const commonDifference = generateNumber(1, 4);
  const hiddeNum = generateNumber(2, 9);
  const question = arithmeticProgression(firstNum, commonDifference, hiddeNum);
  const answer = progressionNum(firstNum, commonDifference, hiddeNum);
  return gameData(question, String(answer));
};

const runGame = () => startGame(description, questionAnswer);

export default runGame;
