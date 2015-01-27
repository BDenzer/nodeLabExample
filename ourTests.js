/**
 * Created by denz0045 on 1/26/15.
 */
/**
 * @param number1,number2,number3 - the integers to take the average of
 * @returns (number) - returns the average of the three numbers
 */



/**
 *
 * @param str -The letter grade to change to grade point value
 * @returns {number} - returns the grade point value
 */


var pageName = function(str){
    return str;
};

var returnAverage = function(number1, number2, number3, totalCredits){
    return (number1+number2+number3)/totalCredits;
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
    return returnGradeValue(letter) * credits;
};

var returnGPA = function(grade1, grade2, grade3, totalCredits){
    return returnAverage(grade1, grade2, grade3, totalCredits);
};
