import { sieveOfEratosthenes, sum } from "../eulib.js";

function sumTruncatablePrimes(limit) {
  const primes = sieveOfEratosthenes(undefined, 1000000);

  const splitLeftToRight = (num) => {
    num = String(num);
    const variations = [];
    while (num != "") {
      num = num.slice(1);
      if (num) variations.push(parseInt(num));
    }
    return variations;
  };

  const splitRightToLeft = (num) => {
    num = String(num);
    const variations = [];
    while (num != "") {
      num = num.slice(0, num.length - 1);
      if (num) variations.push(parseInt(num));
    }
    return variations;
  };

  const trucPrimes = [];
  for (const prime of primes) {
    if (prime > limit) {
      const variations = [
        ...splitLeftToRight(prime),
        ...splitRightToLeft(prime),
      ];
      if (variations.every((e) => primes.includes(e))) trucPrimes.push(prime);
    }
  }
  return sum(trucPrimes);
}
