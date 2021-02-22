function compare(num1, num2){
var sum = num1+num2;
var result;
if(num1==50||num2==50)
{
    result = true;
return(result);
}
else if(sum==50)
{
    result = true;
return(result);
}
    

else
result = false;
return(result);

}
var num1 = 50, num2 = 20;
console.log(compare(num1, num2));
module.exports = compare ;
