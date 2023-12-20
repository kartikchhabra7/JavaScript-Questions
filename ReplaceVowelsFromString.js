function replaceVowelsFromString(str) {
  let result = "";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "a") {
      result += "e";
      count++;
    } else if (str[i] === "e") {
      result += "i";
      count++;
    } else if (str[i] === "i") {
      result += "o";
      count++;
    } else if (str[i] === "o") {
      result += "u";
      count++;
    } else if (str[i] === "u") {
      result += "a";
      count++;
    } else {
      result += str[i];
    }
  }
  return ` total vowels are :${count},\n updated string is ${result}`;
}

console.log(replaceVowelsFromString("hello"));
