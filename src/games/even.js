import getRundomNumber from '../util.js';
import startGames from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEvenNumber = (number) => number % 2 === 0;

const getGameData = () => {
  const num = getRundomNumber(1, 100);
  const answer = isEvenNumber(num) ? 'yes' : 'no';
  return [String(num), answer];
};

export default () => {
  startGames(description, getGameData);
};
