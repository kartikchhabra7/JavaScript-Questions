/*-----------------REDUCE METHOD-------------------------------------------*/
const arr = [1, 25, 35, 4, 5];
const newArr = arr.reduce((accm, elm) => {
  return accm < elm ? accm : elm;
});
console.log(newArr);

/*---------------- MATH OBJECT WITH SPREAD OPERATOR--------------------------*/

const array = [1, 2, 3, 4, 5];
const newArray = Math.min(...array);
console.log(newArray);

/*------------------MATH OBJECT WITH APPLY METHOD----------------------------*/

function minimumNumberWithApply(arr) {
  let newArr = Math.min.apply("", arr);
  return newArr;
}
console.log(minimumNumberWithApply([1, 2, 3, 4, 5]));

/*-----------------------------FOR LOOP---------------------------------------*/

function minimumNumberWithLoop(arr) {
  let i,
    min = arr[0],
    len = arr.length;
  for (i = 0; i < len; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}
console.log(minimumNumberWithLoop([1, 2, 3, 4, 5]));

/*-------------------------------FOR EACH METHOD-------------------------------*/

function minimumValEachMethod(arr) {
  let min = arr[0];
  arr.forEach((val) => {
    if (val < min) {
      min = val;
    }
  });
  return min;
}
console.log(minimumValEachMethod([1, 2, 3, 4, 5]));
