function compare(number1, number2, number3)
{
    var result;
    if (number1>number2 && number1>number3)
    {result = number1;
    return result;
    }
    
    else if ((number2>number1 && number2>number3))
    {
        result = number2;
        return result;
    }
    else if ((number3>number1 && number3>number2))
    {
        result = number3;
        return result;
    }
}
var number1 = 88, number2 = 65, number3 = 80;
console.log(compare(number1, number2, number3));
module.exports = compare ;
