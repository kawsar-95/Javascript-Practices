
function fibonacci(n){
var fibonacci=[0,1];
for(var i=2; i<=10;i++){
    fibonacci[i]=fibonacci[i-1]+fibonacci[i-2];
    console.log(fibonacci[i],fibonacci[i-1],fibonacci[i-2]);
}
return fibonacci;
}
var result =fibonacci(12);
console.log(result);