import { fib } from "../eulib.js";

function evenFibonacciNumbers(limit) {
  let evenTotal = 0;

  let index = 1;
  while (true) {
    const curFib = fib(index);
    if (curFib >= limit) return evenTotal;
    if (curFib % 2 === 0) evenTotal += curFib;
    index++;
  }
}
