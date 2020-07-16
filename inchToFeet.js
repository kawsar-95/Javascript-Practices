function inchToFeet(inch){
    var feet = inch/12;
    return feet; 
}
var feetCalc =[100,200,300];

var feet1 = inchToFeet(feetCalc[0]);
console.log(feet1);
var feet2 = inchToFeet(feetCalc[1]);
console.log(feet2);
var feet3 = inchToFeet(feetCalc[2]);
console.log(feet3);