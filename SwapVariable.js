/*---------------------THIRD VARIABLE------------------*/

const swapWithThirdVariable = () => {
  let a = 1;
  let b = 2;
  let temp;

  console.log("Before Swapping");
  console.log("a", a);
  console.log("b", b);
  temp = a;
  a = b;
  b = temp;
  console.log("After Swapping");
  console.log("a", a);
  console.log("b", b);
};

swapWithThirdVariable();

/*--------------------ARRAY DESTRUCTURING------------------*/

const swapWithDestruct = () => {
  let a = 1;
  let b = 2;
  console.log("Before Swapping");
  console.log("a", a);
  console.log("b", b);

  [a, b] = [b, a];

  console.log("After Swapping");
  console.log("a", a);
  console.log("b", b);
};
swapWithDestruct();

/*-------------------WITHOUT THIRD VARIABLE---------------------*/

const swapWithoutThirdVariable = () => {
  let a = 1;
  let b = 2;

  console.log("Before Swapping");
  console.log("a", a);
  console.log("b", b);

  a = a + b;
  b = a - b;
  a = a - b;

  console.log("After Swapping");
  console.log("a", a);
  console.log("b", b);
};

swapWithoutThirdVariable();
