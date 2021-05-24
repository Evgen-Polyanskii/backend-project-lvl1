import startGames from '../index.js';
import getRundomNumber from '../util.js';

const description = 'Find the greatest common divisor of given numbers.';

const getAnswer = (num1, num2) => {
  if (Math.max(num1, num2) === 0) {
    return 0;
  }
  const denom = Math.floor(Math.max(num1, num2) / 2);
  const calcDevisor = (divisible1, divisible2, devisor) => {
    if ((divisible1 % devisor === 0 && divisible2 % devisor === 0) || devisor === 1) {
      return devisor;
    }
    return calcDevisor(divisible1, divisible2, devisor - 1);
  };
  return calcDevisor(num1, num2, denom);
};

const getGameData = () => {
  const gameData = [];
  const minValue = 1;
  const maxValue = 100;
  const num1 = getRundomNumber(minValue, maxValue);
  const num2 = getRundomNumber(minValue, maxValue);
  const expression = `${num1} ${num2}`;
  gameData.push(expression);
  const correctAnswer = getAnswer(num1, num2);
  gameData.push(correctAnswer);
  return gameData;
};

export default () => {
  startGames(description, getGameData);
};
