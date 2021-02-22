function compare(num){
    var result;
    if (num>80 && num<120)
    {result = true;
    return result;
    }
    else if(num>380 && num<420)
    {result = true;
    return result;
    }
    else
    {result = false;
    return result;
    }
}
var num = 100;
console.log(compare(num));
module.exports = compare ;
