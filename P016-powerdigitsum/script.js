import { sum } from "../eulib.js";

function powerDigitSum(base, exp) {
  return sum(BigInt(Math.pow(base, exp)).toString().split(""));
}
