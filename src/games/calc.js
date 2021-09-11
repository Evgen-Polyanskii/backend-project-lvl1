import getRundomNumber from '../util.js';
import startGames from '../index.js';

const description = 'What is the result of the expression?';

const getGameData = () => {
  const mathsOperators = ['+', '-', '*'];
  const minValue = 1;
  const maxValue = 100;
  const operandA = getRundomNumber(minValue, maxValue);
  const operandB = getRundomNumber(minValue, maxValue);
  const minIndexOfOperators = 0;
  const maxIndexOfOperators = 2;
  const operators = getRundomNumber(minIndexOfOperators, maxIndexOfOperators);
  const expression = `${operandA} ${mathsOperators[operators]} ${operandB}`;
  let answer = 0;

  switch (mathsOperators[operators]) {
    case '+':
      answer = operandA + operandB;
      break;
    case '-':
      answer = operandA - operandB;
      break;
    case '*':
      answer = operandA * operandB;
      break;
    default:
      break;
  }

  return [expression, String(answer)];
};

export default () => {
  startGames(description, getGameData);
};
