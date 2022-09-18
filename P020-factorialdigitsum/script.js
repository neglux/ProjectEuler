import { bigIntFactorial } from "../eulib.js";

function factorialDigitSum(n) {
  return bigIntFactorial(n)
    .toString()
    .split("")
    .reduce((acc, digit) => (acc += parseInt(digit)), 0);
}

console.log(factorialDigitSum(100));
