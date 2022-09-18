/**
 * @param a - multiplicand: a quantity which is to be multiplied by another
 * @param b - multiplicand: a quantity which is to be multiplied by another
 * @param limit - upper limit of multiples
 */
function sumOfMultiples(a, b, limit) {
  const getLargestMultiple = (num, limit) => {
    for (let i = limit - 1; i != 0; i--) if (i % num == 0) return i;
    return null;
  };
  const addMultiples = (num, limit) => {
    const maxMultiple = getLargestMultiple(num, limit);
    if (!maxMultiple) return 0;
    const n = maxMultiple / num;
    return num * ((n * (n + 1)) / 2);
  };
  return (
    addMultiples(a, limit) + addMultiples(b, limit) - addMultiples(a * b, limit)
  );
}
