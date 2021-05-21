import getRundomNumber from '../util.js';
import startGames from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEvenNumber = (number) => (number % 2 === 0 ? 'yes' : 'no');

const getGameData = () => {
  const gameData = [];
  const minValue = 1;
  const maxValue = 100;
  const num = getRundomNumber(minValue, maxValue);
  const correctAnswer = isEvenNumber(num);
  gameData.push(num, correctAnswer);
  return gameData;
};
const data = getGameData;
/* Записываем в константу data функцию getGameData() с целью последующей передачи
её в index.js через аргумент функции startGames(). Что позволит index.js в каждом раунде игры
вызывать функцию getGameData() */

export default () => {
  startGames(description, data);
};
