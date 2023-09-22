function sortArray(arr) {
  let temp,
    i,
    j,
    len = arr.length;
  for (i = 0; i < len; i++) {
    for (j = 0; j < len; j++) {
      if (arr[i] < arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

const arr = [11, 2, 4, 7, 5];

var result = sortArray(arr);
console.log(result);
