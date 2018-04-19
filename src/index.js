import readlineSync from 'readline-sync';
import { cons, car, cdr } from 'hexlet-pairs';

export const gameData = (question, answer) => cons(question, answer);
const getQuestion = importData => car(importData);
const getCorrectAnswer = importData => cdr(importData);

export const startGame = (description, updateGameData) => {
  console.log('Welcome to the Brain Games!\n');
  const username = readlineSync.question('May I have your name? ');
  console.log(`\nHello, ${username}!\n`);
  if (description === false && updateGameData === false) return false;
  console.log(`${description}\n`);
  for (let i = 0; i < 3; i += 1) {
    const data = updateGameData();
    const question = getQuestion(data);
    const correctAnswer = getCorrectAnswer(data);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer === userAnswer) console.log('Correct!');
    else {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${username}!`);
    }
  }
  return console.log(`Congratulations, ${username}!`);
};
