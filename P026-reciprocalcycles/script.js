function getLongestRecurringCycle() {
  const getRecurringCycle = (d) => {
    let dividend = 1 % d;
    const seen = {};
    const digits = [];
    while (dividend != 0 && !seen[dividend]) {
      seen[dividend] = true;
      dividend *= 10;
      let digit = Math.floor(dividend / d);
      digits.push(digit);
      dividend = dividend % d;
    }

    if (seen[dividend]) return digits;

    return [];
  };

  let largest = 0;
  let val = null;
  for (let d = 2; d < 1000; d++) {
    const length = getRecurringCycle(d).length;
    if (length > largest) {
      largest = length;
      val = d;
    }
  }
  return val;
}
