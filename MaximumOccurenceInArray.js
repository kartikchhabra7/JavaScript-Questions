/*INPUT:               ['react','node','express','react','node']
  OUTPUT:              [react: 2, node: 2, express: 1] */

  
const arrValue = ["react", "node", "express", "react", "node"];
const count = [];
arrValue.forEach((val) => {
  if (count[val]) {
    count[val]++;
  } else {
    count[val] = 1;
  }
  return count;
});

console.log(count);
