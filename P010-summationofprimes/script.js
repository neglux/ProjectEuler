import { sieveOfEratosthenes } from "../eulib.js";

function sumPrimesInRange(maxValue) {
  const arr = sieveOfEratosthenes(undefined, maxValue);
  console.log(arr);
  return arr.reduce((acc, value) => (acc += value));
}
