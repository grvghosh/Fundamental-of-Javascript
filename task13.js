function leap(year){
var y;
if(year % 4 == 0 && year % 100 != 0){
y=1;
return(y);
}
else if(year % 100 ==0 && year % 400 == 0){
y=1;
return(y);
}

else{
    y=0;
    return (y);
}
}

var year = 1990;
console.log(leap(year));
module.exports = leap ;


