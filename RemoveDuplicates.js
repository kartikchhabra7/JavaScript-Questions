function removeDuplicate(arr) {
  let len = arr.length;
  let newArr = [];
  for (i = 0; i < len; i++) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
let arr = [1, 2, 2, 5, 3, 4, 1, 2, 5];
console.log(removeDuplicate(arr));
