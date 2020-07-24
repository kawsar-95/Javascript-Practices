function isPrime(n) {
  for (i = 2; i < n; i++) {
    if (n % i == 0) {
      return "Not a prime Number";
    }
  }
  return "It is a prime Number";
}
var result = isPrime(139);
console.log(result);
