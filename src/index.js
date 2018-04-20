import readlineSync from 'readline-sync';
import { cons, car, cdr } from 'hexlet-pairs';

export const gameData = (question, answer) => cons(question, answer);
const getQuestion = importData => car(importData);
const getCorrectAnswer = importData => cdr(importData);

export const startGame = (description, updateGameData) => {
  if (description === false && updateGameData === false) return false;
  console.log('Welcome to the Brain Games!\n');
  const username = readlineSync.question('May I have your name? ');
  console.log(`\nHello, ${username}!\n`);
  console.log(`${description}\n`);
  const gameIteration = (iter) => {
    if (iter === 3) return console.log(`Congratulations, ${username}!`);
    const data = updateGameData();
    const question = getQuestion(data);
    const correctAnswer = getCorrectAnswer(data);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer !== userAnswer) return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${username}!`);
    console.log('Correct!');
    return gameIteration(iter + 1);
  };
  return gameIteration(0);
};
