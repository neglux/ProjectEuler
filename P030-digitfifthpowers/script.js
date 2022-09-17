function sumOfDigitNthPowers(exp) {
  const getDigits = (num) => {
    return String(num)
      .split("")
      .map((e) => parseInt(e));
  };

  const addPowerofDigits = (exp, arr) => {
    return arr.reduce((acc, e) => (acc += Math.pow(e, exp)), 0);
  };
  let num = 2;
  let total = 0;
  while (num < 1000000) {
    const sum = addPowerofDigits(exp, getDigits(num));
    if (sum === num) total += num;
    num++;
  }
  return total;
}
