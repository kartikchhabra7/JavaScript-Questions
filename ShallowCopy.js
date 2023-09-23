/*A shallow copy means that only the first level of the object is copied. Deeper levels are referenced.
it is better than the normal copy .*/

let originalObject = {
  name: "john",
  id: 1,
  address: {
    city: "delhi",
  },
};

let copyObj = Object.assign({}, originalObject);

//let copyObj={...originalObject}   // Another way to write shallow copy syntax with the spread operator

copyObj.name = "ward"; //does not affect

copyObj.address.city = "mumbai"; //it affects the original value

console.log(originalObject);
console.log(copyObj);
