// WHEN TO USE A FUNCTION, FUNCTION INSIDE AN ARRAY

function evenIf_all(numbs){
    var even_array = [];
    for (let i= 0; i<numbs.length; i++) {
        const num = numbs[i];
        var result = evenIf(num);
        even_array.push(result);
    }
    return even_array;
}      
        // if(num % 2== 0){
        // console.log(num, ':is even number');
        // }
        // else{
        // console.log(num*2,': is odd number');
        // }
var numbs =[5,10,15,20,25,30];
var numbs_even=evenIf_all(numbs);
console.log(numbs_even);
 friends_age =[24,23,25,26,22];
// evenIf_all(friends_age);

//When to return from a function and from where

function evenIf(num){
    var  result;
    if(num % 2== 0){
    // return num;
    result = num;
    }
    else{
        // console.log(num*2,': is odd number');
        result = num*2;

    }
    return result;
}
var result = evenIf(13);
var square = result * result;

console.log('square:',square);



