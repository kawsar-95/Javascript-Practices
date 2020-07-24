function fibonacci(n) {
  if (n == 0) {
    return 0;
  }
  if (n == 1) {
    return 1;
  } else {
    fibonacci(n - 1) + fibonacci(n - 2);
  }
}
var result = fibonacci(12);
console.log(result);
