import { sieveOfEratosthenes, sum } from "../eulib.js";

function sumPrimesInRange(maxValue) {
  return sum(sieveOfEratosthenes(undefined, maxValue));
}
