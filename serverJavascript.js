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


exports.returnGPA = function(grade1, grade2, grade3, credits1, credits2, credits3, totalCredits){
    var gradeValue1 = returnGradeValue(grade1);
    var gradeValue2 = returnGradeValue(grade2);
    var gradeValue3 = returnGradeValue(grade3);
    var weightedGrade1= gradeValue1*credits1;
    var weightedGrade2= gradeValue2*credits2;
    var weightedGrade3= gradeValue3*credits3;
    return returnAverage(weightedGrade1,weightedGrade2,weightedGrade3, totalCredits);
};

