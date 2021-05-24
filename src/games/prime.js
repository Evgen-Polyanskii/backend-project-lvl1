import getRundomNumber from '../util.js';
import startGames from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getGameData = () => {
  const gameData = [];
  const minValue = 1;
  const maxValue = 100;
  const number = getRundomNumber(minValue, maxValue);
  gameData.push(number);
  const answer = isPrime(number) ? 'yes' : 'no';
  gameData.push(answer);
  return gameData;
};

export default () => {
  startGames(description, getGameData);
};
