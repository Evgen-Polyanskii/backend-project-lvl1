const getRundomNumber = (minValue, maxValue) => {
  const rundomNumber = Math.floor(Math.random() * (maxValue - minValue)) + minValue;
  return rundomNumber;
};
export default getRundomNumber;
