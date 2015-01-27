//Functions were added here to be tested without exports


/**
 *
 * @param number1 this is the first grade point as calculated by returnGradePoint
 * @param number2 this is the second grade point as calculated by returnGradePoint
 * @param number3 this is the third grade point as calculated by returnGradePoint
 * @param totalCredits
 * @returns Average of all grades with totalCredits
 */
var returnAverage = function(number1, number2, number3, totalCredits){
    return (number1 + number2 + number3)/totalCredits;
};

/**
 *
 * @param str Grade as entered by the user
 * @returns {number} int representation of grade
 */
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

/**
 *
 * @param credits number of credits in class
 * @param letter grade received in class
 * @returns {number} grade point in class
 */
var returnGradePoint = function(credits, letter){
    return letter * credits;
};
