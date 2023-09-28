/*One global value used for all methods.*/

let arrValue = [1, 2, 3, 4, 5]; //Global Value

/*------------For Loop Method----------------------*/

arrayWithForLoop = function (arr) {
  let i,
    len = arr.length,
    sum = 0;
  for (i = 0; i < len; i++) {
    sum += arr[i];
  }
  return sum;
};

console.log(arrayWithForLoop(arrValue));

/*------------Reduce Method----------------------*/

arrayWithReduce = function (arr) {
  let newArr = arr.reduce((accm, elm) => {
    return accm + elm;
  });
  return newArr;
};

console.log(arrayWithReduce(arrValue));

/*------------For Each Method----------------------*/

arrayWithForEach = function (arr) {
  let sum = 0;
  arr.forEach((val) => {
    sum += val;
  });
  return sum;
};

console.log(arrayWithForEach(arrValue));
