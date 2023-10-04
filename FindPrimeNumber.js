function addPrimeNumber(n) {
  let isPrime = true;

  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      isPrime = false;
    }
  }

  if (isPrime === true) {
    return true;
  } else {
    return false;
  }
}
console.log(addPrimeNumber(5));
