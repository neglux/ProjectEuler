function numberOfLettersInRange(n) {
  const getTheNumberOfLetters = (num) => {
    const range0To19 = (num) => {
      const arr = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
      ];
      return arr[parseInt(num)].length;
    };
    const range20To99 = (num) => {
      const [first, second] = String(num);
      const arr = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
      ];
      return arr[parseInt(first)].length + range0To19(second);
    };
    const range100To999 = (num) => {
      const [first, second, third] = String(num);
      if (num % 100 === 0) return range0To19(first) + "hundred".length;
      if (parseInt(second + third) < 20)
        return (
          range0To19(first) +
          "hundred".length +
          "and".length +
          range0To19(second + third)
        );

      return (
        range0To19(first) +
        "hundred".length +
        "and".length +
        range20To99(second + third)
      );
    };
    if (num <= 19) return range0To19(num);
    if (num <= 99) return range20To99(num);
    if (num <= 999) return range100To999(num);

    return "one thousand".length - 1;
  };

  let count = 0;
  for (let i = 1; i <= n; i++) {
    const letters = getTheNumberOfLetters(i);
    console.log(i, count, letters);
    count += letters;
  }

  return count;
}
