function getNextNum() {
  const isTriangle = (num) => {
    const index = Math.floor((Math.sqrt(8 * num + 1) - 1) / 2);
    return (index * (index + 1)) / 2 === num;
  };

  const isPentagonal = (num) =>
    Number.isInteger((Math.sqrt(24 * num + 1) + 1) / 6);

  const isHexagonal = (num) =>
    Number.isInteger((1 + Math.sqrt(1 + 8 * num)) / 4);

  let i = 40756;
  while (true) {
    if (isTriangle(i)) {
      if (isHexagonal(i) && isPentagonal(i)) return i;
    }
    i++;
  }
}
