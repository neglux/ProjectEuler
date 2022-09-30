const isPentagonal = (num) =>
  Number.isInteger((Math.sqrt(24 * num + 1) + 1) / 6);

const generatePentagonals = (limit) => {
  const arr = [];
  for (let i = 1; i < limit; i++) {
    if (isPentagonal(i)) arr.push(i);
  }

  return arr;
};

const pentagonals = generatePentagonals(10000000);

let min = Infinity;
for (let i = 1; i < pentagonals.length; i++) {
  let cur = pentagonals[i];
  for (let j = 1; j < i; j++) {
    if (
      isPentagonal(cur - pentagonals[j]) &&
      isPentagonal(cur + pentagonals[j])
    ) {
      min = Math.min(min, cur - pentagonals[j]);
    }
  }
}
console.log(min);
