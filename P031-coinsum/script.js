function countVariations(amount, coins, n, memo = {}) {
  const key = amount + "," + n;
  if (key in memo) return memo[key];
  if (amount === 0) return 1;
  if (amount < 0) return 0;
  if (n === 0) return 0;

  memo[key] =
    countVariations(amount, coins, n - 1, memo) +
    countVariations(amount - coins[n - 1], coins, n, memo);

  return memo[key];
}

const arr = [200, 100, 50, 20, 10, 5, 2, 1];

console.log(countVariations(200, arr, arr.length));
