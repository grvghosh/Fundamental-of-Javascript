
function compare(number1, number2, number3)
{
    var result;
    if ((number1==number2)&&(number2==number3)&&(number3==number1))
    {result = 30;
    return result;
    }
    else if((number1==number2)||(number2==number3)||(number3==number1))
    {result = 20;
    return result;
    }
    else
    {
        result = 40;
        return result;
    }
}
var number1 = 10, number2 = 20, number3 = 20;
console.log(compare(number1,number2,number3));
module.exports = compare ;
