    function animalCalc(depth){
    var animal =0;
    if(depth<=10){
        animal = depth*50;
        }
        else if(depth<=20){
            var first10= 10*50;
            var remaining = depth -10;
            var second10 = remaining*100;
            animal = first10+ second10;
    }
    else{
        var first10 = 10*50;
        var second10 = 10*100;
        var remaining= depth-20;
        var third10 = remaining *300;
        animal = first10+second10+third10;
    }
    return animal;

    }
    var count = animalCalc(22);
    console.log(count);