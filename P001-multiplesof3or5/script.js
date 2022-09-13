/* O(n) solution */
function sumOfMultiples(range) {
  const multiples = [];
  for (let i = 0; i < range; i++) {
    if (!multiples.includes(i)) {
      if (i % 3 === 0) multiples.push(i);
      else if (i % 5 === 0) multiples.push(i);
    }
  }
  let total = 0;
  for (let i = 0; i < multiples.length; i++) total += multiples[i];

  return total;
}

/* O(1) solution */
function sumOfMultiples(range) {
  const findMaxMultiple = (range, number) => {
    for (let i = range - 1; i != 0; i--) if (i % number == 0) return i;
  };
  const getTotalMultiplesOfNumber = (range, number) => {
    const maxMultiple = findMaxMultiple(range, number);
    if (!maxMultiple) return 0;
    const n = maxMultiple / number;
    return number * ((n * (n + 1)) / 2);
  };
  return (
    getTotalMultiplesOfNumber(range, 3) +
    getTotalMultiplesOfNumber(range, 5) -
    getTotalMultiplesOfNumber(range, 15)
  );
}
