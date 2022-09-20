import { sum, trialDivision } from "../eulib.js";

function sumOfAmicableNumbers(maxValue) {
  const isAmicableNumber = (i) => {
    const sumOfDivisors = (num) => {
      return sum(trialDivision(num)) - num;
    };

    const pairOfi = sumOfDivisors(i);

    if (i === pairOfi) return false;
    return i === sumOfDivisors(pairOfi);
  };

  const amicableNumbers = [];
  for (let i = 1; i < maxValue; i++) {
    if (isAmicableNumber(i)) amicableNumbers.push(i);
  }
  return sum(amicableNumbers);
}
