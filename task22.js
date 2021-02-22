function compare(number1, number2, number3)
{
    var result;
    if (number1>0 && number2>0 && number3>0)
    {   //if (((number1%10)==(number2%10)) && ((number2%10)== (number3%10)) && ((number3%10)==(number1%10)))
        if (((number1%10)==(number2%10)) && ((number2%10)== (number3%10)) && ((number3%10)==(number1%10)))
        {
            result = true;
        return result;
        }
        else
        {
            result = false;
        return result;
        }
    }
    
    else
    {
        result = false;
        return result;
    }
}
var number1 = 88, number2 = 65, number3 = 80;
console.log(compare(number1, number2, number3));
module.exports = compare ;
