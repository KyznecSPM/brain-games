import { gameData, startGame } from '..';

const randomNumber = () => Math.floor(Math.random() * 100);

const exportDescription = 'Answer "yes" if number even otherwise answer "no".';

const exportQuestionAnswer = () => {
  const question = randomNumber();
  const answer = question % 2 === 0 ? 'yes' : 'no';
  return gameData(question, answer);
};

const runGame = () => startGame(exportDescription, exportQuestionAnswer);

export default runGame;
