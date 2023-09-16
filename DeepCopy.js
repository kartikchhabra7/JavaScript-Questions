/*A deep copy of an object is a copy whose properties do not share the same references.

If the depth of the object is greater than one, use a deep copy. It is better than every copy. 
Either it will be a normal copy or a shallow copy.*/

let obj = {
  name: "john",
  id: 1,
  address: {
    city: "delhi",
  },
};

let copyObj = JSON.parse(JSON.stringify(obj));

copyObj.name = "ward"; //does not affect

copyObj.address.city = "mumbai"; //does not affect

console.log(obj);
console.log(copyObj);
