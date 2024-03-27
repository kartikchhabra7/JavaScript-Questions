function countArrayDuplicate(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }
  }
  return count;
}
let arrs = [1, 2, 3, 4, 5, 1, 2, 3, 4, 6, 6];
console.log(countArrayDuplicate(arrs));
