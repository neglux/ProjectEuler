function findSpecialPythagoreanTriplet() {
  const isPythagoreanTriplet = (a, b, c) => a * a + b * b === c * c;
  let a = 1;
  while (a < 1000 / 3) {
    for (let b = a + 1; b < 1000 / 2; b++) {
      let c = 1000 - a - b;
      if (a + b + c === 1000) {
        if (isPythagoreanTriplet(a, b, c)) return a * b * c;
      }
    }
    a++;
  }
}

console.log(findSpecialPythagoreanTriplet());
