function getDistincPowersInSequence(min, max) {
  const getPowers = (base, minExp, maxExp) => {
    const powers = [];
    for (let n = minExp; n <= maxExp; n++) {
      powers.push(Math.pow(base, n));
    }
    return powers;
  };

  const mergeSubarrays = (arr) => {
    let mergedArray = [];
    for (const subarray of arr) {
      mergedArray = [...mergedArray, ...subarray];
    }
    return mergedArray;
  };

  const removeDuplicates = (arr) => {
    const seen = [];
    for (const element of arr) {
      if (!seen.includes(element)) seen.push(element);
    }
    return seen;
  };
  let powers = [];
  for (let a = min; a <= max; a++) {
    powers.push(getPowers(a, min, max));
  }
  powers = mergeSubarrays(powers);
  powers = removeDuplicates(powers);
  return powers.length;
}

console.log(getDistincPowersInSequence(2, 100));
