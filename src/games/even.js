import getRundomNumber from '../util.js';
import startGames from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEvenNumber = (number) => number % 2 === 0;

const getGameData = () => {
  const gameData = [];
  const minValue = 1;
  const maxValue = 100;
  const num = getRundomNumber(minValue, maxValue);
  const correctAnswer = isEvenNumber(num) ? 'yes' : 'no';
  gameData.push(num, correctAnswer);
  return gameData;
};

export default () => {
  startGames(description, getGameData);
};
