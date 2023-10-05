let arr = [1, 2, 3, 74, 5, 6, 78];

function findWithLoop(array) {
  let max = array[0];
  let secondMax = array[0];
  let i,
    len = array.length;
  for (i = 0; i < len; i++) {
    if (array[i] > max) {
      secondMax = max;
      max = array[i];
    } else if (arr[i] > secondMax && arr[i] !== max) {
      secondMax = arr[i]; // Update secondMax if a new second maximum is found
    }
  }
  return secondMax;
}
console.log(findWithLoop(arr));

/*-------------find second largest with sort method----------------------- */

function findSecondLargestWithSortMethod(array) {
  array.sort((a, b) => b - a);
  let secondLargest = array[1];
  return secondLargest;
}
console.log(findSecondLargestWithSortMethod(arr));
