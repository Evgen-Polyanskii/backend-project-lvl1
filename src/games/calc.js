import getRandomNumber from '../util.js';
import startGames from '../index.js';

const description = 'What is the result of the expression?';

const getMathsOperator = () => {
  const mathsOperators = ['+', '-', '*'];
  const maxIndexOfOperators = mathsOperators.length - 1;
  const indexOfOperator = getRandomNumber(0, maxIndexOfOperators);
  return mathsOperators[indexOfOperator];
};

const getGameData = () => {
  const operandA = getRandomNumber(1, 100);
  const operandB = getRandomNumber(1, 100);
  const mathOperator = getMathsOperator();
  const expression = `${operandA} ${mathOperator} ${operandB}`;
  let answer = 0;

  switch (mathOperator) {
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
