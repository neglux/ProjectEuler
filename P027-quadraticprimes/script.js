function productOfCoefficients() {
  const sieveOfEratosthenes = (limit) => {
    const createListFrom2ToN = (n) => {
      const arr = [];
      for (let i = 2; i < n; i++) arr.push(i);
      return arr;
    };

    const removeMultiples = (number, arr) => {
      const remove = (value, arr) => {
        const index = arr.indexOf(value);
        if (index === -1) return false;
        arr.splice(index, 1);
        return true;
      };
      const maxElementInArr = arr[arr.length - 1];
      for (let i = 2; i * number <= maxElementInArr; i++) {
        remove(i * number, arr);
      }
    };
    const arr = createListFrom2ToN(limit);
    arr.forEach((num) => {
      removeMultiples(num, arr);
    });
    return arr;
  };
  const primes = sieveOfEratosthenes(1000);
  const getNumberOfProducedPrimes = (a, b) => {
    let n = 0;
    let primeCount = 0;
    while (true) {
      num = n * n + a * n + b;
      if (primes.includes(num)) primeCount++;
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
