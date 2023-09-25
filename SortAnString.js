/*            INPUT:   learning javascript is amazing
              OUTPUT:  amazing is javascript learning*/

let str = "learning javascript is amazing";

const sortString = (string) => {
  let splitStr = string.split(" ");
  let newStr = splitStr.sort((a, b) => {
    if (a < b) {
      return -1;
    }
  });
  return newStr;
};

console.log(sortString(str).join(" "));
