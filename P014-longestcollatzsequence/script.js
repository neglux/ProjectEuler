function findLongestChain(maxStartingValue) {
  const generateCollatzSequence = (startingNumber) => {
    const isEven = (num) => num % 2 === 0;
    const arr = [];

    let cur = startingNumber;
    while (cur !== 1) {
      arr.push(cur);
      if (isEven(cur)) cur = cur / 2;
      else cur = 3 * cur + 1;
    }
    arr.push(cur);
    return arr;
  };
  const longestChain = {
    startingNumber: 0,
    length: 0,
  };
  for (let num = maxStartingValue; num > 1; num--) {
    const tempLength = generateCollatzSequence(num).length;
    if (tempLength > longestChain.length) {
      longestChain.length = tempLength;
      longestChain.startingNumber = num;
    }
  }
  return longestChain.startingNumber;
}
