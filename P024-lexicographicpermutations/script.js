function getMillionthLexPerm(arr) {
  const getIndexofTheFirst = (arr) => {
    // the rightmost element that is smaller than its next element
    const n = arr.length - 1;
    for (let i = n; i >= 0; i--) {
      if (i + 1 <= n && arr[i] < arr[i + 1]) return i;
    }
  };

  const getIndexofTheSecond = (arr, index) => {
    //smallest element on the right of the first element and it has to be greater than the first element
    const n = arr.length - 1;
    let min = +Infinity;
    for (let i = index; i <= n; i++) {
      if (arr[i] > arr[index]) {
        if (arr[i] < min) min = arr[i];
      }
    }
    return arr.indexOf(min);
  };

  const swap = (i, j, arr) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  };

  const sortRest = (i, arr) => {
    return [...arr.slice(0, i + 1), ...arr.slice(i + 1).reverse()];
  };

  const limit = 1000000;
  let counter = 1;
  while (counter !== limit) {
    const fIx = getIndexofTheFirst(arr);
    const sIx = getIndexofTheSecond(arr, fIx);
    swap(fIx, sIx, arr);
    arr = sortRest(fIx, arr);
    counter++;
  }
  return parseInt(arr.join(""));
}

console.log(getMillionthLexPerm([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
