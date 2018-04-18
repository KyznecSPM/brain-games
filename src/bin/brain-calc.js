#!/usr/bin/env node
import welcome from './brain-games';
import runGame from '../games/game-calc';

welcome();
console.log('What is the result of the expression?');
runGame();
