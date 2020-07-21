function evenifier(num){
    if(num % 2== 0){
        console.log(num, ':is even number');
    }
    else{
        console.log(num*2,': is odd number');
    }
}
numb =[5,10,15,20,25,30];
for (let i= 0; i<numb.length;i++) {
    const num = numb[i];
    evenifier(num);
    
}
 friends_age =[24,23,25,26,22];
 for (let i = 0;i < friends_age.length;i++) {
     const age = friends_age[i];
     evenifier(age);
 }