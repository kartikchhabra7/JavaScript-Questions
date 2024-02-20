function SumOfEvenElementsInArray(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sum = sum + arr[i];
    }
  }
  return sum;
}
let arr = [1, 2, 3, 4, 5, 6];
console.log(SumOfEvenElementsInArray(arr));
