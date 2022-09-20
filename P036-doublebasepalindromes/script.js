import { isPalindrome, sum } from "../eulib.js";

function sumDoubleBasePalindromes(limit) {
  const convertToBase2 = (num) => {
    if (num < 2) return 1;

    return convertToBase2(Math.floor(num / 2)) + "" + (num % 2);
  };

  const palindromes = [];

  let num = 0;
  while (num < limit) {
    const base2 = convertToBase2(num);
    if (isPalindrome(num) && isPalindrome(base2)) {
      palindromes.push(num);
    }
    num++;
  }
  return sum(palindromes);
}
