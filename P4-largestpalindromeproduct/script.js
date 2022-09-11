function getLargestPalindromeProduct(maxValue, minValue) {
  const isPalindrome = (num) => {
    num = String(num);
    let left = 0;
    let right = num.length - 1;
    while (left < right) {
      if (num[left] !== num[right]) return false;
      left++;
      right--;
    }
    return true;
  };

  let maxProduct = -Infinity;
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

getLargestPalindromeProduct(999, 100);
