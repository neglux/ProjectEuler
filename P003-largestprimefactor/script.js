import { factorizeToPrimes } from "../eulib.js";

function findLargestPrimeFactor(num) {
  let largest = 0;
  for (let factor in factorizeToPrimes(num)) {
    factor = parseInt(factor);
    if (factor > largest) largest = factor;
  }
  return largest;
}
