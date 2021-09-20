import getRandomNumber from '../util.js';
import startGames from '../index.js';

const description = 'What number is missing in the progression?';

const getProgression = (initialValue, progressionStep, numOfElements) => {
  const A = (n) => initialValue + progressionStep * n;
  return [...(new Array(numOfElements)).keys()].map(A);
};

const getAnswer = (inValue, step, indexOfElToReplace) => inValue + indexOfElToReplace * step;

const getGameData = () => {
  const initialValue = getRandomNumber(1, 10);
  const progressionStep = getRandomNumber(1, 10);
  const numOfElements = getRandomNumber(5, 10);
  const progression = getProgression(initialValue, progressionStep, numOfElements);
  const indexOfElToReplace = getRandomNumber(0, numOfElements);
  progression[indexOfElToReplace] = '..';
  const answer = getAnswer(initialValue, progressionStep, indexOfElToReplace);
  return [progression.join(' '), String(answer)];
};

export default () => {
  startGames(description, getGameData);
};
