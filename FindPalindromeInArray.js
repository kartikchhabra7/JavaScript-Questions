function findPalindromeInArray(arr) {
  let len = arr.length;
  let i;
  for (i = 0; i < len; i++) {
    const newString = arr[i];
    const isArrayReversed = newString.split("").reverse().join("");
    if (isArrayReversed === newString) {
      console.log(isArrayReversed);
    }
  }
}

let array = ["reder", "mom", "dad", "sis", "javascript", "react js"];
findPalindromeInArray(array);

/*---------------------palindrome with ForEach Method------------------*/

function checkWithEachMethod(arr) {
  arr.forEach((val) => {
    const newString = val;
    const isArrayReversed = newString.split("").reverse().join("");
    if (isArrayReversed === newString) {
      console.log(isArrayReversed, "is palindrome");
    }
  });
}
checkWithEachMethod(array);

/*----------------------------check with filter method---------------- */
function checkWithFilter(arr) {
  return arr.filter((val) => {
    const newString = val;
    const isArrayReversed = newString.split("").reverse().join("");
    if (isArrayReversed === newString) {
      console.log(isArrayReversed, "is palindrome array");
    }
  });
}

checkWithFilter(["121", "level", "131", "racecar", "word"]);
