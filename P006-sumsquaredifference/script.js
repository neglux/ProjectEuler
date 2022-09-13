function calcSumSquareDifference(range) {
  const sumOfTheSquares = (range) => {
    let sum = 0;
    for (let i = 1; i <= range; i++) sum += Math.pow(i, 2);
    return sum;
  };
  const squareOfTheSum = (range) => {
    let sum = 0;
    for (let i = 1; i <= range; i++) sum += i;
    return Math.pow(sum, 2);
  };
  return squareOfTheSum(range) - sumOfTheSquares(range);
}
