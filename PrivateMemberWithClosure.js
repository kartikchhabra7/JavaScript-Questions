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
