/**Input  : This is another test
 * Output : This is rehtona test
 * Input  : Hey fellow warriors
 * Output : Hey wollef sroirraw
 
   EXPLANATION:if str's length more than 4 then it will be reversed else it will be same 
 */

function reverseTargetedString(str) {
  let convertInArray = str.split(" ");
  let storeString = convertInArray.map((value) => {
    return value.length > 4 ? value.split("").reverse().join("") : value;
  });
  return storeString.join(" ");
}

console.log(reverseTargetedString("This is another test"));
console.log(reverseTargetedString("Hey fellow warriors"));
