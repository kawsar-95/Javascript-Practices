// WHEN TO USE A FUNCTION, FUNCTION INSIDE AN ARRAY

function evenify_all(nums){
    var even_array = [];
    for (let i= 0; i<nums.length; i++) {
        const num = nums[i];
        var result = evenify(num);
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
var nums =[5,10,15,20,25,30];
var nums_even=evenify_all(nums);
console.log(nums_even);
 friends_age =[24,23,25,26,22];
// evenify_all(friends_age);

//When to return from a function and from where

function evenify(num){
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
var result = evenify(13);
var square = result * result;

console.log('square:',square);



