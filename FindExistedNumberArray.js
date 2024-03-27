function existedNumberFun(arr) {
  let existedNumber = 5;
  let isExisted = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == existedNumber) {
      isExisted = true;
    }
  }
  if (isExisted) {
    console.log(true);
  } else {
    console.log(false);
  }
}
existedNumberFun([1, 2, 3, 4, 5]);

function checkNumber(arr) {
  let existedNumber = 5;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == existedNumber) {
      return true;
    }
  }
  return false;
}

console.log(checkNumber([1, 2, 3, 4, 5]));
