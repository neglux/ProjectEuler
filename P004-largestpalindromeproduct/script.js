import { isPalindrome } from "../eulib.js";

function getLargestPalindromeProduct(digit) {
  let maxProduct = 0;
  const minValue = Math.pow(10, digit - 1),
    maxValue = Math.pow(10, digit) - 1;
  let i = maxValue;
  while (i >= minValue) {
    for (let j = i; j > minValue; j--) {
      const product = i * j;
      if (isPalindrome(product)) maxProduct = Math.max(product, maxProduct);
    }
    i--;
  }
  return maxProduct;
}
