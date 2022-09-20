function productOfNonTrivials() {
  const findNonTrivials = () => {
    const getFraction = (a, b, c) => {
      const numrator = parseInt("" + a + "" + c);
      const denmtor = parseInt("" + c + "" + b);

      if (numrator / denmtor === a / b && a / b < 1)
        return { numrator: a, denmtor: b };
      else return null;
    };

    const fractions = [];
    for (let a = 0; a < 10; a++) {
      for (let b = 0; b < 10; b++) {
        const c = Math.floor((9 * a * b) / (10 * a - b));
        if (c !== 0) {
          const fra = getFraction(a, b, c);
          if (fra) fractions.push(fra);
        }
      }
    }
    return fractions;
  };

  const fractions = findNonTrivials();
  let result = 1;
  fractions.forEach((e) => {
    result *= e.denmtor / e.numrator;
  });
  return result;
}

console.log(productOfNonTrivials());
