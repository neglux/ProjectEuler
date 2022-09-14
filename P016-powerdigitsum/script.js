function powerDigitSum(base, exp) {
  return BigInt(Math.pow(base, exp))
    .toString()
    .split("")
    .reduce((acc, digit) => (acc = parseInt(acc) + parseInt(digit)));
}
