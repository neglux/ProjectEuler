import { sieveOfEratosthenes } from "../eulib.js";

function getNthPrime(n) {
  const primes = sieveOfEratosthenes(n);
  return primes[n - 1];
}
