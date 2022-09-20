import { sum, trialDivision } from "../eulib.js";

function nonAbundantSums(max) {
  const isAbundantNum = (num) => {
    return sum(trialDivision(num)) - num > num;
  };
  const generateAbudantSequence = (max) => {
    const obj = {};
    for (let i = 12; i <= max; i++) {
      if (isAbundantNum(i)) obj[i] = true;
    }
    return obj;
  };

  const abundants = generateAbudantSequence(max);
  let total = 0;
  for (let i = 1; i <= max; i++) {
    let addToTheSum = true;
    let j = i;
    while (j >= 12 && addToTheSum) {
      if (abundants[j] && abundants[i - j]) addToTheSum = false;
      j--;
    }
    if (addToTheSum) total += i;
  }
  return total;
}
