import { gameData, startGame } from '..';

const randomNumber = () => Math.floor(Math.random() * 10);

const exportGameData = () => {
  const firstNumber = randomNumber();
  const secondNumber = randomNumber();
  const operation = randomNumber();
  if (operation <= 3) {
    const question = `${firstNumber} + ${secondNumber}`;
    const answer = firstNumber + secondNumber;
    return gameData(question, String(answer));
  } else if (operation > 3 && operation < 7) {
    const question = `${firstNumber} - ${secondNumber}`;
    const answer = firstNumber - secondNumber;
    return gameData(question, String(answer));
  }
  const question = `${firstNumber} * ${secondNumber}`;
  const answer = firstNumber * secondNumber;
  return gameData(question, String(answer));
};

const runGame = () => startGame(exportGameData);

export default runGame;
