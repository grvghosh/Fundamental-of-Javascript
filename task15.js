function compare(num1, num2){
var sum;
if(num1===num2){
    sum = num1+num2;
    var result = 3*sum;
    return(result);
}
else if(num1!==num2){
    sum = num1+num2;
    return(sum);
}
}
var num1 = 100, num2 = 200;
console.log(compare(num1,num2));
module.exports = compare ;
