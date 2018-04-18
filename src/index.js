import readlineSync from 'readline-sync';
import { cons, car, cdr } from 'hexlet-pairs';

export const gameData = (question, answer) => cons(question, answer);
const getQuestion = importData => car(importData);
const getCorrectAnswer = importData => cdr(importData);

export const startGame = (updateGameData) => {
  console.log();
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}`);
  console.log();
  for (let i = 0; i < 3; i += 1) {
    const data = updateGameData();
    const question = getQuestion(data);
    const correctAnswer = getCorrectAnswer(data);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer === userAnswer) console.log('Correct!');
    else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      return console.log(`Let's try again, ${username}!`);
    }
  }
  return console.log(`Congratulations, ${username}!`);
};
