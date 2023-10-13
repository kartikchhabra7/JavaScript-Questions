function linearSearch(arr) {
  let targetValue = 5;
  let len = arr.length;
  for (i = 0; i < len; i++) {
    if (arr[i] === targetValue) {
      return i;
    }
  }
}

let arr = [1, 2, 3, 4, 5];
console.log(linearSearch(arr));
