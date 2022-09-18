import { trialDivision } from "../eulib.js";

function findFirstTriangularHaveNDivisors(n) {
  let i = 2;
  const arr = [1];
  while (true) {
    const curTriangular = arr[i - 2];
    if (trialDivision(curTriangular).length >= n) return curTriangular;

    arr.push(curTriangular + i);
    i++;
  }
}
