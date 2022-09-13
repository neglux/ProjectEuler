function findFirstTriangularHaveNDivisors(n) {
  const getDivisorCount = (num) => {
    let count = 0;
    for (let i = 1; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        if (num / i !== i) count += 2;
        else count++;
      }
    }
    return count;
  };

  let i = 2;
  const arr = [1];
  while (true) {
    const curTriangular = arr[i - 2];
    if (getDivisorCount(curTriangular) >= n) return curTriangular;

    arr.push(curTriangular + i);
    i++;
  }
}
