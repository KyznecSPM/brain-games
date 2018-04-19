import { gameData, startGame } from '..';
import generateNumber from '../lib/generateNumber';

const description = 'Answer "yes" if number even otherwise answer "no".';

const questionAnswer = () => {
  const question = generateNumber(1, 100);
  const answer = question % 2 === 0 ? 'yes' : 'no';
  return gameData(question, answer);
};

const runGame = () => startGame(description, questionAnswer);

export default runGame;
