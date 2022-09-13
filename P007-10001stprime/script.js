/*Sieve of Eratosthenes - it takes a bit time :) */
function getNthPrime(n) {
  const createArrayInRange = (min, max) => {
    const arr = [];
    for (let i = min; i < max; i++) {
      arr.push(i);
    }
    return arr;
  };
  const removeMultiples = (number, arr) => {
    let isRemoved = false;
    for (let i = 2; i * number <= arr[arr.length - 1]; i++) {
      const index = arr.indexOf(number * i);
      if (index !== -1) {
        arr.splice(index, 1);
        isRemoved = true;
      }
    }
    return isRemoved;
  };
  let arr = createArrayInRange(2, n);
  let prime = 2;
  let counter = 0;
  while (true) {
    let isRemoved = removeMultiples(prime, arr);
    if (!isRemoved) {
      if (arr.length < n) {
        arr = [
          ...arr,
          ...createArrayInRange(
            arr[arr.length - 1] + 1,
            arr[arr.length - 1] + n
          ),
        ];
        counter = 0;
      } else {
        return arr[n - 1];
      }
    }
    prime = arr[counter];
    counter++;
  }
}
