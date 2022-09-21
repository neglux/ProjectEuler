import { sum, isPandigital } from "../eulib.js";

function pandigitalProducts(n) {
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

console.log(pandigitalProducts(9));
