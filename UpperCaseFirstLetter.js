let stringValue = "hello";

const isStringCapitialize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

console.log(isStringCapitialize(stringValue));
