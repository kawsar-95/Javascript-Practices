function fact(num){
    var factorial = 1;
    for(var i=1; i<=num;i++){
        factorial=factorial*i;
        console.log(i,factorial);
    }
    return factorial;
    }

    //Recursive Function
    
    function recursiveFactorial(num){
        if (num ==1){
            console.log(num);
            return 1;
        }
        else{ 
            console.log(num,num-1);
            return num*recursiveFactorial(num -1);
        }

    }
    var result = recursiveFactorial(5);
    console.log('result',result);