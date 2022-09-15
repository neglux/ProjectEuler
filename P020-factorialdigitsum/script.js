function factorialDigitSum(n) {
  const bigFactorial = (n) => {
    if (n === 0 || n === 1) return BigInt(1);

    return BigInt(n) * bigFactorial(n - 1);
  };
  return bigFactorial(n)
    .toString()
    .split("")
    .reduce((acc, digit) => (acc += parseInt(digit)), 0);
}
