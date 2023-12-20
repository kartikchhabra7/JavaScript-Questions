function privateMemberWithClosure() {
  let privateMember = 0;

  function incrementValue() {
    return privateMember++;
  }
  function decrementValue() {
    return privateMember--;
  }
  function getCountValue() {
    return privateMember;
  }
  return {
    incrementValue,
    decrementValue,
    getCountValue,
  };
}

const counter = privateMemberWithClosure();

counter.incrementValue();
counter.incrementValue();
counter.incrementValue();
counter.incrementValue();

counter.decrementValue();
console.log(counter.getCountValue());

console.log("privateMemberValue is ", counter.privateMember); //it will shows "undefined (private variable is not directly accessible)"



/*------------------------------------------------------------------------------
or we can use object destructing to avoid extra variables and hard lines of code.
-------------------------------------------------------------------------------*/


const privateMemberFun = () => {
  let privateMember = 0;
  const incrementValue = () => privateMember++;
  const decrementValue = () => privateMember--;
  const getCountValue = () => privateMember;

  return { incrementValue, decrementValue, getCountValue };
};
const { incrementValue, decrementValue, getCountValue, privateMember } =
  privateMemberFun();

incrementValue();
incrementValue();
incrementValue();
incrementValue();

decrementValue();
console.log(`Count Value is ${getCountValue()}`);
console.log(
  `privateMemberValue is ${privateMember} it works like a private variable`
);
