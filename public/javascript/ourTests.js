/**
 * Created by denz0045 on 1/26/15.
 */
/**
 * @param number1,number2,number3 - the integers to take the average of
 * @returns (number) - returns the average of the three numbers
 */


var returnAverage = function(number1, number2, number3){
    return (number1+number2+number3)/3;
};
/**
 *
 * @param str -The letter grade to change to grade point value
 * @returns {number} - returns the grade point value
 */
var returnGradePoint = function(str) {
    switch (str) {
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