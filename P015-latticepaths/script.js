function calcNumberOfLatticePaths(i, j, memo = {}) {
  const key = i + "," + j;
  if (memo[key]) return memo[key];
  if (i === 0 || j === 0) return 0;
  if (i === 1 && j === 1) return 1;

  memo[key] =
    calcNumberOfLatticePaths(i - 1, j, memo) +
    calcNumberOfLatticePaths(i, j - 1, memo);
  return memo[key];
}

console.log(calcNumberOfLatticePaths(21, 21));
