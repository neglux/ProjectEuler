import { factorial } from "../eulib.js";

function digitFactorials() {
  const splitToDigits = (num) => {
    num = String(num);
    return num.split("").map((e) => parseInt(e));
  };

  const sumFactorialOfDigits = (digits, memo) => {
    let sum = 0;
    for (const digit of digits) {
      sum += memo[digit];
    }
    return sum;
  };

  const memo = {};
  const limit = [...Array(9).keys()].reduce((acc, val) => {
    const fact = factorial(val);
    memo[val] = fact;
    return (acc += fact);
  }, 0);

  const numbers = [];
  for (let num = 3; num <= limit; num++) {
    if (num === sumFactorialOfDigits(splitToDigits(num), memo))
      numbers.push(num);
  }
  return numbers.reduce((acc, val) => (acc += val), 0);
}
