findPositiveNumberWithLoop = function (arr) {
  let i,
    len = arr.length;
  let PosCount = 0;
  let NegCount = 0;

  for (i = 0; i < len; i++) {
    if (arr[i] > 0) {
      PosCount++;
      console.log("Positive No. are", arr[i]);
    } else {
      NegCount++;
      console.log("Negative No. are", arr[i]);
    }
  }
  console.log("PosCount is " + PosCount);
  console.log("NegCount is " + NegCount);
};
findPositiveNumberWithLoop([1, 2, 3, 4, 5, -1, -2, -3]);


const findNumberWithEach = (number) => {
  let positiveCount = 0;
  let negativeCount = 0;
  number.forEach((val) => {
    if (val > 0) {
      positiveCount++;
      console.log("Positive Numbers are " + val);
    }
    else {
        negativeCount++;
        console.log("Negative Numbers are " + val);
    }
  });
  console.log("positiveCount is " + positiveCount);
  console.log("negativeCount is " + negativeCount);
  // return number
};

findNumberWithEach([1, 2, 3, -1, -2, 5, 6, 7,-5]);
