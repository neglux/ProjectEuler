/* Binet's Fibonacci Number Formula */
function getIndexofTheFirstTermByDigitCount(digit) {
  const GOLDEN_RATIO = 1.61803398875;
  let index = 1;
  while (true) {
    const result = index * Math.log10(GOLDEN_RATIO) - Math.log10(5) / 2;
    if (Math.ceil(Math.abs(result)) === digit) return index;
    index++;
  }
}
