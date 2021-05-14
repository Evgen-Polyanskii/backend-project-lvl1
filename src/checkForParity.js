import readlineSync from 'readline-sync';

const isEvenNumber = (number) => (number % 2 === 0 ? 'yes' : 'no');

const getRundomNumber = () => {
  const minValue = 1;
  const maxValue = 100;
  const rundomNumber = Math.floor(Math.random() * (maxValue - minValue)) + minValue;
  return rundomNumber;
};

const checkUserAnswer = (name) => {
  const num = getRundomNumber();
  const userAnsver = readlineSync.question(`Question: ${num} `);
  const correctAnswer = isEvenNumber(num);
  if (correctAnswer === userAnsver) {
    console.log('Correct!');
    return true;
  }
  console.log(`${userAnsver} is wrong answer ;(, Correct answer was ${correctAnswer}`);
  console.log(`Let's try again, ${name}`);
  return false;
};

const gameCheckForParity = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let numOfRounds = 1;
  for (numOfRounds; numOfRounds <= 3; numOfRounds += 1) {
    if (checkUserAnswer(userName) === false) {
      return;
    }
  }
  console.log(`Congratulations, ${userName}`);
};
export default gameCheckForParity;
