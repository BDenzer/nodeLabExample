// Javascript for the SERVER side.

exports.stringLength = function(str){
    return str.length;
};

exports.pageName = function(str){
    return str;
};

exports.returnAverage = function(number1, number2, number3){
    return (number1+number2+number3)/3;
};

exports.returnGradePoint = function(str){
    switch(str) {
        case "A":
            return 4.0;
            break;
        case "B":
            return 3.0;
            break;
        case "C":
            return 2.0;
            break;
        case "D":
            return 1.0;
            break;
        case "F":
            return 0;
            break;
    }
};

