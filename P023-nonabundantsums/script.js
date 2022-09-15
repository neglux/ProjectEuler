function nonAbundantSums() {
  const isAbundantNum = (num) => {
    const getDivisorsLessThanNum = (num) => {
      if (num === 0) return [];
      const arr = [1];
      for (let i = 1; i <= Math.sqrt(num); i++) {
        if (num % i === 0 && i !== num && num / i !== num) {
          if (num / i !== i) arr.push(...[i, num / i]);
          else arr.push(i);
        }
      }
      return arr;
    };
    const sum = (arr) => {
      return arr.reduce((acc, val) => (acc += val), 0);
    };
    return sum(getDivisorsLessThanNum(num)) > num;
  };
  let total = 0;
  for (let i = 1; i <= 28123; i++) {
    let addToTheSum = true;
    for (let j = i; j >= 12; j--) {
      if (isAbundantNum(j)) {
        if (isAbundantNum(i - j)) {
          addToTheSum = false;
          break;
        }
      }
    }
    if (addToTheSum) total += i;
  }
  return total;
}
