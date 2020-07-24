//Using For Loop

function fact(n) {
  var factorial = 1;
  for (i = 1; i <= 10; i++) {
    factorial = factorial * i;
    console.log(i, factorial);
  }
  return factorial;
}
var result = fact(10);
console.log(result);

//  Using While Loop

function fact(n) {
  var i = 1;
  var factorial = 1;
  while (i <= n) {
    factorial = factorial * i;
    // console.log(i,factorial);
    i++;
  }
  return factorial;
}
var result = fact(10);
console.log(result);
