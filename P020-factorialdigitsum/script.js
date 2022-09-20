import { bigIntFactorial, sum } from "../eulib.js";

function factorialDigitSum(n) {
  return sum(bigIntFactorial(n).toString().split(""));
}
