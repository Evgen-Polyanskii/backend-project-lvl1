import startGames from '../index.js';
import getRundomNumber from '../util.js';

const description = 'Find the greatest common divisor of given numbers.';

const getAnswer = (num1, num2) => {
  if (Math.max(num1, num2) === 0) {
    return 0;
  }
  const denom = Math.floor(Math.max(num1, num2) / 2);
  const calcDivisor = (divisible1, divisible2, divisor) => {
    if ((divisible1 % divisor === 0 && divisible2 % divisor === 0) || divisor === 1) {
      return divisor;
    }
    return calcDivisor(divisible1, divisible2, divisor - 1);
  };
  return calcDivisor(num1, num2, denom);
};

const getGameData = () => {
  const minValue = 1;
  const maxValue = 100;
  const num1 = getRundomNumber(minValue, maxValue);
  const num2 = getRundomNumber(minValue, maxValue);
  const expression = `${num1} ${num2}`;
  const answer = getAnswer(num1, num2);
  return [expression, String(answer)];
};

export default () => {
  startGames(description, getGameData);
};
