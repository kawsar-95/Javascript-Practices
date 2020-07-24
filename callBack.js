function callBack(name, age, task) {
  console.log("Hello", name);
  console.log("Your age", age);
  task();
}
function washHand() {
  console.log("wash your hand");
}
function takeShower() {
  console.log("go and take shower");
}
function swapTinder() {
  console.log("go and take a Date");
}
callBack("Jonas", 24, washHand);
callBack("martha", 20, takeShower);
callBack("claudia", 30, swapTinder);
