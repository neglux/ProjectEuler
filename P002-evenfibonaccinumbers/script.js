/**
 This function uses Binet's Fibonacci Number Formula
 * @param limit - max value of the fibonacci numbers
 */
function evenFibonacciNumbers(limit) {
  const fib = (n) => Math.round(Math.pow(1.61803398875, n) / Math.sqrt(5));
  let evenTotal = 0;

  let index = 1;
  while (true) {
    const curFib = fib(index);
    if (curFib >= limit) return evenTotal;
    if (curFib % 2 === 0) evenTotal += curFib;
    index++;
  }
}
