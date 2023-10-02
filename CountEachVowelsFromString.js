function countEachVowelsFromString(str) {
  let v1 = 0,
    v2 = 0,
    v3 = 0,
    v4 = 0,
    v5 = 0;
  let result = "";

  for (let i = 0; i < str.length; i++) {
    let temp = str[i];
    switch (temp) {
      case "a":
        v1++;
        break;
      case "e":
        v2++;
        break;
      case "i":
        v3++;
        break;
      case "o":
        v4++;
        break;
      case "u":
        v5++;
        break;
    }
  }

  if (v1 > 0) {
    result += `a: ${v1} `;
  }
  if (v2 > 0) {
    result += `e: ${v2} `;
  }
  if (v3 > 0) {
    result += `i: ${v3} `;
  }
  if (v4 > 0) {
    result += `o: ${v4} `;
  }
  if (v5 > 0) {
    result += `u: ${v5} `;
  }
  return result;
}

console.log(countEachVowelsFromString("placentiouso"));
