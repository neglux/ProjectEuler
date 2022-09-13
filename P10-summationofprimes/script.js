/*Sieve of Eratosthenes - it takes a bit time :) */
function sumPrimesInRange(range) {
  const createArrayInRange = (min, max) => {
    const arr = [2];
    for (let i = min; i < max; i += 2) {
      arr.push(i);
    }
    return arr;
  };
  const removeMultiples = (number, arr) => {
    let isRemoved = false;
    for (let i = 3; i * number <= arr[arr.length - 1]; i += 2) {
      const index = arr.indexOf(number * i);
      if (index !== -1) {
        arr.splice(index, 1);
        isRemoved = true;
      }
    }
    return isRemoved;
  };
  const arr = createArrayInRange(3, range);
  let counter = 1;
  let isRemoved = true;
  while (isRemoved) {
    const prime = arr[counter];
    isRemoved = removeMultiples(prime, arr);
    counter++;
  }
  return arr.reduce((acc, value) => (acc += value));
}

console.log(sumPrimesInRange(2000000));
