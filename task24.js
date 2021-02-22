function direction(i){
var result;
switch(i){
    case 1:
        result = "East";
        return result;
        break;
    case 2:
        result = "West";
        return result;
        break;
    case 3:
        result = "North";
        return result;
        break;
    case 4:
        result = "South";
        return result;
        
        break;
    default:
         result = "Wrong Input"
         return result;
}
}
var i = 3;
console.log(direction(i));
module.exports = direction ;
