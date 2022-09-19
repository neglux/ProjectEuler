import { factorizeToPrimes } from "../eulib.js";

function getSmallestMultiple(range) {
  const mergePrimeFactors = (factors) => {
    const merged = {};
    for (const obj of factors) {
      for (const key in obj) {
        merged[key] = Math.max(merged[key] || 0, obj[key]);
      }
    }
    return merged;
  };

  const calcMultiplicands = (factors) => {
    const multiplicands = [];
    for (let num in factors) {
      num = parseInt(num);
      multiplicands.push(Math.pow(num, factors[num]));
    }
    return multiplicands;
  };

  let factors = [];
  for (let i = 2; i <= range; i++) {
    factors.push(factorizeToPrimes(i));
  }
  factors = mergePrimeFactors(factors);
  const multiplicands = calcMultiplicands(factors);

  return multiplicands.reduce((acc, val) => (acc *= val));
}
