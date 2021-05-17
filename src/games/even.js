import getRundomNumber from '../util.js';
import startGames from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEvenNumber = (number) => (number % 2 === 0 ? 'yes' : 'no');

const getGameData = () => {
  const gameData = [];
  let numOfRounds = 0;
  for (numOfRounds; numOfRounds < 3; numOfRounds += 1) {
    gameData.push([]);
    const num = getRundomNumber(1, 100);
    const correctAnswer = isEvenNumber(num);
    gameData[numOfRounds].push(num, correctAnswer);
  }
  return gameData;
};

export default () => {
  startGames(description, getGameData());
};
