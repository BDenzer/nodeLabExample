// Javascript for the SERVER side.

exports.stringLength = function(str){
    return str.length;
};

exports.pageName = function(str){
    return str;
};

exports.returnAverage = function(number1, number2, number3, totalCredits){
    return (number1+number2+number3)/totalCredits;
};

exports.returnGradeValue = function(str){
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

exports.returnGradePoint = function(credits, letter){
    return returnGradeValue(letter) * credits;
};

exports.returnGPA = function(grade1, grade2, grade3){
    weightedGrade1= returnGradePoint(grade1);
    weightedGrade2= returnGradePoint(grade2);
    weightedGrade3= returnGradePoint(grade3);
    return returnAverage(grade1,grade2,grade3);
};

