import startGames from '../index.js';
import getRundomNumber from '../util.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGCD = (num1, num2) => {
  if (Math.max(num1, num2) === 0) {
    return 0;
  }
  const dev = Math.floor(Math.max(num1, num2) / 2);
  const calcDevisor = (divisible1, divisible2, devisor) => {
    if ((divisible1 % devisor === 0 && divisible2 % devisor === 0) || devisor === 1) {
      return devisor;
    }
    return calcDevisor(divisible1, divisible2, devisor - 1);
  };
  return calcDevisor(num1, num2, dev);
};

const getGameData = () => {
  const gameData = [];
  const minValue = 1;
  const maxValue = 100;
  const num1 = getRundomNumber(minValue, maxValue);
  const num2 = getRundomNumber(minValue, maxValue);
  const expression = `${num1} ${num2}`;
  gameData.push(expression);
  const correctAnswer = getGCD(num1, num2);
  gameData.push(correctAnswer);
  return gameData;
};
const data = getGameData;
/* Записываем в константу data функцию getGameData() с целью последующей передачи
её в index.js через аргумент функции startGames(). Что позволит index.js в каждом раунде игры
вызывать функцию getGameData() */

export default () => {
  startGames(description, data);
};
