import { isPrime, sieveOfEratosthenes } from "../eulib.js";

function findInvalidSmallestOddComposite(minComposite) {
  const isOdd = (num) => num % 2 !== 0;

  let composite = minComposite;
  while (true) {
    if (!isPrime(composite) && isOdd(composite)) {
      const lowerPrimes = sieveOfEratosthenes(undefined, composite);

      let square = 1;
      let prime = lowerPrimes.pop();
      let isValid = false;

      while (prime && !isValid) {
        const result = prime + 2 * Math.pow(square, 2);
        if (result > composite) prime = lowerPrimes.pop();
        else if (result < composite) square++;
        else isValid = true;
      }

      if (lowerPrimes.length === 0 && !isValid) return composite;
    }

    composite++;
  }
}
