/* 
The number of lattice paths from (0,0) to (n,k) is equal to the binomial coefficient 
   n+k
    n
*/
function calcNumberOfLatticePaths(startPoint, endPoint) {
  const factorial = (n) => {
    if (n === 0 || n === 1) return 1;

    return n * factorial(n - 1);
  };
  const binomialCoefficient = (n, k) =>
    factorial(n) / (factorial(k) * factorial(n - k));
  if (startPoint.i !== 0 && startPoint.j !== 0) return undefined;

  return binomialCoefficient(endPoint.i + endPoint.j, endPoint.i);
}

calcNumberOfLatticePaths({ i: 0, j: 0 }, { i: 20, j: 20 });
