function convert(INR){
   var dollar = INR/75; 
   return dollar;
}

var INR = 225;
console.log(convert(INR));
module.exports = convert;
