// Javascript for the SERVER side.

exports.stringLength = function(str){
    return str.length;
};

exports.pageName = function(str){
    return str;
};

exports.returnAverage = function(number1, number2, number3, totalCredits){
    console.log("total credits is " + totalCredits);
    return (number1+number2+number3)/totalCredits;

};

exports.returnGradeValue = function(str){
    if (str === "A") {
        return 4.0;
    } else if (str === "B") {
        return 3.0;
    } else if (str === "C") {
        return 2.0;
    } else if (str === "D") {
        return 1.0;
    } else if (str === "F") {
        return 0;
    } else {
        return 0;
    }
};

exports.returnGradePoint = function(credits, letter){
    return letter * credits;
};



