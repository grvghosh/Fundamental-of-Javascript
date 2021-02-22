function compare(number1, number2)
{
    var result;
    var sum = number1 + number2;
    if (number1==8 || number2==8)
    {result = true;
    return result;
    }
    else if(sum==8)
    {result = true;
    return result;
    }
    else
    {
        result = false;
        return result;
    }
}
var number1 = 10, number2 = 20;
console.log(compare(number1,number2));
module.exports = compare ;
