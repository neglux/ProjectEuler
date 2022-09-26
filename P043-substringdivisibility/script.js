import { generatePandigitalSequence } from "../eulib.js";

function sumSubDivisiblePandigitals(digits, primes) {
  const getSubstrings = (num) => {
    const subs = [];
    num = String(num);
    for (let i = 1; i + 3 <= num.length; i++) {
      subs.push(parseInt(num.substring(i, i + 3)));
    }
    return subs;
  };

  const isDivisible = (primes, subs) => {
    for (let i = 0; i < subs.length; i++) {
      if (subs[i] % primes[i] !== 0) return false;
    }
    return true;
  };

  const pandigitals = generatePandigitalSequence(digits);

  let sum = 0;
  for (const pan of pandigitals) {
    const subs = getSubstrings(pan);
    if (isDivisible(primes, subs)) {
      if (String(pan).length === digits.length) {
        sum += pan;
      }
    }
  }

  return sum;
}

console.log(
  sumSubDivisiblePandigitals(
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [2, 3, 5, 7, 11, 13, 17]
  )
);
