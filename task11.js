
function convert(celcius){
    var far = ((9/5) * celcius) + 32;
    return far;
}
var celcius = 28;
console.log(convert(celcius));


module.exports = convert;
