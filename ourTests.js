//Functions were added here to be tested without exports

var pageName = function(str){
    return str;
};

var returnAverage = function(number1, number2, number3, totalCredits){
    return (number1 + number2 + number3)/totalCredits;
};

var returnGradeValue = function(str){
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

var returnGradePoint = function(credits, letter){
    return letter * credits;
};
