function fibonacci(n){
if(n==0){
return [0]
}

else if(n==1){
return[0,1];
}
else{
var fibonacci = fibonacci(n-1);
var nextElement=fibonacci[n-1]+fibonacci[n-2];

}
}
var result = fibonacci(10);
console.log(result);
