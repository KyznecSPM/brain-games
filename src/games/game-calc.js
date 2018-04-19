import { gameData, startGame } from '..';

const exportDescription = 'What is the result of the expression?';

const numSwitcher = () => Math.floor(Math.random() * (3 - 1)) + 1;

const randomNumber = () => Math.floor(Math.random() * 10);

const exportQuestionAnswer = () => {
  const firstNumber = randomNumber();
  const secondNumber = randomNumber();
  const operation = numSwitcher();
  if (operation === 3) {
    const question = `${firstNumber} + ${secondNumber}`;
    const answer = firstNumber + secondNumber;
    return gameData(question, String(answer));
  } else if (operation === 2) {
    const question = `${firstNumber} - ${secondNumber}`;
    const answer = firstNumber - secondNumber;
    return gameData(question, String(answer));
  }
  const question = `${firstNumber} * ${secondNumber}`;
  const answer = firstNumber * secondNumber;
  return gameData(question, String(answer));
};

const runGame = () => startGame(exportDescription, exportQuestionAnswer);

export default runGame;
