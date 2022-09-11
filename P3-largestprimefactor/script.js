function findLargestPrimeFactor(num) {
  const isPrime = (num) => {
    // Trial Divison Algorithm

    const rootOfNum = Math.ceil(Math.sqrt(num));

    for (let i = 2; i <= rootOfNum; i++) {
      if (num % i == 0) return false;
    }
    return true;
  };
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
