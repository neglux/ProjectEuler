import { sieveOfEratosthenes } from "../eulib.js";

function sumPrimesInRange(maxValue) {
  const arr = sieveOfEratosthenes(undefined, maxValue);
  return arr.reduce((acc, value) => (acc += value));
}
