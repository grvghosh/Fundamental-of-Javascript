function difference(num){
var diff;
if (num<13){
    diff = 13-num;
    return(diff);
}
else if(num>13||num==13){
diff = num-13;
var a = diff*2;
return(a);

}
}

var num = 20;
console.log(difference(num));
module.exports = difference ;




