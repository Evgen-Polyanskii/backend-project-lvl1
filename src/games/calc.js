import getRundomNumber from '../util.js';
import startGames from '../index.js';

const description = 'What is the result of the expression?';

export const getGameData = () => {
  const gameData = [];
  const mathsOperators = ['+', '-', '*'];
  let numOfRounds = 0;
  for (numOfRounds; numOfRounds < 3; numOfRounds += 1) {
    gameData.push([]);
    const operandA = getRundomNumber(1, 100);
    const operandB = getRundomNumber(1, 100);
    const indexOfOperators = getRundomNumber(0, 3);
    const expression = `${operandA} ${mathsOperators[indexOfOperators]} ${operandB}`;
    gameData[numOfRounds].push(expression);
    let resultExpression = 0;

    switch (indexOfOperators) {
      case 0:
        resultExpression = operandA + operandB;
        break;
      case 1:
        resultExpression = operandA - operandB;
        break;
      case 2:
        resultExpression = operandA * operandB;
        break;
      default:
        break;
    }
    gameData[numOfRounds].push(resultExpression);
  }
  return gameData;
};

export default () => {
  startGames(description, getGameData());
};
