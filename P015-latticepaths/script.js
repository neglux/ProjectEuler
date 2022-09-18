import { binomialCoefficient } from "../eulib.js";

/* 
The number of lattice paths from (0,0) to (n,k) is equal to the binomial coefficient 
   n+k
    n
*/
function calcNumberOfLatticePaths(startPoint, endPoint) {
  if (startPoint.i !== 0 && startPoint.j !== 0) return undefined;

  return binomialCoefficient(endPoint.i + endPoint.j, endPoint.i);
}

console.log(calcNumberOfLatticePaths({ i: 0, j: 0 }, { i: 20, j: 20 }));
