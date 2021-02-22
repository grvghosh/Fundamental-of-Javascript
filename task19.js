function compare(num)
{
    var result;
    if (num%3 == 0 || num%7 == 0)
    {
        result = true;
    return result;
    }
    else if(num%3 != 0 || num%7 != 0)
    {result = false;
    return result;
    }
   
}
var num = 10;
console.log(compare(num));
module.exports = compare ;
