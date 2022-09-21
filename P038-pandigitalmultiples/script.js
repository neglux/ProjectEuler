import { isPandigital } from "../eulib.js";

function getMaxPandigitalMultiple() {
  for (let num = 9999; num > 0; num--) {
    let n = 2;
    let str = num + "" + String(num * 2);
    if (isPandigital(str, 9)) return str;
  }
  return undefined;
}

console.log(getMaxPandigitalMultiple());
