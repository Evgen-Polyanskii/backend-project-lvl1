import getRundomNumber from '../util.js';
import startGames from '../index.js';

const description = 'What number is missing in the progression?';

const getProgression = (initialValue, progressionStep, numOfElements) => {
  const sum = [];
  const calcProgression = (initlValue, progresStep, numOfEl, acc) => {
    if (numOfEl === 0) {
      return acc;
    }
    sum.push(acc);
    return calcProgression(initlValue, progresStep, numOfEl - 1, acc + progresStep);
  };
  calcProgression(initialValue, progressionStep, numOfElements, initialValue);
  return sum;
};

const calcCorrectAnswer = (initialValue, progressionStep, indexOfElToReplace) => {
  const answer = initialValue + indexOfElToReplace * progressionStep;
  return answer;
};

const getGameData = () => {
  const gameData = [];
  let minValue = 1;
  const maxValue = 11;
  const initialValue = getRundomNumber(minValue, maxValue);
  const progressionStep = getRundomNumber(minValue, maxValue);
  minValue = 5;
  const numOfElements = getRundomNumber(minValue, maxValue);
  const progression = getProgression(initialValue, progressionStep, numOfElements);
  minValue = 0;
  const indexOfElToReplace = getRundomNumber(minValue, numOfElements);
  progression[indexOfElToReplace] = '..';
  gameData.push(progression.join(' '));
  const answer = calcCorrectAnswer(initialValue, progressionStep, indexOfElToReplace);
  gameData.push(answer);
  return gameData;
};

export default () => {
  startGames(description, getGameData);
};
