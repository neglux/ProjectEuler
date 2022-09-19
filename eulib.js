/**
 Returns nth fibonacci number
 * @param n - index of the number
 */
export const fib = (n) => Math.round(Math.pow(1.61803398875, n) / Math.sqrt(5));

/**
 Returns true if a number is prime otherwise false
 * @param num - an integer
 */
export const isPrime = (num) => {
  for (let i = 2; i <= Math.round(Math.sqrt(num)); i++) {
    if (num % i == 0) return false;
  }
  return true;
};

/**
 Returns true if a number is palindrome otherwise false
 * @param num - an integer
 */
export const isPalindrome = (num) => {
  num = String(num);
  let left = 0;
  let right = num.length - 1;
  while (left < right) {
    if (num[left] !== num[right]) return false;
    left++;
    right--;
  }
  return true;
};

/**
 Returns true if a number is pythagorean triplet otherwise false
 * @param a - an integer
 * @param b - an integer
 * @param c - an integer
 */
export const isPythagoreanTriplet = (a, b, c) => a * a + b * b === c * c;

/**
 Returns an object that consists of prime factors of given number
 * @param num - an integer
 */
export const factorizeToPrimes = (num) => {
  const factors = {};
  let i = 2;
  while (i <= num) {
    if (num % i === 0) {
      factors[i] = (factors[i] || 0) + 1;
      num = num / i;
    } else i++;
  }
  return factors;
};

/**
 Returns an array that consists of primes from 2 to n
 * @param n - an integer
 * @param maxValue - largest value that primes can reach
 */
export const sieveOfEratosthenes = (n = undefined, maxValue = undefined) => {
  const createListFrom2ToN = (n) => {
    const numbers = {};
    for (let i = 2; i < n; i++) numbers[i] = true;
    return numbers;
  };
  const removeMultiples = (number, obj, limit) => {
    for (let i = 2; i * number <= limit; i++) {
      obj[i * number] = false;
    }
  };

  //https://en.wikipedia.org/wiki/Prime_number_theorem#Approximations_for_the_nth_prime_number
  const limit = n
    ? Math.ceil(n * Math.log(n) + n * Math.log(Math.log(n)))
    : maxValue;

  const numbers = createListFrom2ToN(limit);
  for (let i = 2; i * i <= limit; i++) removeMultiples(i, numbers, limit);
  const primes = [];
  for (const key in numbers) {
    if (numbers[key]) primes.push(parseInt(key));
  }
  return primes;
};

/**
 Returns an array that consists of divisors of given number
 * @param num - an integer
 */
export const trialDivision = (num) => {
  const divisors = [];
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      if (num / i !== i) divisors.push(...[i, num / i]);
      else divisors.push(num / i);
    }
  }
  return divisors;
};

/**
 Returns the factorial of given number
 * @param n - an integer
 */
export const factorial = (n) => {
  if (n === 0 || n === 1) return 1;

  return n * factorial(n - 1);
};

/**
 Returns the factorial of given number
 * @param n - an integer
 */
export const bigIntFactorial = (n) => {
  n = BigInt(n);
  if (n === 0n || n === 1n) return 1n;

  return n * factorial(n - 1n, memo);
};

/**
 Returns the binomial coefficient of given number
 * @param n - an integer
 * @param k - an integer
 */
export const binomialCoefficient = (n, k) => {
  return factorial(n) / (factorial(k) * factorial(n - k));
};

export const alphabet = {
  A: 1,
  B: 2,
  C: 3,
  D: 4,
  E: 5,
  F: 6,
  G: 7,
  H: 8,
  I: 9,
  J: 10,
  K: 11,
  L: 12,
  M: 13,
  N: 14,
  O: 15,
  P: 16,
  Q: 17,
  R: 18,
  S: 19,
  T: 20,
  U: 21,
  V: 22,
  W: 23,
  X: 24,
  Y: 25,
  Z: 26,
};
