/*              QUES-1 - > INPUT : hello how are you
                           OUTPUT: you are how hello  

                QUES-2 - > INPUT : hello how are you
                           OUTPUT: uoy era woh olleh */

/* -------------------QUES-1--------------------------------*/

function revString(str) {
  return str.split(" ").reverse().join(" ");
}
console.log(revString("hello how are you"));

/* -------------------QUES-2--------------------------------*/

function reverseString(str) {
  return str.split("").reverse().join(" ");
}
console.log(reverseString("hello how are you"));
