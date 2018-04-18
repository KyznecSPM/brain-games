import { gameData, startGame } from '..';

const randomNumber = () => Math.floor(Math.random() * 100);

const exportGameData = () => {
  const number = randomNumber();
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
  return gameData(number, correctAnswer);
};

const runGame = () => startGame(exportGameData);

export default runGame;
