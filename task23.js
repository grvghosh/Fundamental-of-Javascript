function compare(number1, number2)
{
    var sum = number1+number2;
    var result;
    if (sum >50 && sum< 80)
    {
		result = 65;
    return result;
    }
    
    else
    {
        result = 80;
        return result;
    }
}
var number1 = 10, number2 = 50;
console.log(compare(number1,number2));
module.exports = compare ;
