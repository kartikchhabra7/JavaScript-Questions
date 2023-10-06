function sumOfArrayElements(arr) {
  const result = [];
  for (i = 0; i < arr.length; i++) {
    let sum = 0;
    let temp = arr[i];
    while (temp > 0) {
      const r = temp % 10;
      sum += r;
      temp = parseInt(temp / 10);
    }
    result.push(sum);
  }
  return result;
}

let arr = [11, 22, 33, 44, 55];
console.log(sumOfArrayElements(arr));
