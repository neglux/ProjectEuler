import { factorizeToPrimes } from "../eulib.js";

function getSmallestMultiple(range) {
  const getLargestFactors = (arr) => {
    const factors = {};
    for (const object of arr) {
      for (const key in object) {
        factors[key] = Math.max(factors[key] || 0, object[key]);
      }
    }
    const largests = [];
    for (const key in factors) {
      const value = Math.pow(key, factors[key]);
      largests.push(value);
    }
    return largests;
  };

  const factors = [];
  for (let i = 2; i <= range; i++) {
    factors.push(factorizeToPrimes(i));
  }
  return getLargestFactors(factors).reduce((acc, val) => (acc *= val));
}
