function compare(number1, number2)
{
    var result;
    if (number1>0 && number2<0)
    {result = true;
    return result;
    }
    else if(number1<0 && number2>0)
    {result = true;
    return result;
    }
    else
    {
        result = false;
        return result;
    }
}
var number1 = 10, number2 = -10;
console.log(compare(number1,number2));
module.exports = compare ;
