function sumAmicableNumbersLessThan(maxValue) {
  const findAmicableNumbersLessThan = (maxValue) => {
    const calcDivisorSumLessThanNum = (num) => {
      const calcDivisors = (num) => {
        const divisors = [];
        for (let i = 1; i <= Math.sqrt(num); i++) {
          if (num % i === 0) {
            if (num / i !== i) divisors.push(...[i, num / i]);
            else divisors.push(i);
          }
        }
        return divisors;
      };
      return calcDivisors(num).reduce((acc, val) => (acc += val), 0) - num;
    };
    const isAmicableNumber = (i) => {
      let pairOfi = calcDivisorSumLessThanNum(i);
      if (i === pairOfi) return false;
      return i === calcDivisorSumLessThanNum(pairOfi);
    };

    const amicableNumbers = [];
    for (let i = 1; i < maxValue; i++) {
      if (isAmicableNumber(i)) amicableNumbers.push(i);
    }
    return amicableNumbers;
  };
  return findAmicableNumbersLessThan(maxValue).reduce(
    (acc, val) => (acc += val),
    0
  );
}
