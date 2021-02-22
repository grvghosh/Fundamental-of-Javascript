function calculator(number1, number2, choice){
var result;
switch(choice){
    case 1:
        result = number1 + number2;
        return result;
        break;
    case 2:
        result = number1 - number2;
        return result;
        break;
    case 3:
        result = number1 * number2;
        return result;
        break;
    case 4:
        result = number1 / number2;
        return result;
        
        break;
    default:
         result = "Wrong Input"
         return result;
}
}
var number1 = 100, number2 = 200, choice = 3;
console.log(calculator(number1, number2, choice));
module.exports = calculator ;
