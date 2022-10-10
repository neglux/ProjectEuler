import { factorizeToPrimes } from "../eulib.js";

function distinctPrimesFactors() {
  const NUM_OF_DIST_PRI = 4;
  const isDistinctPrime = (primeArr, distincts) => {
    return (
      primeArr.length === NUM_OF_DIST_PRI &&
      primeArr.every((el) => !distincts.includes(el))
    );
  };

  let i = 646;
  while (true) {
    let distincts = [];
    let isConsecutive = true;
    for (let j = i; j < i + NUM_OF_DIST_PRI; j++) {
      let primeFactors = factorizeToPrimes(j);
      primeFactors = Object.keys(primeFactors).map(
        (prime) => +prime * +primeFactors[prime]
      );
      if (isDistinctPrime(primeFactors, distincts))
        distincts = [...distincts, ...primeFactors];
      else {
        isConsecutive = false;
        break;
      }
    }
    if (isConsecutive) return i;

    i++;
  }
}
