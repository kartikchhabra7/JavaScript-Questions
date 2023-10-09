function fizzBizz() {
  let n = 20;
  for (i = 1; i <= n; i++) {
    if (i % 5 == 0 && i % 3 == 0) {
      console.log("fizz bizz");
    } else if (i % 3 == 0) {
      console.log("fizz");
    } else if (i % 5 == 0) {
      console.log("bizz");
    } else {
      console.log(i);
    }
  }
}

fizzBizz();
