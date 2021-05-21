import getRundomNumber from '../util.js';
import startGames from '../index.js';

const description = 'What is the result of the expression?';

export const getGameData = () => {
  const gameData = [];
  const mathsOperators = ['+', '-', '*'];
  let minValue = 1;
  let maxValue = 100;
  const operandA = getRundomNumber(minValue, maxValue);
  const operandB = getRundomNumber(minValue, maxValue);
  minValue = 0;
  maxValue = 3;
  const indexOfOperators = getRundomNumber(minValue, maxValue);
  const expression = `${operandA} ${mathsOperators[indexOfOperators]} ${operandB}`;
  gameData.push(expression);
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
  gameData.push(resultExpression);

  return gameData;
};
const data = getGameData;
/* Записываем в константу data функцию getGameData() с целью последующей передачи
её в index.js через аргумент функции startGames(). Что позволит index.js в каждом раунде игры
вызывать функцию getGameData() */

export default () => {
  startGames(description, data);
};
