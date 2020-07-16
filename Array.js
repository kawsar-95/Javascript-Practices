
// Array

var arrayAge = [15, 17, 18, 21, 25];
var kawsarAge = arrayAge[4];
arrayAge[4] = 24; 
var position = arrayAge.indexOf(24);
arrayAge.push(188);
arrayAge.push(12);
arrayAge.pop();
arrayAge.pop();
console.log(arrayAge);


// Remove Element and Slice

var teaLine = ['Kawsar', 'yasin','Bappy'];
teaLine.push('Shakil');
 console.log(teaLine);
 teaLine.pop();
teaLine.shift(); //remove first element
teaLine.unshift('Kawsar'); // add  elment in the first
var part = teaLine.slice(2);
 console.log(teaLine);
console.log(part);


//  While Loop

var num = 10;
while(num < 15 ){
    console.log(num);
    num++;

}

// For loop

var nums =[11,22,33,44,55,66,77];
for(i=0; i<nums.length; i++){
    var element = nums[i];
    console.log(element);

}
var nums =['kawsar','Humayun', 'arman', 'Yasin', 'Bappy', 'Shakil','Emam'];
for(i=0; i<nums.length; i++){
    var element = nums[i];
    // console.log(element);

}

//Switch Case

num = 5;
switch(num){

    case 1000:
    console.log('I am 1000');
    break;
    case 100:
    console.log('I am 100');
    break;
    case 20:
    console.log('I am 20 ');
    break;
    case 10:
    console.log('I am 10 or 10');
    break;
    default:
        console.log("i Don't know who you are");
}

//Function

function myFunc(theObject) {
    theObject.make = 'Toyota';
  }
  
  var mycar = {make: 'Honda', model: 'Accord', year: 1998};
  var x, y;
  
  x = mycar.make; // x gets the value "Honda"
  
  myFunc(mycar);
  y = mycar.make;
//   console.log(mycar);



  //Function Parameter & Return

 function doubleIt(num) {
     var result = num*2;
     return result;
    
}
var num1= doubleIt(5);
var num2 = doubleIt(50);
total = num1 + num2;
// console.log(total);

  function add(num1,num2){
      var result = num1 +num2;
      return result;

  }
  var sum = add(299,499);
  console.log(sum);
  