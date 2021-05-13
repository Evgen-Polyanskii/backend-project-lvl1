import readlineSync from 'readline-sync';

const isEvenNumber = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const checkUserAnswer = (name) => {
  const rundomNumber = Math.floor(Math.random() * (100 - 1)) + 1;
  const userAnsver = readlineSync.question(`Question: ${rundomNumber} `);
  const correctAnswer = isEvenNumber(rundomNumber);
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
  let i = 1;
  for (i; i <= 3; i += 1) {
    if (checkUserAnswer(userName) === false) {
      return;
    }
  }
  console.log(`Congratulations, ${userName}`);
};
export default gameCheckForParity;
