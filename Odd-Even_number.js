/*---------------------check one number----------------------------*/

function findSingleNumber(n) {
  if (n % 2 != 0) {
    return "odd";
  } else {
    return "even";
  }
}
console.log(findSingleNumber(5));

/*-------------------Print odd number in Array with Filter Method----*/

const arr = [1, 2, 3, 4, 5];
const newArr = arr.filter((val) => {
  return val % 2 != 0; //Even Number : return val%2==0
});
console.log(newArr);

/*-----------------Print odd number with for loop--------------------*/
function findNumberWithLoop(n) {
  let i;
  for (i = 1; i <= n; i++) {
    if (i % 2 != 0) {
      //Even Number : if(i%2==0)
      console.log(i);
    }
  }
}
findNumberWithLoop(10);
