import { gameData, startGame } from '..';
import balanceNumber from '../lib/balanceNumber';
import generateNumber from '../lib/generateNumber';

const description = 'Balance the given number.';

const questionAnswer = () => {
  const number = generateNumber(100, 1000);
  const question = `${number}`;
  const answer = balanceNumber(number);
  console.log(`cheating ${answer}`);
  return gameData(question, String(answer));
};

const runGame = () => startGame(description, questionAnswer);

export default runGame;
