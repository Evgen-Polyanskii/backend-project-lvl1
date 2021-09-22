import startGames from '../index.js';
import getRandomNumber from '../util.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGCD = (num1, num2) => (!num2 ? num1 : getGCD(num2, (num1 % num2)));

const getGameData = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const expression = `${num1} ${num2}`;
  const answer = getGCD(num1, num2);
  return [expression, String(answer)];
};

export default () => {
  startGames(description, getGameData);
};
