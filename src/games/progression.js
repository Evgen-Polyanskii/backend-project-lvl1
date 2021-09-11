import getRundomNumber from '../util.js';
import startGames from '../index.js';

const description = 'What number is missing in the progression?';

const getProgression = (initialValue, progressionStep, numOfElements) => {
  const sum = [];
  const calcProgression = (initlValue, progresStep, numOfEl, acc) => {
    if (numOfEl === 0) {
      return acc;
      /* При numOfEl === 0 переменная acc не добавляется в sum[] так как переменная
      initialValue будет считаться первым элементом прогрессии, таким образом
      sum.length === numOfEl */
    }
    sum.push(acc);
    return calcProgression(initlValue, progresStep, numOfEl - 1, acc + progresStep);
  };
  calcProgression(initialValue, progressionStep, numOfElements, initialValue);
  return sum;
};

const getAnswer = (initialValue, progressionStep, indexOfElToReplace) => {
  const answer = initialValue + indexOfElToReplace * progressionStep;
  return answer;
};

const getGameData = () => {
  const initialValue = getRundomNumber(1, 10);
  const progressionStep = getRundomNumber(1, 10);
  const numOfElements = getRundomNumber(5, 10);
  const progression = getProgression(initialValue, progressionStep, numOfElements);
  const indexOfElToReplace = getRundomNumber(0, numOfElements);
  progression[indexOfElToReplace] = '..';
  const answer = getAnswer(initialValue, progressionStep, indexOfElToReplace);
  return [progression.join(' '), String(answer)];
};

export default () => {
  startGames(description, getGameData);
};
