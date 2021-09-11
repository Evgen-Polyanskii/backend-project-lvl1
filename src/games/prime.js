import getRundomNumber from '../util.js';
import startGames from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i < Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getGameData = () => {
  const minValue = 1;
  const maxValue = 100;
  const number = getRundomNumber(minValue, maxValue);
  const answer = isPrime(number) ? 'yes' : 'no';
  return [String(number), answer];
};

export default () => {
  startGames(description, getGameData);
};
