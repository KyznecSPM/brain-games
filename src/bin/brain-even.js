#!/usr/bin/env node
import welcome from './brain-games';
import runGame from '../games/game-even';

welcome();
console.log('Answer "yes" if number even otherwise answer "no".');
runGame();
