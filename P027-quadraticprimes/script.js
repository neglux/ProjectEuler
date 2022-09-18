import { sieveOfEratosthenes } from "../eulib.js";

function productOfCoefficients() {
  const primes = sieveOfEratosthenes(1000);
  const getNumberOfProducedPrimes = (a, b) => {
    let n = 0;
    let primeCount = 0;
    while (true) {
      if (primes.includes(n * n + a * n + b)) primeCount++;
      else return primeCount;
      n++;
    }
  };
  const findCoefficients = () => {
    const max = {
      primeCount: 0,
      a: null,
      b: null,
    };
    for (let a = -999; a < 1000; a++) {
      for (let b = -999; b < 1000; b++) {
        const primeCount = getNumberOfProducedPrimes(a, b);
        if (primeCount > max.primeCount) {
          max.primeCount = primeCount;
          max.a = a;
          max.b = b;
        }
      }
    }
    return max;
  };
  const formula = findCoefficients();
  return formula.a * formula.b;
}

console.log(productOfCoefficients());
