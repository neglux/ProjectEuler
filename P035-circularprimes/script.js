import { sieveOfEratosthenes } from "../eulib.js";

function findCircularPrimes(limit) {
  const primes = sieveOfEratosthenes(undefined, limit);
  const getRotations = (num) => {
    const rotations = [];
    num = String(num);
    const n = num.length;
    const rotate = (str) => {
      str = [...str];
      str.push(str[0]);
      str.shift();
      return str.join("");
    };
    let i = 0;
    while (i < n) {
      num = rotate(num);
      rotations.push(num);
      i++;
    }
    return rotations;
  };

  let count = 0;
  for (const prime of primes) {
    const rotations = getRotations(prime);
    const isCircular = rotations.every((e) => primes.includes(parseInt(e)));

    if (isCircular) count++;
  }
  return count;
}
