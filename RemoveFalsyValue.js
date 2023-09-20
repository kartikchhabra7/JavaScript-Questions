/* INPUT :            [1,'react',undefined,null,'node',2,true] 
   OUTPUT:            [1, 'react', 'node', 2] */

const arr = [1, "react", undefined, null, "node", 2, false, " "];
const newArr = arr.filter((val) => {
  return val != undefined && val != null && val != " " && val != false;
});
console.log(newArr);
