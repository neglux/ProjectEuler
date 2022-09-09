function evenFibonacciNumbers(range) {
  if (range < 2) return 0;

  let left = 1;
  let right = 2;
  let evenTotal = 2;

  let counter = 0;
  while (counter < range - 2) {
    const number = left + right;
    if (number % 2 === 0) evenTotal += number;

    left = right;
    right = number;
    counter++;
  }

  return evenTotal;
}
