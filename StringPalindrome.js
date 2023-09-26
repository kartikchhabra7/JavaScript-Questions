/* 		        INPUT : lol 
              OUTPUT: true	  */

isStringPalindrome = function (str) {
  let splitStr = str.split("");
  let reverseStr = splitStr.reverse();
  let joinStr = reverseStr.join("");

  if (str == joinStr) {
    return true;
  } else {
    return false;
  }
};

console.log(isStringPalindrome("lol"));
