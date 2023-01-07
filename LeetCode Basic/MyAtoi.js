/**
 * Jaykef - Jaward Sesay
 * LeetCode No.8
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
     let parsed = parseInt(s, 10)

    if (isNaN(parsed)) {
        return 0
    } else if (parsed >= Math.pow(2, 31)) {
        return Math.pow(2, 31) - 1   
    } else if (parsed <= Math.pow(-2, 31)) {
        return Math.pow(-2, 31)
    } else {
        return parsed
    }
};
