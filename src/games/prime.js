import getRandomNumber from '../util.js';
import startGames from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getGameData = () => {
  const number = getRandomNumber(1, 100);
  const answer = isPrime(number) ? 'yes' : 'no';
  return [String(number), answer];
};

export default () => {
  startGames(description, getGameData);
};
