function arrayGivenNumberSum(arr, arr1) {
  let concatArr = [...arr, ...arr1];
  let newSet = new Set(concatArr);
  let updateToArray = [...newSet];
  let len = updateToArray.length;
  console.table(updateToArray);
  let sum = 0;
  for (i = 0; i < len; i++) {
    sum = sum + updateToArray[i];
  }
  return "Sum is " + sum;
}

let arr = [1, 2, 3, 4, 5];
let arr1 = [11, 2, 3, 4, 5, 61];
console.log(arrayGivenNumberSum(arr, arr1));
