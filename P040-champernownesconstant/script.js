function productOfChampernownesDigits(arr) {
  const getChampernownesconstant = (limit) => {
    let str = "";
    for (let i = 1; i < limit; i++) {
      str += i;
    }
    return str;
  };

  const constant = getChampernownesconstant(1000000);

  let product = 1;
  arr.forEach((e) => {
    product *= parseInt(constant[e - 1]);
  });
  return product;
}
