import { sum } from "../eulib.js";

function pandigitalProducts(n) {
  const isTotalsEqual = (arr1, arr2) => {
    return sum(arr1) === sum(arr2);
  };

  const isPandigital = (num, n) => {
    num = [...String(num)];
    const from1ToN = Array.from({ length: n }, (_, i) => i + 1);

    if (!isTotalsEqual(num, from1ToN)) return false;

    const seen = {};
    for (const digit of num) {
      if (digit == 0) return false;
      if (digit in seen) return false;
      seen[digit] = true;
    }
    return true;
  };

  const uniques = {};
  for (let mc = 1; mc < 2000; mc++) {
    for (let mr = 1; mr < 2000; mr++) {
      const str = mc + "" + mr + "" + mc * mr;
      if (isPandigital(str, n)) {
        if (!(mc * mr in uniques)) uniques[mc * mr] = str;
      }
    }
  }
  return sum(Object.keys(uniques));
}
