function* SwapVariableWithGeneratorFunction(a, b) {
  yield "Before Swapping";
  yield `a: ${a}, b: ${b}`;

  a = a + b;
  b = a - b;
  a = a - b;

  yield "After Swapping";
  yield `a: ${a}, b: ${b}`;
}

const resultGenerator = SwapVariableWithGeneratorFunction(1, 2);

for (const value of resultGenerator) {
  console.log(value);
}
