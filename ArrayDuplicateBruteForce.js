function ArrayDuplicateBruteForce(arr) {
  let len = arr.length;
  for (i = 0; i < len; i++) {
    for (j = i + 1; j < len; j++) {
      if (arr[i] == arr[j]) {
        console.log(arr[i]);
      }
    }
  }
}

let arrayValue = [1, 2, 3, 4, 1, 2, 3, 5, 6, 7, 8, 9];
ArrayDuplicateBruteForce(arrayValue);
