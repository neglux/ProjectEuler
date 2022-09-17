function sumDiagonals(n) {
  const calcLeft = (n) => {
    let total = 0;
    for (let i = 0; i <= (n - 1) / 2; i++) {
      total += 4 * i * i + 2 * i + 1;
      total += 4 * i * i - 2 * i + 1;
    }
    return total - 1;
  };
  const calcRight = (n) => {
    let total = 0;
    for (let i = 0; i <= (n - 1) / 2; i++) {
      total += 4 * i * i + 1;
      total += 4 * i * i + 4 * i + 1;
    }
    return total - 1;
  };
  return calcLeft(n) + calcRight(n) - 1;
}

console.log(sumDiagonals(1001));
