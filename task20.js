function compare(number1, number2, number3)
{
    var result;
    if ((number1>=50 && number1<=99) || (number2>=50 && number2<=99) || (number3>=50 && number3<=99))
    {result = true;
    return result;
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
