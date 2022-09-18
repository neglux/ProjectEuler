import { isPrime } from "../eulib.js";

function findLargestPrimeFactor(num) {
  let largest = -Infinity;
  let factor = 2;
  while (factor <= num) {
    if (isPrime(factor)) {
      if (num % factor == 0) {
        largest = factor;
        num /= factor;
      }
    }
    factor++;
  }
  return largest;
}
