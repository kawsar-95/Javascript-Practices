function evenify_all(nums){
    for (let i= 0; i<nums.length;i++) {
        const num = nums[i];
        
        if(num % 2== 0){
        console.log(num, ':is even number');
        }
        else{
        console.log(num*2,': is odd number');
        }
    }
}

nums =[5,10,15,20,25,30];
evenify_all(nums);
 friends_age =[24,23,25,26,22];
evenify_all(friends_age);