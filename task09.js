function percentage(){
var a = 50;
var b = 40;
var c = 60;
var d = 90;
var e = 10;
var sum = a+b+c+d+e;
var percentage = (sum*100)/500;
return(percentage);
}
console.log("percentage is",percentage())
module.exports = percentage ;
