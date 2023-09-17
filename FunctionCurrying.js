/* In JavaScript, when a function of an argument is transformed into functions of one or more arguments is called Currying.*/

// Currying with Regular Function

function curryingWithRegularFun(a) {
  return function (b) {
    return function (c) {
     return a + b + c;
   };
 };
}

 var res = curryingWithRegularFun(1)(2)(3);
 console.log(res);

 //Currying with Arrow function

const curryingWithArrowFun = a => b => c => a + b + c;
var result = curryingWithArrowFun(1)(2)(3);
console.log(result);
