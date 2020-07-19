    function getArraySum(number)
    {
        var sum = 0;
        for(i=0;i<numbers.length;i++){
            var elements = numbers[i];
            sum =sum+elements;
        }
        return sum;
    }
    var numbers=[11, 22, 33,44, 55,66,77,88,99];
    var result = getArraySum(numbers);
    console.log("Total of the numbers:",result);